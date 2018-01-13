import React from 'react';

import '../assets/css/mui.min.css'

import '../assets/css/swiper3.07.min.css'
import '../assets/js/swiper.min.js'

class Slider extends React.Component{
    componentDidMount(){
        var mySwiper = new Swiper('#slide',{
            autoplay:1000,
            speed: 1000,
            visibilityFullFit : true,
            loop:true,
            pagination : '.pagination',
        });
    }
    render(){
        return(
            <div id="slide">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <a href="#">
                        <img src="/src/assets/uploads/banner1.jpg" style={{width:'350px',height:'200px'}}/>
                    </a>
                </div>
                <div className="swiper-slide">
                    <a href="#">
                        <img src="/src/assets/images/index-ban03.png" style={{width:'350px',height:'200px'}}/>
                    </a>
                </div>
                <div className="swiper-slide">
                    <a href="#">
                        <img src="/src/assets/images/index-ban02.png" style={{width:'350px',height:'200px'}}/>
                    </a>
                </div>
            </div>
            {/* <div className="pagination"></div> */}
        </div>
           
        )
    }
}
    


export default Slider;

