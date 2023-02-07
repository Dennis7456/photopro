import React, { createContext, useState, useEffect, useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

// import icons
import { BsFillSunFill, BsMoonFill, BsCheck } from 'react-icons/bs'

const Hero = () => {
    
    const {theme, handleThemeSwitch} = useContext(ThemeContext);
    return (
    <>
    <ThemeContext.Provider value={theme}>
    <button id="theme-toggle" onClick={handleThemeSwitch} className="p-4 bg-primary dark:bg-on_primary dark:text-primary text-white rounded-full w-12 h-12 flex justify-center items-center">
                        { theme === 'light' ? <BsMoonFill /> : <BsFillSunFill /> }
    </button>
    </ThemeContext.Provider>
    </>
    )
}

export default Hero;