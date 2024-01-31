import React from 'react'
import Nav from '../../components/Nav'
import Hero from '../../views/Hero'
import Arrivals from '../../views/Arrivals'
import About from '../../views/About'
import Insurance from '../../views/Insurance'

const Home = () => {
  return (
    <div>
        <Nav />
        <Hero />
        <Arrivals />
        <About />
        <Insurance />
    </div>
  )
}

export default Home