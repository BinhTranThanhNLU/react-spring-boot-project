import { CustomerInfo } from "./CustomerInfo";
import { OrderReview } from "./OrderReview";
import { PaymentMethod } from "./PaymentMethod";
import { ShippingAddress } from "./ShippingAddress";

export const CheckoutForm = () => {
  return (
    <div className="checkout-container" data-aos="fade-up">
      <form className="checkout-form">
        <CustomerInfo />
        <ShippingAddress />
        <PaymentMethod />
        <OrderReview />
      </form>
    </div>
  );
};
