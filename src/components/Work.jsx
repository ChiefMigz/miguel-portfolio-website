import {AiFillCloseCircle} from 'react-icons/ai';
import { useState } from 'react';

const Work = () => {
    const [demo, toggleDemo] = useState(false);
    const handleClick = () => toggleDemo(!demo);

    const WebDesignImg = require('../assets/web-design-img.png')
    const PongGameImg = require('../assets/pong-img.png')
    const ThisWebsiteImg = require('../assets/this-website-img.png')
    return ( 
        <div name='work' className='w-full h-full bg-[#0a192f] text-gray-300 my-[100px]'>
            {/* Game Demo */}
            <div className={!demo ? 'hidden' : 'z-10 absolute w-[95%] left-10 bg-transparent'}>
                <AiFillCloseCircle className='m-2 ml-[91vw] hover:fill-rose-700' size={40} onClick={() => handleClick()}/>
                    <div>
                        <iframe frameborder="0" width="100%" height="500px" src="https://replit.com/@ChiefMigz/Pong?embed=true&lite=false#main.py"/>
                    </div> 
            </div>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className="pb-8">
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Work</p>
                    <p className='py-4'>Check out some of my recent works</p>
                </div>

                {/* Grid Item */}
                <div className='grid sm:grid-cols-2 py-[-40px] md:grid-cols-3 gap-4 bg-[#0a192f]'>
                    {/* Item 1 */}
                    <div 
                        style={{backgroundImage: `url(${WebDesignImg})`}}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Website Design
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://www.figma.com/proto/erB0se5rsmsF70gkHk9S1Z/Final-Design---Toronto-Cupcakes?page-id=0%3A1&node-id=183%3A506&viewport=223%2C318%2C0.16&scaling=scale-down-width&starting-point-node-id=183%3A506" target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>
                                        Link
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div 
                        style={{backgroundImage: `url(${PongGameImg})`}}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Python Pong Game
                            </span>
                            <div className='pt-8 text-center'>
                                <a onClick={() => handleClick()}>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/ChiefMigz/Pong" target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div 
                        style={{backgroundImage: `url(${ThisWebsiteImg})`}}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                This website!
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://github.com/ChiefMigz/miguel-portfolio-website" target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Work;