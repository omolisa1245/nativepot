import React from 'react'
import './Features.css'
import profile from '../../assets/profile.png'
import clock from '../../assets/clock.png'
import cuttlery from '../../assets/cuttlery.png'
import bimage6 from '../../assets/bimage6.png'
import { FaCartArrowDown } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { GiBarbedArrow } from "react-icons/gi";
import { motion, easeInOut } from "framer-motion"


export const fadeUp = (delay) => {
    return {

        hidden: {
            opacity: 0,
            x: 100
        },
        show: {
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 0.5,
                delay: delay,
                ease: easeInOut
            }
        }
    }
}



const Features = () => {
    return (


        <div className="features-cards-cont">
            <div className='features-cards-container'>
                <div

                    className="features-topic">
                    <div className="feature-hr">
                        <hr className='arrow-feature1' />
                        <hr className='arrow-feature2' />
                    </div>
                    <h2>Service Shows Good Taste</h2>
                    <div className="feature-hr">
                        <hr className='arrow-feature3' />
                        <hr className='arrow-feature4' />
                    </div>
                </div>

                <div className="features-card-holder">
                    <div className="feature-card-content-holder">
                        <div className="features-card-content">
                            <div className="features-card1">
                                <img className='features-card-im' src={profile} alt="" />
                                <h3>Skilled Professionals</h3>
                                <p>We have the best chefs that will make the best deligacy, with good taste you can ever imagine</p>
                            </div>
                            <div className="features-card">
                                <img className='features-card-im' src={clock} alt="" />
                                <h3>24/7 service</h3>
                                <p>NativePot is always open for all its amazing customers, and our chefs are always available to serve you better </p>
                            </div>
                        </div>


                        <div className="features-card-content">
                            <div className="features-card">
                                <img className='features-card-im' src={cuttlery} alt="" />
                                <h3>Quality Food</h3>
                                <p>All our foods are prepare with natural ingredient, clean enviroment and well seasoned food</p>
                            </div>
                            <div className="features-card">
                                <FaCartArrowDown className='features-card-im' />
                                <h3>Order Online</h3>
                                <p>All our customer representative are always available to attend to your needs.
                                    Just login to our App make your order. </p>
                            </div>
                        </div>
                    </div>



                    <div className='features-draw'>
                        <div className="features-card-content-right">
                            <img src={bimage6} alt="" />

                        </div>
                        <div className="features-add-right">
                            <span>Read More</span>
                            <FaLongArrowAltRight className='arrow-features' />

                        </div>
                    </div>
                </div>


            </div >
        </div>
    )
}

export default Features