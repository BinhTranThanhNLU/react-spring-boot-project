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

function normalizeText(str: string) {
  return str
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();
}

export const BrandFilterWidget: React.FC<BrandFilterWigetProps> = ({
  brands,
  setBrands,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrandIdsTemp, setSelectedBrandIdsTemp] =
    useState<number[]>(brands); // state tạm để chọn brand

  // Lọc brand theo từ khóa tìm kiếm
  const filteredBrands = useMemo(() => {
    if (!searchQuery) return BRANDS;
    const normalizedQuery = normalizeText(searchQuery);
    return BRANDS.filter((brand) =>
      normalizeText(brand.name).includes(normalizedQuery)
    );
  }, [searchQuery]);

  // Toggle chọn hoặc bỏ chọn brand
  const toggleBrand = (brandId: number) => {
    setSelectedBrandIdsTemp((prevSelected) =>
      prevSelected.includes(brandId)
        ? prevSelected.filter((id) => id !== brandId)
        : [...prevSelected, brandId]
    );
  };

  // Áp dụng lọc
  const applyFilter = () => setBrands(selectedBrandIdsTemp);

  // Xóa lọc
  const clearFilter = () => {
    setSearchQuery("");
    setSelectedBrandIdsTemp([]);
    setBrands([]);
  };

  return (
    <div className="brand-filter-widget widget-item">
      <h3 className="widget-title">Thương hiệu</h3>

      <div className="brand-filter-content">
        <div className="brand-search position-relative mb-2">
          <input
            type="text"
            className="form-control form-control-sm pe-5"
            placeholder="Tìm kiếm thương hiệu..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <i className="bi bi-search position-absolute top-50 end-0 translate-middle-y me-3"></i>
        </div>

        <div
          className="brand-list"
          style={{ maxHeight: 240, overflowY: "auto" }}
        >
          {filteredBrands.map((brand) => (
            <div className="brand-item" key={brand.id}>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`brand-${brand.id}`}
                  checked={selectedBrandIdsTemp.includes(brand.id)}
                  onChange={() => toggleBrand(brand.id)}
                />
                <label
                  className="form-check-label d-flex w-100 justify-content-between"
                  htmlFor={`brand-${brand.id}`}
                >
                  <span>{brand.name}</span>
                  <span className="text-muted small">({brand.count})</span>
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

        {/* Hiển thị chip đã chọn */}
        {brands.length > 0 && (
          <div className="mt-2 d-flex flex-wrap gap-2">
            {brands.map((brandId) => {
              const brand = BRANDS.find((b) => b.id === brandId);
              if (!brand) return null;
              return (
                <span key={brandId} className="badge text-bg-secondary">
                  {brand.name}
                </span>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
