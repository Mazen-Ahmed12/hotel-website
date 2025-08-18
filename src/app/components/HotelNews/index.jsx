import React from "react";
import { RoomCard } from "./RoomCard";

export const HotelNews = () => {
  const newsItems = [
    {
      type: "Hotel",
      date: "January 10, 2024",
      author: "Admin",
      title: "Most Expensive Hotel Rooms in New York",
      description:
        "Perspiciatis omnis iste voluptatem accusamus loremque dolorque laudantium, totam aperiam.",
      image: "/images/Hotel6.jpg",
    },
    {
      type: "Resort",
      date: "January 10, 2024",
      author: "Admin",
      title: "Our New Miami Beach Hotel is Open",
      description:
        "Perspiciatis omnis iste voluptatem accusamus loremque dolorque laudantium, totam aperiam.",
      image: "/images/Hotel7.jpg",
    },
    {
      type: "Resort",
      date: "January 10, 2024",
      author: "Admin",
      title: "Guests Offers Exclusive Facilities To Services",
      description:
        "Perspiciatis omnis iste voluptatem accusamus loremque dolorque laudantium, totam aperiam.",
      image: "/images/Hotel8.jpg",
    },
  ];
  return (
    <div className="bg-[#e9f0ec] py-16 font-[Inter]">
      <div className="container mx-auto px-4 text-center">
        <span className="text-[##3c9c64] bg-white px-3 py-1 rounded-md self-start text-sm font-semibold">
          HOTEL NEWS
        </span>
        <h2 className="mt-2 text-3xl font-bold text-gray-800 sm:text-4xl">
          Get More Update For Fixyland
        </h2>
        <div className="mt-12 w-full flex flex-row justify-center gap-6 px-32">
          {newsItems.map((item, index) => (
            <RoomCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
