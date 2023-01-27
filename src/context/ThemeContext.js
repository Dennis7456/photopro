import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
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

    return(
        <ThemeContext.Provider value={{theme, handleThemeSwitch}}>
            { children }
        </ThemeContext.Provider>
    )
}

export default ThemeContext;