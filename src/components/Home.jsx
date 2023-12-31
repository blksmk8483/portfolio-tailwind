import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

export const Home = () => {
  return (
    <div
      name="home"
      // className="w-full h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500 "
      className="w-full h-screen bg-gradient-to-r from-fuchsia-600 to-violet-600 "
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-violet-300">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Brandon Knight
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I am a Full Stack Developer.
        </h2>
        <p className="text-violet-300 py-4 max-w-[600px]">
          I am a full-stack web developer specializing in building fully
          responsive web applications. I am currently building with JavaScript,
          React, and Tailwind CSS.
        </p>
        <div>
          <Link to="work" spy={true} smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-violet-800 hover:border-violet-800">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
