import React, { useContext, useState, useEffect } from 'react'
import './cart.css'
import { StoreContext } from '../../context/StoreContext'
import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci"
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { RiDeleteBin2Line } from "react-icons/ri";
import CartTotal from '../../Component/CartTotal/CartTotal';

const Cart = () => {


    const { id, getCartCount, products, currency, cartItems, updateQuantity, increaseQuantity, decreaseQuantity, item, calculateCartTotal, totalQuantity, itemId } = useContext(StoreContext);

    const navigate = useNavigate();
    const [cartData, setCartData] = useState([])



    useEffect(() => {
        if (products.length === 0) return;


        const tempData = Object.entries(cartItems).filter(([, quantity]) => quantity > 0).map(([itemId, quantity]) => ({
            _id: itemId,
            quantity

        }));

        setCartData(tempData);

    }, [cartItems, products])

    return (

        <div className="cart-content-container">
            <div className="cart-topic">
                <h2>Cart Items</h2>
            </div>
            <div >
                {
                    cartData.map((item, index) => {
                        const productData = products.find(product => product._id === item._id)
                        if (!productData) {
                            return null

                        }

                        return (
                            <div className='cart-item' key={index}>
                                <div>
                                    <img src={productData.image} alt="" className='product-cart-image' />

                                    <div className="product-details-cart">
                                        <p className="product-details-name">{productData.name}</p>
                                        <p className="product-price">{currency}{productData.price}</p>
                                    </div>
                                </div>

                                <input type="number" id="" className='quantity-input' min={1} defaultValue={item.quantity}
                                    onChange={(e) => e.target.value === "" || e.target.value === 0 ? null : updateQuantity(item._id, Number(e.target.value))} />
                                <RiDeleteBin2Line className='delete-icon' onClick={() => updateQuantity(item._id, 0)} />
                            </div>
                        )
                    })
                }
            </div>

            <div className="checkout-container">
                <div className="checkout-box">
                    <CartTotal />

                    <div className="checkout-button-container">
                        <button onClick={() => navigate('/Checkout')} className="checkout-button">PROCEED TO CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart