import {
  LAY_DANH_SACH_KHOA_HOC,
  LAY_CHI_TIET_KHOA_HOC,
  CHANGE_PAGE,
  LAY_DANH_MUC_KHOA_HOC,
  LAY_KHOA_HOC_THEO_DANH_MUC,
  LAY_DANH_SACH_KHOA_HOC_PHAN_TRANG, TIM_KIEM_KHOA_HOC, TOGGLE_MODAL, CHON_KHOA_HOC
} from "../constants/QuanLyKhoaHoc";
import axios from "../../utils/axios";

export const layDanhSachKhoaHocAction = danhSachKhoaHocPhanTrang => {
  return {
    type: LAY_DANH_SACH_KHOA_HOC_PHAN_TRANG,
    data: danhSachKhoaHocPhanTrang
  };
};
export const layDanhSachKhoaHocBtAction = danhSachKhoaHoc => {
  return {
    type: LAY_DANH_SACH_KHOA_HOC,
    data: danhSachKhoaHoc
  };
};
export const layChiTietKhoaHocAction = khoaHoc => {
  return {
    type: LAY_CHI_TIET_KHOA_HOC,
    data: khoaHoc
  };
};
export const layDanhMucKhoaHocAction = danhMucKhoaHoc => {
  return {
    type: LAY_DANH_MUC_KHOA_HOC,
    data: danhMucKhoaHoc
  };
};
export const layKhoaHocTheoDanhMucAction = danhSachKhoaHocDm => {
  return {
    type: LAY_KHOA_HOC_THEO_DANH_MUC,
    data: danhSachKhoaHocDm
  };
};
export const layChiTietKhoaHoc = ({ maKhoaHoc }) => {
  return dispatch => {
    axios
      .request({
        method: "get",
        url: `QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`
      })
      .then(result => {
        dispatch(layChiTietKhoaHocAction(result.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const LayDanhMucKhoaHoc = () => {
  return dispatch => {
    axios
      .request({
        method: "get",
        url: "QuanLyKhoaHoc/LayDanhMucKhoaHoc"
      })
      .then(result => {
        dispatch(layDanhMucKhoaHocAction(result.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
export const LayKhoaHocTheoDanhMuc = ({ maDanhMuc }) => {
  return dispatch => {
    axios
      .request({
        method: "get",
        url: `QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=GP09`
      })
      .then(result => {
        dispatch(layKhoaHocTheoDanhMucAction(result.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
export const LayDanhSachKhoaHocBT = () => {
  return dispatch => {
    axios
      .request({
        method: "get",
        url: "QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP09"
      })
      .then(result => {
        dispatch(layDanhSachKhoaHocBtAction(result.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
export const LayDanhSachKhoaHoc = (currentPage, pageSize) => {
  return dispatch => {
    //gọi API
    axios
      .request({
        method: "get",
        url: `QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${currentPage}&pageSize=${pageSize}&MaNhom=GP09`
      })
      .then(result => {
        dispatch(layDanhSachKhoaHocAction(result.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const changePageAction = page => {
  return {
    type: CHANGE_PAGE,
    data: page
  };
};

export const ThemKhoaHoc = khoaHoc => {
  return (dispatch, getState) => {
    // Lấy dữ liệu từ redux store thông qua getState
    const { userInfo } = getState().quanLyNguoiDungReducer;
    const dataSubmit = {
      ...khoaHoc,
      hinhAnh: khoaHoc.hinhAnh.name,
      taiKhoanNguoiTao: userInfo.taiKhoan
    };
    
    axios.request({
        method: "POST",
        headers: {
          Authorization: `Bearer ${userInfo.accessToken}`
        },
        url: "QuanLyKhoaHoc/ThemKhoaHoc",
        data: dataSubmit
      })
      .then(result => {
       let formData = new FormData();
       formData.append("file",khoaHoc.hinhAnh);
       formData.append("tenKhoaHoc",khoaHoc.tenKhoaHoc)
       axios.request({
         method: "post",
         url: "QuanLyKhoaHoc/UploadHinhAnhKhoaHoc",
         data: formData
       }).then(aaa =>{
         window.alert("Thêm khóa học thành công")
       }).catch(err=>{
         alert("Thêm khóa học thất bại!")
       })
      });
  };
};

export const XoaKhoaHoc = maKhoaHoc => {
  return (dispatch, getState) => {
    // Lấy dữ liệu từ redux store thông qua getState
    const { userInfo } = getState().quanLyNguoiDungReducer;
    const dataSubmit = {
      ...maKhoaHoc,
      taiKhoanNguoiTao: userInfo.taiKhoan
    };
    axios.request({
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${userInfo.accessToken}`
      },
      url: `QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`,
      data: dataSubmit
    }).then(res=>{
      window.alert("Xóa khóa học thành công")
    }).catch(err=>{
      window.alert("bạn không thể xóa khóa học")
    });
  };
};
export const capNhatKhoaHocAction = (khoaHoc) =>{
  return (dispatch, getState) => {
    // Lấy dữ liệu từ redux store thông qua getState
    const { userInfo } = getState().quanLyNguoiDungReducer;
    const dataSubmit = {
      ...khoaHoc,
      hinhAnh: khoaHoc.hinhAnh.name,
      taiKhoanNguoiTao: userInfo.taiKhoan
    };
    
    axios.request({
        method: "PUT",
        headers: {
          Authorization: `Bearer ${userInfo.accessToken}`
        },
        url: "QuanLyKhoaHoc/CapNhatKhoaHoc",
        data: dataSubmit
      })
      .then(result => {
       let formData = new FormData();
       formData.append("file",khoaHoc.hinhAnh);
       formData.append("tenKhoaHoc",khoaHoc.tenKhoaHoc)
       axios.request({
         method: "post",
         url: "QuanLyKhoaHoc/UploadHinhAnhKhoaHoc",
         data: formData
       }).then(aaa =>{
         window.alert("Cập nhật thông tin khóa học thành công")
       })
       }).catch(err =>{
        alert("Cập nhật thông tin khóa học thất bại!")
      });
  };
}
export const chonKhoaHocAction = (khoaHoc) => {
  return {
    type: CHON_KHOA_HOC,
    data: khoaHoc
  }
}
export const toggleModalAction = status => {
  return {
    type: TOGGLE_MODAL,
    data: status
  };
};

export const timKiemKhoaHocAction = (danhSachKhoaHocTimKiem) =>{
  return {
    type: TIM_KIEM_KHOA_HOC,
    data: danhSachKhoaHocTimKiem
  };
};

export const timKiemKhoaHoc =(tenKhoaHoc) =>{
  return dispatch =>{
    axios.request({
      method: "GET",
      url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tenKhoaHoc}&MaNhom=GP09`
    }).then(result=>{
      dispatch(timKiemKhoaHocAction(result.data))
    }).catch(error=>{
      console.log(error);
      
    })
  }
}