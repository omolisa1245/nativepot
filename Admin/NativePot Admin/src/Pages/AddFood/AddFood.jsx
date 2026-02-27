import React, { useState, useEffect } from 'react'
import './AddFood.css'
import upload_img from "../../assets/upload_img.png"
import axios from 'axios'
import { backendurl } from '../../App'
import Login from '../../Component/Login/Login'

const AddFood = ({ token }) => {

  const [image, setImage] = useState(null)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('soup')



  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);
      formData.append("name", name),
        formData.append("description", description),
        formData.append("price", price),
        formData.append("category", category)
      if (image) formData.append('image', image)
      console.log(formData);


      const response = await axios.post("http://localhost:5000/api/food/add", formData, { headers: { token } })

      for (const [key, value] of formData) {
        console.log(`${key}: ${value}`);
      }
      console.log(response);

      if (response.data.success) {
        alert(response.data.message)
        setName('')
        setDescription('')
        setCategory('')
        setPrice('')
        setImage(null)

      } else {
        alert(response.data.message)
      }
    } catch (error) {
      console.log(error);
      alert(error.message)


    }
  }

  return (
    <div className='addfood-container'>
      <form className='form-container' onSubmit={onSubmitHandler}>
        <div>
          <p className='form-label'>Upload Image</p>
          <div className="upload-image-container">
            <label htmlFor="image">
              <img src={!image ? upload_img : URL.createObjectURL(image)} alt="" className='image-preview' />
              <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden />
            </label>
          </div>
        </div>
        <div className="form-group">
          <p className='form-label'>Product Name</p>
          <input onChange={(e) => setName(e.target.value)} value={name} type="text" className='form-input' placeholder='Enter product name' required />
        </div>
        <div className="form-group">
          <p className='form-label'>Product Description</p>
          <textarea onChange={(e) => setDescription(e.target.value)} value={description} type="text" className='form-input' placeholder='Type your product description' required />
        </div>

        <div className="form-group-horizontal">
          <div>
            <p className='form-label'>Product Category</p>
            <select onChange={(e) => setCategory(e.target.value)} value={category} className='from-select'>
              <option value="Soup">Soup</option>
              <option value="Swallow">Swallow</option>
              <option value="Protein">Protein</option>
              <option value="Drinks">Drinks</option>
              <option value="Local Rice">Local Rice</option>
            </select>
          </div>

          <div>
            <p className='form-label'>Product Price</p>
            <input onChange={(e) => setPrice(e.target.value)} value={price} type="number" placeholder='30' className='form-input price-input' />
          </div>
        </div>
        <button className='submit-button' type='submit'>Add Product</button>
      </form>
    </div>
  )
}

export default AddFood