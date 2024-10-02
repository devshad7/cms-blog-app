import React from 'react'
import BlogList from './BlogList'

const Hero = () => {
    return (
        <>
            <div className="py-6 md:py-10">
                <div className="px-4 mt-14 md:px-6 md:max-w-2xl lg:max-w-4xl 2xl:max-w-7xl mx-auto flex flex-col gap-6">
                    <div className="text-center flex flex-col gap-2 md:gap-3 border-b border-gray-200 dark:border-gray-800 py-5">
                        <h1 className='text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-gray-200'>Latest Updates</h1>
                        <span className='text-gray-700 dark:text-gray-400 text-lg font-normal'>All the latest blogs, straight from the team.</span>
                    </div>
                    <BlogList />
                </div>
            </div>
        </>
    )
}

export default Hero