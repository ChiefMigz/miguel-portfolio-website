const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full mt-8'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi, I'm Miguel. Please  feel free to take a look around.</p>
            </div>
            <div>
              <p>I am a fresh Diploma in Computer Science graduate from Douglas College. I am profoundly
                interested on developing business solutions software, designing and building websites. I usually play games, watch
                movies or code during my spare time at home. I have spent 2 semesters at my college helping instructors deliver
                programming labs in Python or C++ by assisting and helping students understand coding using my perspective as a Computer 
                Science student.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
