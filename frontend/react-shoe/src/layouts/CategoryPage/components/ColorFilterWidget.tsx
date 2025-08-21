export const ColorFilterWidget = () => {
  return (
    <div className="color-filter-widget widget-item">
      <h3 className="widget-title">Màu sắc</h3>

      <div className="color-filter-content">
        <div className="color-options">
          <div className="form-check color-option">
            <input
              className="form-check-input"
              type="checkbox"
              value="black"
              id="color-black"
            />
            <label className="form-check-label" htmlFor="color-black">
              <span
                className="color-swatch"
                style={{ backgroundColor: "#000000" }}
                title="Black"
              ></span>
            </label>
          </div>

          <div className="form-check color-option">
            <input
              className="form-check-input"
              type="checkbox"
              value="white"
              id="color-white"
            />
            <label className="form-check-label" htmlFor="color-white">
              <span
                className="color-swatch"
                style={{ backgroundColor: "#ffffff" }}
                title="White"
              ></span>
            </label>
          </div>

          <div className="form-check color-option">
            <input
              className="form-check-input"
              type="checkbox"
              value="red"
              id="color-red"
            />
            <label className="form-check-label" htmlFor="color-red">
              <span
                className="color-swatch"
                style={{ backgroundColor: "#e74c3c" }}
                title="Red"
              ></span>
            </label>
          </div>

          <div className="form-check color-option">
            <input
              className="form-check-input"
              type="checkbox"
              value="blue"
              id="color-blue"
            />
            <label className="form-check-label" htmlFor="color-blue">
              <span
                className="color-swatch"
                style={{ backgroundColor: "#3498db" }}
                title="Blue"
              ></span>
            </label>
          </div>

          <div className="form-check color-option">
            <input
              className="form-check-input"
              type="checkbox"
              value="green"
              id="color-green"
            />
            <label className="form-check-label" htmlFor="color-green">
              <span
                className="color-swatch"
                style={{ backgroundColor: "#2ecc71" }}
                title="Green"
              ></span>
            </label>
          </div>

          <div className="form-check color-option">
            <input
              className="form-check-input"
              type="checkbox"
              value="yellow"
              id="color-yellow"
            />
            <label className="form-check-label" htmlFor="color-yellow">
              <span
                className="color-swatch"
                style={{ backgroundColor: "#f1c40f" }}
                title="Yellow"
              ></span>
            </label>
          </div>

          <div className="form-check color-option">
            <input
              className="form-check-input"
              type="checkbox"
              value="purple"
              id="color-purple"
            />
            <label className="form-check-label" htmlFor="color-purple">
              <span
                className="color-swatch"
                style={{ backgroundColor: "#9b59b6" }}
                title="Purple"
              ></span>
            </label>
          </div>

          <div className="form-check color-option">
            <input
              className="form-check-input"
              type="checkbox"
              value="orange"
              id="color-orange"
            />
            <label className="form-check-label" htmlFor="color-orange">
              <span
                className="color-swatch"
                style={{ backgroundColor: "#e67e22" }}
                title="Orange"
              ></span>
            </label>
          </div>

          <div className="form-check color-option">
            <input
              className="form-check-input"
              type="checkbox"
              value="pink"
              id="color-pink"
            />
            <label className="form-check-label" htmlFor="color-pink">
              <span
                className="color-swatch"
                style={{ backgroundColor: "#fd79a8" }}
                title="Pink"
              ></span>
            </label>
          </div>

          <div className="form-check color-option">
            <input
              className="form-check-input"
              type="checkbox"
              value="brown"
              id="color-brown"
            />
            <label className="form-check-label" htmlFor="color-brown">
              <span
                className="color-swatch"
                style={{ backgroundColor: "#795548" }}
                title="Brown"
              ></span>
            </label>
          </div>
        </div>

        <div className="filter-actions mt-3">
          <button type="button" className="btn btn-sm btn-outline-secondary">
            Xóa
          </button>
          <button type="button" className="btn btn-sm btn-primary">
            Áp dụng lọc
          </button>
        </div>
      </div>
    </div>
  );
};
