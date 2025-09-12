import React, { useState } from "react";
import { PricingRangeWidgetProps } from "../../../types/CategoryPageFilterProps";

export const PricingRangeWidget: React.FC<PricingRangeWidgetProps> = ({
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
}) => {
  const [tempMin, setTempMin] = useState(minPrice ?? 0);
  const [tempMax, setTempMax] = useState(maxPrice ?? 5000000);

  const minPercent = (tempMin / 5000000) * 100;
  const maxPercent = (tempMax / 5000000) * 100;

  const applyFilter = () => {
    setMinPrice(tempMin);
    setMaxPrice(tempMax);
  };

  return (
    <div className="pricing-range-widget widget-item">
      <h3 className="widget-title">Giá tiền</h3>
      <div className="price-range-container">
        <div className="current-range mb-3">
          <span className="min-price">{tempMin.toLocaleString()} ₫</span>
          <span className="max-price float-end">
            {tempMax.toLocaleString()} ₫
          </span>
        </div>
        <div className="range-slider">
          <div
            className="progress"
            style={{
              position: "absolute",
              height: "6px",
              borderRadius: "5px",
              background: "#000",
              left: `${minPercent}%`,
              right: `${100 - maxPercent}%`,
            }}
          />
          <input
            type="range"
            min="0"
            max="5000000"
            step="100000"
            value={tempMin}
            onChange={(e) => setTempMin(Number(e.target.value))}
          />
          <input
            type="range"
            min="0"
            max="5000000"
            step="100000"
            value={tempMax}
            onChange={(e) => setTempMax(Number(e.target.value))}
          />
        </div>
        <div className="price-inputs mt-3">
          <div className="row g-2">
            <div className="col-6">
              <div className="input-group input-group-sm">
                <span className="input-group-text">₫</span>
                <input
                  type="number"
                  className="form-control min-price-input"
                  placeholder="Tối thiểu"
                  min="0"
                  max="5000000"
                  value={tempMin}
                  step="100000"
                  onChange={(e) => setTempMin(Number(e.target.value))}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="input-group input-group-sm">
                <span className="input-group-text">₫</span>
                <input
                  type="number"
                  className="form-control max-price-input"
                  placeholder="Tối đa"
                  min="0"
                  max="5000000"
                  value={tempMax}
                  step="100000"
                  onChange={(e) => setTempMax(Number(e.target.value))}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="filter-actions mt-3">
          <button
            type="button"
            className="btn btn-sm btn-dark w-100"
            onClick={applyFilter}
          >
            Áp dụng lọc
          </button>
        </div>
      </div>
    </div>
  );
};
