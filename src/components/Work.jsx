import WorkImg from '../assets/workImg.jpeg';

const Work = () => {
    return ( 
        <div name='work' className='w-full h-full bg-[#0a192f] text-gray-300 my-[100px]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className="pb-8">
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Work</p>
                    <p className='py-4'>Check out some of my recent works</p>
                </div>
            

                {/* Grid Item */}
                <div className='grid sm:grid-cols-2 py-[-40px] md:grid-cols-3 gap-4 bg-[#0a192f]'>
                    {/* Item 1 */}
                    <div 
                        style={{backgroundImage: `url(${WorkImg})`}}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Website Design
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Item 1 */}
                    <div 
                        style={{backgroundImage: `url(${WorkImg})`}}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Website Design
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Item 1 */}
                    <div 
                        style={{backgroundImage: `url(${WorkImg})`}}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Website Design
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href="/">
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