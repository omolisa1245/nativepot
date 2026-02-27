import { createContext, useState, useEffect, useMemo } from "react";
import product from '../assets/data.js'
import axios from 'axios'



export const StoreContext = createContext();

const delivery_fee = 2500
const currency = "₦"

const StoreContextProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([]);
  const [token, setToken] = useState("")
  const [products, setProducts] = useState(product)




  const addToCart = async (itemId) => {
    const updatedCart = { ...cartItems };

    updatedCart[itemId] = (updatedCart[itemId] || 0) + 1;
    setCartItems(updatedCart)

    console.log(`${itemId}  added to cart`);

    alert("cart added to cart")
    




    if (token) {
      try {
        await axios.post("http://localhost:5000/api/cart/add", { itemId }, { headers: { token } })


      } catch (error) {
        console.log(error);
        alert(error.data.message)


      }

    }


  }


  const getCartCount = () => {
    return Object.values(cartItems).reduce((total, quantity) => total + quantity, 0)
  }


  const getCartAmount = () => {
    return Object.entries(cartItems).reduce((totalAmount, [itemId, quantity]) => {
      const itemInfo = products.find((product) => product._id === itemId)
      return itemInfo ? totalAmount + itemInfo.price * quantity : totalAmount
    }, 0)
  }


  const updateQuantity = async (itemId, quantity) => {
    let cartData = { ...cartItems };
    cartData[itemId] = quantity;
    setCartItems(cartData)


    if (token) {
      try {
        await axios.post("http://localhost:5000/api/cart/update", { itemId, quantity }, { headers: { token } })

      } catch (error) {
        console.log(error);
        alert(error.message)


      }
    }

  }


   const getProductData = async () =>{
      try {
          const response = await axios.get("http://localhost:5000/api/food/list")
           console.log(response.data)
        
          
      } catch (error) {
        console.log(error);
        alert(error.message)
        
        
      }
    }


    
    const getUserCart = async (token) =>{
        try {
          const response  = await axios.post("http://localhost:5000/api/cart/get",{}, {headers: {token}})
          if (response.data.success) {
            setCartItems(response.data.cartData)
            
          }
        } catch (error) {
          console.log(error);
          alert(error.message)
          
          
        }
    }




    useEffect(() => {
      getProductData()
    }, [])


     useEffect(() => {
     if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      getUserCart(localStorage.getItem("token"))

      
     }
    }, [])
    






  const contextValue = {
    products,token,setToken,getUserCart, addToCart, delivery_fee, getCartCount, updateQuantity, getCartAmount, cartItems,setCartItems, currency
  }

  return (

    <StoreContext.Provider value={contextValue} >
      {children}
    </StoreContext.Provider>
  )



}

export default StoreContextProvider;