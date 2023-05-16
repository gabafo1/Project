import React,{useState} from 'react';
import Logo from '../../asset/cloudflexlogo.png';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import NavLinks from './NavLinks'
import { Link, BrowserRouter as Router,} from 'react-router-dom';

const Navbar = () => {
  const [nav,setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <Router basename='/'> {/* Specify the 'basename' value */}
      <div className='w-screen h-[80px] bg-white fixed drop-shadow-lg z-10'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
          <div className='flex items-center'>
            <img className="h-12 w-15 mr-20 ml-10" src={Logo} alt="Logo" />
            <ul className="ml-2 md:flex hidden item-center gap-11">
              <li>
                <Link to="/" className='py-7 px-3 inline-block font-semibold'>Home</Link>
              </li>
              <NavLinks />
              <li>
                <Link to="/" className='py-7 px-3 inline-block font-semibold'>About us</Link>
              </li>
              <li>
                <Link to="/" className='py-7 px-3 inline-block font-semibold'>Blog</Link>
              </li>
              <div className="hidden md:flex ml-96">
                <button className='m-4 px-7 py-3'>let's talk</button>
              </div>
            </ul>
          </div>
          <div className="md:hidden duration-500" onClick={handleClick}>
            {!nav ? <MenuIcon className='w-10' /> : <XIcon className='w-10'/>}
          </div>
        </div>
        <ul className={!nav ? 'hidden' : 'absolute bg-white w-full px-8 md:hidden'}>
          <li>
            <Link to="/" className='py-7 px-3 inline-block font-semibold'>Home</Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/" className='py-7 px-3 inline-block font-semibold '>About us</Link>
          </li>
          <li>
            <Link to="/" className='py-7 px-3 inline-block font-semibold border-b-2 w-full'>Blog</Link>
          </li>
          <div className='flex flex-col'>
            <button className='px-9 py-4 m-5'>Get Started</button>
          </div>
        </ul>
      </div>
    </Router>
  );
};

export default Navbar;

