import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  LayDanhSachNguoiDung,
  ThemNguoiDung,
  XoaTaiKhoan,
  TimKiemNguoiDung,
  chonNguoiDungAction,
  SuaTaiKhoan,
  toggleModalAction,
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
import TableRow from "@material-ui/core/TableRow";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Input, Label, Modal, ModalHeader, ModalBody } from "reactstrap";
import * as yup from 'yup';

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: "absolute",
    top: theme.spacing(),
    right: theme.spacing(3),
  },
}));

const userschema =  yup.object().shape({
    taiKhoan: yup.string().required("*Phải nhập tên tài khoản!"),    
    matKhau: yup.string().required("*Phải nhập mật khẩu!"),
    hoTen: yup.string().required("*Phải nhập họ tên!"), 
    soDT: yup.string().matches(/^[0-9]+$/, {message: "số điện thoại không hợp lệ!"}).required("*Phải nhập số điện thoại!"),
    maLoaiNguoiDung: yup.string().matches(/HV|GV/,{message:"mã loại người dùng là GV hoặc HV!"}).required("*Phải nhập mã loại người dùng!"), 
    maNhom: yup.string().matches(/GP01/, {message:"Mã nhóm phải là GP01"}).required("*Phải nhập mã nhóm!"), 
    email: yup.string().email("*Email không hợp lệ!").required("*Phải nhập email!")
})

const DanhSachNguoiDung2 = () => {
  const dispatch = useDispatch();
  const danhSachNguoiDung = useSelector(
    (state) => state.quanLyNguoiDungReducer.danhSachNguoiDung
  );
  const nguoiDungDuocChon = useSelector(
    (state) => state.quanLyNguoiDungReducer.nguoiDungDuocChon
  );

  const isOpen = useSelector(state=> state.quanLyNguoiDungReducer.isOpen)
  // hàm lấy value từ input để dispatch tìm người dùng
  let [tuKhoa, setTuKhoa] = useState("");
  const handleChange = (e) => {
    let tagInput = e.target;
    let { value, name } = tagInput;
    setTuKhoa((tuKhoa = value));
    console.log(name, value);
  };
  const user = {
    taiKhoan: nguoiDungDuocChon.taiKhoan || "",
    matKhau: nguoiDungDuocChon.matKhau || "",
    hoTen: nguoiDungDuocChon.hoTen || "",
    soDT: nguoiDungDuocChon.soDt || "",
    maLoaiNguoiDung: nguoiDungDuocChon.maLoaiNguoiDung || "",
    maNhom: nguoiDungDuocChon.maNhom || "",
    email: nguoiDungDuocChon.email || "",
  };
 
  console.log(nguoiDungDuocChon, "người dùng được chọn");

  // reRender danh sách khóa học
  let render = true;
  if (tuKhoa) {
    render = false;
  } else {
    render = true;
  }

  // render danh sách người dùng khi thêm hoạc
  const [themXoa, setThemXoa] = useState(0);

  // useEffect
  useEffect(() => {
    if (tuKhoa) {
      dispatch(TimKiemNguoiDung(tuKhoa));
    }
  }, [tuKhoa]);
  console.log(themXoa);
  useEffect(() => {
    dispatch(LayDanhSachNguoiDung());
  }, [render]);
  useEffect(() => {
    dispatch(LayDanhSachNguoiDung());
  }, [themXoa]);
  // hàm xóa tài khoản
  const xoaTaiKhoan = (taiKhoan) => {
    dispatch(XoaTaiKhoan(taiKhoan));
  };
//   onToggle
const onToggle =  (status) => {
    dispatch(toggleModalAction(status))
}
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
                onClick={() => {
                  onToggle(true);
                   dispatch(chonNguoiDungAction({}));
                  }}
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
                    onChange={handleChange}
                    aria-describedby="helpId"
                    placeholder="tìm kiếm người dùng (họ tên)"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              {/* Button trigger modal */}

              {/* Modal */}
              
        <Modal
          isOpen={isOpen}
          toggle={() => onToggle(false)}
        >
          <ModalHeader >
            Thêm người dùng
          </ModalHeader>
          <ModalBody>
           <Formik
            enableReinitialize={true}
            validationSchema={userschema}
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
               {props =>(
                    <Form onSubmit={props.handleSubmit}>
                   <div className="form-group">
                   <Label>Tài khoản</Label>
                    <Input
                      className="form-control"
                      tag={Field}
                      type="text"
                      name="taiKhoan"
                      
                      
                    />
                    <ErrorMessage name="taiKhoan"/>
                   </div>

                    <div className="form-group">
                    <Label>Mật khẩu</Label>
                    <Input
                      className="form-control"
                      tag={Field}
                      type="text"
                      name="matKhau"
                    />
                    <ErrorMessage name="matKhau"/>
                    </div>

                   <div className="form-group">
                   <Label>Họ Tên</Label>
                    <Input
                      className="form-control"
                      tag={Field}
                      type="text"
                      name="hoTen"
                    />
                    <ErrorMessage name="hoTen"/>
                   </div>

                    <div className="form-group">
                    <Label>Số điện thoại</Label>
                    <Input
                      className="form-control"
                      tag={Field}
                      type="text"
                      name="soDT"
                    />
                    <ErrorMessage name="soDT">
                        {(msg)=><div>{msg}</div>}
                    </ErrorMessage>
                    </div>


                    <div className="form-group">
                    <Label>Mã loại người dùng (HV hoặc GV)</Label>
                    <Input
                      className="form-control"
                      tag={Field}
                      type="text"
                      name="maLoaiNguoiDung"
                    />
                    <ErrorMessage name="maLoaiNguoiDung">
                        {(msg)=><div>{msg}</div>}
                    </ErrorMessage>
                    </div>


                    <div className="form-group">
                    <Label>Mã nhóm (GP01)</Label>
                    <Input
                      className="form-control"
                      tag={Field}
                      type="text"
                      name="maNhom"
                      
                    />
                    <ErrorMessage name="maNhom">
                        {(msg)=><div>{msg}</div>}
                    </ErrorMessage>
                    </div>

                    <div className="form-group">
                    <Label>Email</Label>
                    <Input
                      className="form-control"
                      tag={Field}
                      type="text"
                      name="email"
                    />
                    <ErrorMessage name="email"/>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                        onClick= {()=> onToggle(false) }
                      >
                        Close
                      </button>
                      <button
                        type="submit"
                        onClick={() => {
                          props.handleSubmit();
                          setThemXoa(themXoa + 1);
                          onToggle(false)
                        
                        }}
                        
                        className="btn btn-primary"

                      >
                        Thêm
                      </button>
                    </div>
                  </Form>
               )}
           </Formik>
          </ModalBody>
         
        </Modal>
             
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
              {danhSachNguoiDung.map((item) => (
                <TableRow key={item}>
                  <TableCell>{item.taiKhoan}</TableCell>
                  <TableCell>{item.hoTen}</TableCell>
                  <TableCell style={{ width: "300px" }}>{item.email}</TableCell>
                  <TableCell>{item.soDt}</TableCell>
                  <TableCell>{item.maLoaiNguoiDung}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<EditIcon />}
                      
                      onClick={() => {
                        dispatch(chonNguoiDungAction(item))
                        onToggle(true)
                      }}
                      
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

export default DanhSachNguoiDung2;
