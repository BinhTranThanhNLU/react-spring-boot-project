import React from "react";
import { API_BASE_URL } from "../../../config/config";
import { CartItemModel } from "../../../models/CartItemModel";

export const CartItem: React.FC<CartItemModel> = ({
  idVariant,
  title,
  color,
  size,
  price,
  quantity,
  total,
  image,
  onCartChange,
}) => {
  const token = localStorage.getItem("token");

  const handleRemove = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/cart/remove/${idVariant}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Failed to remove product!!");
      onCartChange();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateQuantity = async (newQuantity: number) => {
    try {
      // nếu mới <= 0 thì backend sẽ xóa item
      const response = await fetch(`${API_BASE_URL}/cart`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          variantId: idVariant,
          quantity: newQuantity,
        }),
      });

      if (!response.ok) throw new Error("Failed to update cart");
      onCartChange();
      window.dispatchEvent(new Event("cartUpdated"));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="cart-item">
      <div className="row align-items-center">
        <div className="col-lg-6 col-12 mt-3 mt-lg-0 mb-lg-0 mb-3">
          <div className="product-info d-flex align-items-center">
            <div className="product-image">
              <img
                src={image}
                alt="Product"
                className="img-fluid"
                loading="lazy"
              />
            </div>
            <div className="product-details">
              <h6 className="product-title">{title}</h6>
              <div className="product-meta">
                <span className="product-color">Màu: {color}</span>
                <span className="product-size">Kích thước: {size}</span>
              </div>
              <button
                className="remove-item"
                type="button"
                onClick={handleRemove}
              >
                <i className="bi bi-trash"></i> Xóa
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-2 col-12 mt-3 mt-lg-0 text-center">
          <div className="price-tag">
            <span className="current-price">
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(price)}
            </span>
          </div>
        </div>

        <div className="col-lg-2 col-12 mt-3 mt-lg-0 text-center">
          <div className="quantity-selector">
            <button
              className="quantity-btn decrease"
              onClick={() => handleUpdateQuantity(quantity - 1)}
            >
              <i className="bi bi-dash"></i>
            </button>
            <input
              type="number"
              className="quantity-input"
              value={quantity}
              min="1"
              max="10"
              readOnly
            />
            <button
              className="quantity-btn increase"
              onClick={() => handleUpdateQuantity(quantity + 1)}
            >
              <i className="bi bi-plus"></i>
            </button>
          </div>
        </div>

        <div className="col-lg-2 col-12 mt-3 mt-lg-0 text-center">
          <div className="item-total">
            <span>
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(total)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
