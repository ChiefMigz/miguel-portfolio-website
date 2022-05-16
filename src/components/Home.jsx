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
                <p className='text-[#8892b0] py-4 max-w-[700px]'>
                    Lorem ipsum dolor sit amet. Ut nihil atque quo laborum placeat ab nulla voluptas.
                    Ut voluptate earum non nobis magnam non fugit cupiditate. 
                    A pariatur voluptatibus qui iure quis non dolor eius ut totam omnis et minus cupiditate!
                    In iusto earum qui dolorem odio qui ipsa omnis est dolor voluptatem et dolore nobis.
                    Ut voluptate consequatur est error minima et reiciendis soluta vel laborum praesentium ab expedita molestiae.
                    Non velit tempore et impedit voluptatem in perspiciatis amet et similique nobis ab facere galisum aut voluptas
                    officiis. Sed doloribus alias aut consectetur ratione sit voluptatibus obcaecati et dicta sequi.
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