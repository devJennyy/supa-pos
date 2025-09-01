import Features from '@/components/home/Features'
import Hero from '@/components/home/Hero'
import WhyPOS from '@/components/home/WhyPOS'
import React from 'react'

const Homepage = () => {
  return (
    <main className='w-full flex flex-col justify-center items-center'>
      <Hero />
      <Features />
      <WhyPOS />
    </main>
  )
}

export default Homepage
