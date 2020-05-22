import React from 'react';
import { Link } from 'react-router-dom';
import FooterStyle from '../Footer/Footer.module.css'
const Footer = () => {
    return (
        <div className='container pb-5'>
            <div className='row mt-5 pt-5 text-left'>
                <div className='col-md-3    '>
                    <h4>Cybersoft Academy</h4>
                    <p>Perferendis eum illum voluptatibus dolore tempora consequatur minus asperiores temporibus.</p>
                </div>
                {/* ------ */}
                <div  className='col-md-3'>
                    <h4>Quick Link</h4>
                    <div className='row' style={{color:'#A9E7FF'}}>
                        <div className='col-md-6'>
                            <ul className={`nav navbar-nav ${FooterStyle.linkColor}`} >
                                <li >
                                    <a href='/trang-chu' >Home</a>
                                </li>
                                <li>
                                    <a href='#'>About Us</a>
                                </li>
                                <li>
                                    <a href="/courses">Courses</a>
                                </li>
                                <li>
                                    <a href='#'>Pages</a>
                                </li>
                            </ul>
                        </div>
                        <div className='col-md-6'>
                            <ul className={`nav navbar-nav ${FooterStyle.linkColor}`} >
                                <li>
                                    <a href='#'>News</a>
                                </li>
                                <li>
                                    <a href='#'>Support</a>
                                </li>
                                <li>
                                    <a href='#'>Contact</a>
                                </li>
                                <li>
                                    <a href='#'>Privacy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* -------- */}
                <div className='col-md-3'>
                    <h4>Blog</h4>
                    <ul className='nav navbar-nav mb-3'>
                        <li>
                            <div className={FooterStyle}>
                                <a  href="#">Consectetur Adipisicing Elit</a>
                            </div>
                            <div className="blogs-footers">
                                <div className={`d-inline-block mr-3 ${FooterStyle.icon2}`}>
                                    <a href="#"><i className="fa fa-calendar" aria-hidden="true"></i> <span>March 29, 2020</span></a>
                                </div>
                                <div className={`d-inline-block mr-3 ${FooterStyle.icon2}`}>
                                    <a  href="#"><i className="fa fa-user" aria-hidden="true"></i> <span>Admin</span></a>
                                </div>
                                <div className={`d-inline-block mr-3 ${FooterStyle.icon2}`}>
                                    <a  href="#"><i className="fa fa-comment" aria-hidden="true"></i> <span>19</span></a>
                                </div>
                                <div>

                                </div>

                            </div>
                        </li>

                    </ul>
                    <ul className='nav navbar-nav mb-3'>
                        <li>
                            <div>
                                <a href="#">Perferendis eum illum</a>
                            </div>
                            <div className="blogs-footers">
                                <div className={`d-inline-block mr-3 ${FooterStyle.icon2}`}>
                                    <a href="#"><i className="fa fa-calendar" aria-hidden="true"></i> <span>March 29, 2020</span></a>
                                </div>
                                <div className={`d-inline-block mr-3 ${FooterStyle.icon2}`}>
                                    <a  href="#"><i className="fa fa-user" aria-hidden="true"></i> <span>Admin</span></a>
                                </div>
                                <div className={`d-inline-block mr-3 ${FooterStyle.icon2}`}>
                                    <a  href="#"><i className="fa fa-comment" aria-hidden="true"></i> <span>19</span></a>
                                </div>
                                <div>

                                </div>

                            </div>
                        </li>

                    </ul>
                    <ul className='nav navbar-nav mb-3'>
                        <li>
                            <div>
                                <a href="#">Dolore Tempora Consequatur</a>
                            </div>
                            <div className="blogs-footers">
                                <div className={`d-inline-block mr-3 ${FooterStyle.icon2}`}>
                                    <a href="#"><i className="fa fa-calendar" aria-hidden="true"></i> <span>March 29, 2020</span></a>
                                </div>
                                <div className={`d-inline-block mr-3 ${FooterStyle.icon2}`}>
                                    <a  href="#"><i className="fa fa-user" aria-hidden="true"></i> <span>Admin</span></a>
                                </div>
                                <div className={`d-inline-block mr-3 ${FooterStyle.icon2}`}>
                                    <a  href="#"><i className="fa fa-comment" aria-hidden="true"></i> <span>19</span></a>
                                </div>
                                <div>

                                </div>

                            </div>
                        </li>

                    </ul>
                    
                </div>
{/* contact info */}
            <div className='col-md-3'>
                <h4>Contact Information</h4>
                <ul className={FooterStyle.ulStyle}>
                    
                <li className={FooterStyle.liStyle}>
                <i className={`fa fa-map-marker ${FooterStyle.icon}`} />
                <span  className={FooterStyle.text} > 
                203 Fake St. Mountain View, San Francisco, California, USA
                </span>
                </li>

                <li className={FooterStyle.liStyle}>
                <i className={`fa fa-phone ${FooterStyle.icon}`} />
                <span  className={FooterStyle.text} > 
                +2 392 3929 210
                </span>
                </li>

                <li className={FooterStyle.liStyle}>
                <i className={`fa fa-envelope ${FooterStyle.icon}`} />
                <span  className={FooterStyle.text} > 
                    info@yourdomain.com
                </span>
                </li>

                <li className={FooterStyle.liStyle}>
                <i className={`fa fa-clock-o ${FooterStyle.icon}`} />
                <span  className={FooterStyle.text}  > 
                Monday — Friday 8:00am - 5:00pm
                </span>
                </li>
                
                </ul>
               
            </div>


            </div>

            <div className='d-flex justify-content-between pt-5'>
                <p>Copyright ©2020 All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by Duoc Ngo</p>
                <p>facebook</p>
            </div>
        </div>
    )
}

export default Footer;
