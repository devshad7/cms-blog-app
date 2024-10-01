'use client'

import { useEffect, useState } from 'react';
import { SunIcon, SunMoonIcon } from 'lucide-react';

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check for a previously saved theme in localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }
    }, []);

    const toggleDarkMode = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    };

    return (
        <span onClick={toggleDarkMode} className="dark:text-white">
            {isDarkMode ? <SunIcon className={'size-5'} /> : <SunMoonIcon className={'size-5'} />}
        </span>
    );
};

export default DarkModeToggle;
