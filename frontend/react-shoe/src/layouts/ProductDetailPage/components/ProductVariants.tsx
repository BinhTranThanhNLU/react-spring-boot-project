export const ProductVariants = () => {
  return (
    <>
      <div className="variant-color-section mb-3">
        <h6>Màu sắc</h6>
        <div className="d-flex flex-wrap gap-2">
          <div className="size-option">Trắng</div>
          <div className="size-option">Đỏ </div>
          <div className="size-option">Đen</div>
          <div className="size-option">Xanh Dương</div>
        </div>
      </div>

      <div className="variant-size-section mb-3">
        <h6>Kích Thước</h6>
        <div className="d-flex flex-wrap gap-2">
          <div className="size-option">UK 3.5</div>
          <div className="size-option">UK 4</div>
          <div className="size-option">UK 4.5</div>
          <div className="size-option">UK 5</div>
          <div className="size-option">UK 5.5</div>
          <div className="size-option">UK 6</div>
          <div className="size-option">UK 6.5</div>
        </div>
      </div>
    </>
  );
};
