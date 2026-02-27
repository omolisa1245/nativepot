import React, { useState, useEffect } from 'react'
import Navbar from './Component/Navbar/Navbar'
import Sidebar from './Component/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import AddFood from './Pages/AddFood/AddFood'
import FoodList from './Pages/FoodList/FoodList'
import Order from './Pages/Order/Order'
import Login from './Component/Login/Login'
import { Toaster } from 'sonner';
import axios from 'axios'




export const backendurl = " http://localhost:5000"

export const App = () => {
  const [token, setToken] = useState( localStorage.getItem("token" || "") )
  



  useEffect(() => {
   localStorage.setItem("token", token)

  }, [token])
     



  
  return (
    <div className='app-container'>
        <Toaster />
      {
        token === "" ? (<Login setToken={setToken} />) : (<div className="main-app"> <Navbar setToken={setToken} />
          <div className="app-content">
            <Sidebar setToken={setToken}  />
            <div className="page-content">
              <Routes>
                <Route path='/AddFood' element={<AddFood token={token} />} />
                <Route path='/FoodList' element={<FoodList token={token} />} />
                <Route path='/Order' element={<Order />} />
              </Routes>
            </div>
          </div>
        </div>
        )


      }
    </div>


  )
}

export default App;
