import { combineReducers } from "redux";
import quanLyKhoaHoc from './quanLyKhoaHocReducer'
import quanLyNguoiDungReducer from './quanLyNguoiDungReducer'
import gioHangReducer from './gioHangReducer'
export default combineReducers ({
    quanLyKhoaHoc,
    quanLyNguoiDungReducer,
    gioHangReducer
})