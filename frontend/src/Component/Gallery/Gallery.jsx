import React from 'react'
import './Gallery.css'
import food7 from '../../assets/food7.jpeg'
import food11 from '../../assets/food11.png'
import food19 from '../../assets/food19.png'
import food1 from '../../assets/food1.webp'
import food2 from '../../assets/food2.jpg'
import food12 from '../../assets/food12.jpg'
import food16 from '../../assets/food16.jpeg'
import owo2 from '../../assets/owo2.jpeg'
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



const Gallery = () => {
    return (
        <div className='gallery-container'>

            <motion.div
                variants={fadeUp(0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="gallery-topic">
                <div className="feature-hr">
                    <hr className='arrow-feature1' />
                    <hr className='arrow-feature2' />
                </div>
                <h2>Gallery</h2>
                <div className="feature-hr">
                    <hr className='arrow-feature3' />
                    <hr className='arrow-feature4' />
                </div>
            </motion.div>
            <div className="gallery-holder">
                <div className="gallery-first">
                    <img className='image-gallery1' src={food11} alt="" />
                    <img className='image-gallery2' src={food2} alt="" />
                </div>

                <div className="gallery-second">
                    <img className='image-gallery3' src={food7} alt="" />
                </div>
                <div className="gallery-third">
                    <img className='image-gallery4' src={food16} alt="" />
                    <img className='image-gallery5' src={food19} alt="" />
                </div>

            </div>
        </div >
    )
}

export default Gallery