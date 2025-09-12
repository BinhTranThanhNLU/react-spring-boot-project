import React, { useState } from "react";
import { ColorFilterWidgetProps } from "../../../types/CategoryPageFilterProps";

export const ColorFilterWidget: React.FC<ColorFilterWidgetProps> = ({
  colors,
  setColors,
}) => {
  const COLORS = [
    { value: "Đen", hex: "#000000", title: "Black" },
    { value: "Trắng", hex: "#ffffff", title: "White" },
    { value: "Đỏ", hex: "#e74c3c", title: "Red" },
    { value: "Xanh Dương", hex: "#3498db", title: "Blue" },
    { value: "Xanh Lá", hex: "#2ecc71", title: "Green" },
    { value: "Vàng", hex: "#f1c40f", title: "Yellow" },
    { value: "Tím", hex: "#9b59b6", title: "Purple" },
    { value: "Cam", hex: "#e67e22", title: "Orange" },
    { value: "Hồng", hex: "#fd79a8", title: "Pink" },
    { value: "Nâu", hex: "#795548", title: "Brown" },
  ];

  // State tạm để tick chọn
  const [tempColors, setTempColors] = useState<string[]>(colors);

  const handleCheckboxChange = (value: string) => {
    if (tempColors.includes(value)) {
      setTempColors(tempColors.filter((c) => c !== value));
    } else {
      setTempColors([...tempColors, value]);
    }
  };

  // Áp dụng lọc
  const applyFilter = () => setColors(tempColors); 

  // Xóa lọc
  const clearFilter = () => {
    setTempColors([]);
    setColors([]);
  };

  return (
    <div className="color-filter-widget widget-item">
      <h3 className="widget-title">Màu sắc</h3>

      <div className="color-filter-content">
        <div className="color-options">
          {COLORS.map((color) => (
            <div className="form-check color-option" key={color.value}>
              <input
                className="form-check-input"
                type="checkbox"
                value={color.value}
                id={`color-${color.value}`}
                checked={tempColors.includes(color.value)}
                onChange={() => handleCheckboxChange(color.value)}
              />
              <label
                className="form-check-label"
                htmlFor={`color-${color.value}`}
              >
                <span
                  className="color-swatch"
                  style={{ backgroundColor: color.hex }}
                  title={color.title}
                ></span>{" "}
              </label>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="brand-actions d-flex gap-2 mt-3">
          <button className="btn btn-sm btn-dark w-100" onClick={applyFilter}>
            Áp dụng lọc
          </button>
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={clearFilter}
          >
            Xóa
          </button>
        </div>

        {/* Hiển thị chip màu đã chọn */}
        {colors.length > 0 && (
          <div className="mt-2 d-flex flex-wrap gap-2">
            {colors.map((colorValue) => {
              const color = COLORS.find((c) => c.value === colorValue);
              if (!color) return null;
              return (
                <span key={colorValue} className="badge text-bg-secondary">
                  {color.value}
                </span>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
