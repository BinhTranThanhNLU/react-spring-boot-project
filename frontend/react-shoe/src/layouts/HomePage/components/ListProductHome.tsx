import React, { useEffect, useState } from "react";
import { Product } from "../../../models/Product";

export const ListProductHome: React.FC<{ products: Product[] }> = ({products}) => {
  return (
    <section id="best-sellers" className="best-sellers section py-5">
      <div className="container text-center mb-4">
        <h2>Sản phẩm bán chạy</h2>
        <p>
          Những mẫu giày thể thao và thời trang được khách hàng yêu thích nhất
          tại cửa hàng
        </p>
      </div>

      <div className="container">
        <div className="row g-4">
          {products.slice(0,8).map((product) => (
            <div key={product.id} className="col-lg-3 col-md-6">
              <div className="product-item p-3 border rounded text-center position-relative h-100">
                <div className="product-badge bg-dark text-white px-2 py-1 position-absolute top-0 start-0 m-2 rounded">
                  Giới hạn
                </div>

                <img
                  src={product.images && product.images.length > 0 ? product.images[0].imageUrl : "/placeholder.jpg"}
                  className="img-fluid mb-3"
                  alt={product.name}
                />

                <p className="text-muted small text-uppercase">
                  {product.category}
                </p>
                <h6 className="fw-bold">{product.name}</h6>
                <p className="fw-bold text-danger">
                  {product.price.toLocaleString()}₫
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
