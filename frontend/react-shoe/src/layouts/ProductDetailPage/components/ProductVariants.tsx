import React from "react";
import { ProductVariantsProps } from "../../../types/ProductVariantsProps";

export const ProductVariants:React.FC<ProductVariantsProps> = ({variants}) => {

  const uniqueColors = Array.from(new Set(variants.map((variant) => variant.color)));
  const uniqueSize = Array.from(new Set(variants.map((variant) => variant.size)));

  return (
    <>
      <div className="variant-color-section mb-3">
        <h6>Màu sắc</h6>
        <div className="d-flex flex-wrap gap-2">
          {uniqueColors.map((color, index) => (
            <div className="size-option color-option" key={index}>{color}</div>
          ))}
        </div>
      </div>

      <div className="variant-size-section mb-3">
        <h6>Kích Thước</h6>
        <div className="d-flex flex-wrap gap-2">
          {uniqueSize.map((size, index) => (
            <div className="size-option" key={index}>{size}</div>
          ))}
        </div>
      </div>
    </>
  );
};
