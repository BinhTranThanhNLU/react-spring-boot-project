import { useEffect, useState } from "react";
import { PageTitle } from "../utils/PageTitle";
import { CartItems } from "./components/CartItems";
import { CartSummary } from "./components/CartSummary";
import { Cart } from "../../models/Cart";
import { API_BASE_URL } from "../../config/config";
import { SpinningLoading } from "../utils/SpinningLoading";

export const CartPage = () => {
  
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

  return (
    <main className="main">
      <PageTitle
        title="Giỏ hàng"
        breadcrumbs={[
          { label: "Trang chủ", path: "/home" },
          { label: "Giỏ hàng" },
        ]}
      />
      <section id="cart" className="cart section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
              <CartItems cart={cart}/>
            </div>

            <div
              className="col-lg-4 mt-4 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <CartSummary cart={cart} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
