const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
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
              <p>Hi, I'm Miguel. Please take a look around.</p>
            </div>
            <div>
              <p> Lorem ipsum dolor sit amet. Ut nihil atque quo laborum placeat ab nulla voluptas.
                Ut voluptate earum non nobis magnam non fugit cupiditate. 
                A pariatur voluptatibus qui iure quis non dolor eius ut totam omnis et minus cupiditate!
                In iusto earum qui dolorem odio qui ipsa omnis est dolor voluptatem et dolore nobis.
                Ut voluptate consequatur est error minima et reiciendis soluta vel laborum praesentium ab
                expedita molestiae. Non velit tempore et impedit voluptatem in perspiciatis amet et similique
                nobis ab facere galisum aut voluptas officiis. Sed doloribus alias aut consectetur ratione sit
                voluptatibus obcaecati et dicta sequi.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
