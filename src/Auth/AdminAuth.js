import React from "react";
import { Route, Redirect } from "react-router-dom";

const AdminAuth = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={routerProps => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        
        if (userInfo) {
            console.log(userInfo.maLoaiNguoiDung,'aaaaaaaaaaaaaaaaaaaaaaaa');
            
          if (userInfo.maLoaiNguoiDung === "GV") {
            return <Component {...routerProps} />;
          }
          return <Redirect to="/" />;
        }
        return <Redirect to="/sign-in" />;
      }}
    />
  );
};

export default AdminAuth;
