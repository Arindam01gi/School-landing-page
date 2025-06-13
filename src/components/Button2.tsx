import React from 'react'

const Button = ({text}) => {
  return (
      <div className='px-3 py-3 rounded-full border border-[#470A68] text-[#470A68] text-lg hover:bg-purple-200 hover:border-none shadow-lg cursor-pointer w-1/2 flex items-center justify-center font-normal'>
         {text}
      </div>
  )
}

export default Button