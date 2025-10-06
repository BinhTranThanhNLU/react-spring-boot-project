import { Link } from "react-router-dom";
import { SidebarPage } from "../utils/SidebarPage";
import { TopbarPage } from "../utils/TopbarPage";
import React from "react";
import DataTable from "react-data-table-component";

const columns = [
  { name: "ID", selector: (row: any) => row.id, sortable: true },
  { name: "Tên sản phẩm", selector: (row: any) => row.name, sortable: true },
  { name: "Danh mục", selector: (row: any) => row.category },
  { name: "Màu sắc", selector: (row: any) => row.color },
  { name: "Kích thước", selector: (row: any) => row.size },
  { name: "Số lượng tồn", selector: (row: any) => row.stock, sortable: true },
  { name: "Giá", selector: (row: any) => row.price, sortable: true },
  {
    name: "Hình ảnh",
    cell: (row: any) => (
      <img
        src={row.image}
        alt={row.name}
        width="50"
        className="img-thumbnail"
      />
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
        {" "}
        {row.status}{" "}
      </span>
    ),
  },
  {
    name: "Tính năng",
    cell: (row: any) => (
      <div>
        <Link
          className="btn btn-sm btn-primary-admin me-2"
          to="/admin/manage-product/add"
        >
          <i className="fa fa-edit"></i>
        </Link>
        <button className="btn btn-sm btn-danger-admin">
          <i className="fa fa-trash"></i>
        </button>
      </div>
    ),
  },
];
const data = [
  {
    id: "#P12837",
    name: "Áo Thun Nam",
    category: "Thời Trang Nam",
    color: "Đỏ, Xanh, Đen",
    size: "M, L, XL",
    stock: 120,
    price: "350,000 VND",
    image: "https://via.placeholder.com/50",
    status: "Còn hàng",
  },
];

export const ManageProductPage = () => {
  return (
    <div className="admin-layout-admin">
      <SidebarPage />

      <main className="main-admin">
        <TopbarPage />

        <div className="header-overview-admin">Quản lý sản phẩm</div>

        <div className="manage-product-admin p-4">
          {" "}
          <h5 className="fw-bold text-dark mb-3">Danh sách sản phẩm</h5>{" "}
          <DataTable
            columns={columns}
            data={data}
            pagination
            highlightOnHover
            striped
            className="table-admin"
          />{" "}
        </div>
      </main>
    </div>
  );
};
