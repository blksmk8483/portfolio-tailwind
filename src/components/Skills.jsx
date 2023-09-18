import React from "react";
import HTML from "../assets/skills/html.png";
import CSS from "../assets/skills/css.png";
import JavaScript from "../assets/skills/javascript.png";
import ReactImg from "../assets/skills/react.png";
import Node from "../assets/skills/node.png";
import Mongo from "../assets/skills/mongo.png";
import GitHub from "../assets/skills/github.png";
import TailwindImg from "../assets/skills/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-violet-600 text-gray-300 w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="mt-18 sm:mt-6">
          <p className="text-4xl font-bold inline border-b-4 border-violet-800 mt-6">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="pt-3 w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="pt-3 w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="pt-3 w-20 mx-auto"
              src={JavaScript}
              alt="JavaSript icon"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="pt-3 w-20 mx-auto"
              src={ReactImg}
              alt="React icon"
            />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="pt-3 w-20 mx-auto" src={Node} alt="Node icon" />
            <p className="my-4">Node</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="pt-3 w-20 mx-auto"
              src={Mongo}
              alt="Mongo DB icon"
            />
            <p className="my-4">Mongo DB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="pt-3 w-20 mx-auto" src={GitHub} alt="GitHub icon" />
            <p className="my-4">GitHub</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="pt-3 w-20 mx-auto"
              src={TailwindImg}
              alt="Tailwind CSS icon"
            />
            <p className="my-4">Tailwind CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
