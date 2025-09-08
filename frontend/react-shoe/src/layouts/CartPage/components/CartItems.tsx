import { CartActions } from "./CartActions";
import { CartItem } from "./CartItem";

export const CartItems = () => {
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

      <CartItem
        title="Lorem ipsum dolor sit amet"
        color="đen"
        size="US 10"
        price={10000000}
        quantity={1}
        total={20000000}
        image="../../assets/img/product/product-1.webp"
      />

      <CartActions />
    </div>
  );
};
