import { Navigate } from "react-router-dom";
import { JSX } from "react/jsx-runtime";

export const AdminRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem("token");
  const userStr = localStorage.getItem("user");
  const user = userStr ? JSON.parse(userStr) : null;

  // Nếu chưa đăng nhập
  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  // Nếu không phải ADMIN
  if (user.role.name !== "ADMIN") {
    return <Navigate to="/403" replace />;
  }

  // Nếu hợp lệ
  return children;
};
