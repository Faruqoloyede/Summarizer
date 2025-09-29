
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Works from '@/components/Works'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Works />
      <Footer />
    </div>
  )
}

export default page