import React from 'react'
import './Blog.css'
import { useNavigate } from 'react-router-dom';
import { MdArrowBackIos } from "react-icons/md";
import award from '../../assets/award.jpg'
import ogbono from '../../assets/ogbono.jpg'
import place1 from '../../assets/place1.jpg'
import blog1 from '../../assets/blog1.jpg'
import blog2 from '../../assets/blog2.jpg'
import blog6 from '../../assets/blog6.jpg'
import blog7 from '../../assets/blog7.jpeg'
import blog3 from '../../assets/blog3.png'
import blog4 from '../../assets/blog4.webp'
import food7 from '../../assets/food7.jpeg'
import bitter from '../../assets/bitter.jpeg'
import uziza2 from '../../assets/uziza2.jpeg'
import bimage2 from '../../assets/bimage2.jpeg'
import bimage3 from '../../assets/bimage3.jpg'
import zobo1 from '../../assets/zobo1.jpeg'
import gbegiri2 from '../../assets/gbegiri2.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";

const Blog = () => {

    const navigate = useNavigate();
    return (
        <div className='blog-container'>
            <div className="blog-header-holder">
                <div className="blog-header-overlay">
                    <div className="blog-header-content">
                        <h1>BLOG PAGE</h1>
                        <h2>Our Current News And Update</h2>
                    </div>

                </div>
                <div className="blog-navigate">
                    <span onClick={() => navigate('/')}>Home</span>
                    <MdArrowBackIos />
                    <span onClick={() => navigate('/Blog')}>Blog</span>

                </div>
            </div>
            <div className="blog-body1-container">
                <div className="blog-body1-left">
                    <img src={award} alt="" />
                    <h2>We Have Received An Award For The Quality Of Our Work</h2>
                    <p>If you want to grow your food business and increase your profit while spending the least
                        amount of money on marketing, you must understand your customers’ behavioural patterns.
                        This includes things they already like, things they react to the most, and things they
                        have no interest in.
                    </p>

                    <button>Read More<FaArrowRightLong /></button>


                </div>

                <div className="blog-body1-right">
                    <div className="blog-body1-main">
                        <h3>Latest Posts</h3>
                        <hr className='latest-post-line' />
                        <div className="blog-body1-right-content">
                            <img src={uziza2} alt="" />
                            <div className="blog-body1-right-content-txt">
                                <h4>RECIPE</h4>
                                <span>made from the distinctive, pungent uziza leaf and often a blend of proteins like goat meat, stockfish, and snails</span>
                            </div>
                        </div>
                    </div>
                    <div className="blog-body1-main">
                        <h3>Latest Posts</h3>
                        <hr className='latest-post-line' />
                        <div className="blog-body1-right-content">
                            <img src={gbegiri2} alt="" />
                            <div className="blog-body1-right-content-txt">
                                <h4>RECIPE</h4>
                                <span>help reduce inflammation and combat free radicals, supporting a strong immune system</span>
                            </div>
                        </div>
                    </div>
                    <div className="blog-body1-main">
                        <h3>Latest Posts</h3>
                        <hr className='latest-post-line' />
                        <div className="blog-body1-right-content">
                            <img src={zobo1} alt="" />
                            <div className="blog-body1-right-content-txt">
                                <h4>RECIPE</h4>
                                <span> Nigerian beverage made from the dried petals of the hibiscus flower (Hibiscus sabdariffa),
                                    known for its deep red color and tangy-sweet.</span>
                            </div>
                        </div>
                    </div>
                    <div className="blog-body1-main">
                        <h3>Latest Posts</h3>
                        <hr className='latest-post-line' />
                        <div className="blog-body1-right-content">
                            <img src={bitter} alt="" />
                            <div className="blog-body1-right-content-txt">
                                <h4>RECIPE</h4>
                                <span>help reduce inflammation and combat free radicals, supporting a strong immune system</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="body2-container">
                <div className="body2-container-left">

                    <div className="body2-container-left-content">
                        <div className="guide">

                        </div>
                        <h3>Search</h3>
                        <div className="body2-input">
                            <hr className='body2-line' />
                            <input type="text" />
                            <FaLongArrowAltRight className='body2-input-arrow' />

                        </div>

                        <div className="guide">

                        </div>

                        <div className="body2-foodtype">
                            <div className="food-type-topic">
                                <h3>Food Categories</h3>
                            </div>
                            <span>Swallow</span>
                            <span>Soup</span>
                            <span>Drinks</span>
                            <span>Meats</span>
                            <span>Fish</span>
                            <span>Chicken</span>
                        </div>

                        <div className="guide">

                        </div>

                        <div className="promo-contain">
                            <div className="food-type-topic">
                                <h3>Best Offers</h3>
                            </div>

                            <img src={food7} alt="" />
                            <button>Order Now</button>
                        </div>
                        <div className="guide">

                        </div>
                    </div>

                </div>

                <div className="body2-container-right">
                    <div className="body2-container-right-content">
                        <img src={place1} alt="" />
                        <h2>How To Use The Heyfood App</h2>
                        <p>Heyfood can be described as a virtual window of the food scene here in Ibadan.
                            From local favourites to fine dining experiences, there is something for every
                            budget and every craving.
                        </p>
                        <button>Read More<FaArrowRightLong /></button>
                    </div>
                    <div className="body2-container-right-content">
                        <img src={bimage2} alt="" />
                        <h2>How to create a healthy and affordable Nigerian food timetable for a week</h2>
                        <p>When it comes to food and cooking, the biggest issue for most is creating a healthy and
                            affordable Nigerian food timetable that is easy to adopt and stress-free.
                        </p>
                        <button>Read More<FaArrowRightLong /></button>
                    </div>
                    <div className="body2-container-right-content">
                        <img src={blog1} alt="" />
                        <h2>Cheap Eats; Affordable Food in NativePot</h2>
                        <p>it’s not every day your account balance aligns with your craving. We’ve all been there
                            (and some of us are well…still there), but just because you don’t have a robust wallet
                            does not mean you can’t eat well.
                        </p>
                        <button>Read More<FaArrowRightLong /></button>
                    </div>
                    <div className="body2-container-right-content">
                        <img src={blog2} alt="" />
                        <h2>Food over flowers or petty gifts.</h2>
                        <p>Let’s be factual, the average Nigerian lady does not want some plant’s reproductive system as
                            gifts; the only green they want are some vegetable soup with there favorites swallow
                        </p>
                        <button>Read More<FaArrowRightLong /></button>
                    </div>
                    <div className="body2-container-right-content">
                        <img src={blog3} alt="" />
                        <h2>How being a NativePot merchant benefits your personnel planning.</h2>
                        <p>As a small business owner think back. Have you ever had to downsize staff because you had more 
                            than you needed? or fire particular personnel because they were not fit for the role?.
                        </p>
                        <button>Read More<FaArrowRightLong /></button>
                    </div>
                    <div className="body2-container-right-content">
                        <img src={blog4} alt="" />
                        <h2>Is your food fueling you or killing your drive?</h2>
                        <p>What if I tell you that not just the Super Eagles but also your food might be contributing 
                            to your tiredness? Different kinds of food and other factors related to your food might be 
                            responsible for making you feel tired all the time.Press enter or click to view image in full size
                        </p>
                        <button>Read More<FaArrowRightLong /></button>
                    </div>
                    <div className="body2-container-right-content">
                        <img src={bimage3} alt="" />
                        <h2>Introducing NativePot!</h2>
                        <p>If you’re reading this, you’ve probably downloaded the HeyFood app, and hopefully ordered 
                            from us sprinkles powder but for real, shey you’ve ordered from us? or have found 
                            us on one of our multiple social media platforms.
                        </p>
                        <button>Read More<FaArrowRightLong /></button>
                    </div>
                    <div className="body2-container-right-content">
                        <img src={blog7} alt="" />
                        <h2>How To Use The Heyfood App</h2>
                        <p>Heyfood can be described as a virtual window of the food scene here in Ibadan.
                            From local favourites to fine dining experiences, there is something for every
                            budget and every craving.
                        </p>
                        <button>Read More<FaArrowRightLong /></button>
                    </div>
                    <div className="body2-container-right-content">
                        <img src={blog6} alt="" />
                        <h2>How To Use The Heyfood App</h2>
                        <p>Heyfood can be described as a virtual window of the food scene here in Ibadan.
                            From local favourites to fine dining experiences, there is something for every
                            budget and every craving.
                        </p>
                        <button>Read More<FaArrowRightLong /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog