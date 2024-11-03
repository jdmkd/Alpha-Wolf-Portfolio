import Image from "next/image";
import ButtonGradient from "../assets/svg/ButtonGradient";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Collaboration from "@/components/Collaboration";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Roadmap from "@/components/Roadmap";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Academics from "@/components/Academics";
import { spidersWeb,check2, grid, loading1 } from "../assets";
import Xgrid from "@/assets/svg/Xgrid";
import {ooorganize,x1,x2,} from "../assets"
import {ScrollParallax} from "react-just-parallax"
// import { useRef } from "react";

import axios from 'axios';

async function getAcademicsData() {
  const res = await axios.get('http://localhost:8080/api/home') // Assuming backend runs on same domain
  const udata = res.data.userdata;
  // console.log("res.json()x :", udata);
  // console.log(userdata.map(user => ({"idx":user.id, "usernamex":user.name})))

  // if (!res.ok) {
  //   throw new Error('Failed to fetch datax')
  // }

  return udata
}
async function getProjectData() {
  const res = await axios.get('http://localhost:8080/api/projects') // Assuming backend runs on same domain
  const ProjectData = res.data.ProjectData;
  // console.log("res.json()x :", ProjectData);
  return ProjectData
}

// export default async function Home() {
//   const data = await getData()
  
//   return (
//     <div>
//       {data.map(user => (
//         <div key={user._id}>
//             <h1>Name : {user.Name}</h1>
//             <h1>Age : {user.Age}</h1>
//             <h1>Grade : {user.Grade}</h1>
//         </div>
      
//       ))}
//     </div>
//   );
// }


export default async function Home() {
  // const parallaxRef = useRef(null);
  const AcademicsData = await getAcademicsData()
  const ProjectData = await getProjectData()
  return (
    <>
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      {/* <div className="container relative" ref={parallaxRef}> */}
          {/* <Image
                      className="w-full grayscale-9 absolute px-10 pt-[1.75rem] lg:pt-[2.25rem] z-1"
                      src={x2}
                      width={40}
                      height={40}
                      alt="Grid"
                    /> */}
      {/* </div> */}
      <Header />
      <Hero />
      <Skills />
      {/* <Collaboration /> */}
      {/* <Services /> */}

      <Academics AcademicsData={AcademicsData} />
      {/* <Pricing /> */}
      <Projects ProjectData={ProjectData}/>
      {/* <Roadmap /> */}
      <Footer />
      
    </div>

    <ButtonGradient />
  </>
  );
}
