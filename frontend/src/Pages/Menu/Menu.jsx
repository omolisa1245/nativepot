
import React, { useState, useEffect } from 'react'
import './Menu.css'
import { useNavigate } from 'react-router-dom';
import { MdArrowBackIos } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";

import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodDisplay from '../../Component/FoodDisplay/FoodDisplay'
import Popular from '../../Component/Popular/Popular';
import menu_head1 from "../../assets/menu_head1.png"
import menu_head2 from "../../assets/menu_head2.png"
import menu_head3 from "../../assets/menu_head3.png"
import menu_head4 from "../../assets/menu_head4.png"
import menu from "../../assets/menu.png"
import menu_star from "../../assets/menu_star.png"
import love_icon from "../../assets/love_icon.png"









const Menu = () => {
  const { products,addToCart, data } = useContext(StoreContext);
  const [category, setCategory] = useState("All")


  const [item, setItems] = useState(products);
  const [searchTerm, setSearchTerm] = useState("")
  const [filterItems, setFilterItems] = useState([])

  const handleFilterClick = (category) => {
    if (category === 'all') {
      setFilterItems(filterItems)

    } else {
      const newFilteredList = products.filter(item => item.category === category);
      setFilterItems(newFilteredList);


    }

  };

  const homeProduct =  products.slice(7, 13)



  return (
    <>

      <div className='menu-container'>


        <div className="menu-header-holder">
          <div className="menu-header-overlay">
            <div className="menu-header-content">
              <h1>MENU PAGE</h1>
              <h2>Exlpore Our Amazing Dish For An unforgetable Experience</h2>
            </div>

          </div>
          <div className="menu-navigate">
            <span onClick={() => navigate('/')}>Home</span>
            <MdArrowBackIos />
            <span onClick={() => navigate('/Menu')}>Menu</span>

          </div>
        </div>

        <div className="popular">
          <Popular />
        </div>


        <div className="menu-body-container">
          <div className="menu-body-container-left">
            <h2>Search</h2>
            <div className="menu-input">
              <hr className='menu-input-line' />
              <input onChange={(event) => setSearchTerm(event.target.value)} type="text" placeholder='Search for food here...
          ' />
              <FaLongArrowAltRight className='menu-input-arrow' />
            </div>


            <div className="menu-discount">
              <h3>Buy Your Favorite Meal and</h3>
              <h1>Get 20% Off </h1>
              <span>The meal you Order from now till Next Weekend</span>
              <button>Order Now</button>
            </div>


            <div className="menu-discount1">
              <h3>Order for food Above ₦20000</h3>
              <h1>Get 40% Off </h1>
              <span>Delivery fee on every first sunday of the month</span>
              <button>Order Now</button>
            </div>
          </div>



          <div className="menu-body-conatiner-right">


            <div className="menu-body-topic1">
              <h2>Explore Our Categories </h2>
              <hr className='topic-line' />
            </div>
            <div className="menu-body-container-heading">
              <div onClick={() => handleFilterClick('soup')} className="menu-body-container-heading-card">
                <img src={menu_head1} alt="" />
                <h3>Soup</h3>
                <span>(0)</span>
              </div>
              <div onClick={() => handleFilterClick('swallow')} className="menu-body-container-heading-card">
                <img src={menu_head2} alt="" />
                <h3>Swallow</h3>
                <span>(0)</span>
              </div>
              <div onClick={() => handleFilterClick('protein')} className="menu-body-container-heading-card">
                <img src={menu_head3} alt="" />
                <h3>Protein</h3>
                <span>(0)</span>
              </div>
              <div onClick={() => handleFilterClick('Grain')} className="menu-body-container-heading-card">
                <img src={menu_head4} alt="" />
                <h3>Local Grain</h3>
                <span>(0)</span>
              </div>
              <div onClick={() => handleFilterClick('drink')} className="menu-body-container-heading-card" >
                <img src={menu} alt="" />
                <h3>Drinks</h3>
                <span>(0)</span>
              </div>
            </div>


            <div className="food-display-list">
              {filterItems.map((item, index) => {
                return <FoodDisplay item={item} addToCart={addToCart} key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image} category={item.category} />
              })};

            </div>

            <hr className='btw-line' />


            <div className="menu-body-container-right-up">

              <div className="menu-body-topic">
                <h2>Explore Our Popular menu</h2>
                <hr className='topic-line' />
              </div>





              <div className="menu-body-conatiner-right-content1">



                {homeProduct.map((item, index) => {
                  return (

                    <div className="menu-body-container-right-content-card-image" key={index}>
                   

                      <img className='menu-main-image' src={item.image} alt="" />

                      <div className="menu-body-container-right-content-card-content">
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <div className="star-holder">
                          <img src={menu_star} alt="" />
                          <img className='love-icon' src={love_icon} alt="" />
                        </div>
                        <span>price : {item.price}</span>
                        <button onClick={() => {addToCart(item._id) }}>Add to Cart</button>

                      </div>

                    </div>

                  )
                })}





                {products
                  .filter((val) => {
                    if (searchTerm === '') {
                      return '';
                    } else if (val.category.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                      return val;
                    }



                  })

                  .map((val) => {

                    return (
                      <div className="menu-body-container-right-content-card-image">
                        <img className='menu-main-image' src={val.image} alt="" />
                        <div className="menu-body-container-right-content-card-content">
                          <h3>{val.name}</h3>
                          <p>{val.description}</p>
                          <div className="star-holder">
                            <img src={menu_star} alt="" />
                            <img className='love-icon' src={love_icon} alt="" />
                          </div>
                          <span>price : {val.price}</span>
                          <button onClick={() =>addToCart(item._id)}>Add to Cart</button>
                        </div>
                      </div>
                    )


                  })


                }

              </div>


            </div>

          </div>
        </div>



      </div>



    </>
  );
}

export default Menu