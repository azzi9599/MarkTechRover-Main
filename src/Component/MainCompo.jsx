import React from 'react'
import Navbar from './Home/Navbar'
import Home from './Home/Home'
import Icons from './Home/Icons'
import Testimonials from './Home/Testimonials'
import HelpCompo from './Home/HelpCompo'
import ChooseUs from './Home/ChooseUs'
import Spotlight from './Home/Spotlight'
import Footer from '../Component/Footer'


const MainCompo = () => {
  return (

    <div>
    <Navbar/>
    <Home/>
    <Icons/>
    <HelpCompo/>
    <ChooseUs/>
    <Spotlight/>
    <Testimonials/>
    <Footer/>
    </div>
  )
}

export default MainCompo