import React, { Component } from "react";

import carouStyle from "../Carousel/carousel.module.css";
import { Link } from "react-router-dom";
import AOS from 'aos'
import "aos/dist/aos.css"

class Carousel extends Component {
  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }
  render() {
    const carouselcolor = '#12CBD7'
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 550,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplayspeed: 50,
      draggable: false
    };
    return (
      <div className="">
        <div className={carouStyle.carouselBackground}>
          <div className={carouStyle.carouselContent} data-aos="fade-up">
            <h3 className={`text-white ${carouStyle.marginContent}`}>Find Oneline Courses That Suits you</h3>
            <div className="row justify-content-center align-items-center">
              <div className="col-md-6 " >
                <form className="d-lg-flex d-block justify-content-center my-2 py-3" style={{background:"white"}} >
                  <div className="mr-2" style={{borderRight:"1px solid #e6e6e6"}}>
                    <input className={`form-control ${carouStyle.controlExtend}`  } placeholder="keyword search..." ></input>
                  </div>
                  <div className="mr-2" style={{borderRight:"1px solid #e6e6e6"}}>
                    <select  className={`form-control ${carouStyle.controlExtend}` }>
                      <option value="">Category Course</option>
                      <option value="">Laravel</option>
                      <option value="">PHP</option>
                      <option value="">JavaScript</option>
                      <option value="">Python</option>
                    </select>
                  </div>
                  <div className="mr-2">
                    <select  className={`form-control ${carouStyle.controlExtend}` }>
                      <option value="">Difficulty</option>
                      <option value="">Beginner</option>
                      <option value="">Intermediate</option>
                      <option value="">Advance</option>
                    </select>
                  </div>
                  <button type="submit" style={{background:carouselcolor}} className=" btn text-white "><Link className='text-white text-decoration-none' to='/courses'>Search</Link></button>
                </form>
              </div>
            </div>
            <p className='text-white mt-2 '>We have more than 500 courses to improve your skills</p>
            <div >
            <button style={{background:carouselcolor}} className="btn text-white pr-4 pl-4 pt-2 pb-2 ">Register Now</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
