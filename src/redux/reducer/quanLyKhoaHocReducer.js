import {
  LAY_DANH_SACH_KHOA_HOC,
  LAY_CHI_TIET_KHOA_HOC,
  CHANGE_PAGE,
  LAY_DANH_MUC_KHOA_HOC,
  LAY_KHOA_HOC_THEO_DANH_MUC,

  LAY_DANH_SACH_KHOA_HOC_PHAN_TRANG,
  TIM_KIEM_KHOA_HOC,
  CHON_KHOA_HOC,
  TOGGLE_MODAL
} from "../constants/QuanLyKhoaHoc";

const initialState = {
  danhSachKhoaHocPhanTrang: [],
  danhSachKhoaHoc: [],
  chiTietKhoaHoc: {},
  danhMucKhoaHoc: [],
  danhSachKhoaHocDm: [],
  currentPage: 1,
  totalCount: 0,
  khoaHocDuocChon: {},
  isOpen: false
  
};

const quanLyKhoaHocReducer = (state = initialState, action) => {
  switch (action.type) {
    case LAY_DANH_SACH_KHOA_HOC_PHAN_TRANG:
      return {
        ...state,
        danhSachKhoaHocPhanTrang: action.data.items,
        totalCount: action.data.totalCount
      };
    case LAY_DANH_SACH_KHOA_HOC:
      return {
        ...state,
        danhSachKhoaHoc: action.data
      };

    case LAY_CHI_TIET_KHOA_HOC:
      return {
        ...state,
        chiTietKhoaHoc: action.data
      };
    case LAY_DANH_MUC_KHOA_HOC: 
    return {
        ...state,
        danhMucKhoaHoc: action.data
    };
    case LAY_KHOA_HOC_THEO_DANH_MUC:
      return{
        ...state,
        danhSachKhoaHocDm: action.data
      }
    case CHANGE_PAGE: {
      return {
        ...state,
        currentPage: action.data,
        
      };
    }
    case TIM_KIEM_KHOA_HOC: {
      return {
        ...state,
        danhSachKhoaHoc: action.data
      }
    }
    case CHON_KHOA_HOC : {
      return {
        ...state,
        khoaHocDuocChon: action.data
      }
    }
    case TOGGLE_MODAL: {
      return { ...state, isOpen: action.data };
    }
     
    default:
      return state;
  }
};
export default quanLyKhoaHocReducer;
