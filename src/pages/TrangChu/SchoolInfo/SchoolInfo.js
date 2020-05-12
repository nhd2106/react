import React, { useEffect } from 'react';
import schoolInfoStyle from '../SchoolInfo/SchoolInfo.module.css'
import AOS from 'aos'
import "aos/dist/aos.css"
const SchoolInfo = () => {
    const backgroudColor = "#F8F9FA"
    useEffect(()=>{
        AOS.init({
            duration : 2000
          })
    },[])
    return (
        <div className="py-5" style={{background:backgroudColor}}>
            
        <div className='container '  data-aos="fade-up" >
            <div className='row mt-5'>
                <div className='col-md-6'>
                    <img src='https://images.unsplash.com/photo-1565034946487-077786996e27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' width='100%'/>
                </div>
                <div className='col-md-6 mt-2'>
                    <div><h3>Education is Life</h3></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quibusdam nisi eos accusantium eligendi velit deleniti nihil ad deserunt rerum incidunt.</p>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='d-flex align-items-center'>
                                <div >
                                <i className={`fa fa-user mr-4 ${schoolInfoStyle.icon}`} aria-hidden="true"></i>
                                </div>
                                <div>
                                    <h3>12,921</h3>
                                    <p>STUDENTS</p>
                                </div>
                            </div>
                            <div className='d-flex align-items-center'>
                                <div >
                                <i className={`fa fa-book mr-4 ${schoolInfoStyle.icon}`} aria-hidden="true"></i>
                                </div>
                                <div>
                                    <h3>3,902</h3>
                                    <p>BOOKS</p>
                                </div>
                            </div>
                         
                        </div>
                        <div className='col-md-6'>
                            <div className='d-flex align-items-center'>
                                <div >
                                <i className={`fa fa-building mr-4 ${schoolInfoStyle.icon}`} aria-hidden="true"></i>
                                </div>
                                <div>
                                    <h3>51</h3>
                                    <p>SCHOOLS</p>
                                </div>
                            </div>
                            <div className='d-flex align-items-center'>
                                <div >
                                <i className={`fa fa-graduation-cap mr-4 ${schoolInfoStyle.icon} `} aria-hidden="true"></i>
                                </div>
                                <div>
                                    <h3>1,921</h3>
                                    <p>GRADUATES</p>
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

export default SchoolInfo;
