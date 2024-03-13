import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-white">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-white">
            Hi, I&#39;m <span className="text-[#3ddbfb]"> Viswajith</span>
          </h1>
          <h1 className="py-2 text-white">A Front-End Web Developer</h1>
          <p className="py-4 text-white sm:max-w-[70%] m-auto">
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/viswajith-vp-b845a8242/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg hover:shadow-[#3defff] p-6 border-2 border-[#3defff] cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/Viswajith2003"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg hover:shadow-[#3defff] p-6 border-2 border-[#3defff] cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg hover:shadow-[#3defff] p-6 border-2 border-[#3defff] cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="https://www.instagram.com/viswajith_viswa03/">
              <div className="rounded-full shadow-lg hover:shadow-[#3defff] border-2 border-[#3defff] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <GrInstagram />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
