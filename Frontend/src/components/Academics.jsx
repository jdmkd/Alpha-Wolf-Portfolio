import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { werewolfServices, werewolfServicesIcons } from "../constants";
import { AcademicsBg } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const Academics = (AcademicsData) => {
  // console.log("getAcademicsData ::>", AcademicsData)

  return (
    <Section crosses id="how-to-use" className="bg-black/60">
      <div className="container px-[.4rem] sm:px-[1rem] md:px-[2rem] lg:px-[4rem] mt-[-3rem!important] ">
        <Heading
          className="text-[10rem] font-bold my-[2rem!important]"
          title="Academic Qualification"
          // text="werewolf unlocks the potential of AI-powered applications"
        />
        
        <div className={`relative  p-0.25 rounded-[1rem] ${
                "bg-conic-gradient "}`}>
          <div className="flex gap-[1rem] max-lg:flex-wrap">
            <div className="  relative z-1 w-[19rem] max-lg:w-full lg:w-full h-full px-6 shadow-sm shadow-neutral-400 bg-n-8 border border-n-6 rounded-[1rem]  even:py-14 odd:py-8 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3">
              <ul className="body-5">
                { AcademicsData.AcademicsData.map((item, index) => (
                  <li
                  className=" text-white bg-slate-100 opacity-[1] bg-transparent flex mb-5 justify-between items-center py-[.2rem] px-[1rem] rounded-2xl border border-n-5 h-[6rem]"
                    key={index}
                    id={item._id}
                  >
                    <Image className="mx-[.5rem]" width={24} height={24} src={check} alt="check" />
                    <p className="px-[.8rem] sm:px-[1rem] text-[.9rem] sm:text-[1.2rem] md:text-[1.5rem] lg:text-[1.8rem] xl:text-[1.8rem] font-bold">{item.sort_title ? item.sort_title : item.title}</p>    
                    <p className="px-[.8rem] sm:px-[1rem] text-[.7rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] xl:text-[1.6rem] font-bold">{item.university ? item.university :item.school}</p>
                    <p className="px-[.8rem] sm:px-[1rem] text-[.7rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] xl:text-[1.5rem] font-normal">{item.passOutYear}</p>
                    {/* <p className="font-normal ml-10">{item.cgpa}</p> */}
                  </li>
                ))}

                
              </ul>
            </div>

            {/* <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" /> */}
          </div>

          

          <Gradient className="z-50"/>
        </div>
      </div>






    </Section>
  );
};

export default Academics;
