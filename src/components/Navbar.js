import React from 'react'
import Logo from './logo/logo'
import DarkModeToggle from '@/utils/darkModeToogle'

const Navbar = () => {
    return (
        <>
            <div className="fixed py-5 border-b border-b-gray-200 dark:border-b-[#222324] w-full z-50 bg-white dark:bg-[#18191a]">
                <div className="px-6 md:max-w-2xl lg:max-w-4xl 2xl:max-w-7xl mx-auto flex justify-between items-center">
                    <Logo />
                    <div className="cursor-pointer">
                        <DarkModeToggle />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar