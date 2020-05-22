import React from "react";
import Header from "../Header";
import Footer from "../Footer/Footer";
import SubcribeForm from "../../pages/TrangChu/subcribeForm/SubcribeForm";

const UserLayout = props => {
  return (
    // <>
    //     <Header />
    // </>

    <React.Fragment>
      <Header />
      
      {/* Carousel */}
      {props.children}
      {/* Footer */}
      <SubcribeForm/>
        <Footer/>
      
    </React.Fragment>
  );
};

export default UserLayout;
