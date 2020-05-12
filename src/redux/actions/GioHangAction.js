import { THEM_VAO_GIO_HANG, GOI_DANH_SACH_GIO_HANG } from "../constants/GioHang"

export const themVaoGioHangAction = sanPham =>{
    return {
        type: THEM_VAO_GIO_HANG,
        data: sanPham   
    }
}
export const goiDanhSachGioHang = () => {
    return {
        type: GOI_DANH_SACH_GIO_HANG
    }
}