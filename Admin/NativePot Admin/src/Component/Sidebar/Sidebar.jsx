import React,{useState} from 'react'
import './Sidebar.css'
import logo from "../../assets/logo.png"
import icon_profile from '../../assets/icon_profile.png'
import { MdOutlineDashboard } from "react-icons/md";
import { BiFoodMenu } from "react-icons/bi";
import { BsCartPlus } from "react-icons/bs";
import { IoAddCircleSharp } from "react-icons/io5";
import { NavLink, useNavigate } from 'react-router-dom';

const Sidebar = ({ setToken }) => {

    const [userData, setUserData] = useState(false)

    const getUserData = async () => {
        try {
            const { data } = await axios.get(" http://localhost:5000/api/user/data")
            console.log(data);
            

            data.success ? setUserData(data.userData) : alert(data.message)

        } catch (error) {
            console.log(error.message);


        }
    }

    const navigate = useNavigate()
    return (
        <div className='sidebar-containner'>
            <div className="sidebar-containner-top">
                <div className="nav-logo">
                    <img onClick={() => setToken('')} src={logo} alt="" />
                    <span>Native<p>Pot</p></span>
                </div>

                <img className='sidebar-icon-pro' src={icon_profile} alt="" />
                <div className="sidebar-container-top-text">
                    <h6>Hello{userData ? userData.name : ""}</h6>
                    <h6>Hello{userData ? userData.email : ""}</h6>
                    <span>Welcome to admin page</span>

                </div>
            </div>

            <div className="sidebar-containner-down">

                <NavLink className="dasbord" to='/FoodList'>
                    <BiFoodMenu className='sidebar-icon' />
                    <span>Food list</span>
                </NavLink>

                <NavLink className="dasbord" to='/AddFood'>

                    <IoAddCircleSharp className='sidebar-icon' />
                    <span>Add Food</span>
                </NavLink>

                <NavLink className="dasbord" to='/Order'>
                    <BsCartPlus className='sidebar-icon' />
                    <span>Order</span>
                </NavLink>




            </div>
        </div>
    )
}

export default Sidebar