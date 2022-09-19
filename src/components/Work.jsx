
import { useState } from 'react';
import GameWindow from '../utilities/Demo';

const Work = () => {
    const [demo, toggleDemo] = useState(false);
    const handleClick = () => toggleDemo(!demo);

    const WebDesignImg = require('../assets/web-design-img.png')
    const PongGameImg = require('../assets/pong-img.png')
    const ThisWebsiteImg = require('../assets/this-website-img.png')

    return ( 
        <div name='work' className='w-full h-full bg-[#0a192f] text-gray-300 my-[100px]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Work</p>
                    <p className='py-4'>Check out some of my recent works</p>
                </div>

                {/* Grid Item */}
                <div className='grid sm:grid-cols-2 py-[-40px] md:grid-cols-3 gap-4 bg-[#0a192f]'>
                    {/* Figma Design */}
                    <div 
                        style={{backgroundImage: `url(${WebDesignImg})`}}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Website UI Design<br/>
                            </span>
                            <div className='text-center px-2 my-3 font-medium text-base'>
                                <small>Website design and prototype made on Figma. Currently working on website implementation using MERN stack.</small>
                            </div>
                            <div className='pt-8 text-center'>
                                <a href='https://www.figma.com/proto/erB0se5rsmsF70gkHk9S1Z/Final-Design---Toronto-Cupcakes?page-id=0%3A1&node-id=183%3A506&viewport=223%2C318%2C0.16&scaling=scale-down-width&starting-point-node-id=183%3A506' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>
                                        Prototype
                                    </button>
                                </a>
                                <a href='https://github.com/ChiefMigz/ecommerce-website' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Python Pong Game */}
                    <div 
                        style={{backgroundImage: `url(${PongGameImg})`}}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Python Pong Game<br/>
                            </span>
                            <div className='text-center px-2 my-3 font-medium text-base'>
                                <small>Click on main.py, then click the play button. A simple two-player Pong game!</small>
                            </div>
                            <div className='pt-8 text-center'>
                                <a onClick={() => handleClick()}>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg hidden lg:inline'>
                                        Demo
                                    </button>
                                </a>
                                <a href='https://github.com/ChiefMigz/Pong' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Portfolio Website */}
                    <div 
                        style={{backgroundImage: `url(${ThisWebsiteImg})`}}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Portfolio Website<br/>
                            </span>
                            <div className='text-center px-2 my-3 font-medium text-base'>
                                <small>The portfolio website you are looking at! New content on project updates!</small>
                            </div>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/ChiefMigz/miguel-portfolio-website' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            { /* Conditional rendering, will only render when demo is true*/
             demo &&
                <GameWindow handleClick={handleClick} webLink={'https://replit.com/@ChiefMigz/Pong?embed=true&lite=false#main.py'}/>
            }
        </div>
     );
}
 
export default Work;