import React, { useContext } from 'react'
import './Categories.css'
import eba3 from '../../assets/eba3.webp'
import oha1 from '../../assets/oha1.jpg'
import zobo4 from '../../assets/zobo4.jpg'
import food13 from '../../assets/food13.jpg'
import pepperSoup3 from '../../assets/pepperSoup3.jpeg'
import fish4 from '../../assets/fish4.webp'
import { motion, easeInOut } from "framer-motion"


export const fadeUp = ( delay) => {
    return {

        hidden : {
            opacity: 0,
            x: 100
        },
        show : {
            x: 0,
            opacity : 1,
            transition :{
                type : "tween",
                duration : 0.5,
                delay : delay,
                ease : easeInOut
            }
        }
    }
}


const Categories = () => {



    return (
        <div className='catgories-header'>
            <motion.div
                variants={fadeUp( 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}

                className="categories-topic-up">
                <div className="categories-topic">
                    <div className="feature-hr">
                        <hr className='arrow-feature1' />
                        <hr className='arrow-feature2' />
                    </div>
                    <h2>Explore The Categories Of Our Delicacy</h2>
                    <div className="feature-hr">
                        <hr className='arrow-feature3' />
                        <hr className='arrow-feature4' />
                    </div>
                </div>
                <p>Every meal cooked here in NativePot is been made from the core of our heart.
                    We know your feeling and we want to help you derive that taste you have been longing for.</p>
            </motion.div>



            <div className="categories-container">
                <div className="categories-holder">
                    <img src={eba3} alt="" />
                    <div className="catgories-holder-content">
                        <h3>Swallow</h3>
                        <span>Check out our home made swallow, well prepared and made of natural ingredient</span>
                        <button >Order Now</button>
                    </div>
                </div>
                <div className="categories-holder">
                    <img src={oha1} alt="" />
                    <div className="catgories-holder-content">
                        <h3>Afang Soup</h3>
                        <span>Check out our rich and delicious home made soup, well prepared and made of natural ingredient</span>
                        <button>Order Now</button>
                    </div>
                </div>
                <div className="categories-holder">
                    <img src={fish4} alt="" />
                    <div className="catgories-holder-content">
                        <h3>Protein</h3>
                        <span>Check out our amazing tasty protein, well prepared and seasoned with natural ingredient</span>
                        <button>Order Now</button>
                    </div>
                </div>
                <div className="categories-holder">
                    <img src={zobo4} alt="" />
                    <div className="catgories-holder-content">
                        <h3>Drinks</h3>
                        <span>Check out our Exceptional home made drinks, made of natural ingredient</span>
                        <button>Order Now</button>
                    </div>
                </div>
                <div className="categories-holder">
                    <img src={food13} alt="" />
                    <div className="catgories-holder-content">
                        <h3>Local Rice</h3>
                        <span>Check out our home made Local Rice, well prepared and made of natural ingredient</span>
                        <button>Order Now</button>
                    </div>
                </div>
                <div className="categories-holder">
                    <img src={pepperSoup3} alt="" />
                    <div className="catgories-holder-content">
                        <h3>Pepper Soup</h3>
                        <span>Check out our home made Pepper Soup, well prepared and made of natural ingredient</span>
                        <button>Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories