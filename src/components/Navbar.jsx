import { useState } from 'react';
import {FaBars, FaTimes, FaGithub, FaFacebook ,FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/logo.png';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    
    return ( 
    <div className='fixed w-full flex justify-between items-center px-4 text-gray-300'>
        <div>
            <img src={Logo} alt="" style={{width: '50px'}}/>   
        </div>
        {/* menu */}
       
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>
        

        {/* Hamburger */}
        <div onClick={() => handleClick()} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* Mobile Menu */}
        <ul className={ !nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center text-center'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Work</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>

        {/* Social Icons */}
        <div className='hidden sm:flex list-none fixed flex-col top-[35%] left-0'>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                <a className='flex justify-between items-center w-full text-gray-300'
                 href='https://www.facebook.com/ChiefMigz08/'>
                    Facebook <FaFacebook size={30}/>
                </a>
            </li>

            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700'>
                <a className='flex justify-between items-center w-full text-gray-300'
                 href='https://www.linkedin.com/in/miguel-shelwyn-pe-benito-052b401b1/'>
                    LinkedIn <FaLinkedin size={30}/>
                </a>
            </li>

            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                <a className='flex justify-between items-center w-full text-gray-300'
                 href='https://github.com/ChiefMigz'>
                    Github <FaGithub size={30}/>
                </a>
            </li>

            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                <a className='flex justify-between items-center w-full text-gray-300'
                 href='mailto:pebenitomiguel@gmail.com'>
                    Mail <HiOutlineMail size={30}/>
                </a>
            </li>

            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                <a className='flex justify-between items-center w-full text-gray-300'
                 href='/'>
                    Resume < BsFillPersonLinesFill size={30}/>
                </a>
            </li>

        </div>

       
    </div>
    );
}

export default Navbar;