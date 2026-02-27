import React from 'react'
import './About.css'
import { MdArrowBackIos } from "react-icons/md";
import { GiBowlOfRice } from "react-icons/gi";
import afang4 from '../../assets/afang4.jpg'
import blacksoup2 from '../../assets/blacksoup2.jpg'
import bimage3 from '../../assets/bimage3.jpg'
import banga2 from '../../assets/banga2.jpeg'
import cheff7 from '../../assets/cheff7.jpg'
import cheff5 from '../../assets/cheff5.jpg'
import staff1 from '../../assets/staff1.webp'
import staff2 from '../../assets/staff2.jpeg'
import staff3 from '../../assets/staff3.jpg'
import cheff4 from '../../assets/cheff4.jpg'
import { useNavigate } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import Slider from "react-slick";
import CountUp from 'react-countup';




// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {


  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };


  const navigate = useNavigate();
  return (
    <div className='about-container'>
      <div className="about-holder">
        <div className="about-holder-overlay">
          <div className="about-holder-content">
            <h2>Taste the difference</h2>
            <h1>The Best Local Food Plug</h1>
            <div className="about-holder-style">
              <span>Since 2004</span>
            </div>
          </div>
        </div>
      </div>


      <div className="about-header">
        <div className="about-header-background">

          <div className="about-navigate">
            <span onClick={() => navigate('/')}>Home</span>
            <MdArrowBackIos />
            <span onClick={() => navigate('/About us')}>About Us</span>

          </div>
          <div className="about-header-text">

            <h4>About our food</h4>
            <h1>Where Quality Meet Excellent Service.</h1>
            <p>Our dishes are crafted with love, using the finest locally sourced ingredients that
              bring you the authentic flavors straight from Nigeria. One bite, and you’ll be hooked.
              Trust us, it’s not just food—it’s an experience Behind each recipe on My Diaspora Kitchen lies a
              vibrant fusion of tradition and innovation, deeply influenced by my roots and the rich diversity
              of cultures I’ve encountered along the way. Many of the dishes you’ll discover here reflect my
              upbringing, blending cherished family recipes passed down from my mother, grandma, and mom in
              law with contemporary twists that speak to my own culinary journey. From Nigerian classics like
              Jollof rice to other dishes inspired by global cuisine, each recipe carries the essence of home,
              comfort, and shared moments around the table.
            </p>
          </div>
        </div>
        <div className="about-header-container">
          <h2>We Offer Tasty & Delicious Food In Healthy Way</h2>
          <div className="about-header-holder">
            <div className="header-image">
              <img src={afang4} alt="" />
              <div className="header-content">
                <GiBowlOfRice className='header-content-image' />
                <h3> Efo Riro</h3>
                <hr className='oghwu-line' />
                <p>A rich vegetable soup often cooked with various proteins and eaten with any swallow of youur choice
                </p>
              </div>
            </div>
            <div className="header-image">
              <img src={blacksoup2} alt="" />
              <div className="header-content">
                <GiBowlOfRice className='header-content-image' />
                <h3> Efo Riro</h3>
                <hr className='oghwu-line' />
                <p>A rich vegetable soup often cooked with various proteins and eaten with any swallow of youur choice
                </p>
              </div>
            </div>
            <div className="header-image">
              <img src={banga2} alt="" />
              <div className="header-content">
                <GiBowlOfRice className='header-content-image' />
                <h3> Efo Riro</h3>
                <hr className='oghwu-line' />
                <p>A rich vegetable soup often cooked with various proteins and eaten with any swallow of youur choice
                </p>
              </div>
            </div>


          </div>

        </div>

        <div className="mission-container">
          <div className="mission-left">
            <div className="mission-image">
              <img src={bimage3} alt="" />
            </div>
          </div>

          <div className="mission-right">
            <h2>Our Mission is To Save You Time</h2>
            <p>Our mission is to provide an enriching experience that celebrates Nigerian culture.
              We achieve this by meticulously presenting our food and creating an atmosphere that immerses
              our guests in the rich tapestry of Yoruba heritage.We strive to be a beacon of Yoruba tradition,
              offering a dining experience that engages our guests in the beauty of culture. we promise an
              exceptional culinary experience, celebrating African flavors with modern techniques.
              Using the finest ingredients, we craft dishes that delight your taste buds and create
              lasting memories.
            </p>
          </div>
        </div>

        <div className="why-us-container">
          <div className="why-us-container-overlay">
            <div className="why-us-content">
              <CountUp className='the' start={0} end={7254} delay={2} duration={3} />
              <hr className='why-line' />
              <span className='white'>Happy Customers</span>
            </div>
            <div className="why-us-content">
               <CountUp className='the' start={0} end={1276} delay={3} duration={3} />
              <hr className='why-line' />
              <span className='white'>Awards Won</span>
            </div>
            <div className="why-us-content">
              <CountUp className='the' start={0} end={386} delay={4} duration={3} />
              <hr className='why-line' />
              <span className='white'>Hours Worked</span>
            </div>
            <div className="why-us-content">
              <CountUp className='the' start={0} end={239} delay={5} duration={3} />
              <hr className='why-line' />
              <span className='white'>Services Done</span>
            </div>
          </div>

        </div>

        <div className="slide-staff-container">
          <div className="slider-staff-holder">
            <div className="staff-topic">
              <h1>Meet Our Professional Chef</h1>
            </div>
            <Slider {...settings}>
              <div className='slide-staff-content'>
                <img src={cheff7} alt="" />
                <div className="slide-staff-content-text">

                  <div className="staff-soc-contain">
                    <FaInstagram className='staff-social' />
                    <FaXTwitter className='staff-social' />
                    <FaFacebook className='staff-social' />
                    <FaLinkedin className='staff-social' />
                    <FaPinterest className='staff-social' />
                  </div>
                  <div className="staff-details">
                    <h3>David Madoka</h3>
                    <span>Chef-Cordinator</span>
                  </div>
                </div>

              </div>
              <div className='slide-staff-content'>
                <img src={cheff4} alt="" />
                <div className="slide-staff-content-text">

                  <div className="staff-soc-contain">
                    <FaInstagram className='staff-social' />
                    <FaXTwitter className='staff-social' />
                    <FaFacebook className='staff-social' />
                    <FaLinkedin className='staff-social' />
                    <FaPinterest className='staff-social' />
                  </div>
                  <div className="staff-details">
                    <h3>Akinwale Mary</h3>
                    <span>Chef-Cordinator</span>
                  </div>
                </div>

              </div>
              <div className='slide-staff-content'>
                <img src={cheff5} alt="" />
                <div className="slide-staff-content-text">

                  <div className="staff-soc-contain">
                    <FaInstagram className='staff-social' />
                    <FaXTwitter className='staff-social' />
                    <FaFacebook className='staff-social' />
                    <FaLinkedin className='staff-social' />
                    <FaPinterest className='staff-social' />
                  </div>
                  <div className="staff-details">
                    <h3>Prince Donand</h3>
                    <span>Chef-Cordinator</span>
                  </div>
                </div>

              </div>
              <div className='slide-staff-content'>
                <img src={staff1} alt="" />
                <div className="slide-staff-content-text">

                  <div className="staff-soc-contain">
                    <FaInstagram className='staff-social' />
                    <FaXTwitter className='staff-social' />
                    <FaFacebook className='staff-social' />
                    <FaLinkedin className='staff-social' />
                    <FaPinterest className='staff-social' />
                  </div>
                  <div className="staff-details">
                    <h3>Patience Utti</h3>
                    <span>Chef</span>
                  </div>
                </div>

              </div>
              <div className='slide-staff-content'>
                <img src={staff2} alt="" />
                <div className="slide-staff-content-text">

                  <div className="staff-soc-contain">
                    <FaInstagram className='staff-social' />
                    <FaXTwitter className='staff-social' />
                    <FaFacebook className='staff-social' />
                    <FaLinkedin className='staff-social' />
                    <FaPinterest className='staff-social' />
                  </div>
                  <div className="staff-details">
                    <h3>Abidemi Iretiola</h3>
                    <span>Chef</span>
                  </div>
                </div>

              </div>
              <div className='slide-staff-content'>
                <img src={staff3} alt="" />
                <div className="slide-staff-content-text">

                  <div className="staff-soc-contain">
                    <FaInstagram className='staff-social' />
                    <FaXTwitter className='staff-social' />
                    <FaFacebook className='staff-social' />
                    <FaLinkedin className='staff-social' />
                    <FaPinterest className='staff-social' />
                  </div>
                  <div className="staff-details">
                    <h3>Adeola John</h3>
                    <span>Chef-Head</span>
                  </div>
                </div>

              </div>
            </Slider>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About