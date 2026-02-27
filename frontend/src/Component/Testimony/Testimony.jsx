import React from 'react'
import './Testimony.css'
import Slider from "react-slick";
import customer1 from '../../assets/customer1.jpg'
import customer2 from '../../assets/customer2.jpg'
import customer6 from '../../assets/customer6.jpg'
import customer4 from '../../assets/customer4.jpg'
import customer5 from '../../assets/customer5.jpg'
import quote from '../../assets/quote.png'
import { motion, easeInOut } from "framer-motion"


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



// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimony = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        cssEase: "linear"
    };
    return (


        <div className='testimony-container'>
            <motion.div
                variants={fadeUp(0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="testimony-topic">
                <div className="testimony-hr">
                    <hr className='arrow-feature1' />
                    <hr className='arrow-feature2' />
                </div>
                <h2>Our Coustomer Review</h2>
                <div className="testimony-hr">
                    <hr className='arrow-feature3' />
                    <hr className='arrow-feature4' />
                </div>
            </motion.div>
            <motion.div
                variants={fadeUp(0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="testimony-header">

                <div className="slider-holder">
                    <Slider {...settings}>

                        <div className='testimony-content'>
                            <div className="testimony-main">
                                <img src={customer1} alt="" />
                                <div className="testimony-test">
                                    <img src={quote} alt="" />
                                    <h3>Amarachi Udehi</h3>
                                    <span>Client</span>
                                    <p>“I tried the Semo with Okro soup and my boyfriend got the banga with starch.
                                        We both finished our whole plates and were so impressed with the quality of the food and
                                        the short amount of time it took to receive it. Our waitress was sweet and helpful.
                                        I will definitely be back!!”
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className='testimony-content'>
                            <div className="testimony-main">
                                <img src={customer2} alt="" />
                                <div className="testimony-test">
                                    <img src={quote} alt="" />
                                    <h3>Samuel Oluwaseun</h3>
                                    <span>Vip-Client</span>
                                    <p>"Without fail we’ve enjoyed every meal we tried. In particular, they have fantastic pepper soup,
                                        but everything is amazing! The menu is vast, so there is plenty for everyone in the family
                                        to choose from. Lastly, they are always kind to us and their customer service is the best
                                        in the area!!!!!"
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='testimony-content'>
                            <div className="testimony-main">
                                <img src={customer6} alt="" />
                                <div className="testimony-test">
                                    <img src={quote} alt="" />
                                    <h3>Emmauel Bassey</h3>
                                    <span>Client</span>
                                    <p>“I had the most incredible dining experience at this restaurant! The food was absolutely
                                        delicious - every dish was perfectly prepared and beautifully presented. Our server
                                        was attentive, knowledgeable, and made excellent recommendations.
                                        The atmosphere was elegant yet comfortable. I can't wait to come back and try
                                        more items from their menu. Definitely a new favorite spot!”
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='testimony-content'>
                            <div className="testimony-main">
                                <img src={customer4} alt="" />
                                <div className="testimony-test">
                                    <img src={quote} alt="" />
                                    <h3>Patience Udoka</h3>
                                    <span>VIP-Client</span>
                                    <p>"My husband and I celebrated our anniversary here and it couldn't have been more perfect.
                                        The staff went above and beyond to make our evening special, even bringing us a
                                        complimentary dessert with a sweet message. The food was exceptional - I had the Eba with
                                        Afang soup which was cooked to perfection, and my husband had Fufu with Uziza soup.
                                        The local drinks pairing suggestions were spot on. Highly recommend for any special occasion!"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>


            </motion.div>

        </div>
    )
}

export default Testimony