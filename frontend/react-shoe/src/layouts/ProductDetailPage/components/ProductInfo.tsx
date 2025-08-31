import { StarsReview } from "../../utils/StarsReview";
import { BenefitsList } from "./BenefitsList";
import { ProductActions } from "./ProductActions";
import { ProductVariants } from "./ProductVariants";

export const ProductInfor = () => {
  return (
    <div className="col-lg-5" data-aos="fade-left" data-aos-delay="200">
      <div className="product-details">
        <div className="product-badge-container">
          <span className="badge-category">Giày bóng đá</span>
          <StarsReview rating={5} reviews={128} size={14} />
        </div>

        <h1 className="product-name">
          Mauris tempus cursus magna vel scelerisque nisl consectetur
        </h1>

        <div className="pricing-section">
          <div className="price-display">
            <span className="sale-price">$189.99</span>
            <span className="regular-price">$239.99</span>
          </div>
          <div className="savings-info">
            <span className="save-amount">Tiết kiệm $50.00</span>
            <span className="discount-percent">(21% off)</span>
          </div>
        </div>

        <div className="product-description">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>

        <div className="availability-status">
          <div className="stock-indicator">
            <i className="bi bi-check-circle-fill"></i>
            <span className="stock-text">Còn</span>
          </div>
          <div className="quantity-left">Chỉ còn lại 18 sản phẩm</div>
        </div>

        {/* Product Variants Color And Size */}
        <ProductVariants />

        {/* Action */}
        <ProductActions />

        {/* Benefits List */}
        <BenefitsList />
      </div>
    </div>
  );
};
