import React, { useMemo, useState } from "react";
import { normalizeText } from "../../utils/StringUtil";
import { BrandFilterWigetProps } from "../../../types/CategoryPageFilterProps";

export const BrandFilterWidget: React.FC<BrandFilterWigetProps> = ({
  brands,
  setBrands,
  allBrands,
}) => {
  // state function
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrandIdsTemp, setSelectedBrandIdsTemp] =
    useState<number[]>(brands);

  // Lọc brand theo từ khóa tìm kiếm
  const normalizedQuery = useMemo(
    () => normalizeText(searchQuery),
    [searchQuery]
  );
  const filteredBrands = useMemo(() => {
    if (!normalizedQuery) return allBrands;
    return allBrands.filter((brand) =>
      normalizeText(brand.name).includes(normalizedQuery)
    );
  }, [normalizedQuery, allBrands]);

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
        {/* Search box */}
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

        {/* Brand list */}
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

        {/* Hiển thị chip đã chọn */}
        {brands.length > 0 && (
          <div className="mt-2 d-flex flex-wrap gap-2">
            {brands.map((brandId) => {
              const brand = allBrands.find((b) => b.id === brandId);
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
