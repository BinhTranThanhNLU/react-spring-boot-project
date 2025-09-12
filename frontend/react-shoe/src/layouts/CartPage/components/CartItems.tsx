import { CartActions } from "./CartActions";
import { CartItem } from "./CartItem";
import { CartItemsProps } from "../../../types/CartProps";
import { CartItemModel } from "../../../models/CartItemModel";

export const CartItems:React.FC<CartItemsProps> = ({cart, onCartChange}) => {
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

      {cart.cartItems.map((item: CartItemModel, index) => (
        <CartItem key={index} {...item} onCartChange={onCartChange}/>
      ))}

      <CartActions onCartChange={onCartChange}/>
    </div>
  );
};
