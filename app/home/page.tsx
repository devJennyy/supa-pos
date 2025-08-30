import About from '@/components/home/About'
import Hero from '@/components/home/Hero'
import React from 'react'

const Homepage = () => {
  return (
    <main className='w-full flex flex-col justify-center items-center'>
      <Hero />
      <About />
    </main>
  )
}

export default Homepage
