import { check2, grid, loading1 } from "../assets";
import { roadmap } from "../constants";
import Button from "./Button";
import { Gradient } from "./design/Hero";
import Tagline from "./design/Tagline";
import Heading from "./Heading";
import Section from "./Section";

const Roadmap = () => {
  return (
    <Section className="overflow-hidden " id="roadmap">
      <div className="container md:pb-10">
        <Heading tag="Ready to get started" title=" what we're working on " />
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem] ">
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : "In progress";

            return (
              <div
                key={item.id}
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem]
                  ${item.colorful ? "bg-conic-gradient" : "bg-n-6"}  `}
              >
                <div className="relative p-8 overflow-hidden rounded-[2.425rem] bg-n-8 xl:p-15">
                  <div className="absolute top-0 left-0 max-w-full">
                    <img
                      src={grid}
                      alt="grid"
                      className="w-full"
                      width={550}
                      height={550}
                    />
                  </div>
                  <div className="relative z-1">
                    <div className="flex justify-between items max-w-[27rem] mb-8 md:mb-20">
                      <Tagline>{item.date}</Tagline>
                      <div className="flex items-center justify-between px-4 py-1  bg-n-1 rounded-[2rem] text-n-8">
                        <img
                          src={item.status === "done" ? check2 : loading1}
                          alt={status}
                          className="mr-2.5"
                          height={16}
                          width={16}
                        />
                        <div className="tagline">{status}</div>
                      </div>
                    </div>

                    <div className="mb-10 -my-10 -mx-15">
                      <img
                        src={item.imageUrl}
                        className="w-ful"
                        height={420}
                        width={630}
                        alt={item.title}
                      />
                    </div>
                    <h4 className="mb-4 h4">{item.title}</h4>
                    <p className="body-2 text-n-4">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <Gradient />
        </div>
        <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
          <Button href="/roadmap">Our roadmap</Button>
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
