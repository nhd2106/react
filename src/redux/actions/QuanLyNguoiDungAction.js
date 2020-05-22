import axios from '../../utils/axios';
import {CHON_NGUOI_DUNG , LAY_THONG_TIN_NGUOI_DUNG, LAY_DANH_SACH_NGUOI_DUNG, TIM_KIEM_NGUOI_DUNG, TOGGLE_MODAL } from '../constants/QuanLyNguoiDung';

export const LayThongTinNguoiDung = nguoiDung =>{
    return{
        type: LAY_THONG_TIN_NGUOI_DUNG,
        data: nguoiDung
    }
}

export const DangNhapAction = (values,handleSuccess, handleFailed) => {
     return dispatch => {
         axios.request({
             method: 'post',
             url:"QuanLyNguoiDung/DangNhap",
             data: values
         }).then(result =>{
             localStorage.setItem("userInfo",JSON.stringify(result.data))
             dispatch(LayThongTinNguoiDung(result.data))
             handleSuccess()
         }).catch(error=>{
             console.log(error);
             handleFailed()
             
         })
     }
}
export const DangKyAction = (values, handleSuccess, handleFailed) =>{
    return dispatch => {
        axios.request({
            method:"post",
            url: "QuanLyNguoiDung/DangKy",
            data: values
        }).then(result =>{
            handleSuccess()
        }).catch(error =>{
            console.log(error);
            handleFailed()
            
            
        })
    }
}

export const layDanhSachNguoiDungAction = (danhSachNguoiDung) => {
    return {
        type: LAY_DANH_SACH_NGUOI_DUNG,
        data: danhSachNguoiDung
    }
}
export const LayDanhSachNguoiDung = () =>{
    return disptach =>{
        axios.request({
            method:'get',
            url:'QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01'
        }).then(result=>{
            disptach(layDanhSachNguoiDungAction(result.data))
        }).catch(error=>{
            console.log(error);

            
        })
    }
}

export const ThemNguoiDung = (nguoiDung) =>{
    return (dispatch,getState) =>{
        const {userInfo} = getState().quanLyNguoiDungReducer;
        const dataSubmit = {
            ...nguoiDung,
            maNhom: "GP01",
            taiKhoanNguoiTao: userInfo.taiKhoan
        }
        console.log(dataSubmit);
        
        axios.request({
            method: "POST",
            headers: {
                Authorization: `Bearer ${userInfo.accessToken}`
            },
            url: "QuanLyNguoiDung/ThemNguoiDung",
            data: dataSubmit
        }).then(res =>{
            window.alert("thêm người dùng thành công")
            window.location.reload()
        })
    }
}
export const XoaTaiKhoan = taiKhoan => {
    return (dispatch, getState) => {
      // Lấy dữ liệu từ redux store thông qua getState
      const { userInfo } = getState().quanLyNguoiDungReducer;
      
      axios.request({
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${userInfo.accessToken}`
        },
        url: `QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
        data: taiKhoan
      }).then(res=>{
          window.alert("đã xóa người dùng")
      }).catch(err=>{
          window.alert("bạn không thể xóa người dùng là Giáo Vụ")
      });
    };
  };
export const SuaTaiKhoan = taiKhoan => {
    return (dispatch,getState) => {
        const {userInfo} = getState().quanLyNguoiDungReducer;
        axios.request({
            method: "PUT",
            headers:{
                Authorization: `Bearer ${userInfo.accessToken}`
            },
            url: `QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
            data: taiKhoan
        }).then(res=>{
            window.alert("Đã cập thông tin người dùng")
        }).catch(err=>{
            window.alert("bạn không thể cập nhật thông tin người dùng")
        })

    }
}



export const timKiemNguoiDungAction = (danhSachNguoiDungTimKiem) => {
    return {
        type: TIM_KIEM_NGUOI_DUNG ,
        data: danhSachNguoiDungTimKiem
    }
}

export const TimKiemNguoiDung = (tuKhoa) => {
    return dispatch =>{
        axios.request({
            method: "get",
            url: `QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${tuKhoa}`
        }).then(result =>{
            dispatch(timKiemNguoiDungAction(result.data))
        }).catch(error =>{
            console.log(error);
            
        })
    }
}

export const toggleModalAction = status => {
    return {
      type: TOGGLE_MODAL,
      data: status
    };
  };

export const chonNguoiDungAction = nguoiDung => {
    return {
        type: CHON_NGUOI_DUNG,
        data: nguoiDung
    }
}