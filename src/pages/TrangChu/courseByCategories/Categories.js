import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LayDanhSachKhoaHoc, LayDanhMucKhoaHoc, LayDanhSachKhoaHocBT } from '../../../redux/actions/QuanLyKhoaHocAction';
import {withRouter} from 'react-router-dom'
import Slider from 'react-slick'
import myStyle from '../courseByCategories/categories.module.css'

import AOS from 'aos'
import "aos/dist/aos.css"
const  Categories =(...props) => {
    const dispatch = useDispatch();
    const {danhSachKhoaHoc,currentPage, totalCount,danhMucKhoaHoc} = useSelector(
        state => state.quanLyKhoaHoc
      );

      useEffect(() => {
        dispatch(LayDanhSachKhoaHocBT())
        dispatch(LayDanhMucKhoaHoc())
      }, [currentPage]);
      useEffect(()=>{
        AOS.init({
          duration : 2000
        })
      },[])
      
    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        autoplay:true,
        autoplaySpeed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        centerPadding: 30,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ] 
    }

    return (
        <div className='container mt-5 mb-5 ' data-aos="fade-up">

        <div>
            <h3>Popular Courses</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit qui neque sint eveniet tempore sapiente.</p>
          
        </div>

        <div className='row'>
              
                {
                    danhMucKhoaHoc.map(item=>(
                          
                    <div className={`col-xs-12  col-sm-6 col-md-4 col-lg-4 ${myStyle.categories_outer}`} > <div className={`text-center ${myStyle.categories_inner}`} type='button' onClick={()=> props[0].history.push(`/khoa-hoc-theo-danh-muc/${item.maDanhMuc}`)} >{item.tenDanhMuc}</div></div>
                    
              
                    ))
                }
               




        </div>
        {/* các khóa học nè */}
        <Slider className='mt-5 ' {...settings} >

            {
                danhSachKhoaHoc.map(item => (
                    <div key={item} >
                        <div className="card text-right text-dark bg-light " type='button' onClick = {()=> props[0].history.push(`/chi-tiet/${item.maKhoaHoc}`)} >
                            <img className="card-img-top overflow-hidden" src={item.hinhAnh} alt='hinh-anh-khoa-hoc.' width='100%' height='208px' />
                            <div className="card-body text-left">
                                <h6 className="card-title  text-truncate">{item.tenKhoaHoc}</h6>
                                <p className="card-text text-truncate" >{item.moTa}</p>
                                <div className='d-flex justify-content-between'>
                                    <div className='text-left'>
                                        <div>Rates</div>
                                        <div>
                                            <i className="fa fa-star" style={{color:"#FFB400"}} />
                                            <i className="fa fa-star" style={{color:"#FFB400"}} />
                                            <i className="fa fa-star" style={{color:"#FFB400"}} />
                                            <i className="fa fa-star" style={{color:"#FFB400"}} />
                                            <i className="fa fa-star-half" style={{color:"#FFB400"}} />
                                        </div>


                                    </div>
                                    <div>
                                        <div>2219/6000</div>
                                        <div>$4.99</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }


        </Slider>

    </div>
    )
}

export default withRouter(Categories);
