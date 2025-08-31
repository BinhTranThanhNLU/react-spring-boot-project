import { PageTitle } from "../utils/PageTitle";
import { ProductGallery } from "./components/ProductGallery";
import { ProductInfor } from "./components/ProductInfo";
import { ProductTabs } from "./components/ProductTabs";

export const ProductDetailPage = () => {
  return (
    <main className="main">
      <PageTitle />
      <section id="product-details" className="product-details section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-4">
            <ProductGallery />
            <ProductInfor />
          </div>
          <ProductTabs />
        </div>
      </section>
    </main>
  );
};
