import React from 'react'
import videoSource from '@assets/PHS_Faces_GRADE_V03.mp4'

const HeroSection = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-40" 
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default HeroSection