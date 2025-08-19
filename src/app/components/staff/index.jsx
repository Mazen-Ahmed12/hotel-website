import React from "react";
import { StaffCard } from "./StaffCard";
import Image from "next/image";

export const Staff = () => {
  const staffMembers = [
    {
      name: "Michael Dean",
      role: "Chef Master",
      image: "/images/MasterChef.jpg",
    },
    {
      name: "Arnold Taylor",
      role: "Room Cleaner",
      image: "/images/RoomCleaner.jpg",
    },
    {
      name: "Michael Dean",
      role: "Assistant Chef",
      image: "/images/AssistantChef.jpg",
    },
    {
      name: "Michael Dean",
      role: "Supervisor",
      image: "/images/Supervisor.jpg",
    },
  ];

const logos = [
  "/images/Beach1.jpg",
  "/images/Beach2.jpg",
  "/images/Beach3.jpg",
  "/images/Beach4.jpg",
  "/images/Beach5.jpg",
  "/images/Beach6.jpg",
]

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 font-[Inter] pt-20 transition-colors duration-200">
      {/* Green Header Section */}
      <div className="bg-teal-600 dark:bg-teal-700 pt-16 pb-100 transition-colors duration-200">
        <div className="container mx-auto px-4 py-16 -mt-20 relative z-10 transition-colors duration-200 text-center">
          <span className="inline-block rounded-md bg-white px-4 py-1 text-sm font-semibold text-teal-600">
            FIXLAND STAFF
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
            Expert Staff Persons
          </h2>
        </div>
      </div>

      {/* Cards Section - Positioned between green and white */}
      <div className="container mx-auto !bottom-8 px-4">
        <div className="relative z-10 -mt-90 flex flex-row flex-wrap justify-center">
          {staffMembers.map((staff, index) => (
            <div key={index} className="w-1/5 px-3">
              <StaffCard staff={staff} />
            </div>
          ))}
        </div>
      </div>

      {/* White Section with Logos */}
      <div className="mt-16 bg-white dark:bg-gray-900 py-12 transition-colors duration-200">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-12 px-4 md:gap-12">
          {logos.map((src, i) => (
            <div key={i} className="relative h-35 w-35">
              <img
                src={src}
                alt={`Logo ${i + 1}`}
                className="h-full w-full object-contain transition duration-300 hover:grayscale-0 dark:invert"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
