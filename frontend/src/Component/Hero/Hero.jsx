import React from 'react'
import './Hero.css'
import Slider from "react-slick";
import oha1 from '../../assets/oha1.jpg'
import food10 from '../../assets/food10.jpeg'
import peppersoup from '../../assets/peppersoup.jpeg'
import okro4 from '../../assets/okro4.jpeg'
import uziza1 from '../../assets/uziza1.png'
import zobo3 from '../../assets/zobo3.jpg'


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {


    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        cssEase: "linear"
    };
    return (
        <div className='hero-container'>
            <div className="hero-header">

                <div className="hero-header-content-overlay">
                    <div className="hero-header-content">


                        <div className="header-content-left">
                            <h2>Best Food That Makes You <span>Healthy</span>  And <span>Satisfied</span></h2>
                            <p>Enjoy the very best of dining experience with mouth-watering yet affordable meal
                                made from the best of local dishes, proudly indigenous restaurant that expresses
                                culture through taste. Our focus lies not only in raising awareness but also in enhancing
                                the popularity of Nigerian culture through our culinary delights and captivating ambiance.
                                Join us to embark on a journey of flavors and traditions that celebrate the rich tapestry
                                of traditional food
                            </p>
                            <button>Place your Order</button>
                        </div>

                        <div className="header-content-right">
                            <div className="add-image-main1">
                                <div className="add-image1"></div>
                                <div className="add-image3"></div>
                            </div>

                            <div className="slider-container">
                                <Slider {...settings}>
                                    <div className='food-hero' >
                                        <img src={oha1} alt="" />
                                    </div>
                                    <div className='food-hero' >
                                        <img src={food10} alt="" />
                                    </div>
                                    <div className='food-hero' >
                                        <img src={peppersoup} alt="" />
                                    </div>
                                    <div className='food-hero' >
                                        <img src={okro4} alt="" />
                                    </div>
                                    <div className='food-hero' >
                                        <img src={uziza1} alt="" />
                                    </div>
                                    <div className='food-hero' >
                                        <img src={zobo3} alt="" />
                                    </div>
                                </Slider>
                            </div>

                            <div className="add-image-main2">
                                <div className="add-image2"></div>
                                <div className="add-image4"></div>
                            </div>

                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero