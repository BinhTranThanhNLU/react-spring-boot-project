import { PageTitle } from "../utils/PageTitle";
import { CartItems } from "./components/CartItems";
import { CartSummary } from "./components/CartSummary";

export const CartPage = () => {
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
              <CartItems />
            </div>

            <div
              className="col-lg-4 mt-4 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <CartSummary />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
