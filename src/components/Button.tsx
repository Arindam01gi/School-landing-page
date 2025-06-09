import React from 'react'

const Button = ({text}) => {
  return (
      <div className='px-4 py-3 rounded-full border border-purple-800 text-purple-800 text-lg hover:bg-purple-200 hover:border-none shadow-lg cursor-pointer w-1/2'>
         {text}
      </div>
  )
}

export default Button