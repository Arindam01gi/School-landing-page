import React from 'react'

const Gallery = () => {
    return (
        <div className='flex justify-center flex-col  items-center  '>

            <div className=' w-[75%] flex flex-row justify-between gap-8 h-[32.625rem] '>

                <div className='w-1/3 '>
                    <div className='h-[72%] relative overflow-hidden'>
                        <img
                            src="https://www.putneyhigh.gdst.net/wp-content/uploads/2024/09/Junior-School_10-cropflat-1200x675-c-center.webp"
                            alt="Junior School"
                            className="h-full w-full  transition-transform duration-300 hover:scale-110"
                        />
                    </div>
                    <div className='bg-white h-[28%] flex flex-col gap-8 justify-center items-center'>
                        <div className='text-2xl font-semibold'>
                            Junior School
                        </div>

                        <p className='text-lg'> 4 - 11</p>
                    </div>

                </div>
                <div className='w-1/3 '>
                    <div className='h-[72%] relative overflow-hidden'>
                        <img
                            src="https://www.putneyhigh.gdst.net/wp-content/uploads/2024/09/PHS_Senior_Putney_Bridge_SW-42crop-2048x2048-c-center.webp"
                            alt="Junior School"
                            className="h-full w-full  transition-transform duration-300 hover:scale-110"
                        />
                    </div>
                    <div className='bg-white h-[28%] flex flex-col gap-8 justify-center items-center'>
                        <div className='text-2xl font-semibold'>
                            Senior School
                        </div>

                        <p className='text-lg'> 11 - 16</p>
                    </div>

                </div>
                <div className='w-1/3 '>
                    <div className='h-[72%] relative overflow-hidden'>
                        <img
                            src="https://www.putneyhigh.gdst.net/wp-content/uploads/2024/09/Sixth-Formers-lunchtime-3-crop-2048x2048-c-center.webp"
                            alt="Junior School"
                            className="h-full w-full  transition-transform duration-300 hover:scale-110"
                        />
                    </div>
                    <div className='bg-white h-[28%] flex flex-col gap-8 justify-center items-center'>
                        <div className='text-2xl font-semibold'>
                            Sixth Form
                        </div>

                        <p className='text-lg'> 16 - 18 </p>
                    </div>

                </div>





            </div>

            <div className='flex flex-col gap-6 justify-center items-center'>

            <div className='mt-48 text-4xl w-[78%] text-center leading-[160%] text-[#470A68]'>
                Consistently high achieving academically – the school’s goal is to always ‘stretch and engage’ its pupils.
            </div>
            <p className=' text-[#470A68] text-2xl'> — Tatler Schools Guide </p>
            </div>




        </div>
    )
}

export default Gallery