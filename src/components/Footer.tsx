import React from 'react'

const Footer = () => {
    return (
        <div className='h-[42.5rem] bg-primary flex justify-center  items-center '>

            <div className='w-[74%] h-full  flex flex-col'>

                <div className=' w-full h-1/3 flex justify-center items-center'>
                    <img
                        src="https://www.putneyhigh.gdst.net/wp-content/uploads/2024/07/putney-high-logo-white.svg"
                        alt="logo"
                        className='w-auto h-36 transition-transform duration-300 hover:scale-110'
                    />
                </div>

                <div className=' w-full h-1/3 flex '>

                    <div className=' w-1/3 h-full text-white flex flex-col justify-center items-center'>
                        <p className='font-semibold'>Admissions</p>
                        <div className='mt-6 flex flex-col justify-center items-center'>
                            <p> Apply to Putney</p>
                            <p>Open Days</p>
                            <p>contact</p>
                        </div>
                    </div>
                    <div className=' w-1/3 h-full flex flex-col justify-center items-center text-white'>
                        <div className='text-xl text-center font-semibold'>
                            Academic with a very modern edge
                        </div>
                        <div className='text-center mt-6'>
                            Putney is a dynamic and down-to-earth school that nurtures bright and imaginative students. Our unique brand of modern scholarship provides an outstanding education that is bold, broad and above all, relevant.
                        </div>
                    </div>
                    <div className=' w-1/3 h-full text-white flex flex-col justify-center items-center'>
                        <p className='font-semibold'>Useful Information</p>
                        <div className='mt-6 flex flex-col justify-center items-center'>
                            <p> Term Dates</p>
                            <p>Facilities Hire</p>
                            <p>Current Vacancies</p>
                        </div>
                    </div>

                </div>

                <div className='flex border border-red-500'>

                    <div className='w-[25%]'>
                        <img src="https://www.putneyhigh.gdst.net/wp-content/uploads/2024/06/dummy-acc-logo-japs.svg" alt="shool-logo1" className='h-32 w-32' />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Footer