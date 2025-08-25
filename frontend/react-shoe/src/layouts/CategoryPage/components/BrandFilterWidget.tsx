import React, { useMemo, useState } from "react";
import { BrandFilterWigetProps } from "../../../models/BrandFilterWidgetProps";

const BRANDS = [
  { id: 1, name: "Nike", count: 24 },
  { id: 2, name: "Adidas", count: 18 },
  { id: 3, name: "Puma", count: 12 },
  { id: 4, name: "Mizuno", count: 9 },
  { id: 5, name: "Asics", count: 7 },
  { id: 6, name: "NMS", count: 6 },
  { id: 7, name: "Kamito", count: 5 },
  { id: 8, name: "Jordan", count: 4 },
  { id: 9, name: "Under Armour", count: 4 },
];

// bỏ dấu để search tiếng Việt
function normalize(str: string) {
  return str.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
}

export const BrandFilterWidget: React.FC<BrandFilterWigetProps> = ({
  brand,
  setBrand,
}) => {
  const [q, setQ] = useState("");
  const [tempBrand, setTempBrand] = useState<number | null>(brand);

  const filteredBrands = useMemo(() => {
    if (!q) return BRANDS;
    const nq = normalize(q);
    return BRANDS.filter((b) => normalize(b.name).includes(nq));
  }, [q]);

  const toggle = (id: number) => {
    setTempBrand((prev) => (prev === id ? null : id));
  };

  const apply = () => setBrand(tempBrand);
  const clear = () => {
    setQ("");
    setTempBrand(null);
    setBrand(null);
  };

  return (
    <div className="brand-filter-widget widget-item">
      <h3 className="widget-title">Thương hiệu</h3>

      <div className="brand-filter-content">
        {/* Search box */}
        <div className="brand-search position-relative mb-2">
          <input
            type="text"
            className="form-control form-control-sm pe-5"
            placeholder="Tìm kiếm thương hiệu..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <i className="bi bi-search position-absolute top-50 end-0 translate-middle-y me-3"></i>
        </div>

        {/* Danh sách brand (đơn chọn) */}
        <div
          className="brand-list"
          style={{ maxHeight: 240, overflowY: "auto" }}
        >
          {filteredBrands.map((b) => (
            <div className="brand-item" key={b.id}>
              <div className="form-check">
                {/* radio: đơn chọn; nếu muốn giữ checkbox vẫn ok nhưng nhớ set checked */}
                <input
                  className="form-check-input"
                  type="radio"
                  name="brand"
                  id={`brand-${b.id}`}
                  checked={tempBrand === b.id}
                  onChange={() => toggle(b.id)}
                />
                <label
                  className="form-check-label d-flex w-100 justify-content-between"
                  htmlFor={`brand-${b.id}`}
                >
                  <span>{b.name}</span>
                  <span className="text-muted small">({b.count})</span>
                </label>
              </div>
            </div>
          ))}

          {filteredBrands.length === 0 && (
            <div className="text-muted small py-2">
              Không có thương hiệu phù hợp
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="brand-actions d-flex gap-2 mt-3">
          <button className="btn btn-sm btn-dark w-100" onClick={apply}>
            Áp dụng lọc
          </button>
          <button className="btn btn-sm btn-outline-secondary" onClick={clear}>
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
};
