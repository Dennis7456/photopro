import { useContext } from 'react';
import LogoWhite from '../../assets/img/logo-white.png';
import LogoDark from '../../assets/img/logo-dark.png';
import { useLocation, Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import httpClient from '../../config/httpClient';
import Hero from '../Hero/Hero';
import ThemeContext from '../../context/ThemeContext';
import LoginModal from '../LoginModal/LoginModal';
import { useNavigate } from "react-router-dom";


const NavigationBar = () => {

    const location = useLocation();
    const user = useContext(UserContext);
    const {theme, handleThemeSwitch} = useContext(ThemeContext);
    const navigate = useNavigate();

    const logoutUser = async () => {
        await httpClient.post("//localhost:5000/logout");
        window.location.href = "/";
    }

    const registerUser = () => {
        navigate("/register");
    }

    return (
        <>
        <nav>
            <div className='flex justify-around items-center text-xl'>
                <div className=''><a href="/" className=''>{theme === 'light' ? <img src={LogoWhite} className="logo"/> : <img src={LogoDark} className="logo bg-white" id='logo-dark'/>}</a></div>
                <div className='flex justify-around'>
                    <div className=''>
                    { location.pathname === '/albums' ? <Link to='/albums' className='bg-primary rounded-md py-2 px-3 text-md text-on_primary hover:text-on-primary hover:text-primary_container'>Albums</Link> : <Link to='albums' className='text-md text-black hover:text-primary dark:text-on_primary'>Albums</Link>}
                    </div>
                    <div className='pl-10'>
                    { location.pathname === '/photos' ? <Link to='/photos' className='bg-primary rounded-md py-2 px-3 text-md text-on_primary hover:text-on-primary hover:text-primary_container'>Photos</Link> : <Link to='photos' className='text-md text-black hover:text-primary dark:text-on_primary'>Photos</Link>}
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    {/* <div className='hover:bg-primary_container hover:rounded-md py-2 px-3 dark:text-on_primary'>Login</div> */}
                    <LoginModal />
                    <span className='pl-10'></span>
                    <div className=' bg-primary rounded-md py-2 px-3 hover:text-on_primary text-on_primary hover:text-primary_container'><button type='button' onClick={registerUser}>Register</button></div>
                    
                    <div className='pl-10'><Hero /></div>
                </div>
            </div>
        </nav>
        </>
    )
}

export default NavigationBar;