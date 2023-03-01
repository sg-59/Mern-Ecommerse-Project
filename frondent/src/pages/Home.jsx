import React from 'react'
import Advertisement from '../components/Advertisement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Popularproducts from '../components/Popularproducts'
import Slider from '../components/Slider'


const Home = () => {
  return (
    <div>
      <Advertisement/>
      <Navbar/>
      <Slider/>
      <Categories/>
<Popularproducts/>
<Newsletter/>
<Footer/>
    </div>
  )
}

export default Home
