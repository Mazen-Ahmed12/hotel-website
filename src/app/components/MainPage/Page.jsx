"use client";

import { Header } from "@/components/Header";
import Image from "next/image";
import React from "react";

export const Page = () => {
  return (
    <div className="relative w-full min-h-screen">
      <Image
        src="/images/hotel1.jpg" // full page background
        alt="Hotel Background"
        priority
        fill 
        className="object-cover"
      />
      <Header />
    </div>
  );
};
