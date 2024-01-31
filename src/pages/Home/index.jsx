import React from 'react'
import Nav from '../../components/Nav'
import Hero from '../../views/Hero'
import Arrivals from '../../views/Arrivals'
import About from '../../views/About'
import Insurance from '../../views/Insurance'
import Footer from '../../components/Footer'
import Tryout from '../../views/Tryout'

const Home = () => {
  return (
    <div>
        <Nav />
        <Hero />
        <Arrivals />
        <Tryout />
        <About />
        <Insurance />
        <Footer />
    </div>
  )
}

export default Home