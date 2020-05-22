import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import blogStyle from '../Blogs/Blog.module.css'

import AOS from 'aos'
import "aos/dist/aos.css"

const Blogs = () => {
    useEffect(()=>{
        AOS.init({
            duration : 2000
          })
    },[])

    return (
        <div style={{background:'#F8F9FA'}} className='pb-5 pt-5' >
            <div className='container mt-5' data-aos="fade-up">
            <div >
                <h3>Blog</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit qui neque sint eveniet tempore sapiente.</p>
            </div>
            <div className='row'>
                <div className='col-md-12 col-lg-6 my-2'>
                    <div>
                        <div className="card  text-left">
                            <img className="card-img-top" src="https://static.timesofisrael.com/atlantajewishtimes/uploads/2019/09/ED-World-Affairs-Council-foreign-students-9-20-19-640x400.png" alt='hinh-anh.' />
                            <div className="card-body">
                                <h6 className="card-title">Even the all-powerful Pointing has no control about the blind texts</h6>
                                <div className="blog-footers">
                                <div className={`d-inline-block mr-3 ${blogStyle.icon1}`}>
                                    <a href="#"><i className="fa fa-calendar" aria-hidden="true"></i> <span>March 29, 2020</span></a>
                                </div>
                                <div className={`d-inline-block mr-3 ${blogStyle.icon1}`}>
                                    <a  href="#"><i className="fa fa-user" aria-hidden="true"></i> <span>Admin</span></a>
                                </div>
                                <div className={`d-inline-block ${blogStyle.icon1}`}>
                                    <a  href="#"><i className="fa fa-comment" aria-hidden="true"></i> <span>19</span></a>
                                </div>
                                <div>

                                </div>

                            </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='col-md-12 col-lg-6 text-left my-2'>
                    <div className='d-flex'>
                        <div className="mr-3">
                            <figure>
                                <a>
                                    <img width='130px' src='https://colorlib.com/preview/theme/university/images/img_1.jpg'/>
                                </a>
                            </figure>
                        </div>
                        <div>
                            <h6>
                            Even the all-powerful Pointing has no control about the blind texts
                            </h6>
                            <div className="blogs-footers">
                                <div className={`d-inline-block mr-3 ${blogStyle.icon2}`}>
                                    <a href="#"><i className="fa fa-calendar" aria-hidden="true"></i> <span>March 29, 2020</span></a>
                                </div>
                                <div className={`d-inline-block mr-3 ${blogStyle.icon2}`}>
                                    <a  href="#"><i className="fa fa-user" aria-hidden="true"></i> <span>Admin</span></a>
                                </div>
                                <div className={`d-inline-block mr-3 ${blogStyle.icon2}`}>
                                    <a  href="#"><i className="fa fa-comment" aria-hidden="true"></i> <span>19</span></a>
                                </div>
                                <div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='d-flex my-4'>
                        <div className="mr-3">
                            <figure>
                                <a>
                                    <img width='130px' src='https://colorlib.com/preview/theme/university/images/img_2.jpg'></img>
                                </a>
                            </figure>
                        </div>
                        <div>
                            <h6>
                            Even the all-powerful Pointing has no control about the blind texts
                            </h6>
                            <div className="blogs-footers">
                                <div className={`d-inline-block mr-3 ${blogStyle.icon2}`}>
                                    <a href="#"><i className="fa fa-calendar" aria-hidden="true"></i> <span>March 29, 2020</span></a>
                                </div>
                                <div className={`d-inline-block mr-3 ${blogStyle.icon2}`}>
                                    <a href="#"><i className="fa fa-user" aria-hidden="true"></i> <span>Admin</span></a>
                                </div>
                                <div className={`d-inline-block mr-3 ${blogStyle.icon2}`}>
                                    <a href="#"><i className="fa fa-comment" aria-hidden="true"></i> <span>19</span></a>
                                </div>
                                <div>

                                </div>

                            </div>

                        </div>
                    </div>
                    <div className='d-flex my-4'>
                        <div className="mr-3">
                            <figure>
                                <a>
                                    <img width='130px' src='https://colorlib.com/preview/theme/university/images/img_3.jpg'></img>
                                </a>
                            </figure>
                        </div>
                        <div>
                            <h6 >
                            Even the all-powerful Pointing has no control about the blind texts
                            </h6>
                            <div className="blogs-footers">
                                <div className={`d-inline-block mr-3 ${blogStyle.icon2}`}>
                                    <a href="#"><i className="fa fa-calendar" aria-hidden="true"></i> <span>March 29, 2020</span></a>
                                </div>
                                <div className={`d-inline-block mr-3 ${blogStyle.icon2}`}>
                                    <a href="#"><i className="fa fa-user" aria-hidden="true"></i> <span>Admin</span></a>
                                </div>
                                <div className={`d-inline-block mr-3 ${blogStyle.icon2}`}>
                                    <a href="#"><i className="fa fa-comment" aria-hidden="true"></i> <span>19</span></a>
                                </div>
                                <div>

                                </div>

                            </div>

                        </div>
                    </div>
                    <div className='d-flex my-4'>
                        <div className="mr-3">
                            <figure>
                                <a>
                                    <img width='130px' src='https://colorlib.com/preview/theme/university/images/img_1.jpg'></img>
                                </a>
                            </figure>
                        </div>
                        <div>
                            <h6 >
                            Even the all-powerful Pointing has no control about the blind texts
                            </h6>
                            <div className="blogs-footers">
                                <div className={`d-inline-block mr-3 ${blogStyle.icon2}`}>
                                    <a href="#"><i className="fa fa-calendar" aria-hidden="true"></i> <span>March 29, 2020</span></a>
                                </div>
                                <div className={`d-inline-block mr-3 ${blogStyle.icon2}`}>
                                    <a href="#"><i className="fa fa-user" aria-hidden="true"></i> <span>Admin</span></a>
                                </div>
                                <div className={`d-inline-block mr-3 ${blogStyle.icon2}`}>
                                    <a href="#"><i className="fa fa-comment" aria-hidden="true"></i> <span>19</span></a>
                                </div>
                                <div>

                                </div>

                            </div>
                            
                        </div>
                    </div>
                    

                </div>

            </div>
        </div>
        </div>
    )
}

export default Blogs;
