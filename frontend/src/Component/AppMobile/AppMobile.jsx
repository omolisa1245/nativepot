import React from 'react'
import './AppMobile.css'
import google2 from '../../assets/google2.png'
import apple1 from '../../assets/apple1.png'
import appimage6 from '../../assets/appimage6.png'

const AppMobile = () => {
    return (
        <div className='app-container'>
            <div className="app-holder">
                <div className="app-content">
                    <h1>Experience the app today!</h1>
                    <div className="app-image">
                        <img className='app-main-image1' src={google2} alt="" />
                        <img className='app-main-image2' src={apple1} alt="" />
                    </div>
                </div>
                <div className="app-phone">
                    <img src={appimage6} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AppMobile