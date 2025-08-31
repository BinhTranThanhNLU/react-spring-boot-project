import { RelatedProductsCarousel } from "./RelatedProductsCarousel";

export const ProductOverview = () => {
    return (
                <div className="tab-pane fade show active" id="ecommerce-product-details-5-overview">
                  <div className="overview-content">
                    <div className="row g-4">
                      <div className="col-lg-8">
                        <div className="content-section">
                          <h3>Mô tả sản phẩm</h3>
                          <p>Bởi vì không ai khinh miệt,
                            ghét bỏ hay trốn tránh lạc thú chỉ vì nó là lạc thú,
                            nhưng vì những nỗi đau khổ lớn lao sẽ theo đuổi những ai không biết cách theo đuổi lạc thú
                            một cách lý trí.
                            Cũng không ai yêu thích, theo đuổi hay mong muốn đạt được nỗi đau chỉ vì nó là nỗi đau.</p>

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