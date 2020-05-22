import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  LayDanhSachNguoiDung,
  ThemNguoiDung,
  XoaTaiKhoan,
  TimKiemNguoiDung,
  chonNguoiDungAction,
  SuaTaiKhoan
} from "../../redux/actions/QuanLyNguoiDungAction";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { Formik, Field, Form } from "formik";
import { Input, Label } from "reactstrap";

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(2)
  },
  absolute: {
    position: "absolute",
    top: theme.spacing(),
    right: theme.spacing(3)
  }
}));

const DanhSachNguoiDung = () => {
  const dispatch = useDispatch();
  const danhSachNguoiDung = useSelector(
    state => state.quanLyNguoiDungReducer.danhSachNguoiDung
  );
  const nguoiDungDuocChon = useSelector(
    state => state.quanLyNguoiDungReducer.nguoiDungDuocChon
  )
  // hàm lấy value từ input để dispatch tìm người dùng
  let [tuKhoa, setTuKhoa] = useState("")
  const handleChange  = e =>{
    let tagInput = e.target;
    let {value,name} = tagInput
    setTuKhoa(tuKhoa= value)
    console.log(name, value);
    
  }
  const user = {
    taiKhoan: nguoiDungDuocChon.taiKhoan || "",
    matKhau: nguoiDungDuocChon.matKhau ||"",
    hoTen: nguoiDungDuocChon.hoTen ||"",
    soDT: nguoiDungDuocChon.soDt ||"",
    maLoaiNguoiDung: nguoiDungDuocChon.maLoaiNguoiDung ||"",
    maNhom:  nguoiDungDuocChon.maNhom||"",
    email: nguoiDungDuocChon.email || ""
  }
  

  console.log(nguoiDungDuocChon,"người dùng được chọn");
  
  // reRender danh sách khóa học
  let render = true
  if(tuKhoa){
    render = false
  }else{
    render = true
  }

  // render danh sách người dùng khi thêm hoạc 
  const [themXoa, setThemXoa] = useState(0);

  // useEffect
  useEffect(() => {
    if(tuKhoa){
      dispatch(TimKiemNguoiDung(tuKhoa))
    }
    
    
  }, [tuKhoa]);
  console.log(themXoa);
 useEffect(()=>{
  dispatch(LayDanhSachNguoiDung());
 },[render])
 useEffect(()=>{
  dispatch(LayDanhSachNguoiDung());
 },[themXoa])
// hàm xóa tài khoản
  const xoaTaiKhoan = taiKhoan => {
    dispatch(XoaTaiKhoan(taiKhoan));
  };
  // sua tai khoan
   
   

  // material ui style
  const classes = useStyles();

  return (
    <div className="container">
      <h1 className="text-center">Danh sách người dùng</h1>
      <div>
        <div className="text-left ">
          <div className="row mt-5">
            <div className="col-4">
              <Button
                style={{ background: "#28A745" }}
                data-toggle="modal"
                data-target="#modelId"
              >
                <AddIcon /> Thêm người dùng
              </Button>
            </div>
            <div className="col-8">
              <div>
                
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="tuKhoa"
                    value={tuKhoa}
                    onChange= {handleChange}
                    aria-describedby="helpId"
                    placeholder='tìm kiếm người dùng (họ tên)'
                  />
          
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              {/* Button trigger modal */}

              {/* Modal */}
              <div
                className="modal fade"
                id="modelId"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="modelTitleId"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Thêm người dùng</h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <Formik
                        enableReinitialize={true}
                        initialValues={{
                          taiKhoan: user.taiKhoan,
                          matKhau: user.matKhau,
                          hoTen: user.hoTen,
                          soDT: user.soDT,
                          maLoaiNguoiDung: user.maLoaiNguoiDung,
                          maNhom: user.maNhom,
                          email: user.email
                        }}
                        onSubmit={values => {
                          console.log(values,"valuessssss");
                          if(user.taiKhoan ==""){
                            dispatch(ThemNguoiDung(values));
                          }else{
                            dispatch(SuaTaiKhoan(values))
                          }
                          
                        }}
                      >
                        {props  => (
                          <Form onSubmit={props.handleSubmit}>
                            <Label>Tài khoản</Label>
                            <Input
                              className="form-control"
                              tag={Field}
                              type="text"
                              name="taiKhoan"
                              
                              
                            />

                            <Label>Mật khẩu</Label>
                            <Input
                              className="form-control"
                              tag={Field}
                              type="text"
                              name="matKhau"
                            />

                            <Label>Họ Tên</Label>
                            <Input
                              className="form-control"
                              tag={Field}
                              type="text"
                              name="hoTen"
                            />

                            <Label>Số điện thoại</Label>
                            <Input
                              className="form-control"
                              tag={Field}
                              type="text"
                              name="soDT"
                            />

                            <Label>Mã loại người dùng</Label>
                            <Input
                              className="form-control"
                              tag={Field}
                              type="text"
                              name="maLoaiNguoiDung"
                            />

                            <Label>Mã nhóm</Label>
                            <Input
                              className="form-control"
                              tag={Field}
                              type="text"
                              name="maNhom"
                              
                            />

                            <Label>Email</Label>
                            <Input
                              className="form-control"
                              tag={Field}
                              type="text"
                              name="email"
                            />
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                              >
                                Close
                              </button>
                              <button
                                type="submit"
                                onClick={() => {
                                  props.handleSubmit();
                                  setThemXoa(themXoa + 1);
                                
                                }}
                                data-dismiss="modal"
                                className="btn btn-primary"
                              >
                                Thêm
                              </button>
                            </div>
                          </Form>
                        )}
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Paper className="">
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>Tài khoản</TableCell>
                <TableCell>Họ tên</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Số điện thoại</TableCell>
                <TableCell>mã người dùng</TableCell>
                <TableCell>Tác vụ</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {danhSachNguoiDung
                
                .map(item => (
                  <TableRow key={item}>
                    <TableCell>{item.taiKhoan}</TableCell>
                    <TableCell>{item.hoTen}</TableCell>
                    <TableCell style={{ width: "300px" }}>
                      {item.email}
                    </TableCell>
                    <TableCell>{item.soDt}</TableCell>
                    <TableCell>{item.maLoaiNguoiDung}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        startIcon={<EditIcon />}
                        data-toggle="modal"
                        data-target="#modelId"
                        onClick={()=> dispatch(chonNguoiDungAction(item))}
                       
                      >
                       sửa
                      </Button>
                      <Button
                        onClick={() => {
                          if (
                            window.confirm(
                              "bạn có chắc là muốn xóa tài khoản này chứ?"
                            )
                          )
                            xoaTaiKhoan(item.taiKhoan);
                          setThemXoa(themXoa - 1);
                        }}
                        variant="contained"
                        color="secondary"
                        startIcon={<DeleteIcon />}
                      >
                        xóa
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      
      </Paper>
    </div>
  );
};

export default DanhSachNguoiDung;
