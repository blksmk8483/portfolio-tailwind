import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/profileTransparent.png";
import { Link } from "react-scroll";
import Resume from "../assets/Resume.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[70px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img
          src={Logo}
          alt="Brandon Knight profile in a circle display"
          style={{ width: "72px" }}
        />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" spy={true} smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" spy={true} smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" spy={true} smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-fuchsia-600 to-violet-600 flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="work"
            spy={true}
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500 hover:bg-blue-700">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/brandonknight8483"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333] hover:bg-[#1f1f1f]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/blksmk8483"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] hover:bg-[#599b8d]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              rel="noreferrer"
              href="mailto:brandonknightwork@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] hover:bg-[#454c54]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={Resume}
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
