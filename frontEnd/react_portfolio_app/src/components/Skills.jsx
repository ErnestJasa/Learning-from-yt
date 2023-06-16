import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import DotNet from "../assets/dotnet.png";
import MsSql from "../assets/mssql.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] flex justify-center text-gray-300">
      {/* container */}
      <div className="max-w-[1000px] p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl  font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">
            // These are the technologies I'm familiar with
          </p>
        </div>
        {/* icons container */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-[400ms]">
            <img className="w-20 mx-auto" src={DotNet} alt="DotNet icon" />
            <p className="my-4">.NET</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-[400ms]">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-[400ms]">
            <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-[400ms]">
            <img className=" w-24 mx-auto" src={MsSql} alt="MsSql icon" />
            <p className="my-4">MS SQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-[400ms]">
            <img className="w-20 mx-auto" src={HTML} alt="html icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-[400ms]">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
