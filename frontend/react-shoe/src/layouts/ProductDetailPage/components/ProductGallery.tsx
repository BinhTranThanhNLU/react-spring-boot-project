import React, { useEffect, useMemo, useState, KeyboardEvent } from "react";
import { ProductGalleryProps } from "../../../types/ProductGalleryProps";

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  images,
  name,
}) => {
  const srcList = useMemo(
    () => (images && images.length ? images.map((i) => i.imageUrl) : []),
    [images]
  );

  const [activeIndex, setActiveIndex] = useState(0);

  // reset khi sản phẩm/ảnh thay đổi
  useEffect(() => setActiveIndex(0), [srcList.length]);

  const hasImages = srcList.length > 0;
  const mainSrc = hasImages ? srcList[activeIndex] : "/assets/img/no-image.png";

  const goPrev = () =>
    hasImages &&
    setActiveIndex((i) => (i - 1 + srcList.length) % srcList.length);

  const goNext = () =>
    hasImages && setActiveIndex((i) => (i + 1) % srcList.length);

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") goPrev();
    if (e.key === "ArrowRight") goNext();
  };

  return (
    <div className="col-lg-7" data-aos="zoom-in" data-aos-delay="150">
      <div
        className="product-gallery"
        role="region"
        aria-label="Thư viện ảnh sản phẩm"
        tabIndex={0}
        onKeyDown={onKey}
      >
        {/* Ảnh chính */}
        <div className="main-showcase">
          <div className="image-zoom-container">
            <img
              src={mainSrc}
              alt={name}
              className="img-fluid main-product-image"
              id="main-product-image"
            />

            {hasImages && srcList.length > 1 && (
              <div className="image-navigation">
                <button
                  className="nav-arrow image-nav-btn prev-image"
                  type="button"
                  aria-label="Ảnh trước"
                  onClick={goPrev}
                >
                  <i className="bi bi-chevron-left"></i>
                </button>
                <button
                  className="nav-arrow image-nav-btn next-image"
                  type="button"
                  aria-label="Ảnh sau"
                  onClick={goNext}
                >
                  <i className="bi bi-chevron-right"></i>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Thumbnail */}
        {hasImages && srcList.length > 1 && (
          <div className="thumbnail-grid">
            {srcList.map((src, idx) => (
              <button
                key={src + idx}
                type="button"
                className={`thumbnail-wrapper thumbnail-item ${
                  idx === activeIndex ? "active" : ""
                }`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Xem ảnh ${idx + 1}`}
              >
                <img
                  src={src}
                  alt={`${name} - ảnh ${idx + 1}`}
                  className="img-fluid"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
