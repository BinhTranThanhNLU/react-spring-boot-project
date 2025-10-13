import { Link } from "react-router-dom";
import { SidebarPage } from "../utils/SidebarPage";
import { TopbarPage } from "../utils/TopbarPage";
import React, { useEffect, useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { ProductModel } from "../../../models/ProductModel";
import { API_BASE_URL } from "../../../config/config";
import { SpinningLoading } from "../../utils/SpinningLoading";
import { ErrorMessage } from "../../utils/ErrorMessage";

const columns = [
  { name: "ID", selector: (row: any) => row.id, sortable: true, width: "70px" },
  {
    name: "Tên sản phẩm",
    selector: (row: any) => row.name,
    sortable: true,
    wrap: true,
  },
  { name: "Danh mục", selector: (row: any) => row.category },
  { name: "Màu sắc", selector: (row: any) => row.colors, wrap: true },
  { name: "Kích thước", selector: (row: any) => row.sizes, wrap: true },
  {
    name: "Số lượng tồn",
    selector: (row: any) => row.totalStock,
    sortable: true,
  },
  {
    name: "Giá",
    selector: (row: any) => row.price, // Selector giữ giá trị số để sort
    // Dùng format để hiển thị tiền tệ
    format: (row: any) =>
      new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(row.price),
    sortable: true,
  },
  {
    name: "Hình ảnh",
    cell: (row: any) => (
      <div style={{ display: "flex", gap: "5px", padding: "5px" }}>
        {/* Hiển thị tối đa 2-3 ảnh để không làm vỡ layout */}
        {row.images.slice(0, 3).map((img: any) => (
          <img
            key={img.id}
            src={img.imageUrl}
            alt={row.name}
            width="40"
            className="img-thumbnail"
          />
        ))}
      </div>
    ),
  },
  {
    name: "Trạng thái",
    cell: (row: any) => (
      <span
        className={`badge ${
          row.status === "Còn hàng" ? "bg-success-admin" : "bg-danger-admin"
        }`}
      >
        {row.status}
      </span>
    ),
  },
  {
    name: "Tính năng",
    cell: (row: any) => (
      <div>
        {/* Link sửa bây giờ sẽ trỏ đến ID của sản phẩm */}
        <Link
          className="btn btn-sm btn-primary-admin me-2"
          to={`/admin/manage-product/update/${row.id}`}
        >
          <i className="fa fa-edit"></i>
        </Link>
        <button
          className="btn btn-sm btn-danger-admin"
          onClick={() => row.onDelete && row.onDelete(row.id)}
        >
          <i className="fa fa-trash"></i>
        </button>
      </div>
    ),
  },
];

export const ManageProductPage = () => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${API_BASE_URL}/products`);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data: ProductModel[] = await response.json();
        setProducts(data);
      } catch (error: any) {
        setHttpError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Chuyển products -> rows (mỗi variant là 1 row). useMemo để tránh tính lại không cần thiết.
  const rows = useMemo(() => {
    if (!products) return [];

    // Dùng map để biến đổi mỗi sản phẩm thành một hàng dữ liệu
    return products.map((p) => {
      // Gộp màu sắc: Lấy tất cả màu, loại bỏ trùng lặp và nối chuỗi
      const colors =
        p.variants && p.variants.length > 0
          ? [...new Set(p.variants.map((v) => v.color))].join(", ")
          : "-";

      // Gộp kích thước
      const sizes =
        p.variants && p.variants.length > 0
          ? [...new Set(p.variants.map((v) => v.size))].join(", ")
          : "-";

      // Tính tổng số lượng tồn kho
      const totalStock =
        p.variants && p.variants.length > 0
          ? p.variants.reduce((sum, v) => sum + v.stockQuantity, 0)
          : p.totalQuantity; // Dùng totalQuantity nếu không có variants

      return {
        id: p.id,
        name: p.name,
        category: p.category ?? "-",
        colors: colors, // Dữ liệu màu đã gộp
        sizes: sizes, // Dữ liệu size đã gộp
        totalStock: totalStock, // Tổng số lượng
        price: p.discountedPrice ?? p.price,
        images: p.images || [], // Truyền cả mảng ảnh
        status: totalStock > 0 ? "Còn hàng" : "Hết hàng",
      };
    });
  }, [products]);

  if (isLoading) return <SpinningLoading />;
  if (httpError) return <ErrorMessage message={httpError} />;

  return (
    <div className="admin-layout-admin">
      <SidebarPage />

      <main className="main-admin">
        <TopbarPage />

        <div className="header-overview-admin">Quản lý sản phẩm</div>

        <div className="manage-product-admin p-4">
          <div className="d-flex align-items-center mb-3">
            <h5 className="fw-bold text-dark mb-0">Danh sách sản phẩm</h5>
            <Link
              to="/admin/manage-product/add"
              className="btn btn-success ms-auto"
            >
              <i className="bi bi-plus-circle me-1"></i> Thêm sản phẩm
            </Link>
          </div>
          <DataTable
            columns={columns}
            data={rows}
            pagination
            highlightOnHover
            striped
            className="table-admin"
          />
        </div>
      </main>
    </div>
  );
};
