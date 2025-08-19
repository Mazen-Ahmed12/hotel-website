import React from "react";
import { BookingCard } from "./BookingCard";

export const SpecialOffers = () => {
  return (
    <div className="bg-[#e9f0ec] dark:bg-gray-800 min-h-screen py-16 font-[Inter]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#3c9c64] bg-white px-3 py-1 rounded-md self-start text-m font-semibold">
            Special Offers
          </span>
          <h1 className="w-1/3 mx-auto text-3xl sm:text-4xl font-bold text-[#1a232f] dark:text-white mt-2 leading-tight">
            Special Discount for Hotel & Resort Booking
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-8">
          <BookingCard
            image="/images/Hotel2.jpg"
            discount="30% Off"
            title="Get 30% Off on Hotel Booking"
          />
          <BookingCard
            image="/images/Hotel3.jpg"
            discount="35% Off"
            title="Get 35% Off on Resort Booking"
          />
        </div>
      </div>
    </div>
  );
};
