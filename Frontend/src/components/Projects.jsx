import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";
import Image from "next/image";

const Projects = (ProjectData) => (
  

  // <Section className="overflow-hidden" id="roadmap">
  <Section crosses id="roadmap">
    <div className="container pb-[1rem] md:pb-[1rem]">
      <Heading tag="Projects that I am working on" title="Project works" />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {ProjectData.ProjectData.map((item, index) => {
        //   const status = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[.8rem] ${
                "bg-conic-gradient "}`}
              key={index}
              id={item._id}
            >
              <div className="relative p-8 bg-n-8 rounded-[.8rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <Image
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-[2rem]">
                    <Tagline>{item.year}</Tagline>
                  </div>

                  <div className="mb-10 -my-10 -mx-15">
                    {/* <Image
                      className="w-full"
                      src={check2}
                      width={628}
                      height={426}
                      alt={"wolf"}
                    /> */}
                  </div>
                  <h4 className="h4 my-4">{item.project_title}</h4>
                  <p className="body-2 text-blue-300">{item.technologies}</p>
                  <p className="body-2 my-[1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, fuga alias rerum fugit, aut voluptate illo corrupti, mollitia assumenda perferendis excepturi. Totam sit quae fuga nesciunt culpa at rerum ratione?</p>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>

      {/* <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="/Projects">Our roadmap</Button>
      </div> */}
    </div>
  </Section>
);

export default Projects;
