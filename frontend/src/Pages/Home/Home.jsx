import React from 'react'
import './Home.css'
import Hero from '../../Component/Hero/Hero'
import Welcome from '../../Component/Welcome/Welcome'
import Features from '../../Component/Features/Features'
import Categories from '../../Component/Categories/Categories'
import Gallery from '../../Component/Gallery/Gallery'
import Catering from '../../Component/Catering/Catering'
import Testimony from '../../Component/Testimony/Testimony'
import AppMobile from '../../Component/AppMobile/AppMobile'


const Home = () => {
    return (
        <div>
           
            <Hero />
            <Welcome />
            <Categories />
            <Features />
            <Gallery/>
            <Catering/>
            <Testimony/>
            <AppMobile/>
        </div>
    )
}

export default Home