import React, { useState, useEffect } from "react";

// import logo
import LogoWhite from '../../assets/img/logo-white.png';

// import icons
import { BsFillSunFill, BsMoonFill, BsCheck } from 'react-icons/bs'

const Hero = () => {

    // theme state
    const [theme, setTheme] = useState('light');

    // if local storage is empty save theme as light
    useEffect(() => {
        if (localStorage.getItem('theme') === null) {
            localStorage.setItem('theme', 'light');
        }
    }, []);

    useEffect(() => {

        // select html theme
        const html = document.querySelector('html');

        //add or remove class dark in html element depending on theme in local storage
        if(localStorage.getItem('theme') === 'dark'){
            html?.classList.add('dark');
            setTheme('dark');
        } else {
            html?.classList.remove('dark');
            setTheme('light');
        }
    }, [theme]);

    // toggle the theme
    const handleThemeSwitch = () => {
        if (localStorage.getItem('theme') === 'light') {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
    <>
    <button onClick={handleThemeSwitch} className="p-4 bg-primary dark:bg-on_primary dark:text-primary text-white rounded-full w-12 h-12 flex justify-center items-center">
                        { theme === 'light' ? <BsMoonFill /> : <BsFillSunFill /> }
    </button>
    </>
    )
}

export default Hero;