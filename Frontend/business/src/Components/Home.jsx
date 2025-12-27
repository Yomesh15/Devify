import React from 'react'
import Hero from "./Hero"
import Services from './Services'
import WhyChooseUs from './WhyChoose'
import HowWeWork from './HowWork'
import Projects from './Projects'
import CTA from './CTA'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Services/>
      <WhyChooseUs/>
      <HowWeWork/>
      <Projects/>
      <CTA/>
    </div>
  )
}

export default Home
