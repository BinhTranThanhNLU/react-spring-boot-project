import React, { useState } from "react";
import { PricingRangeWidgetProps } from "../../../models/PricingRangeWidgetProps";

export const PricingRangeWidget: React.FC<PricingRangeWidgetProps> = ({
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
}) => {
  const [tempMin, setTempMin] = useState(minPrice ?? 0);
  const [tempMax, setTempMax] = useState(maxPrice ?? 5000000);

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
          <input
            type="range"
            className="min-range"
            min="0"
            max="5000000"
            value={tempMin}
            step="100000"
            onChange={(e) => setTempMin(Number(e.target.value))}
          />
          <input
            type="range"
            className="max-range"
            min="0"
            max="5000000"
            value={tempMax}
            step="100000"
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
