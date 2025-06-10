import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import DataHero from './DataHero'
import Quote from './Quote'
import Gallery from './Gallery'
import News from './News'

const Home = () => {
  const [isTransparent, setIsTransparent] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight = window.innerHeight
      const scrollPosition = window.scrollY

      // Toggle transparency based on scroll position
      if (scrollPosition >= heroSectionHeight * 0.8) {
        setIsTransparent(false)
      } else {
        setIsTransparent(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      <Navbar isTransparent={isTransparent} />
      <HeroSection />
      <DataHero />
      <Quote />
      <Gallery />
      <News />
    </div>
  )
}

export default Home