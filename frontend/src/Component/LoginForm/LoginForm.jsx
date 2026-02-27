import React from 'react'
import './LoginForm.css'
import { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { MdOutlineEmail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import axios from 'axios'




const LoginForm = ({setShowLogin}) => {

    

    const [currState, setCurrState] = useState('signup')
    const [token, setToken] = useState("")
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });
    

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
        
    }

    const onLogin = async (event) => {
        event.preventDefault()
       try {
         if (currState === "signup") {
            const response = await axios.post("http://localhost:5000/api/user/register", data)
             console.log(response);
            if (response.data.success) {
                setToken(response.data.token);
                localStorage.setItem("token", response.data.token);
                setShowLogin(false)
            }
            else {
                alert(response.data.message)
            }
        } else {
            const response = await axios.post("http://localhost:5000/api/user/login", data)
           
            
            if (response.data.success) {
                setToken(response.data.token);
                localStorage.setItem("token", response.data.token);
                setShowLogin(false)
            }
            else {
                alert(response.data.message)
            }
        }
       } catch (error) {
         console.log('Error creating user');
       }


      }


    
    return (
        <div className='Login-form-container'>
            <form className='form-body' onSubmit={onLogin}>
                <div className="form-heading">
                    <h2>{currState}</h2>
                    <RxCross2 className='cross' onClick={()=>setShowLogin(false)}/>
                </div>


                {currState === 'Login' ? "" : <div className="input-login">
                    < IoPersonOutline className='input-icon' />
                    <input name='name' onChange={onChangeHandler} value={data.name}  type="text" placeholder='Enter you name' />
                </div>}

                <div className="input-login">
                    <MdOutlineEmail className='input-icon' />
                    <input name='email' onChange={onChangeHandler} value={data.email}  type="text" placeholder='Enter your email' />
                </div>
                <div className="input-login">
                    <MdLockOutline className='input-icon' />
                    <input name='password' onChange={onChangeHandler} value={data.password}  type="password" placeholder='Enter your Password' />
                </div>
                <button type='submit'>Submit</button>
                <p>Forgot Password?</p>
                <div className="terms">
                    <input type="checkbox" />
                    <span>By clicking this checkbox you are agreeing to the  terms and condition of our company.</span>
                </div>

                <div className="create-account">
                    {currState === 'Login' ? <span>Create a new account?<p onClick={() => setCurrState('signup')}>click here</p></span>
                        : <span>Already have an account? <p onClick={() => setCurrState('Login')}>Login here</p></span>}

                </div>

            </form>

        </div>
    )
}

export default LoginForm