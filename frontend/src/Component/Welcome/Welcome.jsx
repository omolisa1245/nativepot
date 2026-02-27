import React from 'react'
import './Welcome.css'
import chef from '../../assets/chef.png'
import { motion, easeInOut } from "framer-motion"

export const fadeUp = ( delay) => {
    return {

        hidden : {
            opacity: 0.5,
            y: 100
        },
        show : {
            y: 0,
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

const Welcome = () => {
    return (
        <div className='welcome-body1'>
            <div className="welcome-body1-header">
                <motion.div
                    variants={fadeUp( 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    className="welcome-body1-image">
                    <img width='500vw' height='400vw' src={chef} alt="" />
                </motion.div>


                < div
                  
                    className="welcome-body1-content">
                    <h1>Make Your Life Tasty With Us</h1>
                    <p>NativePot is an experience Quality local Food Vendor Founded in 2025 in the heart
                        of Ibeju-Lekki, We have grown into a renowned brand, celebrated for its delicious and
                        consistently high-quality Local Nigerian dishes. Our passion for great food is
                        exceptional.  From our staff members we are adorned in exquisite woven attire embellished with
                        beads to the authentic ambiance of our restaurant, we ensure a truly immersive encounter.
                        Each staff member is identified by their Oriki name, adding a personal and cultural touch
                        to your experience.
                    </p>
                    <div className="welcome-body1-button">
                        <button>Order Now</button>
                        <button>Book Table</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome