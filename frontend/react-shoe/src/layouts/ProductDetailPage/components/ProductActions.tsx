import React, { useState } from "react";
import { ProductModel } from "../../../models/ProductModel";
import { API_BASE_URL } from "../../../config/config";

export const ProductActions: React.FC<{ 
  product: ProductModel; 
  onAdded?: () => void; 
}> = ({ product, onAdded }) => {
  const variants = product.variants || [];
  const uniqueColors = Array.from(new Set(variants.map((v) => v.color)));
  const uniqueSizes = Array.from(new Set(variants.map((v) => v.size)));

  const [selectedColor, setSelectedColor] = useState<string>(
    uniqueColors[0] || ""
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    uniqueSizes[0] || ""
  );
  const [quantity, setQuantity] = useState<number>(1);

  const token = localStorage.getItem("token");

  const handleAddToCart = async () => {
    try {
      const body = {
        productId: product.id,
        quantity,
        color: selectedColor,
        size: selectedSize,
      };

      const response = await fetch(`${API_BASE_URL}/cart/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("Failed to add to cart");
      }

      if (onAdded) onAdded();
      // phát sự kiện để Header nghe thấy
      window.dispatchEvent(new Event("cartUpdated"));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>

      <div className="variant-color-section mb-3">
        <h6>Màu sắc</h6>
        <div className="d-flex flex-wrap gap-2">
          {uniqueColors.map((color, idx) => (
            <button
              key={idx}
              className={`size-option color-option ${selectedColor === color ? "active" : ""}`}
              onClick={() => setSelectedColor(color)}
              type="button"
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      <div className="variant-size-section mb-3">
        <h6>Kích Thước</h6>
        <div className="d-flex flex-wrap gap-2">
          {uniqueSizes.map((size, idx) => (
            <button
              key={idx}
              className={`size-option ${selectedSize === size ? "active" : ""}`}
              onClick={() => setSelectedSize(size)}
              type="button"
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      
      <div className="purchase-section">
        <div className="quantity-control">
          <label className="control-label">Số lượng:</label>
          <div className="quantity-input-group">
            <div className="quantity-selector">
            <button className="quantity-btn decrease" type="button" onClick={() => setQuantity(q => Math.max(1, q - 1))}>
              <i className="bi bi-dash"></i>
            </button>
            <input type="number" className="quantity-input" value={quantity} min={1} max={99} onChange={e => setQuantity(Number(e.target.value))} />
            <button className="quantity-btn increase" type="button" onClick={() => setQuantity(q => q + 1)}>
              <i className="bi bi-plus"></i>
            </button>
          </div>
          </div>
        </div>

        <div className="action-buttons">
          <button className="btn primary-action" type="button" onClick={handleAddToCart}>
            <i className="bi bi-bag-plus"></i>
            Thêm vào giỏ
          </button>
          <button className="btn secondary-action" type="button">
            <i className="bi bi-lightning"></i>
            Mua ngay
          </button>
          <button
            className="btn icon-action"
            title="Add to Wishlist"
            type="button"
          >
            <i className="bi bi-heart"></i>
          </button>
        </div>
      </div>

      
    </>
  );
};
