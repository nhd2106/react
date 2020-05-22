import React from 'react';
import Carousel from './Carousel/Carousel';
import Welcome from './Welcome/Welcome';
import SchoolInfo from './SchoolInfo/SchoolInfo';
import Teacher from './Teacher/Teacher';
import Blogs from './Blogs/Blogs';
import Categories from './courseByCategories/Categories';




const TrangChu =()=> {
    return (
        <div className='text-center'> 
            <Carousel/>
            <Welcome/>
            <SchoolInfo/>
            <Categories/>
            {/* <PopularCourses/> */}
            <Teacher/>
            <Blogs/>
            


            
        </div>
    )
}

export default TrangChu;
