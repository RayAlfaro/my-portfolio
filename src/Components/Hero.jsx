import React, { Fragment } from "react";
import AnimatedTitle from "./Utils/AnimatedTitle";
import { FaFacebook } from "react-icons/fa";
import { BsWhatsapp, BsTwitter } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";

const Hero = () => {
  return (
    <Fragment>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-16 pb-20"
      >
        <div className="absolute inset-0 bg-[url('./assets/profile.jpg')] bg-center bg-cover bg-no-repeat"></div>
        <div className="absolute inset-0"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 flex flec-col md:flex-row items-center">
            <div className="flex-1 text-center md:text-left">
                <h3 className="text-1g font-light capitalize tracking-wide text-teal-500">
                    Hello, I'm Raylynndon Alfaro!
                </h3>
                <AnimatedTitle />
                <p className="mt-4 text-gray-300 max-w-xl">
                    I'm a passionate IT student and aspiring web developer with a knack for creating dynamic and responsive web applications. Welcome to my portfolio!
                </p>
                <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-gray-400">
                    <span className="px-4 py-2 bg-white/10 rounded-full">UI/UX Design</span>
                    <span className="px-4 py-2 bg-white/10 rounded-full">Web Design</span>
                    <span className="px-4 py-2 bg-white/10 rounded-full">Frontend Development</span>
                </div>

                <div className="flex text-gray-400 gap-5 mt-8 justify-center md:justify-start">
                    <button className="p-3 bg-white/10 rounded-full hover:bg-teal-400 transition-colors">
                        <FaFacebook />  
                    </button>
                    <button className="p-3 bg-white/10 rounded-full hover:bg-teal-400 transition-colors">
                        <BsWhatsapp />  
                    </button><button className="p-3 bg-white/10 rounded-full hover:bg-teal-400 transition-colors">
                        <LiaLinkedin />  
                    </button><button className="p-3 bg-white/10 rounded-full hover:bg-teal-400 transition-colors">
                        <BsTwitter />  
                    </button>
                </div>
            </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Hero;
