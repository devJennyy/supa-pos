import About from '@/components/home/About'
import Features from '@/components/home/Features'
import Hero from '@/components/home/Hero'
import React from 'react'

const Homepage = () => {
  return (
    <main className='w-full flex flex-col justify-center items-center'>
      <Hero />
      <About />
      <Features />
    </main>
  )
}

export default Homepage
