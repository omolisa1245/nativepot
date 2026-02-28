import React, { useContext, useState, useEffect } from 'react'
import './Checkout.css'
import Stripe from '../../assets/stripe.png'
import razorpay from '../../assets/razorpay.png'
import CartTotal from '../../Component/CartTotal/CartTotal'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Checkout = () => {


    const { currency, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(StoreContext)


    const navigate = useNavigate()
    const [method, setMethod] = useState("COD")
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        address: "",
        country: "",
        phone: ""
    })

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormData(data => ({ ...data, [name]: value }));

    };


    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {


            let orderItems = [];

            products.map((item) => {
                if (cartItems[item._id] > 0) {
                    let itemInfo = item;
                    itemInfo["quanity"] = cartItems[item._id];
                    orderItems.push(itemInfo)
                }
            })


            let orderData = {
                address: formData,
                items: orderItems,
                amount: getCartAmount() + delivery_fee,
            };

            let response = await axios.post("https://nativepot.vercel.app/api/order/place",

                orderData, { headers: { token } }
            );


            if (response.data.success) {
                setCartItems({})
                navigate('/order')

            }
            else {
                alert(response.data.message)
            }


        } catch (error) {
            console.log(error);
            alert(error.message)


        }
    }

    return (
        <form onSubmit={onSubmitHandler} className="form-container">
            <div className='form-holder'>
                <div className="form-left">

                    <div className="payment-options">

                        <div onClick={() => setMethod("cod")} className={`payment-option ${method === "cod" ? "selected" : ""}`}>
                            <span className='payment-text'>CASH ON DELIVERY</span>
                        </div>

                    </div>

                </div>

                <div className="form-title">
                    <h2>Shipping Address</h2>
                </div>
                <div className="form-row">
                    <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} type="text" className='form-input1' placeholder='Firstname' />
                    <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} type="text" className='form-input1' placeholder='Lastname' />
                </div>
                <input required onChange={onChangeHandler} name='email' value={formData.email} type="text" className='form-input2' placeholder='Email Address' />
                <input required onChange={onChangeHandler} name='phone' value={formData.phone} type="text" className='form-input2' placeholder='Phone Number' />
                <input required onChange={onChangeHandler} name='address' value={formData.address} type="text" className='form-input2' placeholder='Address' />
                <div className="form-row">
                    <input required onChange={onChangeHandler} name='city' value={formData.city} type="text" className='form-input1' placeholder='City' />
                    <input required onChange={onChangeHandler} name='state' value={formData.state} type="text" className='form-input1' placeholder='State' />
                </div>
                <div className="form-row">
                    <input required onChange={onChangeHandler} name='zipcode' value={formData.zipcode} type="text" className='form-input1' placeholder='Zipcode' />
                    <input required onChange={onChangeHandler} name='country' value={formData.country} type="text" className='form-input1' placeholder='Country' />
                </div>


            </div>
            <div className="form-right">
                <CartTotal />
                <button type='submit' className='form-submit'>Place Order</button>

            </div>

        </form>
    )
}

export default Checkout