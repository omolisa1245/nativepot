import axios from 'axios'
import React from 'react'
import './FoodList.css'
import { useState, useEffect } from 'react'
import { backendurl } from '../../App'
import { MdDeleteForever } from "react-icons/md";


const FoodList = ({token}) => {

  
  const [list, setList] = useState([])
  
  const fetchList = async () =>{
    try {
      const response =  await axios.get("http://localhost:5000/api/food/list", {headers:{token}})
          
          
      if (response.data.success) {
        setList(response.data.data)
        
         
       
      }else{
        alert(response.data.message)
      }
    } catch (error) {
      console.log(error);
      alert(response.data.message)
      
      
    }
  }


  const removeFood = async (id) =>{
   try {
     const response = await axios.post("http://localhost:5000/api/food/remove",{id}, {headers:{token}})

     if (response.data.success) {
      alert(response.data.message)
      console.log(response.data.message);

      await fetchList()
     }else{
      alert(response.data.message)
     }

   } catch (error) {
    console.log(error);
    alert(error.message)
    
    
   }
  }



  
  useEffect(() => {
   fetchList();
   
  }, [])
  console.log(list);
  

  return (
    <div className='foodlist-container'>
      <p className='product-title'>Product List</p>
      <div className="product-list-container">
        <div className="product-table-title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className='action-title'>Action</b>
        </div>

        {
          list.map((item, index)=>{
           return (
             <div key={index} className='product-row'>
               <img src={ item.image} alt="" className='product-image'/>
               <p>{item.name}</p>
               <p>{item.category}</p>
               <p>{item.price}</p>
              <MdDeleteForever onClick={()=> removeFood(item._id)} className='product-action'/>
            </div>


           )
          })
        }

      </div>
    </div>
  )
}

export default FoodList