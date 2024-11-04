import Section from "./Section";
import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import { ScrollParallax } from "react-just-parallax";
import { heroIcons } from "../constants";
import { BottomLine, Gradient, BackgroundCircles } from "./design/Hero";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div
          className="relative z-1 max-w-[62rem] mx-auto
        text-center mb-[4rem] md:mb-20 lg:mb-[6rem]"
        >
          <h1 className="mb-6 h1">
            Explore the Possibilities of&nbsp;AI&nbsp;Chatting with {` `}
            <span className="relative inline-block">
              Brainwave
              <img
                src={curve}
                alt="curve"
                className="absolute left-0 w-full top-full xl:-mt-2 "
              />
            </span>
          </h1>
          <p className="max-w-3xl mx-auto mb-4 body-1 text-n-2 lg:mb-8">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          <Button href="/pricing" white>
            Get Started
          </Button>
        </div>
        <div
          className="relative max-w-[23] mx-auto
        md:max-w-5xl xl:mb-24"
        >
          <div className="relative p-0 z-1 5 rounded-2xl bg-conic-gradient">
            <div className="relative rounded-[1rem] bg-n-8">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]"></div>
              <div
                className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden
              md:aspect-[688/490] lg:aspect-[1024/490]"
              >
                <img
                  src={robot}
                  alt="AI"
                  className="w-full scale-[1.7] translate-y-[8%]
                  md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                />
                <Generating
                  className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto
                  md:bottom-8 md:w-[31rem] md:-translate-x-1/2"
                />
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem]  bottom-[7.5rem] px-1 py-1 rounded-2xl xl:flex backdrop-blur border border-n-1/10 bg-n-9/40">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} alt={icon} height={25} width={24} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem]
                  xl:flex"
                    title="Code generation"
                  />
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>
          <div
            className="absolute -top-[54%]
          left-1/2 w-[234%] md:-top-[46%] md:w-[130%]
          -translate-x-1/2 lg:-top-[104%]
          "
          >
            <img
              src={heroBackground}
              className="w-full"
              alt="hero"
              height={1800}
              width={1440}
            />
          </div>
          <BackgroundCircles />
        </div>
        <CompanyLogos className="relative z-10 hidden mt-20 lg:block" />
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
