import React from "react";
import { StarsReview } from "../../utils/StarsReview";
import { BenefitsList } from "./BenefitsList";
import { ProductActions } from "./ProductActions";
import { ProductVariants } from "./ProductVariants";
import { ProductInforProps } from "../../../types/ProductInforProps";

export const ProductInfor: React.FC<ProductInforProps> = ({ product }) => {
  return (
    <div className="col-lg-5" data-aos="fade-left" data-aos-delay="200">
      <div className="product-details">
        <div className="product-badge-container">
          <span className="badge-category">{product.category}</span>
          <StarsReview rating={5} reviews={128} size={14} />
        </div>
        <h1 className="product-name">{product.name}</h1>

        <div className="pricing-section">
          <div className="price-display">
            {product.discountPercent > 0 ? (
              <>
                <span className="sale-price text-red-600 font-bold">
                  {product.discountedPrice.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </span>
                <span className="regular-price line-through text-gray-500 ml-2">
                  {product.price.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </span>
              </>
            ) : (
              <span className="regular-price text-black font-bold">
                {product.price.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </span>
            )}
          </div>

          {product.discountPercent > 0 && (
            <div className="savings-info text-sm text-green-600">
              <span className="save-amount mr-2">
                Tiết kiệm{" "}
                {(product.price - product.discountedPrice).toLocaleString(
                  "vi-VN",
                  {
                    style: "currency",
                    currency: "VND",
                  }
                )}
              </span>
              <span className="discount-percent">
                (Giảm {product.discountPercent}%)
              </span>
            </div>
          )}
        </div>

        <div className="product-description">
          <p>{product.description}</p>
        </div>
        <div className="availability-status">
          <div className="stock-indicator">
            <i className="bi bi-check-circle-fill"></i>
            <span className="stock-text">Còn</span>
          </div>
          <div className="quantity-left">Chỉ còn lại {product.totalQuantity} sản phẩm</div>
        </div>
        {/* Product Variants Color And Size */}
        <ProductVariants variants={product.variants} />
        {/* Action */}
        <ProductActions />
        {/* Benefits List */}
        <BenefitsList />
      </div>
    </div>
  );
};
