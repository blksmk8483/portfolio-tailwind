import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-violet-600 text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-violet-800">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Brandon, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I pride myself in taking on challenges, solving them, and being
              creative in the process. As a graduate from the University of
              Texas Austin Full Stack Coding Bootcamp I have experience with
              HTML, CSS, JavaScript, React, Node, MongoDB, GitHub, and Tailwind
              CSS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
