import React from "react";
import Omnifood from "../assets/projects/Omnifood.gif";
import ClashCharacters from "../assets/projects/ClashOfCharacters.png";
import Garden2 from "../assets/projects/Garden2.gif";
import GuessMyNumber from "../assets/projects/GuessMyNumber.png";
import EmployeeTracker from "../assets/projects/Employee-tracker.png";
import ECommerce from "../assets/projects/E-Commerce-Site.png";

const Work = () => {
  return (
    <div
      name="work"
      className=" w-full h-full md:h-screen text-gray-300 bg-violet-600 "
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-14 sm:mt-6 ">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-violet-800 ">
            Work
          </p>
          <p className="py-6">Check out some of my recent work!</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Omnifood})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-80 text-center">
              <span className="px-2 text-2xl md:text-base lg:text-base font-bold text-white tracking-wider ">
                A food inspired project to further my HTML and CSS skills.
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://omnifood-brandonk.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/blksmk8483/Omnifood"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${ClashCharacters})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-80 text-center">
              <span className="px-2 text-2xl md:text-base lg:text-base font-bold text-white tracking-wider">
                Inspired by our love of video games, choose your character and
                play against an AI generated character.
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://clash-of-characters.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/LilOTechGod/Clash-of-Characters"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Garden2})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-80 text-center px-2">
              <span className=" text-2xl md:text-base lg:text-base font-bold text-white tracking-wider">
                An app to help you plan your square foot garden with interactive
                gardens and database of plants.
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://garden2ed.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/MarkGATX/Garden2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${GuessMyNumber})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-80 text-center px-2">
              <span className="text-2xl md:text-base lg:text-base font-bold text-white tracking-wider">
                Guess the number, keep track of your high-score, and play as
                many times as you want!
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://blksmk8483.github.io/Guess-Number/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/blksmk8483/Guess-Number"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${EmployeeTracker})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-80 text-center px-2 ">
              <span className="text-2xl md:text-base lg:text-base font-bold text-white tracking-wider">
                An application to manage a company's employee database, using
                Node.js, Inquirer, and MySQL.
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://drive.google.com/file/d/1bkjvzFH0QVlc_HupD_aXuXyshxQJXuvz/view"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/blksmk8483/Employee-Tracker"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${ECommerce})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-80 text-center px-2 ">
              <span className="text-2xl md:text-base lg:text-base font-bold text-white tracking-wider">
                A back end build for an e-commerce site to interact with a MySQL
                database.
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://drive.google.com/file/d/1dH3-c_Q3OOcIfszRerZ249G8yVIBMUTS/view"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/blksmk8483/E-Commerce-Site"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
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
};

export default Work;
