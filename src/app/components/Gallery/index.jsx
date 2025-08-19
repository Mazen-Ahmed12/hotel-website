import React from "react";
import Image from "next/image";
import { Icon } from "@/components/icon";

export const Gallery = () => {
  const images = [
    "/images/Hotel1.jpg",
    "/images/Hotel2.jpg",
    "/images/Hotel3.jpg",
    "/images/Hotel4.jpg",
    "/images/Hotel5.jpg",
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="flex w-full h-80">
        {images.map((src, index) => (
          <div key={index} className="relative flex-1">
            <img
              src={src}
              alt={`Instagram post ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-60 h-60 rounded-xl bg-white dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-70 transition-colors duration-200">
          <Icon
            name="instagram"
            className="relative pr-1 text-teal-600 dark:text-teal-400"
            size={25}
          />
          <h1 className="w-1/2 mt-2 text-xl font-bold text-center text-teal-600 dark:text-teal-400">
            Follow Our Instagram
          </h1>
        </div>
      </div>
    </div>
  );
};

