package com.springboot.spring_boot_shoe.service;

import com.springboot.spring_boot_shoe.dao.ProductRepository;
import com.springboot.spring_boot_shoe.dao.ProductVariantRepository;
import com.springboot.spring_boot_shoe.dto.ProductDTO;
import com.springboot.spring_boot_shoe.entity.*;
import com.springboot.spring_boot_shoe.mapper.ProductMapper;
import com.springboot.spring_boot_shoe.requestmodel.AddProductRequest;
import com.springboot.spring_boot_shoe.requestmodel.UpdateProductRequest;
import com.springboot.spring_boot_shoe.responsemodel.ProductPageResponse;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;

import java.math.BigDecimal;
import java.util.Collections;
import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;
    private final ProductVariantRepository productVariantRepository;
    private final ProductMapper productMapper;
    private final BrandService brandService;
    private final CategoryService categoryService;

    public ProductService(ProductRepository productRepository, ProductVariantRepository productVariantRepository, ProductMapper productMapper, BrandService brandService, CategoryService categoryService) {
        this.productRepository = productRepository;
        this.productVariantRepository = productVariantRepository;
        this.productMapper = productMapper;
        this.brandService = brandService;
        this.categoryService = categoryService;
    }

    public List<ProductDTO> getAllProducts() {
        return productMapper.toDtoList(productRepository.findAll());
    }

    public ProductDTO getProductById(int id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));
        return productMapper.toDto(product);
    }

    public ProductPageResponse getProductsByCategoryId(
            int categoryId, int page, int size,
            BigDecimal minPrice, BigDecimal maxPrice,
            List<Integer> brandIds, List<String> colors) {

        if (minPrice != null && maxPrice != null && minPrice.compareTo(maxPrice) > 0) {
            BigDecimal min = minPrice;
            minPrice = maxPrice;
            maxPrice = min;
        }

        Pageable pageable = PageRequest.of(page, size, Sort.by("id").ascending());

        Page<Product> productPage = productRepository.findByCategoryWithFilters(
                categoryId, minPrice, maxPrice, brandIds, colors, pageable);

        List<ProductDTO> productDTOs = productMapper.toDtoList(productPage.getContent());

        return new ProductPageResponse(
                productDTOs,
                productPage.getNumber(),
                productPage.getTotalPages(),
                productPage.getTotalElements()
        );
    }

    public ProductPageResponse searchProducts(
            String keyword, int page, int size,
            BigDecimal minPrice, BigDecimal maxPrice,
            List<Integer> brandIds, List<String> colors) {

        if (minPrice != null && maxPrice != null && minPrice.compareTo(maxPrice) > 0) {
            BigDecimal temp = minPrice;
            minPrice = maxPrice;
            maxPrice = temp;
        }

        Pageable pageable = PageRequest.of(page, size, Sort.by("id").ascending());

        Page<Product> productPage = productRepository.searchProducts(
                keyword, minPrice, maxPrice, brandIds, colors, pageable);

        List<ProductDTO> productDTOs = productMapper.toDtoList(productPage.getContent());

        return new ProductPageResponse(
                productDTOs,
                productPage.getNumber(),
                productPage.getTotalPages(),
                productPage.getTotalElements()
        );
    }

    public List<ProductDTO> getRelatedProducts(int productId, int limit) {
        Product product = productRepository.findById(productId).orElseThrow(() -> new RuntimeException("Product not found"));

        Pageable pageable = PageRequest.of(0, limit, Sort.by("id").ascending());

        List<Product> related = productRepository.findRelatedByCategory(product.getCategory().getId(), productId, pageable);

        if(related.isEmpty()) {
            related = productRepository.findRelatedByBrand(product.getBrand().getId(), productId, pageable);
        }

        return productMapper.toDtoList(related);
    }

    public Product getProductEntityById(int id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));
    }


    public ProductVariant getProductVariantEntityById(int variantId) {
        return productVariantRepository.findById(variantId)
                .orElseThrow(() -> new RuntimeException("Product variant not found"));
    }

    public void decreaseStock(int idVariant, int quantity) {
        ProductVariant productVariant = getProductVariantEntityById(idVariant);
        productVariant.decrementStockQuantity(quantity);
    }

    public ProductDTO getProductByIdVariant(int idVariant) {
        ProductVariant variant = getProductVariantEntityById(idVariant);
        Product product = variant.getProduct();
        return productMapper.toDto(product);
    }


    public ProductDTO addProduct(AddProductRequest request) {
        // 1. Tìm Brand và Category từ ID
        Brand brand = brandService.findById(request.getBrand());
        Category category = categoryService.findById(request.getCategory());

        // 2. Tạo Product
        Product newProduct = new Product();
        newProduct.setName(request.getName());
        newProduct.setPrice(request.getPrice());
        newProduct.setDescription(request.getDescription());
        newProduct.setBrand(brand);
        newProduct.setCategory(category);
        newProduct.setDiscountPercent(0);

        // 3. Tạo đối tượng ProductVariant
        ProductVariant variant = new ProductVariant();
        variant.setColor(request.getColor());
        variant.setSize(request.getSize());
        variant.setStockQuantity(request.getStockQuantity());
        variant.setProduct(newProduct); // Quan trọng: Liên kết variant với product

        // 4. Tạo ProductImage
        ProductImage image = new ProductImage();
        image.setImageUrl(request.getImageUrl());
        image.setProduct(newProduct); // Quan trọng: Liên kết image với product

        // 5. Gán danh sách variant và image cho product
        newProduct.setVariants(Collections.singletonList(variant));
        newProduct.setImages(Collections.singletonList(image));

        // 6. Lưu Product (với cascade, variants và images sẽ được lưu tự động)
        Product savedProduct = productRepository.save(newProduct);

        // 7. Chuyển đổi sang DTO và trả về
        return productMapper.toDto(savedProduct);
    }

    public ProductDTO updateProduct(int id, UpdateProductRequest request) {

        Product existingProduct = getProductEntityById(id);

        Brand brand = brandService.findById(request.getBrand());
        Category category = categoryService.findById(request.getCategory());

        existingProduct.setName(request.getName());
        existingProduct.setPrice(request.getPrice());
        existingProduct.setDescription(request.getDescription());
        existingProduct.setBrand(brand);
        existingProduct.setCategory(category);

        Product updatedProduct = productRepository.save(existingProduct);
        return productMapper.toDto(updatedProduct);
    }


    public void deleteProduct(int id) {
        Product existingProduct = getProductEntityById(id);
        productRepository.delete(existingProduct);
    }
}
