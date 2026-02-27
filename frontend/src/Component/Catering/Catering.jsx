import React from 'react'
import './Catering.css'
import chick3 from '../../assets/chick3.png'
import pot from '../../assets/pot.png'
import table from '../../assets/table.png'
import table2 from '../../assets/table2.jpg'
import image3 from '../../assets/image3.jpg'
import { motion, easeInOut } from "framer-motion"


export const fadeLeft = (delay) => {
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
export const fadeUp = (delay) => {
  return {

    hidden: {
      opacity: 0,
      y: 100
    },
    show: {
      y: 0,
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



const Catering = () => {
  return (
    <div className='catering-container'>
      <motion.div
        variants={fadeLeft(0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="catering-topic">
        <div className="catering-hr">
          <hr className='arrow-feature1' />
          <hr className='arrow-feature2' />
        </div>
        <h2>Our Extentions</h2>
        <div className="catering-hr">
          <hr className='arrow-feature3' />
          <hr className='arrow-feature4' />
        </div>
      </motion.div>



      <div className="catering-holder">
        <motion.div
          variants={fadeUp(0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="catering-left">
          <div className="catering-left-main">
            <img src={chick3} alt="" />
            <div className="catering-left-content">
              <h3>Corperate Meal</h3>
              <p>If you want to have our local maeal as lunch, we can also deliver to your office. we have
                packages that will make the food well presentable. Contact us today and have an amazing
                experience with us
              </p>
            </div>
          </div>
          <div className="catering-left-main">
            <img src={pot} alt="" />
            <div className="catering-left-content">
              <h3>Event Catering</h3>
              <p>If you want to have our local maeal in your, we can also deliver to your event. we have
                packages that will make the food well presentable. Contact us today and have an amazing
                experience with us
              </p>
            </div>
          </div>
          <div className="catering-left-main">
            <img src={table} alt="" />
            <div className="catering-left-content">
              <h3>Table Reservation</h3>
              <p>If you want to have our local maeal in our cafe, with executive sitting area and executive dishes. we have
                packages that will make the food well presentable. Contact us today and have an amazing
                experience with us
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp(0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}

          className="catering-right">
          <div className="catering-right-content">
            <h3>Executive Dish</h3>
            <img src={table2} alt="" />
          </div>
          <div className="catering-right-content">
            <h3>Executive Tables</h3>
            <img src={image3} alt="" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Catering