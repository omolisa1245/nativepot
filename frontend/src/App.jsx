import React, { useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from './Component/Footer/Footer';
import About from './Pages/About/About';
import Menu from './Pages/Menu/Menu';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import LoginForm from './Component/LoginForm/LoginForm';
import Cart from './Pages/cart/Cart';
import { Toaster } from 'sonner';
import CheckOut from './Pages/checkOut/CheckOut';
import Order from './Pages/Order/Order';


const App = () => {

  const [showLogin, setShowLogin ] = useState(false)


  return (

    <>

      {showLogin ? <LoginForm setShowLogin={setShowLogin}/> :<></> }
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
          
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Menu"  element={<Menu/>} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkOut" element={<CheckOut/>} />
            <Route path="/order" element={<Order/>} />

          </Routes>
        </div>
        <Footer />
      </div >
    </>
  )
}

export default App