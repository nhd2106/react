import React, { useEffect } from 'react';
import stylee from '../Welcome/Welcome.module.css';
import AOS from 'aos'
import "aos/dist/aos.css"
const Welcome=() => {
    const welcomecolor = '#12CBD7'
    const backgroudColor = "#F8F9FA"

    useEffect(()=>{
        AOS.init({
            duration : 2000
          })
    },[])
    return (
        <div style={{background:backgroudColor}} >
            <div className='container pt-5'  data-aos="fade-up">
            <div className='row'>
                <div className='col-md-6 text-left'>
                    <h1 style={{color:welcomecolor}}>Welcome to University</h1>
                    <p className='mt-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A quibusdam nisi eos accusantium eligendi velit deleniti nihil ad deserunt rerum incidunt nulla nemo eius molestiae architecto beatae asperiores doloribus animi.
                    </p>
                    <button style={{background:welcomecolor}} className='btn text-white mt-4'>Read more</button>
                </div>
                <div className='col-md-6'>
                
                <iframe src="https://player.vimeo.com/video/45830194?color=ffffff&title=0&byline=0&portrait=0&badge=0" width="100%" height="320" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>

                
                </div>
                
            </div>
            <div className='row text-left mt-5'>
                    <div className='col-md-3'>
                    <div className={stylee.icon}><i className="fa fa-book"></i></div>
                    <h5>Knowledge is power</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit mess.</p>
                    <p style={{color:welcomecolor}} type='button'>Read more... <span><i className="fa fa-arrow-right" aria-hidden="true"></i></span></p>
                    </div>
                    <div className='col-md-3'>
                    <div   className={stylee.icon}><i className="fa fa-graduation-cap"></i></div>
                    
                    <h5>Senior High School</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit mess.</p>
                    <p style={{color:welcomecolor}} type='button'>Read more... <span><i className="fa fa-arrow-right" aria-hidden="true"></i></span></p>
                    </div>
                    <div className='col-md-3'>
                    <div className={stylee.icon}><i className="fa fa-book"></i></div>
                    <h5>College of Arts & Sciences</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit mess.</p>
                    <p style={{color:welcomecolor}} type='button'>Read more... <span><i className="fa fa-arrow-right" aria-hidden="true"></i></span></p>
                    </div>
                    <div className='col-md-3'>
                    <div className={stylee.icon}> <i className="fa fa-file "></i></div>
                    <h5>Unmatched Proffessor</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit mess.</p>
                    <p style={{color:welcomecolor}} type='button'>Read more... <span><i className="fa fa-arrow-right" aria-hidden="true"></i></span></p>
                    </div>
                </div>
        </div>
        </div>
    )
}

export default Welcome;
