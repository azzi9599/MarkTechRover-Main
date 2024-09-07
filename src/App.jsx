import React from 'react'
import Home from './Component/Home/Home'
import Icons from './Component/Home/Icons'
import Testimonials from './Component/Home/Testimonials'
import Navbar from './Component/Home/Navbar' 
import MainCompo from './Component/MainCompo'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainDentist from './Component/Home/MainDentist'
import Restaurant from './Component/Home/List/Restaurant'
import Hotels from './Component/Home/List/Hotels'
import Beauty from './Component/Home/List/Beauty'
import Decor from './Component/Home/List/Decor'
import Education from './Component/Home/List/Education'
import Rent from './Component/Home/List/Rent'
import HealthCare from './Component/Home/List/HealthCare'

const App = () => {
  return (
    <div>


<BrowserRouter>
<Routes>
  <Route path="/" element={<MainCompo/>} />
  <Route path="/Dental" element={<MainDentist/>} />
  <Route path='/Restaurant' element={<Restaurant/>} />
  <Route path='/Hotel' element={<Hotels/>} />
  <Route path='/Beauty' element={<Beauty/>} />
  <Route path='/Decor' element={<Decor/>} />
  <Route path='/Education' element={<Education/>} />
  <Route path='/Rent' element={<Rent/>} />
  <Route path='/hospital' element={<HealthCare/>} />

  

  
</Routes>
</BrowserRouter>






    </div>





  )
}

export default App