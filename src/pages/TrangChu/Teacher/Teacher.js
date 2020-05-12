import React, { useEffect } from 'react';
import AOS from 'aos'
import "aos/dist/aos.css"
const Teacher = () => {
    useEffect(()=>{
        AOS.init({
            duration : 2000
          })
    },[])
    return (
        <div className='container pb-5' data-aos="fade-up">
            <div>
                <h3>Teachers</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit qui neque sint eveniet tempore sapiente.</p>
            </div>
            <div className='row'>
                <div className='col-sm-6 col-lg-3'>
                    <div className='team_img'>
                        <div className="card bg-warning">
                            <img className="card-img-top" src="https://znews-photo.zadn.vn/w660/Uploaded/rohunwa/2018_04_25/TonyStarkironman1123457214852061_1.jpg" alt="hinh-anh." />
                            <div className="card-body">
                                <h4 className="card-title">Tony Stark</h4>
                                <p className="card-text">weapon executive</p>
                            </div>
                        </div>

                    </div>
                   
                </div>
                <div className='col-sm-6 col-lg-3'>
                    <div className='team_img'>
                        <div className="card bg-warning">
                            <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/vi/3/3c/Captainamerica.jpeg" width='255px' height='351px'  alt="hinh-anh." />
                            <div className="card-body">
                                <h4 className="card-title">Captain American</h4>
                                <p className="card-text">command executive</p>
                            </div>
                        </div>

                    </div>
                   
                </div>
                <div className='col-sm-6 col-lg-3'>
                    <div className='team_img'>
                        <div className="card bg-warning">
                            <img className="card-img-top" src="https://static.tuoitre.vn/tto/i/s626/2017/04/13/cre-35028-c-r-1492071745.jpg" height='351px' width='100%' alt="hinh-anh." />
                            <div className="card-body">
                                <h4 className="card-title">Ranarock Thor</h4>
                                <p className="card-text"> Universal Commander</p>
                            </div>
                        </div>

                    </div>
                   
                </div>
                <div className='col-sm-6 col-lg-3'>
                    <div className='team_img'>
                        <div className="card bg-warning">
                            <img className="card-img-top" src="https://i-giaitri.vnecdn.net/2012/04/19/The_Avengers_-_All_Media_Key_Set_(10)-1345829109_480x0.jpg" height='351px' alt="hinh-anh." />
                            <div className="card-body">
                                <h4 className="card-title">Black Window</h4>
                                <p className="card-text">Spy executive</p>
                            </div>
                        </div>

                    </div>
                   
                </div>

            </div>
        </div>
    )
}

export default Teacher;
