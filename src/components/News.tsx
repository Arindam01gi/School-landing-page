import React from 'react'
import NewsCard from './NewsCard'

const News = () => {
    return (
        <div className='h-[48.82rem] w-full bg-white mt-24 flex flex-col justify-center items-center gap-24'>

            <div className='w-[74%] flex justify-start text-4xl'> Latest News</div>

            <NewsCard />

        </div>
    )
}

export default News