// Component của Admin dùng để quản lý các khoá học như thêm xoá sửa ...

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  LayDanhSachKhoaHocBT,
  ThemKhoaHoc,
  XoaKhoaHoc,
  timKiemKhoaHoc,
  chonKhoaHocAction,
  capNhatKhoaHocAction
} from "../../redux/actions/QuanLyKhoaHocAction";
import * as yup from 'yup';

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
import { Formik, Form, Field, useField, ErrorMessage } from "formik";
import { Label, Input, Modal, ModalHeader, ModalBody } from "reactstrap";
import { toggleModalAction } from "../../redux/actions/QuanLyKhoaHocAction";

const MySelect = ({ values, ...props }) => {
  const [field, meta] = useField(props);
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
const schema =  yup.object().shape({
  maKhoaHoc: yup.string().required("*Phải nhập mã khóa học"),
    tenKhoaHoc:yup.string().required("*Phải nhập tên khóa học"),
    moTa:yup.string().required("*Phải nhập mã mô tả học"),
    luotXem:yup.string(),
    danhGia:yup.string(),
    hinhAnh:yup.string().required("*Phải tải ảnh lên"),
    maNhom:yup.string().matches(/GP09/, {message: "Mã nhóm phải là GP01"}).required("*Phải nhập mã Nhóm"),
    ngayTao: yup.string().required("*Phải nhập ngày tạo"),
    maDanhMucKhoaHoc: yup.string().required("*Phải nhập mã danh mục khóa học"),
    taiKhoanNguoiTao: yup.string().required("*Phải nhập tài khoản người tạo")
})

  // ---------------------------------
const QuanLyKhoaHoc2 = () => {
  const dispatch = useDispatch();
  const {danhSachKhoaHoc} = useSelector(
    state => state.quanLyKhoaHoc
  );
  const khoaHocDuocChon =  useSelector(state => state.quanLyKhoaHoc.khoaHocDuocChon)
  console.log(khoaHocDuocChon,"Khóa học được chọn");
  
  const isOpen = useSelector(state => state.quanLyKhoaHoc.isOpen)  
const khoaHoc = {
    maKhoaHoc: khoaHocDuocChon.maKhoaHoc||"",
    tenKhoaHoc:khoaHocDuocChon.tenKhoaHoc||  "",
    moTa:khoaHocDuocChon.moTa|| "",
    luotXem:khoaHocDuocChon.luotXem|| 0,
    danhGia:khoaHocDuocChon.danhGia|| 0,
    hinhAnh:khoaHocDuocChon.hinhAnh|| "",
    maNhom:khoaHocDuocChon.maNhom|| "",
    ngayTao: khoaHocDuocChon.ngayTao|| "",
    maDanhMucKhoaHoc: khoaHocDuocChon.maDanhMucKhoaHoc|| "",
    taiKhoanNguoiTao: khoaHocDuocChon.taiKhoanNguoiTao|| ""
}
const onToggle = status => dispatch(toggleModalAction(status))
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
              onClick= {()=>{
                  onToggle(true)
                  dispatch(chonKhoaHocAction({}))
              }}
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
     <Modal isOpen= {isOpen}
            toggle= {()=> onToggle(false)}
     >
         <ModalHeader>
             Thêm Khóa Học
         </ModalHeader>
         <ModalBody>
         <Formik
                initialValues={{
                  maKhoaHoc: khoaHoc.maKhoaHoc,
                  tenKhoaHoc: khoaHoc.tenKhoaHoc ,
                  moTa: khoaHoc.moTa,
                  luotXem: khoaHoc.luotXem,
                  danhGia: khoaHoc.danhGia,
                  hinhAnh: khoaHoc.hinhAnh,
                  maNhom: khoaHoc.maNhom,
                  ngayTao: khoaHoc.ngayTao,
                  maDanhMucKhoaHoc: khoaHoc.maDanhMucKhoaHoc,
                  taiKhoanNguoiTao: khoaHoc.taiKhoanNguoiTao
                }}
                validationSchema={schema}
                onSubmit={values => {
                  console.log(values);
                  console.log(values.hinhAnh.name);
                  
                  if(khoaHoc.maKhoaHoc == ""){
                    dispatch(ThemKhoaHoc(values))
                  }else{
                    dispatch(capNhatKhoaHocAction(values))
                  };
                 
                 
                  
                }}
              >
                {({ handleSubmit, setFieldValue }) => (
                  <Form>
                  <div className="form-group">
                  <Label>Mã khóa học</Label>
                    <Input
                      className="form-control"
                      tag={Field}
                      type="text"
                      name="maKhoaHoc"
                    />
                    <ErrorMessage name="maKhoaHoc"/>
            
                  </div>

                    <div className="form-group">
                    <Label>tên khóa học</Label>
                    <Input
                      className="form-control"
                      tag={Field}
                      type="text"
                      name="tenKhoaHoc"
                    />
                    <ErrorMessage name="tenKhoaHoc"/>
                    </div>

                    <div className="form-group">
                    <Label>Mô tả</Label>
                    <Input
                      className="form-control"
                      tag={Field}
                      type="text"
                      name="moTa"
                    />
                    <ErrorMessage name="moTa"/>
                    </div>

                    <div className="form-group">
                    <Label>Lượt xem</Label>
                    <Input
                      className="form-control"
                      tag={Field}
                      type="text"
                      name="luotXem"
                    />
                    <ErrorMessage name="luotXem"/>
                    </div>


                    <div className="form-group">
                    <Label>Đánh giá</Label>
                    <Input
                      className="form-control"
                      tag={Field}
                      type="text"
                      name="danhGia"
                    />
                    <ErrorMessage name="danhGia"/>
                    </div>

                  <div className="form-group">
                  <Label>Hình ảnh</Label>
                    <Input
                      className="form-control"
                      
                      type="file"
                      name="hinhAnh"
                      onChange = {e => setFieldValue("hinhAnh", e.target.files[0])}
                    />
                    <ErrorMessage name="hinhAnh"/>
                  </div>

                    <div className="form-group">
                    <Label>Mã nhóm(GP09)</Label>
                    <Input
                      className="form-control"
                      tag={Field}
                      type="text"
                      name="maNhom"
                    />
                    <ErrorMessage name="maNhom">
                      {
                        (msg) => <div> {msg} </div>
                      }
                    </ErrorMessage>

                    </div>
                   <div className="form-group">
                   <Label>Ngày tạo (dd/mm/yyyy)</Label>
                    <Input
                      className="form-control"
                      tag={Field}
                      type="text"
                      name="ngayTao"
                    />
                    <ErrorMessage name="ngayTao"/>
                   </div>

                    {/* <Label>Tài khoản người tạo</Label>
                    <Input
                      className="form-control"
                      tag={Field}
                      type="text"
                      name="taiKhoanNguoiTao"
                    /> */}

                    <div className='form-group'>
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
                    <ErrorMessage name="maDanhMucKhoaHoc"/>
                    </div>


                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick= {()=>{
                            onToggle(false)
                        }}
                      >
                        Close
                      </button>
                      <button
                        type="submit"
                        onClick={() => {
                          handleSubmit();
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
                      onClick={()=>{
                        onToggle(true)
                        dispatch(chonKhoaHocAction(khoaHoc))
                      }}
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

export default QuanLyKhoaHoc2;
