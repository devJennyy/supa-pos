import Features from '@/components/home/Features'
import Hero from '@/components/home/Hero'
import WhyPOS from '@/components/home/WhyPOS'
import React from 'react'

const Homepage = () => {
  return (
    <main className='transition-colors duration-500 ease-in-out'>
      <Hero />
      <Features />
      <WhyPOS />
    </main>
  )
}

export default Homepage
