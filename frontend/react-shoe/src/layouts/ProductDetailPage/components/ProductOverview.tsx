import React from "react";
import { RelatedProductsCarousel } from "./RelatedProductsCarousel";
import { ProductOverViewProps } from "../../../models/ProductOverviewProps";

export const ProductOverview:React.FC<ProductOverViewProps> = ({description}) => {
    return (
                <div className="tab-pane fade show active" id="ecommerce-product-details-5-overview">
                  <div className="overview-content">
                    <div className="row g-4">
                      <div className="col-lg-8">
                        <div className="content-section">
                          <h3>Mô tả sản phẩm</h3>
                          <p>{description}</p>
                          <h4>Các sản phẩm liên quan</h4>
                        <RelatedProductsCarousel />
                        </div>
                      </div>

                      <div className="col-lg-4">
                        <div className="package-contents">
                          <h4>Phụ kiện</h4>
                          <ul className="contents-list">
                            <li><i className="bi bi-check-circle"></i>01 Đôi giày chính hãng</li>
                            <li><i className="bi bi-check-circle"></i>Hộp giày bảo vệ</li>
                            <li><i className="bi bi-check-circle"></i>Bao đựng chống bụi</li>
                            <li><i className="bi bi-check-circle"></i>1 cặp dây giày dự phòng</li>
                            <li><i className="bi bi-check-circle"></i>Thẻ bảo hành chính hãng</li>
                            <li><i className="bi bi-check-circle"></i>Hướng dẫn chăm sóc & vệ sinh giày</li>
                          </ul>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
    );
}