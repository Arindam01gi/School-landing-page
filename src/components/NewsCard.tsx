import React from 'react'
import Button2 from './Button2'


const news = [
    {
        "img": "https://www.putneyhigh.gdst.net/wp-content/uploads/2025/06/Reunion-June-2025_10-scaled-1200x675-c-center.webp",
        "pcontent" : "Alumnae",
        "description": "Alumnae Summer Reunion – Monday 2 June 2025"
    },
    {
        "img": "https://www.putneyhigh.gdst.net/wp-content/uploads/2025/04/Student-Leadership-Team_3-scaled-1200x675-c-center.webp",
        "pcontent" : "Senior",
        "description": "Student Leadership Announcement 2025-26"
    },
    {
        "img": "https://www.putneyhigh.gdst.net/wp-content/uploads/2025/03/IMG_1905-scaled-2048x1536-c-center.webp",
        "description": " Putney joins Amey to clean up the River Thames"
    },
    {
        "img": "https://www.putneyhigh.gdst.net/wp-content/uploads/2025/03/Gala-Concert-2025_11-e1741876511927-1200x675-c-center.webp",
        "pcontent" : "Senior",
        "description": " Putney Young Musician of the Year 2025"
    },
]



const NewsCard = () => {
    return (
        <div className='flex flex-row justify-between w-[85%] gap-10 ml-52'>

            {
                news.map((n, index) => {
                    return (<>

                        <div className='h-[28.81rem]  w-[30%]' key={index}>
                            <div className='h-[58%]  overflow-hidden'>
                                <img src={n.img}
                                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                                />
                            </div>

                            <p className='py-10 text-lg'> {n?.pcontent }</p>

                            <div className="font-bold h-[26%] flex  flex-col justify-start  text-xl gap-5">
                                {
                                    n?.description
                                }

                                <Button2 text={"Read More"} />
                            </div>


                        </div>


                    </>)
                })
            }



        </div>
    )
}

export default NewsCard