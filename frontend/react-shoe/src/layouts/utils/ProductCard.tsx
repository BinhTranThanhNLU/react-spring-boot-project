import React from "react";
import { StarsReview } from "./StarsReview";
import { Link, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../config/config";
import { ProductModel } from "../../models/ProductModel";

export const ProductCard: React.FC<{ product: ProductModel }> = ({ product }) => {
  const mainImage = product.images?.[0]?.imageUrl || "/assets/img/no-image.png";
  const hoverImage =
    product.images?.[0]?.imageUrl || "/assets/img/no-image.png";

  const navigate = useNavigate();

  const handleAddToCart = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/cart/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          productId: product.id,
          quantity: 1,
        }),
      });

      if (!response.ok) throw new Error("Failed to add to cart!!");

      const updatedCart = await response.json();

      // Cập nhật cartCount trong localStorage hoặc state (để Header nhận)
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      window.dispatchEvent(new Event("cartUpdated")); // báo cho Header biết
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="col-6 col-xl-4">
      <div className="product-card" data-aos="zoom-in">
        <div className="product-image">
          <img
            src={mainImage}
            className="main-image img-fluid"
            alt={product.name}
          />
          <img
            src={hoverImage}
            className="hover-image img-fluid"
            alt={`${product.name} hover`}
          />
          <div className="product-overlay">
            <div className="product-actions">
              <Link
                to={`/product-detail/${product.id}`}
                className="action-btn"
                title="Detail View"
              >
                <i className="bi bi-eye"></i>
              </Link>
              <button
                type="button"
                className="action-btn"
                data-bs-toggle="tooltip"
                title="Add to Cart"
                onClick={handleAddToCart}
              >
                <i className="bi bi-cart-plus"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="product-details">
          <div className="product-category">{product.category}</div>
          <h4 className="product-title">
            <Link to={`/product-detail/${product.id}`}>{product.name}</Link>
          </h4>
          <div className="product-meta">
            <div className="product-price">
              {product.price.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </div>
            <div className="product-rating">
              <StarsReview rating={5} reviews={128} size={14} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
