import React from 'react'

const News = () => {
    return (
        <div className='h-[48.82rem] w-full bg-white mt-24 flex flex-col justify-center items-center gap-24'>

            <div className='w-[74%] flex justify-start text-4xl'> Latest News</div>
            <div className='flex flex-row justify-between w-[74%] gap-10 '>

                <div className='h-[16.81rem]  w-1/4'>

                    <img src="https://www.putneyhigh.gdst.net/wp-content/uploads/2025/04/Student-Leadership-Team_3-scaled-1200x675-c-center.webp" alt="leadership-team"
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                    />


                </div>
                <div className='h-[28.81rem]  w-1/4 border border-red-500 overflow-hidden'>
                    <div className='h-[58%]'>
                        <img src="https://www.putneyhigh.gdst.net/wp-content/uploads/2025/03/IMG_1905-scaled-2048x1536-c-center.webp" alt="leadership-team2"
                            className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                    </div>

                    <div className="font-bold h-[26%] flex items-center">
                        Putney joins Amey to clean up the River Thames
                    </div>
                    <div className="font-bold  h-[15%]">
                        Putney joins Amey to clean up the River Thames
                    </div>
                    <div>

                    </div>

                </div>
                <div className='h-[16.81rem]  w-1/4'>
                    <img src="https://www.putneyhigh.gdst.net/wp-content/uploads/2025/03/Gala-Concert-2025_11-e1741876511927-1200x675-c-center.webp" alt="leadership-team3"
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                    />

                </div>
                <div className='h-[16.81rem]  w-1/4'>
                    <img src="https://www.putneyhigh.gdst.net/wp-content/uploads/2025/03/Chloe-Yim-Y11-Arkwright-Scholar-2025_26-BEST-scaled-1200x675-c-center.webp" alt="leadership-team"
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                    />

                </div>

            </div>

        </div>
    )
}

export default News