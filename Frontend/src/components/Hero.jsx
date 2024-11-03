"use client";
import Image from "next/image";
import { curve, heroBackground, robot, spidersWeb } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef, useState, useEffect} from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import Xgrid from "../assets/svg/Xgrid";
import {ooorganize,x1,x2,} from "../assets"

const Hero = () => {
  const parallaxRef = useRef(null);
  // const scrollContainerRef = useRef(null);
  const [usingScanner, setusingScanner]=useState(false);

    const toggleNavigation = () => {
      const toggleScannerItem = document.querySelector('.usingScanner');
      if (usingScanner) {
        setusingScanner(false);
        toggleScannerItem.classList.toggle('active');
        // enablePageScroll();
      } else {
        setusingScanner(true);
        toggleScannerItem.classList.remove('active');
        // disablePageScroll();
      }
    };
  
    const handleClick = () => {
      if (!usingScanner) return;
  
      // enablePageScroll();
      setusingScanner(false);
    };
  
  return (
    <Section
      className="py-[1rem] lg:py[1rem] lg:py[1rem] bg-black opacity-[10] z-0"
      crosses
      crossesOffset=" lg:translate-y-[1.25rem]"
      // customPaddings
      id="hero"
      
    >
      
      <div className="container relative " 
            ref={parallaxRef}>
      <ScrollParallax 
            strength={.3}
            // parallaxContainerRef={parallaxRef}
            // lerpEase={.3}
            shouldPause={true}

            zIndex={-1}
        >
        {/* <div className="absolute bg-red-50 top-0">
            <div className="back-block  gap-8 h-[30rem] p-4">
              <div className="border-2 p-4 relative flex flex-row">
                <span className="relative border-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-[.5rem] h-[3rem] w-[4.5rem] px-2 mx-1 my-2"></span>
                <span className="relative border-2 border-t-gray-400 border-l-blue-400 border-b-pink-400 border-r-yellow-200 border-transparent rounded-[.5rem] h-[3rem] w-[4.5rem] px-2 mx-1 my-2"></span>
                <span className="relative border-2 rounded-[.5rem] h-[3rem] w-[4.5rem] px-2 mx-1 my-2"></span>
                <span className="relative border-2 rounded-[.5rem] h-[3rem] w-[4.5rem] px-2 mx-1 my-2"></span>
                <span className="relative border-2 rounded-[.5rem] h-[3rem] w-[4.5rem] px-2 mx-1 my-2"></span>
              </div>  
              <div className="border-2 p-4 relative flex flex-row">
                <span className="relative border-2 rounded-[.5rem] h-[3rem] w-[4.5rem] px-2 mx-1 my-2"></span>
                <span className="relative border-2 rounded-[.5rem] h-[3rem] w-[4.5rem] px-2 mx-1 my-2"></span>
                <span className="relative border-2 rounded-[.5rem] h-[3rem] w-[4.5rem] px-2 mx-1 my-2"></span>
                <span className="relative border-2 rounded-[.5rem] h-[3rem] w-[4.5rem] px-2 mx-1 my-2"></span>
                <span className="relative border-2 rounded-[.5rem] h-[3rem] w-[4.5rem] px-2 mx-1 my-2"></span>
              </div>
            </div>  
        </div> */}
        <Image
                      className="w-fit absolute animate-pulse grayscale-5 opacity-1 transition-all px-[3rem] pt-[1.75rem] lg:pt-[2.25rem] z-1"
                      src={x2}
                      width={100}
                      height={100}
                      alt="Grid"
                    />
        </ScrollParallax>
        
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
        
        <ScrollParallax>
          <h1 className="text-[2.2rem] sm:text-[3.3rem] md:text-[4rem] lg:text-[5rem] font-bold my-[1rem] sm:my-[2rem] md:my-[2.5rem] pb-[1rem] sm:pb-[2rem] md:pb-[2.3rem] flex flex-1 transition-all-400 justify-center items-center">
            <span className="hover:text-red-600 hover:translate-y-2 relative rotate-10 transition-all">H</span>
            <span className="hover:text-yellow-600 hover:translate-y-2 relative rotate-10 transition-all">i&nbsp;</span>
            <span className="hover:text-blue-600 hover:translate-y-2 relative rotate-10 transition-all">t</span>
            <span className="hover:text-green-600 hover:translate-y-2 relative rotate-10 transition-all">h</span>
            <span className="hover:text-pink-500 hover:translate-y-2 relative rotate-10 transition-all">e</span>
            <span className="hover:text-slate-500 hover:translate-y-2 relative rotate-10 transition-all">r</span>
            <span className="hover:text-orange-500 hover:translate-y-2 relative rotate-10 transition-all">e&nbsp;</span>
            <span className="hover:text-red-600 hover:translate-y-2 relative rotate-10 transition-all">I</span>
            <span className="hover:text-yellow-600 hover:translate-y-2 relative rotate-10 transition-all">&apos;</span>
            <span className="hover:text-blue-600 hover:translate-y-2 relative rotate-10 transition-all">M&nbsp;</span>
            <span className="hover:text-green-600 hover:translate-y-2 relative rotate-10 transition-all">D</span>
            <span className="hover:text-red-900 hover:translate-y-2 relative rotate-10 transition-all">J</span>
            {/* <span className="hover:text-green-600 hover:translate-y-2 relative rotate-10 transition-all">&nbsp;</span> */}

          </h1>
            <h1 className="text-[2rem] sm:text-[3.3rem] md:text-[4rem] lg:text-[5rem] font-bold my-10 pb-15 flex flex-1 transition-all-400 justify-center items-center">
              <span className="hover:text-green-900 hover:translate-y-2 relative rotate-10 transition-all">F</span>
              <span className="hover:text-yellow-600 hover:translate-y-2 relative rotate-10 transition-all">u</span>
              <span className="hover:text-gray-600 hover:translate-y-2 relative rotate-10 transition-all">l</span>
              <span className="hover:text-red-400 hover:translate-y-2 relative rotate-10 transition-all">l</span>
              <span className="hover:text-blue-400 hover:translate-y-2 relative rotate-10 transition-all">-</span>
              <span className="hover:text-green-600 hover:translate-y-2 relative rotate-10 transition-all">s</span>
              <span className="hover:text-slate-500 hover:translate-y-2 relative rotate-10 transition-all">t</span>
              <span className="hover:text-pink-900 hover:translate-y-2 relative rotate-10 transition-all">a</span>
              <span className="hover:text-yellow-900 hover:translate-y-2 relative rotate-10 transition-all">c</span>
              <span className="hover:text-gray-800 hover:translate-y-2 relative rotate-10 transition-all">k&nbsp;</span>
              <span className="hover:text-red-900 hover:translate-y-2 relative rotate-10 transition-all">D</span>
              <span className="hover:text-blue-900 hover:translate-y-2 relative rotate-10 transition-all">e</span>
              <span className="hover:text-gray-900 hover:translate-y-2 relative rotate-10 transition-all">v</span>
              <span className="hover:text-green-600 hover:translate-y-2 relative rotate-10 transition-all">e</span>
              <span className="hover:text-red-900 hover:translate-y-2 relative rotate-10 transition-all">l</span>
              <span className="hover:text-slate-700 hover:translate-y-2 relative rotate-10 transition-all">o</span>
              <span className="hover:text-yellow-400 hover:translate-y-2 relative rotate-10 transition-all">p</span>
              <span className="hover:text-pink-900 hover:translate-y-2 relative rotate-10 transition-all">e</span>
              <span className="hover:text-blue-400 hover:translate-y-2 relative rotate-10 transition-all">r</span>
            
          </h1>
          <p className="usingScanner h5 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-10" onMouseOver={toggleNavigation}>
          Welcome to my portfolio showcasing a culmination of my expertise in full-stack web development.
          </p>
          {/* <Button href="/pricing" white>
            Get started
          </Button> */}
          </ScrollParallax>
        </div>
        
      </div>

      {/* <BottomLine /> */}
    </Section>
  );
};

export default Hero;
