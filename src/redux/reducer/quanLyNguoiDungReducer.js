import { LAY_THONG_TIN_NGUOI_DUNG, LAY_DANH_SACH_NGUOI_DUNG, TIM_KIEM_NGUOI_DUNG, TOGGLE_MODAL, CHON_NGUOI_DUNG } from "../constants/QuanLyNguoiDung";

const initialValue = {
    userInfo: {},
    danhSachNguoiDung : [],
    add : 0,
    isOpen: false,
    nguoiDungDangChon:{}

}

const quanLyNguoiDungReducer = (state= initialValue, action) => {
     
    switch (action.type) {
        case LAY_THONG_TIN_NGUOI_DUNG :{
            return{
                ...state,
                userInfo: action.data  

            }
        }
        case LAY_DANH_SACH_NGUOI_DUNG :{
            return{
                ...state,
               danhSachNguoiDung: action.data  

            }
        }
        case TIM_KIEM_NGUOI_DUNG: {
            return{
                ...state,
                danhSachNguoiDung: action.data
            }
        }
        case CHON_NGUOI_DUNG: {
            return{
                ...state,
                nguoiDungDangChon: action.data
            }
        }
        case TOGGLE_MODAL: {
            return { ...state, isOpen: action.data };
          }
            
        
    
        default:
            return state
    }

}
export default quanLyNguoiDungReducer