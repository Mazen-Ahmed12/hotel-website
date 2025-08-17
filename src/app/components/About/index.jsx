import { Icon } from "@/components/icon";
import ImageGallery from "@/components/ImageGallery";
import { Button } from "@/components/ui/button";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
 
  return (
    <div className="w-full h-full pt-30 z-10 flex flex-col gap-5 items-center justify-center bg-[#e9f0ec]">
      <ImageGallery/>
    </div>
  );
};
