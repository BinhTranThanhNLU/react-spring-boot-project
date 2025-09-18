package com.springboot.spring_boot_shoe.service;

import com.springboot.spring_boot_shoe.dao.OrderRepository;
import com.springboot.spring_boot_shoe.dto.AddressDTO;
import com.springboot.spring_boot_shoe.dto.CheckoutItemDTO;
import com.springboot.spring_boot_shoe.dto.OrderDTO;
import com.springboot.spring_boot_shoe.dto.PaymentDTO;
import com.springboot.spring_boot_shoe.entity.*;
import com.springboot.spring_boot_shoe.mapper.AddressMapper;
import com.springboot.spring_boot_shoe.mapper.OrderMapper;
import com.springboot.spring_boot_shoe.requestmodel.CheckoutRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final PaymentService paymentService;
    private final AddressService addressService;
    private final ProductService productService;
    private final AuthService authService;
    private final OrderMapper orderMapper;
    private final AddressMapper addressMapper;

    public OrderService(OrderRepository orderRepository, PaymentService paymentService, AddressService addressService, ProductService productService, AuthService authService, OrderMapper orderMapper, AddressMapper addressMapper) {
        this.orderRepository = orderRepository;
        this.paymentService = paymentService;
        this.addressService = addressService;
        this.productService = productService;
        this.authService = authService;
        this.orderMapper = orderMapper;
        this.addressMapper = addressMapper;
    }

    @Transactional
    public OrderDTO createOrder(CheckoutRequest req, Integer authenticatedUserId) {
        // 0. Xác thực user
        User user = authService.findById(authenticatedUserId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // 1. Xác thực items
        if (req.getItems() == null || req.getItems().isEmpty()) {
            throw new RuntimeException("Cart is empty");
        }

        // 2. Tính tổng ở phía server-side
        BigDecimal computedSubtotal = BigDecimal.ZERO;
        List<OrderItem> orderItems = new ArrayList<>();
        for (CheckoutItemDTO item : req.getItems()) {
            ProductVariant variant = productService.getProductVariantEntityById(item.getIdVariant());
            if (variant == null) throw new RuntimeException("Variant not found: " + item.getIdVariant());

            // kiem tra so luong san pham
            if (variant.getStockQuantity() < item.getQuantity()) {
                throw new RuntimeException("Out of stock for variant " + item.getIdVariant());
            }

            BigDecimal price = variant.getProduct().getPrice();
            BigDecimal line = price.multiply(new BigDecimal(item.getQuantity()));
            computedSubtotal = computedSubtotal.add(line);

            OrderItem oi = new OrderItem();
            oi.setVariant(variant);
            oi.setQuantity(item.getQuantity());
            oi.setPrice(price);
            orderItems.add(oi);
        }

        // 3. so sánh giá tiền server và client
//        if (computedTotal.compareTo(req.getTotalAmount()) != 0) {
//            throw new RuntimeException("Total amount mismatch");
//        }

        if (computedSubtotal.compareTo(req.getTotalAmount()) != 0) {
            throw new RuntimeException("Subtotal mismatch");
        }

        // 4. Tạo record payment (PENDING)
        PaymentMethod method;
        try {
            method = PaymentMethod.valueOf(req.getPaymentMethod());
        } catch (IllegalArgumentException | NullPointerException e) {
            method = PaymentMethod.COD;
        }
        PaymentDTO paymentDTO = paymentService.createPayment(new PaymentDTO(null, method.name(), PaymentStatus.PENDING.name(), null, computedSubtotal, LocalDateTime.now()));
        Payment payment = new Payment();
        payment.setId(paymentDTO.getId());

        // 5. Xử lý address, tạo mới nếu chưa có
        Address address;
        if (req.getIdAddress() != null) {
            address = addressService.getEntityByIdAndUserId(req.getIdAddress(), authenticatedUserId);
        } else {
            Address addr = new Address();
            addr.setFullName(req.getFullName());
            addr.setPhone(req.getPhone());
            addr.setStreet(req.getStreet());
            addr.setWard(req.getWard());
            addr.setDistrict(req.getDistrict());
            addr.setProvince(req.getCity());
            addr.setUser(user);
            AddressDTO saved = addressService.createAddress(addressMapper.toDto(addr));
            address = addressMapper.toEntity(saved);
        }

        // 6. Tạo entity Order
        Order order = new Order();
        order.setUser(user);
        order.setAddress(address);
        order.setPayment(payment);
        order.setStatus(OrderStatus.PENDING.name());
        order.setTotalAmount(computedSubtotal);
        order.setCreatedAt(LocalDateTime.now());
        order.setUpdatedAt(LocalDateTime.now());

        // attach items to order and set backref
        order.setItems(orderItems);
        orderItems.forEach(i -> i.setOrder(order));

        // 7. giảm số lượng stock
        for (OrderItem oi : orderItems) {
            productService.decreaseStock(oi.getVariant().getId(), oi.getQuantity());
        }

        // 8. lưu order
        Order saved = orderRepository.save(order);

        return orderMapper.toDto(saved);
    }

    @Transactional
    public OrderDTO updateOrderStatus(int orderId, String status) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new RuntimeException("Order not found"));
        order.setStatus(status);
        order.setUpdatedAt(LocalDateTime.now());
        return orderMapper.toDto(orderRepository.save(order));
    }
}
