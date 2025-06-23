import React from 'react'

const Gallery = () => {
    return (
        <div className='flex justify-center flex-col  items-center  '>

            <div className=' max-w-7xl flex flex-col  md:flex-row justify-between gap-8 md:h-[32.625rem] px-6 md:px-0'>

                <div className=' w-full md:w-1/3  '>
                    <div className='h-[72%] relative overflow-hidden'>
                        <img src="https://www.putneyhigh.gdst.net/wp-content/uploads/2024/09/Junior-School_10-cropflat-1200x675-c-center.webp"
                            srcSet="
                            https://www.putneyhigh.gdst.net/wp-content/uploads/2024/09/Junior-School_10-cropflat-640x640-c-center.webp 640w,
                            https://www.putneyhigh.gdst.net/wp-content/uploads/2024/09/Junior-School_10-cropflat-768x768-c-center.webp 768w,
                            https://www.putneyhigh.gdst.net/wp-content/uploads/2024/09/Junior-School_10-cropflat-2048x2048-c-center.webp 2048w"
                            sizes="
                            (min-width: 2000px) 2048px,
                            (min-width: 720px) calc(94.76vw - 274px),
                            (min-width: 520px) calc(100vw - 96px),
                            calc(100vw - 32px)
                        "
                            className="size-full transition-transform duration-300 hover:scale-110" alt="" data-image-id="7788" loading="lazy"></img>
                    </div>
                    <div className='bg-white h-[28%] flex flex-col gap-4 md:gap-8 justify-center items-center py-10 md:py-0'>
                        <div className='text-2xl font-semibold'>
                            Junior School
                        </div>

                        <p className='text-lg'> 11 - 16</p>
                    </div>

                </div>
                <div className=' w-full md:w-1/3  '>
                    <div className='h-[72%] relative overflow-hidden'>
                        <img src="https://www.putneyhigh.gdst.net/wp-content/uploads/2024/09/PHS_Senior_Putney_Bridge_SW-42crop-1200x675-c-center.webp" srcSet="
                        https://www.putneyhigh.gdst.net/wp-content/uploads/2024/09/PHS_Senior_Putney_Bridge_SW-42crop-640x640-c-center.webp 640w,
                        https://www.putneyhigh.gdst.net/wp-content/uploads/2024/09/PHS_Senior_Putney_Bridge_SW-42crop-768x768-c-center.webp 768w,
                        https://www.putneyhigh.gdst.net/wp-content/uploads/2024/09/PHS_Senior_Putney_Bridge_SW-42crop-2048x2048-c-center.webp 2048w
                        " 
                        sizes="
                            (min-width: 2000px) 2048px,
                            (min-width: 720px) calc(94.76vw - 274px),
                            (min-width: 520px) calc(100vw - 96px),
                            calc(100vw - 32px)
                        " 
                        className="size-full transition-transform duration-300 ease-in-out  hover:scale-110" alt="" data-image-id="7782" loading="lazy" />
                    </div>
                    <div className='bg-white h-[28%] flex flex-col gap-4 md:gap-8 justify-center items-center py-10 md:py-0'>
                        <div className='text-2xl font-semibold'>
                            Senior School
                        </div>

                        <p className='text-lg'> 11 - 16</p>
                    </div>

                </div>
                <div className=' w-full md:w-1/3  '>
                    <div className='h-[72%] relative overflow-hidden'>
                    <img src="https://www.putneyhigh.gdst.net/wp-content/uploads/2024/09/Sixth-Formers-lunchtime-3-crop-1200x675-c-center.webp"
                     srcSet="
                        https://www.putneyhigh.gdst.net/wp-content/uploads/2024/09/Sixth-Formers-lunchtime-3-crop-640x640-c-center.webp 640w,
                        https://www.putneyhigh.gdst.net/wp-content/uploads/2024/09/Sixth-Formers-lunchtime-3-crop-768x768-c-center.webp 768w,
                        https://www.putneyhigh.gdst.net/wp-content/uploads/2024/09/Sixth-Formers-lunchtime-3-crop-2048x2048-c-center.webp 2048w
                    " 
                    sizes="
                        (min-width: 2000px) 2048px,
                        (min-width: 720px) calc(94.76vw - 274px),
                        (min-width: 520px) calc(100vw - 96px),
                        calc(100vw - 32px)
                    " 
                    className="size-full transition-transform duration-300 ease-in-out  hover:scale-110" alt="" data-image-id="8439" loading="lazy"/>
                    </div>
                    <div className='bg-white h-[28%] flex flex-col gap-4 md:gap-8  justify-center items-center py-10 md:py-0'>
                        <div className='text-2xl font-semibold'>
                            Sixth Form
                        </div>

                        <p className='text-lg'> 16 - 18 </p>
                    </div>

                </div>





            </div>

            <div className='flex flex-col gap-6 justify-center items-center'>

                <div className='md:mt-48 mt-16 text-xl md:font-normal font-semibold md:text-4xl  w-[78%] text-center leading-[160%] text-[#470A68]'>
                    Consistently high achieving academically – the school’s goal is to always ‘stretch and engage’ its pupils.
                </div>
                <p className=' text-[#470A68] md:text-2xl text-lg md:font-normal font-semibold'> — Tatler Schools Guide </p>
            </div>




        </div>
    )
}

export default Gallery