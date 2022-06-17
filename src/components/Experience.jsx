const Experience = () => {
    return ( 
        <div name='experience' className='w-full h-full bg-[#0a192f] text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full pt-20'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Experience</p>
                </div>
                {/* Job Experience Box */}
                <div className="flex flex-row mb-[50px] last:mb-0 min-w-[150px] py-20">
                  {/* Job year */}
                  <div className="min-w-[30%] flex-grow-[0.25]">
                    <h5 className="text-2xl">2022 - Present</h5>
                    <h5 className="uppercase font-bold text-[#8892b0] py-4">Advent Academic Services Ltd.<br/>(Code Ninjas, Surrey)</h5>
                  </div>
                  {/* Text */}
                  <div className="px-4 py-1 w-[70%]">
                    <h4 className="uppercase font-bold text-pink-600 pb-2">Coding Instructor</h4>
                    <p>
                      <li>Learn the CREATE curriculum while the centre is less busy</li>
                      <li>Teach computer programming to kids of early age through stimulating STEM and game-based programming activities</li>
                      <li>Grade and assess students based on activities submitted</li>
                      <li>Update student's parents about how their children did and the concepts the student has learned</li>
                      <li>Create and develop new activities/curriculum for students to learn</li>
                    </p>
                  </div>
                </div>

                {/* Job Experience Box */}
                <div className="flex flex-row mb-[50px] last:mb-0 min-w-[150px] py-8">
                  {/* Job year */}
                  <div className="min-w-[30%] flex-grow-[0.25]">
                    <h5 className="text-2xl">2021 - 2022</h5>
                    <h5 className="uppercase font-bold text-[#8892b0] py-4">Douglas College,<br/>New Westminster</h5>
                  </div>
                  {/* Text */}
                  <div className="px-4 py-1 w-[70%]">
                    <h4 className="uppercase font-bold text-pink-600 pb-2">Student Assistant, Computer Lab (Computer Science)</h4>
                    <p>
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