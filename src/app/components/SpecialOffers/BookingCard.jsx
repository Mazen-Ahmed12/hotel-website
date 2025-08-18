import { Icon } from "@/components/icon";
import React from "react";

export const BookingCard = ({ image, discount, title }) => {
  return (
    <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg overflow-hidden rounded-3xl shadow-xl transition-transform duration-300 ease-in-out hover:scale-[1.02]">
      {/* Background image for the card */}
      <img
        src={image}
        alt={title}
        className="w-full h-72 object-cover brightness-75"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div className="flex flex-col items-start space-y-3">
          {/* Discount badge */}
          <div
            className="bg-white/0 border-white/50 px-3 py-1 text-xs font-semibold text-[#1a232f]  border-b-2 border-b-white/70 
                border-l border-l-white/30 
                border-r border-r-white/30"
          >
            {discount}
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-snug">
            {title}
          </h2>

          {/* "Book Now" button */}
          <button className="flex items-center gap-2 text-black bg-white bg-opacity-20 px-4 py-2 rounded-[3px] font-semibold text-sm transition-all duration-300 ease-in-out hover:bg-opacity-30 backdrop-blur-sm">
            Book Now
            <Icon name="MoveUpRight" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
