import { SidebarPage } from "../../utils/SidebarPage";
import { TopbarPage } from "../../utils/TopbarPage";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { API_BASE_URL } from "../../../../config/config";
import { useEffect, useState } from "react";
import { AddProductRequest } from "../../../../modelRequest/AddProductRequest";
import { BrandModel } from "../../../../models/BrandModel";
import { CategoryModel } from "../../../../models/CategoryModel";

export const AddProductPage = () => {
  const [brands, setBrands] = useState<BrandModel[]>([]);
  const [categories, setCategories] = useState<CategoryModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState<string | null>(null);

  // Fetch danh sách hãng
  const fetchBrands = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/brands`);
      if (!response.ok) throw new Error("Không thể tải danh sách hãng");
      const data: BrandModel[] = await response.json();
      setBrands(data);
    } catch (error: any) {
      setHttpError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch danh sách danh mục
  const fetchCategories = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/categories`);
      if (!response.ok) throw new Error("Không thể tải danh sách danh mục");
      const data: CategoryModel[] = await response.json();
      setCategories(data);
    } catch (error: any) {
      setHttpError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBrands();
    fetchCategories();
  }, []);

  // Dữ liệu form
  const [formData, setFormData] = useState<AddProductRequest>({
    name: "",
    price: 0,
    description: "",
    brand: 1,
    category: 1,
    color: "",
    size: "",
    stockQuantity: 0,
    imageUrl: "",
  });

  const [imageFile, setImageFile] = useState<File | null>(null);

  // Xử lý input thay đổi
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: id === "price" || id === "stockQuantity" ? Number(value) : value,
    }));
  };

  // Xử lý mô tả CKEditor
  const handleEditorChange = (event: any, editor: any) => {
    const data = editor.getData();
    setFormData((prev) => ({ ...prev, description: data }));
  };

  // Xử lý upload ảnh
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formDataUpload = new FormData();
    formDataUpload.append("file", file);

    try {
      const response = await fetch(`${API_BASE_URL}/upload/image`, {
        method: "POST",
        body: formDataUpload,
      });

      if (!response.ok) throw new Error("Upload ảnh thất bại");

      const imageUrl = await response.text();
      setFormData((prev) => ({ ...prev, imageUrl }));
      alert("Ảnh đã được upload thành công!");
    } catch (error: any) {
      alert("Lỗi upload ảnh: " + error.message);
    }
  };

  // Submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/products/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Thêm sản phẩm thất bại!");

      alert("Thêm sản phẩm thành công!");
      setFormData({
        name: "",
        price: 0,
        description: "",
        brand: 1,
        category: 1,
        color: "",
        size: "",
        stockQuantity: 0,
        imageUrl: "",
      });
    } catch (error: any) {
      alert("Lỗi: " + error.message);
    }
  };

  if (isLoading) return <p>Đang tải dữ liệu...</p>;
  if (httpError) return <p className="text-danger">Lỗi: {httpError}</p>;

  return (
    <div className="admin-layout-admin">
      <SidebarPage />
      <main className="main-admin">
        <TopbarPage />

        <div className="manage-product-admin p-4">
          <h5 className="fw-bold text-dark mb-3">Thêm sản phẩm</h5>

          <div className="card shadow-sm p-4 add-product-admin">
            <form className="row g-3" onSubmit={handleSubmit}>
              {/* Tên sản phẩm */}
              <div className="col-md-6">
                <label htmlFor="name" className="form-label fw-semibold">
                  Tên sản phẩm
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Nhập tên sản phẩm"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Giá bán */}
              <div className="col-md-6">
                <label htmlFor="price" className="form-label fw-semibold">
                  Giá bán
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  placeholder="Nhập giá sản phẩm"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Mô tả */}
              <div className="col-12">
                <label htmlFor="description" className="form-label fw-semibold">
                  Mô tả sản phẩm
                </label>
                <CKEditor
                  editor={ClassicEditor as any}
                  data={formData.description}
                  onChange={handleEditorChange}
                />
              </div>

              {/* Danh mục */}
              <div className="col-md-3">
                <label htmlFor="category" className="form-label fw-semibold">
                  Danh mục
                </label>
                <select
                  id="category"
                  className="form-select"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="">Chọn danh mục</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Hãng */}
              <div className="col-md-3">
                <label htmlFor="brand" className="form-label fw-semibold">
                  Hãng
                </label>
                <select
                  id="brand"
                  className="form-select"
                  value={formData.brand}
                  onChange={handleChange}
                >
                  <option value="">Chọn hãng</option>
                  {brands.map((brand) => (
                    <option key={brand.id} value={brand.id}>
                      {brand.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Màu sắc */}
              <div className="col-md-3">
                <label htmlFor="color" className="form-label fw-semibold">
                  Màu sắc
                </label>
                <select
                  id="color"
                  className="form-select"
                  value={formData.color}
                  onChange={handleChange}
                >
                  <option value="">Chọn màu sắc</option>
                  <option value="red">Đỏ</option>
                  <option value="blue">Xanh dương</option>
                  <option value="black">Đen</option>
                  <option value="white">Trắng</option>
                  <option value="yellow">Vàng</option>
                </select>
              </div>

              {/* Kích thước */}
              <div className="col-md-3">
                <label htmlFor="size" className="form-label fw-semibold">
                  Kích thước
                </label>
                <select
                  id="size"
                  className="form-select"
                  value={formData.size}
                  onChange={handleChange}
                >
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
                <label
                  htmlFor="stockQuantity"
                  className="form-label fw-semibold"
                >
                  Số lượng tồn kho
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="stockQuantity"
                  min="0"
                  placeholder="Nhập số lượng"
                  value={formData.stockQuantity}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Hình ảnh */}
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
                  onChange={handleImageUpload}
                />
                {formData.imageUrl && (
                  <img
                    src={formData.imageUrl}
                    alt="Preview"
                    className="mt-2 rounded"
                    width="100"
                  />
                )}
              </div>

              {/* Buttons */}
              <div className="col-12 d-flex justify-content-end gap-2">
                <button type="submit" className="btn btn-dark">
                  Lưu lại
                </button>
                <button type="button" className="btn btn-outline-secondary">
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
