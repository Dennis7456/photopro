import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import httpClient from "../../config/httpClient";
import LoginModal from "../../components/LoginModal/LoginModal";
import Hero from "../../components/Hero/Hero";
import ThemeContext from "../../context/ThemeContext";
import LogoWhite from '../../assets/img/logo-white.png';
import LogoDark from '../../assets/img/logo-dark.png';
import Cookies from "universal-cookie";
const cookies = new Cookies();

const token = cookies.get('TOKEN')

const Header =  () => {
    const location = useLocation();
    const user = useContext(UserContext);
    const {theme, handleThemeSwitch} = useContext(ThemeContext);
    const navigate = useNavigate();
    
    const logoutUser = () => {
        //destroy token
        cookies.remove("TOKEN");
        window.location.href = "/";
    }

    return (
        <>
        <nav>
            <div className='flex justify-around items-center text-xl'>
                <div className=''><a href="/" className=''>{theme === 'light' ? <img src={LogoWhite} className="logo"/> : <img src={LogoDark} className="logo bg-white" id='logo-dark'/>}</a></div>
                <div className='flex justify-around'>
                </div>
                <div className='flex justify-between items-center'>
                    <span className='pl-10'></span>
                    <div className=' bg-primary rounded-md py-2 px-3 hover:text-on_primary text-on_primary hover:text-primary_container'><button type='button' onClick={logoutUser}>Logout</button></div>
                    <div className='pl-10'><Hero /></div>
                </div>
            </div>
        </nav>
        </>
    )

}

export default Header;