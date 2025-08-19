import React from "react";
import { Icon } from "../../../components/icon";
import Image from "next/image";


export const About = () => {
  
  const features = [
    {
      name: "24-Hours Emergency Service",
    },
    {
      name: "Comfortable Atmosphere",
    },
    {
      name: "Something by accident",
    },
    {
      name: "It is a Long Established fact",
    },
    {
      name: "Flexible and Cost-Effective",
    },
    {
      name: "Get Free Consultation Anytime",
    },
  ];
  return (
    <div className="w-full h-full pt-30 z-10 flex flex-col gap-5 items-center justify-center bg-gray-100 dark:bg-gray-950 transition-colors duration-200">
      <div className="w-full h-full relative flex justify-center items-center bg-gray-100 dark:bg-gray-950 p-4 md:p-6 !py-30 font-sans transition-colors duration-200">
        <div className="px-30 flex flex-col lg:flex-row items-center">
          {/* Left Side: Image with decorations */}
          <div className="relative w-full h-[450px] sm:h-[550px] flex items-end justify-end">
            {/* Dotted background */}
            <div
              className="absolute -top-20 left-0 w-48 h-48 bg-repeat bg-center rounded-full bg-[radial-gradient(#a0b5a9_2px,transparent_2px)] bg-[length:16px_16px]"
            ></div>

            {/* Main Image */}
            <div className="relative w-[80%] h-full z-10 rounded-3xl shadow-2xl [clip-path:polygon(0_0,100%_0,100%_calc(100%-50px),calc(100%-50px)_100%,0_100%)]">
              <Image
                src="/images/hotel1.jpg"
                alt="Luxury Hotel Interior"
                fill
                className="object-cover rounded-3xl"
              />
            </div>

            {/* Circular Badge */}
            <div className="absolute !bottom-24 right-0 md:right-5 z-20 w-34 h-34 flex items-center justify-center">
              <div className="absolute w-full h-full animate-spin-slow bg-white rounded-full">
                <div className="relative w-full h-full">
                  {"30 Years of Experience - Hotel Business -"
                    .split("")
                    .map((char, i) => (
                      <span
                        key={i}
                        className="absolute left-1/2 top-0 origin-[0_66px] text-sm font-semibold tracking-wider uppercase text-gray-600"
                        style={{ transform: `rotate(${i * 8.5}deg)` }}
                      >
                        {char}
                      </span>
                    ))}
                </div>
              </div>
              <div className="w-12 h-12 bg-teal-500 absolute rounded-full flex items-center justify-center shadow-lg">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col justify-center gap-4 px-25 mx-25 ">
            <span className="text-teal-600 bg-white px-3 py-1 rounded-md self-start text-sm font-semibold">
              ABOUT FIXYLAND
            </span>
            <h1 className="text-4xl md:text-5xl font-bold dark:text-white text-gray-950 leading-tight">
              World Class Luxury Hotel and Resort Near City
            </h1>
            <p className="text-gray-600 dark:text-white">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even.
            </p>

            <div className="flex flex-wrap -mx-4 mt-4">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="w-full sm:w-1/2 px-4 mb-4 flex items-center gap-3"
                >
                  <Icon
                    name="CheckCircle"
                    className="text-teal-500"
                    size={20}
                  />
                  <span className="text-gray-700 dark:text-white">{feature.name}</span>
                </div>
              ))}
            </div>

            <div className="border-gray-300 flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src="/images/Robert-L.Robinson.jpg"
                  alt="Robert L. Robinson"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-gray-800 dark:text-white">Robert L. Robinson</p>
                <p className="text-gray-500 dark:text-white">CEO & Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
