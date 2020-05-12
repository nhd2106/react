import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import TuneIcon from '@material-ui/icons/Tune';
import adminStyle from './adminCss/admin.module.css'
import PersonIcon from '@material-ui/icons/Person';
import ListAltIcon from '@material-ui/icons/ListAlt';
import MenuIcon from '@material-ui/icons/Menu';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

const AdminLayout = props => {
  return (
      
    <div className="">
        <div className ="" >
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark text-white mx-0 ">
            <a className="navbar-brand mx-3" href="#"><TuneIcon/>Admin Panel</a>
            <button className="navbar-toggler d-lg-none" type="button" >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse mx-2">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
       
                </ul>
                <ul className="navbar-nav ">
                    <li className="nav-item">
                    <Link to="/home" className='ml-5 text-decoration-none nav-link ' ><span style={{color:"white"}}><HomeIcon /></span></Link>
                    </li>
                
                    <li className="nav-item">
                    <Link  className='ml-2 nav-link text-decoration-none '  style={{color:"white"}}><span style={{color:"white"}} type="button" ><PowerSettingsNewIcon /></span></Link>
                    </li>
                
                </ul>
              
            </div>
        </nav>
        </div>
      <div >
      <div className="d-flex">
      <div id="sidebar" className='  col-2 col-md-2 col-sm-2 col-lg-2 col-xl-2' style={{ background: "#F5F5F5" }}>
        <div
          className="mx-3 "
         >
         
        <div>
        <div className='d-flex  my-3 '>
         <div className='ml-3 '><div><MenuIcon/> Menu</div> </div>
         </div>
          
        </div>

         
          
        <div >
          
        <Link to="/admin/dashBoard" className={`nav-item text-decoration-none py-3 d-block  ${adminStyle.adminLink}  ` }>
          <span className='pl-4'> <TrendingUpIcon/> Dashboard </span>
          </Link> 

          <Link to="/admin/user-list" className={`nav-item text-decoration-none py-3 d-block ${adminStyle.adminLink}`}>
          <span className='pl-4'> <PersonIcon/> Danh sách người dùng</span>
          </Link>
         
          
          <Link to="/admin/course-list" className={`nav-item text-decoration-none py-3 d-block  ${adminStyle.adminLink}`}>
          <span className='pl-4'><ListAltIcon/> Quản lý khóa học</span>
          </Link>
        
         
          <Link to="/admin/add-user" className={`nav-item text-decoration-none py-3 d-block  ${adminStyle.adminLink}`}>
          <span className='pl-4'><ListAltIcon/> Do something 1</span>
          </Link>
         
          
          <Link to="#" className={`nav-item text-decoration-none py-3 d-block  ${adminStyle.adminLink}`}>
          <span className='pl-4'><ListAltIcon/> Do something 2</span>
          </Link>
        </div>

         
          
        
         
        </div>

       
      </div>
      
      <div style={{background:"#EEEEEE"}} className="pl-4 pb-5 py-5 col-10 col-md-10 col-sm-10 col-lg-10 col-xl-10 " id="content">{props.children}</div>
      </div>
      </div>
    </div>
  );
};

export default AdminLayout;
