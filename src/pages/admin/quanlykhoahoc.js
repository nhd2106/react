// Component của Admin dùng để quản lý các khoá học như thêm xoá sửa ...

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  LayDanhSachKhoaHocBT,
  ThemKhoaHoc,
  XoaKhoaHoc,
  timKiemKhoaHoc
} from "../../redux/actions/QuanLyKhoaHocAction";
import {
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  Table,
  Paper,
  TableBody
} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Formik, Form, Field, useField } from "formik";
import { Label, Input } from "reactstrap";

const MySelect = ({ values, ...props }) => {
  const [field] = useField(props);
  return (
    <select className="form-control" {...field} {...props}>
      {values.map(item => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};
  


  // ---------------------------------
const QuanLyKhoaHoc = () => {
  const dispatch = useDispatch();
  const {danhSachKhoaHoc} = useSelector(
    state => state.quanLyKhoaHoc
  );
  
  const xoaKhoaHoc = maKhoaHoc => {
    dispatch(XoaKhoaHoc(maKhoaHoc));
  
  };
  const [themXoa, setThemXoa] = useState(0);
  // hàm lấy value từ input để dispatch tìm khóa học
  let [tenKhoaHoc, setTenKhoaHoc] = useState("");
  const handleChange = (e) =>{
    let tagInput =  e.target;
    let {value, name} = tagInput
    
    
    setTenKhoaHoc(tenKhoaHoc= value);
    console.log(name, value);
    
  }
  let render = true 
  if(tenKhoaHoc){
    render = false;
  }else {
    render = true;
  }
  // useEffect
  useEffect(() => {
    dispatch(LayDanhSachKhoaHocBT());
    
  }, [themXoa]);
  useEffect(()=>{
    if(tenKhoaHoc){
      dispatch(timKiemKhoaHoc(tenKhoaHoc))
    }
  },[tenKhoaHoc])

  useEffect(()=>{
    LayDanhSachKhoaHocBT()
  },[render])
console.log(themXoa);

  return (
    <div className="container ">
      <h1 className="text-center"> Quản lý khóa học</h1>
      <div className="text-left">
        <div className="row mt-5">
          <div className="col-4">
            <Button
              style={{ background: "#28A745" }}
              data-toggle="modal"
              data-target="#modelId"
            >
              <AddIcon /> Thêm khóa học
            </Button>
          </div>
          <div className="col-8">
            <div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="tenKhoaHoc"
                  value={tenKhoaHoc}
                  onChange={handleChange}
                  aria-describedby="helpId"
                  placeholder="tìm kiếm Khóa học (tên khóa học)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
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
              <h5 className="modal-title">Thêm khóa học</h5>
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
                initialValues={{
                  maKhoaHoc: "",
                  tenKhoaHoc: "",
                  moTa: "",
                  luotXem: 0,
                  danhGia: 0,
                  hinhAnh: "",
                  maNhom: "",
                  ngayTao: "",
                  maDanhMucKhoaHoc: "",
                  taiKhoanNguoiTao: ""
                }}
                onSubmit={values => {
                  console.log(values);
                  console.log(values.hinhAnh.name);
                  
                  dispatch(ThemKhoaHoc(values));
                 
                 
                  
                }}
              >
                {({ handleSubmit, setFieldValue }) => (
                  <Form>
                    <Label>Mã khóa học</Label>
                    <Input
                      className="form-control"
                      tag={Field}
                      type="text"
                      name="maKhoaHoc"
                    />

                    <Label>tên khóa học</Label>
                    <Input
                      className="form-control"
                      tag={Field}
                      type="text"
                      name="tenKhoaHoc"
                    />

                    <Label>Mô tả</Label>
                    <Input
                      className="form-control"
                      tag={Field}
                      type="text"
                      name="moTa"
                    />

                    <Label>Lượt xem</Label>
                    <Input
                      className="form-control"
                      tag={Field}
                      type="text"
                      name="luotXem"
                    />

                    <Label>Đánh giá</Label>
                    <Input
                      className="form-control"
                      tag={Field}
                      type="text"
                      name="danhGia"
                    />

                    <Label>Hình ảnh</Label>
                    <Input
                      className="form-control"
                      
                      type="file"
                      name="hinhAnh"
                      onChange = {e => setFieldValue("hinhAnh", e.target.files[0])}
                    />

                    <Label>Mã nhóm</Label>
                    <Input
                      className="form-control"
                      tag={Field}
                      type="text"
                      name="maNhom"
                    />

                    <Label>Ngày tạo</Label>
                    <Input
                      className="form-control"
                      tag={Field}
                      type="text"
                      name="ngayTao"
                    />

                    {/* <Label>Tài khoản người tạo</Label>
                    <Input
                      className="form-control"
                      tag={Field}
                      type="text"
                      name="taiKhoanNguoiTao"
                    /> */}

                    <Label>Mã danh mục khóa học</Label>
                    <MySelect
                      name="maDanhMucKhoaHoc"
                      tag={Field}
                      values={[
                        { label: "Chọn danh mục khóa học", value: "" },
                        { label: "Lập trình Backend", value: "BackEnd" },
                        { label: "Lập trình frontend", value: "FrontEnd" },
                        { label: "Lập trình Full Stack", value: "FullStack" },
                        { label: "Thiết kế web", value: "Design" },
                        { label: "Lập trình di động", value: "DiDong" },
                        { label: "Tư duy lập trình", value: "TuDuy" },
                        
                      ]}
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
                          handleSubmit();
                          setThemXoa(themXoa + 1);
                          // window.location.reload();
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

      <Paper className="">
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>Mã khóa học</TableCell>
                <TableCell>Tên khóa học</TableCell>
                <TableCell>Mô tả</TableCell>
                <TableCell>Hình ảnh</TableCell>
                <TableCell>Người tạo</TableCell>
                <TableCell>Tác vụ</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {danhSachKhoaHoc.map(khoaHoc => (
                <TableRow key={khoaHoc}>
                  <TableCell>{khoaHoc.maKhoaHoc}</TableCell>
                  <TableCell>{khoaHoc.tenKhoaHoc}</TableCell>
                  <TableCell>{khoaHoc.moTa}</TableCell>
                  <TableCell>
                    <img src={khoaHoc.hinhAnh} width="140" height="100" />
                  </TableCell>
                  <TableCell>{khoaHoc.nguoiTao.hoTen}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<EditIcon />}
                    >
                      Sửa
                    </Button>
                    <Button
                      onClick={() => {
                        xoaKhoaHoc(khoaHoc.maKhoaHoc);
                        setThemXoa(themXoa - 1);
                      }}
                      variant="contained"
                      color="secondary"
                      startIcon={<DeleteIcon />}
                    >
                      Xóa
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

export default QuanLyKhoaHoc;
