import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import TrangChu from "./pages/TrangChu/TrangChu";
import ChiTietKhoaHoc from "./pages/ChiTietKhoaHoc/ChiTietKhoaHoc";
import DanhSachKhoaHoc from "./pages/DanhSachKhoaHoc/DanhSachKhoaHoc";
import DangNhap from "./pages/DangNhap/DangNhap";
import KhoaHocTheoDanhMuc from "./pages/KhoaHocTheoDanhMuc/KhoaHocTheoDanhMuc";
import ScrollToTop from "./AppEffect/ScrollToTop";

import AdminAuth from "./Auth/AdminAuth";

import Contact from "./pages/Contact/Contact";

import { LayThongTinNguoiDung } from "./redux/actions/QuanLyNguoiDungAction";
import { useDispatch } from "react-redux";

import UserLayout from "./Layout/UserLayout/UserLayout";
import AdminLayout from "./Layout/AdminLayout/AdminLayout";
import QuanLyKhoaHoc from "./pages/admin/quanlykhoahoc";
import QuanLyKhoaHoc2 from "./pages/admin/QuanLyKhoaHoc2";
import ThemKhoaHoc from "./pages/admin/ThemKhoaHoc";
import GioHang from "./pages/GioHang/GioHang";
import dashBoard from "./pages/admin/dashboard/dashBoard";

import DanhSachNguoiDung2 from "./pages/DanhSachNguoiDung/DanhSachNguoiDung-2";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // Lấy thông tin người dùng từ localstore lên
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    // Sau đó gọi action layThongTinNguoiDung để lưu vào store lại
    // console.log(userInfo.maLoaiNguoiDung);

    if (userInfo) {
      dispatch(LayThongTinNguoiDung(userInfo));
    }
  }, []);
  return (
    <ScrollToTop>
      <Switch>
        <Route path="/sign-in" component={DangNhap} />
        <AdminLayout path="/admin">
          <Switch>
            <AdminAuth path="/admin/user-list" component={DanhSachNguoiDung2} />
            <AdminAuth
              path="/admin/user-list-2"
              component={DanhSachNguoiDung2}
            />
            <AdminAuth path="/admin/create-course" component={ThemKhoaHoc} />

            <AdminAuth path="/admin/course-list" component={QuanLyKhoaHoc} />
            <AdminAuth path="/admin/course-list-2" component={QuanLyKhoaHoc2} />
            
            <AdminAuth path="/admin" component={dashBoard} />
            <Route path="/admin/quanly" component={QuanLyKhoaHoc} />
          </Switch>
        </AdminLayout>
        <UserLayout path="/">
          <Switch>
            <Route path="/courses" component={DanhSachKhoaHoc} />
            <Route path="/cart" component={GioHang} />

            <Route
              path="/khoa-hoc-theo-danh-muc/:maDanhMuc"
              component={KhoaHocTheoDanhMuc}
            />
            <Route path="/chi-tiet/:maKhoaHoc" component={ChiTietKhoaHoc} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={TrangChu} />
          </Switch>
        </UserLayout>
      </Switch>
    </ScrollToTop>
  );
}

export default App;
