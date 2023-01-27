import React, { createContext, useState, useEffect, useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

// import logo
import LogoWhite from '../../assets/img/logo-white.png';

// import icons
import { BsFillSunFill, BsMoonFill, BsCheck } from 'react-icons/bs'

const Hero = () => {

    // theme context
    //const theme = useContext(ThemeContext);
    // theme state
    // const [theme, setTheme] = useState('light');
    const {theme, handleThemeSwitch} = useContext(ThemeContext);
    console.log(theme)
    return (
    <>
    <ThemeContext.Provider value={theme}>
    <button onClick={handleThemeSwitch} className="p-4 bg-primary dark:bg-on_primary dark:text-primary text-white rounded-full w-12 h-12 flex justify-center items-center">
                        { theme === 'light' ? <BsMoonFill /> : <BsFillSunFill /> }
    </button>
    </ThemeContext.Provider>
    </>
    )
}

export default Hero;