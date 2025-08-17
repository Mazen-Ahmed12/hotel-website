"use client";

import { Header } from "@/components/Header";
import { Icon } from "@/components/icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export const MainPage = () => {
  return (
    <div className="relative w-full min-h-screen">
      <Image
        src="/images/hotel1.jpg" // full page background
        alt="Hotel Background"
        priority
        fill
        className="object-cover"
      />
      <div className="absolute w-full h-full z-10">
        <Header />
        <div className="flex flex-col gap-5 items-center justify-center h-full">
          <h1 className="w-full text-center text-6xl relative text-white font-bold">
            Book With Best
          </h1>
          <h2 className="w-full text-center text-5xl text-[#e6c466] font-bold">
            Luxury Hotel
          </h2>
          <p className="w-1/2 text-center size-20 text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div className="flex flex-row gap-4">
            <Button className="bg-[#e6c466] hover:bg-[#e6c466] !px-7 py-5 !rounded-sm text-black">
              Book Your Stay
              <Icon
                name="MoveUpRight"
                size={25}
                strokeWidth={4}
                className="text-black"
              />
            </Button>
            <Button className="bg-white hover:bg-white !px-7 py-5 !rounded-sm text-black">
              Book Your Stay
              <Icon
                name="MoveUpRight"
                size={25}
                strokeWidth={4}
                className="text-black"
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
