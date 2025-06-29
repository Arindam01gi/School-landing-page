import React from 'react'

interface NavbarProps {
  isTransparent?: boolean
}

const Navbar: React.FC<NavbarProps> = ({ isTransparent = true }) => {
  const transparentLogo = "https://www.putneyhigh.gdst.net/wp-content/uploads/2024/07/putney-high-logo-white.svg";
  const primaryLogo = "https://www.putneyhigh.gdst.net/wp-content/uploads/2024/07/putney-high-mark-white.svg"; 

  return (
    <div
      className={`fixed top-0 left-0 w-full h-28 flex items-center text-[22px] cursor-pointer transition-all duration-300 z-50 ${isTransparent
          ? 'bg-transparent text-white'
          : 'bg-primary text-white'
        }`}
    >
      <div className='flex justify-center items-center gap-10 w-5/12'>
        <span>Apply</span>
        <span>Visit</span>
        <span>Contact</span>
      </div>
      <div className='w-1/6 flex justify-center items-center'>
        <img
          src={isTransparent ? transparentLogo : primaryLogo}
          alt="logo"
          className={`hover:scale-110 transition-transform duration-300 py-2 ${isTransparent ? 'w-32 h-32' : 'w-16 h-16'}`}
        />
      </div>
      <div className='w-1/3 flex justify-end gap-10'>
        <span>
          <i className="fa-solid fa-bars fa-lg"></i>
        </span>
        <span className='text-white '>
          <i className="fa-solid fa-magnifying-glass fa-lg fa-light"></i>
        </span>

      </div>
    </div>
  )
}

export default Navbar