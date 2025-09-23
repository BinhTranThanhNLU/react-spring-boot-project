import { useEffect, useState } from "react";
import { CartModel } from "../../models/CartModel";
import { PageTitle } from "../utils/PageTitle";
import { TermAndPrivacyModal } from "../utils/TermAndPrivacyModal";
import { CheckoutForm } from "./components/CheckoutForm";
import { OrderSummary } from "./components/OrderSummary";
import { API_BASE_URL } from "../../config/config";

export const CheckoutPage = () => {

  const [cart, setCart] = useState<CartModel | null>(null);
  
  const token = localStorage.getItem("token");

  useEffect(() => {
      const fetchCart = async () => {
        if (!token) return;
        const response = await fetch(`${API_BASE_URL}/cart`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.ok) {
          const data:CartModel = await response.json();
          setCart(data);
        }
      };
      fetchCart();
    }, [token]);

  return (
    <main className="main">
      <PageTitle
        title="Thanh toán"
        breadcrumbs={[
          { label: "Trang chủ", path: "/home" },
          { label: "Thanh toán" },
        ]}
      />
      <section id="checkout" className="checkout section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-7">
              <CheckoutForm cart={cart}/>
            </div>
            <div className="col-lg-5">
              <OrderSummary cart={cart}/>
            </div>
          </div>
          <TermAndPrivacyModal />
        </div>
      </section>
    </main>
  );
};
