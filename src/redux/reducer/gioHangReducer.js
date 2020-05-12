import { THEM_VAO_GIO_HANG, GOI_DANH_SACH_GIO_HANG } from "../constants/GioHang";

const initialState = {
    danhSachGiohang: []
    
}

const gioHangReducer = (state =initialState, action) =>{
    switch (action.type) {
        case GOI_DANH_SACH_GIO_HANG :{ 
            const danhSachGioHang = [...state.danhSachGiohang]
            danhSachGioHang.push(JSON.parse(localStorage.getItem("danhSachGioHang")))
            return {
                ...state, danhSachGioHang
            }

        }
        case THEM_VAO_GIO_HANG:
            const danhSachGioHang = [...state.danhSachGiohang]
            danhSachGioHang.push(action.data)
            localStorage.setItem("danhSachGioHang", JSON.stringify(action.data))
            return {
                ...state, danhSachGioHang
            }
            break;
    
        default:
            return state
    }
}
export default gioHangReducer