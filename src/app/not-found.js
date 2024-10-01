import Navbar from '@/components/Navbar'
import React from 'react'

const ErrorPage = () => {
    return (
        <>
            <Navbar />
            <div className="py-10">
                <div className="px-6 md:max-w-2xl lg:max-w-4xl 2xl:max-w-7xl mx-auto flex justify-center h-[75vh] items-center">
                    <h1 className='dark:text-gray-300'>404 | Not Found</h1>
                </div>
            </div>
        </>
    )
}

export default ErrorPage