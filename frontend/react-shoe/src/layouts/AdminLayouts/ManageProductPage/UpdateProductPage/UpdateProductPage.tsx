import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { SidebarPage } from "../../utils/SidebarPage";
import { TopbarPage } from "../../utils/TopbarPage";
import { API_BASE_URL } from "../../../../config/config";

export const UpdateProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    brand: "",
    category: "",
    color: "",
    size: "",
    stockQuantity: "",
    imageUrl: "",
  });

  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [imageFile, setImageFile] = useState<File | null>(null);

  // Fetch danh mục & hãng
  useEffect(() => {
    const fetchMetaData = async () => {
      try {
        const [brandRes, categoryRes] = await Promise.all([
          fetch(`${API_BASE_URL}/brands`),
          fetch(`${API_BASE_URL}/categories`),
        ]);

        if (!brandRes.ok || !categoryRes.ok)
          throw new Error("Không thể tải danh mục hoặc hãng");

        const [brandData, categoryData] = await Promise.all([
          brandRes.json(),
          categoryRes.json(),
        ]);

        setBrands(brandData);
        setCategories(categoryData);
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu metadata:", error);
      }
    };

    fetchMetaData();
  }, []);

  // Lấy dữ liệu sản phẩm hiện tại
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/products/${id}`);
        if (!res.ok) throw new Error("Không thể tải sản phẩm");

        const p = await res.json();
        setFormData({
          name: p.name || "",
          price: p.price || "",
          description: p.description || "",
          brand: p.brand?.id || "",
          category: p.category?.id || "",
          color: p.color || "",
          size: p.size || "",
          stockQuantity: p.stockQuantity || "",
          imageUrl: p.imageUrl || "",
        });
      } catch (err) {
        console.error("Không thể tải sản phẩm:", err);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  // Xử lý input thay đổi
  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Xử lý CKEditor
  const handleEditorChange = (event: any, editor: any) => {
    const data = editor.getData();
    setFormData((prev) => ({ ...prev, description: data }));
  };

  // Upload ảnh mới
  const handleImageUpload = (e: any) => {
    const file = e.target.files[0];
    setImageFile(file);
    setFormData((prev) => ({
      ...prev,
      imageUrl: file ? URL.createObjectURL(file) : prev.imageUrl,
    }));
  };

  // Submit form
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const payload = {
      name: formData.name,
      price: Number(formData.price),
      description: formData.description,
      brand: Number(formData.brand),
      category: Number(formData.category),
      color: formData.color,
      size: formData.size,
      stockQuantity: Number(formData.stockQuantity),
      imageUrl: formData.imageUrl,
    };

    try {
      // Gửi request cập nhật product
      const res = await fetch(`${API_BASE_URL}/products/${id}/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Cập nhật thất bại");

      // Nếu có upload ảnh
      if (imageFile) {
        const formDataImg = new FormData();
        formDataImg.append("file", imageFile);

        const uploadRes = await fetch(`${API_BASE_URL}/upload/product/${id}`, {
          method: "POST",
          body: formDataImg,
        });

        if (!uploadRes.ok) throw new Error("Upload ảnh thất bại");
      }

      alert("Cập nhật sản phẩm thành công!");
      navigate("/admin/manage-product");
    } catch (error) {
      console.error(error);
      alert("Lỗi khi cập nhật sản phẩm!");
    }
  };

  return (
    <div className="admin-layout-admin">
      <SidebarPage />
      <main className="main-admin">
        <TopbarPage />

        <div className="manage-product-admin p-4">
          <h5 className="fw-bold text-dark mb-3">Cập nhật sản phẩm</h5>

          <div className="card shadow-sm p-4 add-product-admin">
            <form className="row g-3" onSubmit={handleSubmit}>
              {/* Tên sản phẩm */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">Tên sản phẩm</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Giá bán */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">Giá bán</label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Màu sắc */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">Màu sắc</label>
                <input
                  type="text"
                  className="form-control"
                  id="color"
                  value={formData.color}
                  onChange={handleChange}
                />
              </div>

              {/* Kích cỡ */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">Kích cỡ</label>
                <input
                  type="text"
                  className="form-control"
                  id="size"
                  value={formData.size}
                  onChange={handleChange}
                />
              </div>

              {/* Mô tả */}
              <div className="col-12">
                <label className="form-label fw-semibold">Mô tả</label>
                <CKEditor
                  editor={ClassicEditor as any}
                  data={formData.description}
                  onChange={handleEditorChange}
                />
              </div>

              {/* Danh mục */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">Danh mục</label>
                <select
                  id="category"
                  className="form-select"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="">Chọn danh mục</option>
                  {categories.map((cat: any) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Hãng */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">Hãng</label>
                <select
                  id="brand"
                  className="form-select"
                  value={formData.brand}
                  onChange={handleChange}
                >
                  <option value="">Chọn hãng</option>
                  {brands.map((brand: any) => (
                    <option key={brand.id} value={brand.id}>
                      {brand.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Số lượng tồn */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">Số lượng tồn</label>
                <input
                  type="number"
                  className="form-control"
                  id="stockQuantity"
                  value={formData.stockQuantity}
                  onChange={handleChange}
                />
              </div>

              {/* Hình ảnh */}
              <div className="col-12">
                <label className="form-label fw-semibold">Hình ảnh</label>
                <input
                  type="file"
                  className="form-control"
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

              <div className="col-12 d-flex justify-content-end gap-2">
                <button type="submit" className="btn btn-dark">
                  Lưu lại
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => navigate("/admin/manage-product")}
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
