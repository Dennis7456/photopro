import LogoWhite from '../../assets/img/logo-white.png';
import { useLocation, Link } from 'react-router-dom';
const NavigationBar = () => {

    const location = useLocation();
    
    return (
        <>
        <header>
        <nav>
            <ul>
                <li><a href="/"><img src={LogoWhite} className="logo"/></a></li>
            </ul>
            <div>
                { location.pathname == '/photos' ? <li className='pr-3'><Link to='/photos' className='bg-primary rounded-full py-2 px-3 text-md text-black font-bold hover:text-on-primary'>Photos</Link></li> : <li className='pr-3'><Link to='photos' className='text-md text-black font-bold hover:text-primary'>Photos</Link></li>}
                { location.pathname == '/albums' ? <li className='pr-3'><Link to='/albums' className='bg-primary rounded-full py-2 px-3 text-md text-black font-bold hover:text-on-primary'>Albums</Link></li> : <li className='pr-3'><Link to='albums' className='text-md text-black font-bold hover:text-primary'>Albums</Link></li>}
            </div>
        </nav>
        </header>
        </>
    )
}

export default NavigationBar;