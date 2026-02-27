import React, { useState, useContext } from 'react'
import './foodDisplay.css'
import { useNavigate } from 'react-router-dom';
import { MdArrowBackIos } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import { StoreContext } from '../../context/StoreContext';
import Popular from '../../Component/Popular/Popular.jsx'
import { FaArrowRight } from "react-icons/fa6";
import menu_star from "../../assets/menu_star.png"
import love_icon from "../../assets/love_icon.png"
import { toast } from 'sonner';
import { Toaster } from 'sonner';


const FoodDisplay = ({ name, price, description, image, id, item,itemId,product}) => {

    const navigate = useNavigate();
    const [category, setCategory] = useState("All")
    const { addToCart} = useContext(StoreContext);

    const [searchTerm, setSearchTerm] = useState("") 


    
  const handleClick = () => {
    toast('Food Added');
  };

    
    
   
    

    

    


    return (

            <div className="menu-body-conatiner-right-content">
                <Toaster position='top-right' theme='dark' richColors />

                <div className="menu-body-container-right-content-card-image">

                    <img className='menu-main-image' src={image} alt="" />

                    <div className="menu-body-container-right-content-card-content" >
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <div className="star-holder">
                            <img src={menu_star} alt="" />
                            <img className='love-icon' src={love_icon} alt="" />
                        </div>
                        <span>price : {price}</span>
                        <button onClick={()=>{ addToCart(item._id); handleClick();}} >Add to Cart</button>

                    </div>

                </div >

            </div>

    )
}


export default FoodDisplay;









