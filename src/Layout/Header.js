import React from "react";
import logo from "../Assets/images/Elearning-logo.png";
import headerStyle from "./Css/Header.module.css";
import { Link, NavLink } from "react-router-dom";
import { withStyles, Badge } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { Formik, Field } from "formik";
import { Form, Label, Input, Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { DangKyAction } from "../redux/actions/QuanLyNguoiDungAction";
import {withRouter} from 'react-router-dom'

const Header = (props) => {
  const StyledBadge = withStyles(theme => ({
    Badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px"
    }
  }))(Badge);
 
  const userInfo = JSON.parse(localStorage.getItem("userInfo"))
  var isloggedIn = false;
  if(userInfo){
    isloggedIn = true
  }
  // đăng ký
  const dispatch = useDispatch()
  const handleRegisterSuccess = () =>{
    props.history.push("/sign-in")
    console.log(props.history);
    window.location.reload()
    
  }
  const handleRegisterFailed = () =>{
    window.alert("thông tin đăng ký đã tồn tại hoặc chưa đúng")

  }
 
  return (
    <div className="bg-light p-3 position-relative ">
      <div className="container">
        <nav className="navbar navbar-expand-md bg-light text-dark  navbar-light">
          {/* Brand */}
          <Link className="navbar-brand" to="/">
            <img src={logo} />
          </Link>
          {/* Toggler/collapsibe Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <div className={headerStyle.dropdown}>
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                  <div className={headerStyle.dropdownContent}>
                    <a href="#">Home 1</a>
                    <a href="#">Home 2</a>
                    <a href="#">Home 3</a>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <div>
                  <a className="nav-link" href="#">
                    About
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <div className={headerStyle.dropdown}>
                  <Link className="nav-link" to="/courses">
                    Courses
                  </Link>
                  <div className={headerStyle.dropdownContent}>
                    <Link to="/courses">Courses</Link>
                    <a href="#">Course List</a>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <div className={headerStyle.dropdown}>
                  <a className="nav-link" href="#">
                    Blog
                  </a>
                  <div className={headerStyle.dropdownContent}>
                    <a href="#">Blog 1</a>
                    <a href="#">Blog 2</a>
                    <a href="#">Blog 3</a>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <div className={headerStyle.dropdown}>
                  <a className="nav-link" href="#">
                    Events
                  </a>
                  <div className={headerStyle.dropdownContent}>
                    <a href="#">Event 1</a>
                    <a href="#">Event 2</a>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pages
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav mr-auto"></ul>
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link" to="/cart" id="cart">
                 
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={0} color="secondary">
                      <ShoppingCartIcon />
                    </StyledBadge>
                  </IconButton>
                </Link>
              </li>
              <li className="nav-item">
               {
                 isloggedIn?  <Link className='nav-link' to="/admin"><IconButton><PermIdentityIcon/></IconButton></Link> :  <Link className="nav-link" to="/sign-in">
                  <button className="btn btn-primary">Đăng nhập</button>
                </Link> 
               
              
               }
              </li>
              <li className="nav-item">
               {
                 isloggedIn? <Link className="nav-link" to="/sign-out"> 
                 <IconButton ><PowerSettingsNewIcon/></IconButton>
               </Link>    : <div className="nav-link" >
                 <button
                   className="btn btn-success"
                   data-toggle="modal"
                   data-target="#modalRegisterForm"
                 >
                   Đăng ký
                 </button>
               </div>
               }
                <div>
                  <div
                    className="modal fade"
                    id="modalRegisterForm"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="myModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header text-center">
                          <h4 className="modal-title w-100 font-weight-bold">
                            Đăng ký
                          </h4>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div className="modal-body mx-3">
                            <Formik
                              initialValues={{
                                taiKhoan: "",
                                matKhau: "",
                                hoTen: "",
                                soDT:"",
                                maNhom:"",
                                email:""
                              }}
                              onSubmit={values =>{
                                console.log(values);
                                dispatch(DangKyAction(values, handleRegisterSuccess, handleRegisterFailed))
                                
                              }}

                            >
                                {({handleSubmit})=>(
                                  <Form>

                                  <Label>Tài khoản</Label>
                                  <Input className="form-control " tag={Field} type='text' name='taiKhoan'/>
                                

                                  <Label>Mật khẩu</Label>
                                  <Input className="form-control " tag={Field} type='text' name='matKhau'/>
                                

                                  <Label>Họ tên</Label>
                                  <Input className="form-control " tag={Field} type='text' name='hoTen'/>
                                

                                  <Label>Số điện thoại</Label>
                                  <Input className="form-control " tag={Field} type='text' name='soDT'/>
                                

                                  <Label>Mã nhóm</Label>
                                  <Input className="form-control " tag={Field} type='text' name='maNhom'/>
                                

                                  <Label>Email</Label>
                                  <Input className="form-control mb-2" tag={Field} type='text' name='email'/>
                                
                                 <div className="mt-2  text-center">
                                 <Button className-="btn btn-success " type="submit" onClick={handleSubmit}>Đăng ký</Button>
                                 </div>
                                </Form>
                                
                                )}
                            </Formik>
                        </div>
                        
                        <div class="options text-left mx-5">
                          <p class="pt-1">
                            Bạn đã có tài khoản?{" "}
                            <Link type="button"
                              to="/sign-in"
                              
                              class="blue-text"
                              
                            >
                              Đăng nhập
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default withRouter(Header);