import {HiArrowNarrowRight} from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
    return ( 
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
                Miguel T. Pe Benito
                </h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
                I'm a CS Graduate.
                </h2>
                <p className='text-[#8892b0] py-4 max-w-[700px] first-letter:text-5xl'> Hello there! Welcome to my portfolio
                    wesbite where I will be featuring projects that I think is interesting and worthwhile to check. Feel free
                    to send me a message about career opportunities, inquire about my skills or work, collaborate on projects,
                    or just to socialize! Please do look out for my future projects on my <a href="https://github.com/ChiefMigz" className='underline'>
                        GitHub</a> account. In the near future, I may feature my most interesting projects on this website.
                </p>
                <div>
                    <Link to='skills' smooth={true} duration={500}>
                        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                        View Skills
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3 hover:'/>
                        </span>
                    </button>
                    </Link>
                </div>
            </div>
            
        </div>
     );
}
 
export default Home;