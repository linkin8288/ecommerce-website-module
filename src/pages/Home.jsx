import React from 'react'
import Announcement from './components/Announcement'
import Categories from './components/Categories'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import Products from './components/Products'
import Footer from './components/Footer'
import Login from './Login'
import Cart from './Cart'

function Home() {
  return (
    <div>
      <Announcement />
      <Navbar/>
      <Categories />
      <Products />
      <Newsletter />
      <Footer/>
      <Login />
      <Cart/>
    </div>
  )
}

export default Home