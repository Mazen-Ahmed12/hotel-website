// components/ScrollingBars.tsx
"use client";
import React from "react";

const messages = [
  "Luxury Hotel",
  "Hotel & Resort",
  "Holiday Booking",
  "Relax & Enjoy",
];

const ScrollingBars = () => {
  return (
    <div className="relative overflow-hidden w-full h-40 bg-[#e9f0ec] flex flex-col items-center justify-center gap-6">
      {/* Dark bar (scrolls left) */}
      <div className="absolute -rotate-3 w-[120%] bg-gray-900 py-4 overflow-hidden">
        <div className="flex animate-marquee-left whitespace-nowrap">
          {messages.concat(messages).map((msg, idx) => (
            <span
              key={`dark-${idx}`}
              className="text-white text-xl md:text-2xl font-bold uppercase flex items-center gap-4 px-8"
            >
              {msg} ✦
            </span>
          ))}
        </div>
      </div>

      {/* Green bar (scrolls right) */}
      <div className="absolute rotate-3 w-[120%] bg-teal-600 py-4 overflow-hidden">
        <div className="flex animate-marquee-right whitespace-nowrap">
          {messages.concat(messages).map((msg, idx) => (
            <span
              key={`green-${idx}`}
              className="text-white text-xl md:text-2xl font-bold uppercase flex items-center gap-4 px-8"
            >
              {msg} ✦
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingBars;
