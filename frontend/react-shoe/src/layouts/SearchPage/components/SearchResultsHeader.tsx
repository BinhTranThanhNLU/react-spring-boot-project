import React, { useState } from "react";
import { SearchResultsHeaderProps } from "../../../types/SearchResultsHeaderProps";
import { useNavigate, useSearchParams } from "react-router-dom";

export const SearchResultsHeader: React.FC<SearchResultsHeaderProps> = ({
  totalResults,
}) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const keyword = searchParams.get("keyword") || "";
  const [inputValue, setInputValue] = useState(keyword);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      navigate(`/search?keyword=${encodeURIComponent(inputValue.trim())}`);
    }
  };
  return (
    <section
      id="search-results-header"
      className="search-results-header section"
    >
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="search-results-header">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div
                className="results-count"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <h2>Kết quả tìm kiếm</h2>
                <p>
                  Chúng tôi tìm thấy{" "}
                  <span className="results-number">{totalResults}</span> sản
                  phẩm theo từ khóa{" "}
                  <span className="search-term">"{keyword}"</span>
                </p>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
              <form className="search-form" onSubmit={handleSubmit}>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tìm kiếm sản phẩm..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    required
                  />
                  <button className="btn search-btn" type="submit">
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
