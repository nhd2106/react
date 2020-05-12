import React, { useEffect } from "react";
import { Formik, Field } from "formik";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { DangNhapAction } from "../../redux/actions/QuanLyNguoiDungAction";
import { Link } from "react-router-dom";

const DangNhap = props => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector(state => state.quanLyNguoiDungReducer);
  const handleLoginSuccess = () => {
    props.history.replace("/");
  
  };
  const handleLoginFailed = () =>{
    window.alert("Tài khoản hoặc mật khẩu không đúng")
  }

  useEffect(() => {
    if (Object.keys(userInfo).length !== 0) {
      props.history.push("/");
    }
  }, [userInfo]);

  return (
    <div className=" py-5" style={{ background: "#007bff", background: 'linear-gradient(to right, #0062E6, #33AEFF)' }}>
      <div className='container py-5'>
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto py-5">
        <div className="card card-signin my-5 py-5">
          <div className="card-body py-5">
            <h5 className="card-title text-center">Đăng nhập</h5>
            
<Formik 
                initialValues = {{taiKhoan:"", matKhau:""}}
                onSubmit = {values =>{
                    console.log(values);
                    dispatch(DangNhapAction(values,handleLoginSuccess, handleLoginFailed))
                }}
            >
                {({handleSubmit})=>(

                    <Form className='text-left'>
                        <FormGroup >
                            <Label>Tài khoản</Label>
                            <Input className='form-control' tag={Field} type='text' name='taiKhoan'/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Mật khẩu</Label>
                            <Input tag={Field} type='password' name='matKhau'/>
                        </FormGroup>
                        <FormGroup className="text-center">
                        <Button className='btn btn-success' type='submit' onClick={handleSubmit}>
                            Đăng nhập
                        </Button>
                        </FormGroup>
                        <div>
                          <Link to="/">Trang chủ</Link>
                        </div>
                    </Form>
                )}
            </Formik> 
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default DangNhap;

