import React, { useEffect } from "react";
import "./App.css";
import { Header } from "./layouts/HeaderAndFooter/Header";
import { Footer } from "./layouts/HeaderAndFooter/Footer";
import { HomePage } from "./layouts/HomePage/HomePage";
import { CategoryPage } from "./layouts/CategoryPage/CategoryPage";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ProductDetailPage } from "./layouts/ProductDetailPage/ProductDetailPage";
import { SearchPage } from "./layouts/SearchPage/SearchPage";
import { LoginPage } from "./layouts/LoginPage/LoginPage";
import { RegisterPage } from "./layouts/RegisterPage/RegisterPage";
import { ForgotPasswordPage } from "./layouts/ForgotPasswordPage/ForgotPasswordPage";
import { ResetPasswordPage } from "./layouts/ResetPasswordPage/ResetPasswordPage";
import { GoogleCallback } from "./layouts/LoginPage/components/GoogleCallback";
import { CartPage } from "./layouts/CartPage/CartPage";
import { CheckoutPage } from "./layouts/CheckoutPage/CheckoutPage";
import { AccountPage } from "./layouts/AccountPage/AccountPage";
import { AdminPage } from "./layouts/AdminLayouts/AdminPage/AdminPage";
import { ManageProductPage } from "./layouts/AdminLayouts/ManageProductPage/ManageProductPage";
import { AddProductPage } from "./layouts/AdminLayouts/ManageProductPage/AddProductPage/AddProductPage";

function AppContent() {
  const location = useLocation();

  // check xem có phải route admin không
  const isAdminPage = location.pathname.startsWith("/admin");

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <>
      {!isAdminPage && <Header />}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/category/:id" element={<CategoryPage />} />
        <Route path="/product-detail/:id" element={<ProductDetailPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/google/callback" element={<GoogleCallback />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/account" element={<AccountPage />} />

        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/manage-product" element={<ManageProductPage />} />
        <Route path="/admin/manage-product/add" element={<AddProductPage />} />
      </Routes>
      {!isAdminPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
