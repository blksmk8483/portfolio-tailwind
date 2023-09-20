import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Resume from "../assets/Resume.png";

const Footer = () => {
  return (
    <div
      name="footer"
      className="bg-violet-600 text-gray-300 w-full h-auto lg:hidden flex justify-center items-center mt-0 pt-0 pb-10"
    >
      <div className="">
        <ul className="lg:hidden grid grid-cols-4 gap-8">
          <li className=" bg-blue-500 w-[60px] h-[60px] flex justify-between items-center rounded-full hover:bg-blue-700">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/brandonknight8483"
            >
              <FaLinkedin size={60} />
            </a>
          </li>
          <li className="bg-[#333] w-[60px] h-[60px] flex justify-between items-center rounded-full hover:bg-[#1f1f1f]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/blksmk8483"
            >
              <FaGithub size={60} />
            </a>
          </li>
          <li className="bg-[#6fc2b0] w-[60px] h-[60px] flex justify-between items-center rounded-full hover:bg-[#599b8d]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              rel="noreferrer"
              href="mailto:brandonknightwork@gmail.com"
            >
              <HiOutlineMail size={60} />
            </a>
          </li>
          <li className=" bg-[#565f69] w-[60px] h-[60px] flex justify-between items-center rounded-full hover:bg-[#454c54]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={Resume}
            >
              <BsFillPersonLinesFill size={60} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
