import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full max-h-full bg-violet-600 text-gray-300 pb-10"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-4 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-violet-800">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-y-3 gap-x-8 px-4">
          <div className="sm:text-right text-2xl font-bold">
            <p className="text-[#ccd6f6]">
              Hi. I'm Brandon, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p className="mb-2.5 leading-snug text-violet-200">
              Music educator turned web developer, I am excited to embark on a
              new career as a Full-Stack Web Developer.
            </p>

            <p className="mb-2.5 leading-snug text-violet-200">
              I graduated from the Full Stack Coding Bootcamp at the University
              of Texas Austin, where I gained a solid foundation in React,
              JavaScript, HTML, CSS, Express, MongoDB, Bootstrap, Tailwind, and
              more.
            </p>
            <p className="mb-2.5 leading-snug text-violet-200">
              In my previous role as a Band Director, I was an integral part of
              a dedicated team of directors. Together, we guided our student
              musicians to numerous achievements within the Fine Arts realm.
              This experience cultivated essential skills in teaching, music
              technology, public speaking, public engagement, communication, and
              effective team collaboration.
            </p>
            <p className="mb-2.5 leading-snug text-violet-200">
              I hold a Bachelor of Science Degree in Education. Additionally, I
              ventured into entrepreneurship by founding Lavender Cove Farm,
              where I manage the day-to-day operations. Our business caters to
              both local and online customers and provides education for growing
              in the Central Texas area.
            </p>
            <p className="mb-2.5 leading-snug text-violet-200">
              I am eager to apply my diverse skill set and experiences to
              contribute to innovative web development projects, continuously
              learning and growing in this dynamic field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
