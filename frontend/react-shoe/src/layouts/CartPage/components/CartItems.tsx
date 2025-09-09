import { useEffect, useState } from "react";
import { CartActions } from "./CartActions";
import { CartItem } from "./CartItem";
import { Cart } from "../../../models/Cart";
import { SpinningLoading } from "../../utils/SpinningLoading";
import { CartItemProps } from "../../../models/CartItemProps";
import { API_BASE_URL } from "../../../config/config";

export const CartItems = () => {
  const [cart, setCart] = useState<Cart | null>(null);
  const [loading, setLoading] = useState(true);

  // Lấy token để gọi API (lưu khi login)
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/cart`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error("Không thể tải giỏ hàng");

        const data: Cart = await response.json();
        setCart(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [token]);

  if (loading) return <SpinningLoading />;
  if (!cart || cart.cartItems.length === 0) {
    return (
      <div className="alert alert-info text-center my-4" role="alert">
        <i className="bi bi-cart-x fs-4 me-2"></i>
        Giỏ hàng trống. Hãy thêm sản phẩm!
      </div>
    );
  }

  return (
    <div className="cart-items">
      <div className="cart-header d-none d-lg-block">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h5>Sản phẩm</h5>
          </div>
          <div className="col-lg-2 text-center">
            <h5>Giá tiền</h5>
          </div>
          <div className="col-lg-2 text-center">
            <h5>Số lượng</h5>
          </div>
          <div className="col-lg-2 text-center">
            <h5>Tổng</h5>
          </div>
        </div>
      </div>

      {cart.cartItems.map((item: CartItemProps, index) => (
        <CartItem key={index} {...item} />
      ))}

      <CartActions />
    </div>
  );
};
