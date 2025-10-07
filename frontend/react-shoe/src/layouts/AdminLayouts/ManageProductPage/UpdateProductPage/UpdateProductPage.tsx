import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { SidebarPage } from "../../utils/SidebarPage";
import { TopbarPage } from "../../utils/TopbarPage";

export const UpdateProductPage = () => {
  return (
    <div className="admin-layout-admin">
      <SidebarPage />

      <main className="main-admin">
        <TopbarPage />

        <div className="manage-product-admin p-4">
          <h5 className="fw-bold text-dark mb-3">Cập nhật sản phẩm</h5>

          {/* Code giao dien o phia duoi */}
          <div className="card shadow-sm p-4 add-product-admin">
            <form className="row g-3">
              {/* ID Sản phẩm */}
              <div className="col-md-6">
                <label htmlFor="product-id" className="form-label fw-semibold">
                  ID Sản phẩm
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="product-id"
                  placeholder="Nhập ID sản phẩm"
                />
              </div>

              {/* Tên sản phẩm */}
              <div className="col-md-6">
                <label
                  htmlFor="product-name"
                  className="form-label fw-semibold"
                >
                  Tên sản phẩm
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="product-name"
                  placeholder="Nhập tên sản phẩm"
                />
              </div>

              {/* Mô tả */}
              <div className="col-12">
                <label htmlFor="description" className="form-label fw-semibold">
                  Mô tả sản phẩm
                </label>
                <CKEditor
                  editor={ClassicEditor as any}
                  data="<p>Nhập mô tả sản phẩm...</p>"
                  onReady={(editor) => {
                    console.log("Editor is ready to use!", editor);
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, data });
                  }}
                />
              </div>

              {/* Danh mục */}
              <div className="col-md-4">
                <label htmlFor="category" className="form-label fw-semibold">
                  Danh mục
                </label>
                <select id="category" className="form-select">
                  <option value="">Chọn danh mục</option>
                  <option value="clothes">Quần áo</option>
                  <option value="shoes">Giày dép</option>
                  <option value="accessories">Phụ kiện</option>
                </select>
              </div>

              {/* Màu sắc */}
              <div className="col-md-4">
                <label htmlFor="color" className="form-label fw-semibold">
                  Màu sắc
                </label>
                <select id="color" className="form-select">
                  <option value="">Chọn màu sắc</option>
                  <option value="red">Đỏ</option>
                  <option value="blue">Xanh dương</option>
                  <option value="black">Đen</option>
                  <option value="white">Trắng</option>
                  <option value="yellow">Vàng</option>
                </select>
              </div>

              {/* Size */}
              <div className="col-md-4">
                <label htmlFor="size" className="form-label fw-semibold">
                  Kích thước
                </label>
                <select id="size" className="form-select">
                  <option value="">Chọn kích thước</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </div>

              {/* Số lượng */}
              <div className="col-md-6">
                <label htmlFor="stock" className="form-label fw-semibold">
                  Số lượng tồn kho
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="stock"
                  min="0"
                  placeholder="Nhập số lượng"
                />
              </div>

              {/* Giá */}
              <div className="col-md-6">
                <label htmlFor="price" className="form-label fw-semibold">
                  Giá bán
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  placeholder="Nhập giá sản phẩm"
                />
              </div>

              {/* Upload hình ảnh */}
              <div className="col-12">
                <label
                  htmlFor="product-image"
                  className="form-label fw-semibold"
                >
                  Hình ảnh
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="product-image"
                />
              </div>

              {/* Trạng thái */}
              <div className="col-md-6">
                <label htmlFor="status" className="form-label fw-semibold">
                  Trạng thái
                </label>
                <select id="status" className="form-select">
                  <option value="available">Còn hàng</option>
                  <option value="out-of-stock">Hết hàng</option>
                </select>
              </div>

              {/* Buttons */}
              <div className="col-12 d-flex justify-content-end gap-2">
                <button
                  type="submit"
                  className="btn btn-dark save-button-admin"
                >
                  Lưu lại
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary cancel-button-admin"
                >
                  Hủy bỏ
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};
