import React from 'react'

const Navbar = () => {
   return (
      <div className='bg-[var(--primary-color)] text-[var(--background-color)]  h-28 w-full flex items-center text-[22px] cursor-pointer'>
         <div className='flex justify-center items-center  gap-10 w-5/12 cursor-pointer'>
            <span>Apply</span>
            <span>Visit</span>
            <span>Contact</span>
         </div>
         <div className='w-1/6 flex justify-center items-center cursor-pointer'>
            <img src="https://www.putneyhigh.gdst.net/wp-content/uploads/2024/07/putney-high-mark-white.svg" alt="logo" className='w-16 h-16 hover:scale-110 transition-transform duration-300' />
         </div>
         <div className='w-1/3 flex justify-end  gap-10 cursor-pointer'>
            <span>Search</span>
            <span>Menu</span>
         </div>
      </div>
   )
}

export default Navbar