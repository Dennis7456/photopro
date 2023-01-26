import { useContext } from 'react';
import LogoWhite from '../../assets/img/logo-white.png';
import { useLocation, Link } from 'react-router-dom';
import { UserContext } from '../../App';
import httpClient from '../../config/httpClient';
import Hero from '../Hero/Hero';

const NavigationBar = () => {

    const location = useLocation();
    const user = useContext(UserContext);

    const logoutUser = async () => {
        await httpClient.post("//localhost:5000/logout");
        window.location.href = "/";
    }

    return (
        <>
        <nav>
            <div className='flex justify-around items-center text-xl'>
                <div><a href="/"><img src={LogoWhite} className="logo"/></a></div>
                <div className='flex justify-around'>
                    <div>
                    { location.pathname === '/albums' ? <Link to='/albums' className='bg-primary rounded-md py-2 px-3 text-md text-on_primary hover:text-on-primary hover:text-primary_container'>Albums</Link> : <Link to='albums' className='text-md text-black hover:text-primary'>Albums</Link>}
                    </div>
                    <div className='pl-10'>
                    { location.pathname === '/photos' ? <Link to='/photos' className='bg-primary rounded-md py-2 px-3 text-md text-on_primary hover:text-on-primary hover:text-primary_container'>Photos</Link> : <Link to='photos' className='text-md text-black hover:text-primary'>Photos</Link>}
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='hover:bg-primary_container hover:rounded-md py-2 px-3'>Login</div>
                    <span className='pl-10'></span>
                    <div className=' bg-primary rounded-md py-2 px-3 hover:text-on_primary text-on_primary hover:text-primary_container'>Register</div>
                    <div className='pl-10'><Hero /></div>
                </div>
            </div>
        </nav>
        </>
    )
}

export default NavigationBar;