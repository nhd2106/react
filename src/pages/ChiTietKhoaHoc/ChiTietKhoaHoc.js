import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { layChiTietKhoaHoc } from "../../redux/actions/QuanLyKhoaHocAction";
import { withRouter } from "react-router-dom";
import {
  themVaoGioHangAction,
  goiDanhSachGioHang
} from "../../redux/actions/GioHangAction";
import ctkhStyle from "../ChiTietKhoaHoc/ChiTietKhoaHoc.module.css";



import { yellow } from "@material-ui/core/colors";
const ChiTietKhoaHoc = (...props) => {
  const dispatch = useDispatch();
  const chiTietKhoaHoc = useSelector(
    state => state.quanLyKhoaHoc.chiTietKhoaHoc
  );
  const danhSachGioHang = useSelector(
    state => state.gioHangReducer.danhSachGioHang
  );
  const themVaoGioHang = chiTietKhoaHoc => {
    dispatch(themVaoGioHangAction(chiTietKhoaHoc));
  };
  useEffect(() => {
    dispatch(goiDanhSachGioHang());
  }, []);
  useEffect(() => {
    const maKhoaHoc = props[0].match.params;
    dispatch(layChiTietKhoaHoc(maKhoaHoc));
  }, []);
//  material-ui

  return (
    <div className="container my-5">
      <div className="row container">
        <div className="col-md-8 text-left">
          <div>page direction</div>
          <h3>{chiTietKhoaHoc.tenKhoaHoc}</h3>
          <p>{chiTietKhoaHoc.moTa}</p>
          <div className="mb-2">
            
          <div className="d-inline-block mr-3">
              <i class="fa fa-star" style={{color:"#FFB400"}}  aria-hidden="true"></i>
              <i class="fa fa-star" style={{color:"#FFB400"}}  aria-hidden="true"></i>
              <i class="fa fa-star" style={{color:"#FFB400"}}  aria-hidden="true"></i>
              <i class="fa fa-star" style={{color:"#FFB400"}}  aria-hidden="true"></i>
              <i class="fa fa-star-half" style={{color:"#FFB400"}}  aria-hidden="true"></i>
           
          </div>
           <span>4.5 (14,043 ratings)77,469 students enrolled</span>
              
           
           
            
          </div>
          <button className="btn mr-2">
            Share <i class="fa fa-share ml-2"></i>
          </button>
          <button className="btn">Gift this course</button>
          <div className="my-3">
            <h4 className="my-3">What you'll learn</h4>
            <p>
              <i class="fa fa-check mr-3"></i>
              <span>Use {chiTietKhoaHoc.tenKhoaHoc}</span>
            </p>
            <p>
              <i class="fa fa-check mr-3"></i>
              <span>Use SQL to perform data analysis</span>
            </p>
            <p>
              <i class="fa fa-check mr-3"></i>
              <span>
                Be comfortable putting SQL and PostgreSQL on their resume
              </span>
            </p>
          </div>

          <div className="my-3">
            <h4 className="my-3">What you'll learn</h4>
            <p>
              <i class="fa fa-play mr-3"></i>
              <span>8.5 hours on-demand video</span>
            </p>
            <p>
              <i class="fa fa-file mr-3"></i>
              <span>25 articles</span>
            </p>
            <p>
              <i class="fa fa-download mr-3"></i>
              <span>16 downloadable resources</span>
            </p>
            <p>
              <i class="fa fa-hourglass mr-3"></i>
              <span>16 downloadable resources</span>
            </p>

            <p>
              <i class="fa fa-certificate mr-3"></i>
              <span>16 downloadable resources</span>
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center">
            <img className="card-img-top" src={chiTietKhoaHoc.hinhAnh} alt />
            <div className="card-body">
              <div>
                <h5 className="card-title text-right" style={{ width: "90%" }}>
                  199,99 $
                </h5>
              </div>

              <div>
                <button
                  style={{ width: "90%", height: "40px" }}
                  className="btn btn-danger mb-1"
                  onClick={() => themVaoGioHang(chiTietKhoaHoc)}
                >
                  Add to cart
                </button>
              </div>
              <div>
                <button
                  style={{ width: "90%", height: "40px" }}
                  className="btn mb-1"
                >
                  {" "}
                  Buy now
                </button>
              </div>
              <div className="display-5">30-Day Money-Back Guarantee</div>
              <div className="text-left">
                <p>This course includes</p>
                <ul className={`nav navbar-nav ${ctkhStyle.ulStyle}`}>
                  <li className={ctkhStyle.liStyle}>
                    {" "}
                    <i class={`fa fa-play ${ctkhStyle.icon}`}></i>
                    <span className={ctkhStyle.text}>
                      15.5 hours on-demand video
                    </span>
                  </li>
                  <li className={ctkhStyle.liStyle}>
                    {" "}
                    <i class={`fa fa-file  ${ctkhStyle.icon}`}></i>
                    <span className={ctkhStyle.text}>149 articles</span>
                  </li>
                  <li className={ctkhStyle.liStyle}>
                    {" "}
                    <i class={`fa fa-download ${ctkhStyle.icon}`}></i>
                    <span className={ctkhStyle.text}>
                      136 downloadable resources
                    </span>
                  </li>
                  <li className={ctkhStyle.liStyle}>
                    {" "}
                    <i class={`fa fa-certificate  ${ctkhStyle.icon}`}></i>
                    <span className={ctkhStyle.text}>Full lifetime access</span>
                  </li>
                  <li className={ctkhStyle.liStyle}>
                    {" "}
                    <i class={`fa fa-tablet ${ctkhStyle.icon}`}></i>
                    <span className={ctkhStyle.text}>
                      Access on mobile and TV
                    </span>
                  </li>
                  <li className={ctkhStyle.liStyle}>
                    {" "}
                    <i class={`fa fa-check-circle ${ctkhStyle.icon}`}></i>
                    <span className={ctkhStyle.text}>
                      Certificate of Completion
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <button className="btn">Add to wishlist</button>
              </div>
              <div>
                <button className="btn">Apply coupon</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChiTietKhoaHoc;
