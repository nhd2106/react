import React, {  useEffect } from 'react';
import { useDispatch,  useSelector } from 'react-redux';
// import { layDanhSachKhoaHoc } from '../../redux/actions/QuanLyKhoaHocAction';
import { LayDanhSachKhoaHoc, LayDanhMucKhoaHoc } from '../../../redux/actions/QuanLyKhoaHocAction';
import {withRouter} from 'react-router-dom'
import Slider from 'react-slick'
import AOS from 'aos'
import "aos/dist/aos.css"

const PopularCourses = (...props) => {

    const dispatch = useDispatch()
    // const danhSachKhoaHoc = useSelector(state => state.quanLyKhoaHoc.danhSachKhoaHoc)
    
    const {currentPage, danhSachKhoaHoc, danhMucKhoaHoc} = useSelector(state => state.quanLyKhoaHoc)

   
    // const layDanhSachKhoaHoc = danhSachKhoaHoc => {
    //     dispatch(LayDanhSachKhoaHoc(danhSachKhoaHoc))
    // };
    
    
    // useEffect(() => {
    //     layDanhSachKhoaHoc()
    //     console.log(danhSachKhoaHoc);

    // }, [])
    useEffect(() => {
        dispatch(LayDanhSachKhoaHoc(currentPage,20))
        dispatch(LayDanhMucKhoaHoc())
        console.log(danhMucKhoaHoc);
        
        
        
      }, [currentPage]);
      useEffect(()=>{
        AOS.init({
            duration : 2000
          })
    },[])


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        centerPadding: 30,
        
    }

    return (
        <div className='container mt-5 mb-5' data-aos="fade-up">

            <div>
                <h3>Popular Courses</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit qui neque sint eveniet tempore sapiente.</p>
              
            </div>

            <div>
                    <div className='row'>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-4'> <div className='py-2 my-3' type='button' style={{boxShadow:'0 0 1px 1px rgba(20,23,28,.1)'}}>Danh mục</div></div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-4'> <div className='py-2 my-3' type='button' style={{boxShadow:'0 0 1px 1px rgba(20,23,28,.1)'}}>Danh mục</div></div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-4'> <div className='py-2 my-3' type='button' style={{boxShadow:'0 0 1px 1px rgba(20,23,28,.1)'}}>Danh mục</div></div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-4'> <div className='py-2 my-3' type='button' style={{boxShadow:'0 0 1px 1px rgba(20,23,28,.1)'}}>Danh mục</div></div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-4'> <div className='py-2 my-3' type='button' style={{boxShadow:'0 0 1px 1px rgba(20,23,28,.1)'}}>Danh mục</div></div>
                        <div className='col-xs-12 col-sm-6 col-md-4 col-lg-4'> <div className='py-2 my-3' type='button' style={{boxShadow:'0 0 1px 1px rgba(20,23,28,.1)'}}>Danh mục</div></div>
                        
                        
                    </div>
                   




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
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star-half" />
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
// const mapDispatchToProps = dispatch => ({
//     layDanhSachKhoaHoc: danhSachKhoaHoc => dispatch(LayDanhSachKhoaHoc(danhSachKhoaHoc))
// })
export default withRouter(PopularCourses)
