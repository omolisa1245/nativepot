import React from 'react'
import './Popular.css'
import foodList1 from '../data2';
import menu_star from "../../assets/menu_star.png"
import love_icon from "../../assets/love_icon.png"
import executive from "../../assets/executive.webp"

const Popular = () => {
    return (
        <div className='popular-body-container'>

            <div className="popular-body-topic">
                <h2>Explore Our Food Menu</h2>
            </div>
          
            <div className="executive-menu">
                <div className="executive-menu-left">
                   <h4>20% off</h4>
                   <h1>Executive Food You Order</h1>
                   <span>Buy any of our Executive dish and get a discount price</span>
                </div>

                <div className="executive-menu-right">
                   <img src={executive} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Popular