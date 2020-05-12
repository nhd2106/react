import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import { LayDanhSachNguoiDung, XoaTaiKhoan, toggleModalAction, TimKiemNguoiDung, chonNguoiDungAction, ThemNguoiDung } from '../../redux/actions/QuanLyNguoiDungAction';
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
class QuanLyNguoiDung extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tuKhoa:"",
            themXoa: 0,
            reRender: true,

            // THONG TIN NGƯỜI DÙNG
          
        
            taiKhoan:  "",
            matKhau: "",
            hoTen: "",
            soDt: "",
            maLoaiNguoiDung: "",
            maNhom: ""
          
            
        }
        
    }
    
    componentDidMount(){
        if(this.state.tuKhoa==""){
          this.props.layDanhSachNguoiDung()
        }
    }
    
    componentDidUpdate(prevProps,prevState) {
      if(prevState.tuKhoa !== this.state.tuKhoa) {
        this.props.timKiemNguoiDung(this.state.tuKhoa)
      }
      
      if(prevState.reRender !== this.state.reRender || prevState.themXoa !== this.state.themXoa ){
        this.props.layDanhSachNguoiDung()
      }
      if (prevProps.nguoiDungDangChon !== this.props.nguoiDungDangChon) {
        const { taiKhoan, matKhau, hoTen, email,soDt, maLoaiNguoiDung, maNhom } = this.props.nguoiDungDangChon;
        this.setState({
          taiKhoan: taiKhoan || "",
          matKhau: matKhau || "",
          hoTen: hoTen || "",
          email: email || "",
          soDt: soDt || "",
          maLoaiNguoiDung: maLoaiNguoiDung || "",
          maNhom: maNhom || ""
        });
      }
    }
    
    
    handleChangeTimKiem  = e =>{
        let tagInput = e.target;
        let {value,name} = tagInput
        this.setState({
            [name]: value
        })
        console.log(name, value);
        if(!value){
          this.setState({reRender: false})
        }else{
          this.setState({reRender: true})
        }
      }
   handleChangeThemUser = event =>{
     let tagInput = event.target;
     let {value, name} = tagInput;
     this.setState({
       [name]: value
     })
     console.log(name, value, "thông tin người dùnggggg");
     
   }
   handleSubmit = () => {
     const nguoiDung = {...this.state.user}
     const index = this.props.danhSachNguoiDung.findIndex(nd => nd.taiKhoan === nguoiDung.taiKhoan);
     if(index === -1){
       this.props.themNguoiDung(nguoiDung)
     }
   }
      
   
    render() {
        console.log(this.props.danhSachNguoiDung);
        console.log(this.state.reRender);
     
        
       console.log(this.props.nguoiDungDangChon, "NguoiDungDangChon");
       
        return (
            <div className="container">
                <h1>Quản Lý người dùng</h1>
                <div className="row mt-5">
            <div className="col-4">
              <Button
                style={{ background: "#28A745" }}
                data-toggle="modal"
                data-target="#modelId"
                onClick={()=> {this.props.onToggle(true); this.props.chonNguoiDung({})}}
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
                    value={this.state.tuKhoa}
                    onChange= {this.handleChangeTimKiem}
                    
                    aria-describedby="helpId"
                    placeholder='tìm kiếm người dùng (họ tên)'
                  />
          
                </div>
              </div>
            </div>
          </div>
                <Modal
        isOpen={this.props.isOpen}
        toggle={() => this.props.onToggle(false)}
      >
        <ModalHeader toggle={() => this.props.onToggle(false)}>
            Thêm người dùng
        </ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label>Tài khoản</label>
              <input
               
                type="text"
                className="form-control"
                name="taiKhoan"
                value={this.state.taiKhoan}
                onChange={this.handleChangeThemUser}
              />
            </div>
            <div className="form-group">
              <label>Mật khẩu</label>
              <input
                type="text"
                className="form-control"
                name="matKhau"
                value={this.state.matKhau}
                onChange={this.handleChangeThemUser}
              />
            </div>
            <div className="form-group">
              <label>Họ tên </label>
              <input
                type="text"
                className="form-control"
                name="hoTen"
                value={this.state.hoTen}
                onChange={this.handleChangeThemUser}
              />
            </div>
            <div className="form-group">
              <label>Số điện thoại</label>
              <input
                type="text"
                className="form-control"
                name="soDt"
                value={this.state.soDt}
                onChange={this.handleChangeThemUser}
              />
            </div>
            <div className="form-group">
              <label>Mã loại người dùng</label>
              <input
                type="text"
                className="form-control"
                name="maLoaiNguoiDung"
                value={this.state.maLoaiNguoiDung}
                onChange={this.handleChangeThemUser}
              />
            </div>
            
          </form>
        </ModalBody>
        <ModalFooter>
          <button onClick={this.handleSubmit} className="btn btn-success">
            Lưu
          </button>
          <button onClick={()=> this.props.onToggle(false)} className="btn btn-danger">
            Huỷ
          </button>
        </ModalFooter>
      </Modal>

      
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
              {this.props.danhSachNguoiDung.map(item => (
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
                        onClick={()=> {this.props.chonNguoiDung(item); this.props.onToggle(true)}}
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
                           this.props.xoaTaiKhoan(item.taiKhoan);
                           this.setState({themXoa: this.state.themXoa +1})
                        
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
        )
    }
}
const mapStateToProps = state => ({
    danhSachNguoiDung: state.quanLyNguoiDungReducer.danhSachNguoiDung,
    isOpen: state.quanLyNguoiDungReducer.isOpen,
    nguoiDungDangChon: state.quanLyNguoiDungReducer.nguoiDungDangChon,
   
  });
  
  const mapDispatchToProps = dispatch => ({
      layDanhSachNguoiDung: danhSachNguoiDung => dispatch(LayDanhSachNguoiDung(danhSachNguoiDung)),
    timKiemNguoiDung :  tuKhoa => dispatch(TimKiemNguoiDung(tuKhoa)),
    onToggle: status => dispatch(toggleModalAction(status)),
    chonNguoiDung: nguoiDung => dispatch(chonNguoiDungAction(nguoiDung)),
    xoaTaiKhoan: taiKhoan => dispatch(XoaTaiKhoan(taiKhoan)),
    themNguoiDung: nguoiDung => dispatch(ThemNguoiDung(nguoiDung))
  });
  
export default connect(mapStateToProps,mapDispatchToProps)(QuanLyNguoiDung)
