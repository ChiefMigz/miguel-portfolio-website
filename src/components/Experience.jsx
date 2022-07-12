const Experience = () => {
    return ( 
        <div name='experience' className='w-full h-full bg-[#0a192f] text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full pt-20'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Experience</p>
                </div>
                {/* Job Experience Box */}
                <div className="flex md:flex-row flex-col mb-[50px] last:mb-0 w-full py-20">
                  {/* Job year */}
                  <div className="md:w-[20%] w-full">
                    <h5 className="text-2xl">2022 - 2022</h5>
                    <h5 className="uppercase font-bold text-[#8892b0] py-4">Advent Academic Services Ltd.<br/>(Code Ninjas, Surrey)</h5>
                  </div>
                  {/* Text */}
                  <div className="py-1 md:w-[80%] md:px-8 w-full justify-between">
                    <h4 className="uppercase font-bold text-pink-600 text-lg pb-2 md:w-[104%]">Coding Instructor</h4>
                    <p className="md:w-[104%]">
                      <li>Learn the CREATE curriculum while the centre is less busy</li>
                      <li>Teach computer programming to kids of early age through stimulating STEM and game-based programming activities</li>
                      <li>Grade and assess students based on activities submitted</li>
                      <li>Update student's parents about how their children did and the concepts the student has learned</li>
                      <li>Create and develop new activities/curriculum for students to learn</li>
                    </p>
                  </div>
                </div>

                {/* Job Experience Box */}
                <div className="flex md:flex-row flex-col mb-[50px] last:mb-0 w-full py-4">
                  {/* Job year */}
                  <div className="md:w-[20%] w-full">
                    <h5 className="text-2xl">2021 - 2022</h5>
                    <h5 className="uppercase font-bold text-[#8892b0] py-4">Douglas College,<br/>New Westminster</h5>
                  </div>
                  {/* Text */}
                  <div className="py-1 md:w-[80%] md:px-8 w-full justify-between">
                    <h4 className="uppercase font-bold text-pink-600 text-lg pb-2 md:w-[104%]">Student Assistant, Computer Lab (Computer Science)</h4>
                    <p className="md:w-[104%]">
                      <li>Assisted/Assisting several courses in Computing Science program: Python Programming, C++ Programming, C++ Object-Oriented Programming and C++ Game Development</li>
                      <li>Helped professors facilitate learning to students in labs and activities through peer guidance</li>
                      <li>Assist students with technical problems or setting up their devices for programming</li>
                      <li>Oversaw participation of students in class, then tabulated results in an Excel workbook that encompasses the class for the entire semester</li>
                    </p>
                  </div>
                </div>
            </div>
        </div>
     );
}
 
export default Experience;