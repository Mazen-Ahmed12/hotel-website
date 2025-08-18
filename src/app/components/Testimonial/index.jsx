import React from "react";
import { Icon } from "@/components/icon";

export const Testimonial = () => {
  return (
    <section className="bg-white min-h-screen py-16 font-[Inter]">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12">
        {/* Left side: Images */}
        <div className="relative flex-1 w-full max-w-lg lg:max-w-xl">
          {/* Main larger image */}
          <div className="relative overflow-hidden rounded-3xl shadow-xl -bottom-11">
            <img
              src="/images/hotel4.jpg"
              alt="Hotel Lobby"
              className="w-full h-[550px] object-cover"
            />
          </div>
          {/* Smaller floating image */}
          <div className="absolute bottom-3 -right-10 w-36 border-4 border-white h-36 md:w-56 md:h-56 overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="/images/hotel5.jpg"
              alt="People Dining"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right side: Testimonial content */}
        <div className="flex-1 w-full max-w-lg lg:max-w-xl">
          <span className="text-[#3c9c64] bg-white px-3 py-1 rounded-md self-start text-m font-semibold">
            TESTIMONIAL
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a232f] mt-2 leading-tight">
            Amazing Feedback Say <br />
            About Services
          </h2>

          {/* Testimonial card */}
          <div className="bg-[#f0f2f5] rounded-3xl p-8 mt-8 shadow-md">
            {/* Star rating */}
            <div className="flex gap-1 text-[#FFC400] mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon
                  name="Star"
                  key={i}
                  className="fill-[#FFC400]"
                  size={16}
                />
              ))}
            </div>
            <p className="text-gray-700 text-xl italic leading-relaxed">
              &quot;Special treat to dine, it was wow experience food was really
              delicious outstanding dinner made by Master chef food experience
              was unforgetable&quot;
            </p>
            {/* Client info */}
            <div className="flex relative items-center gap-4 pt-5 mt-6 border-t-2">
              <div className="w-18 h-18 rounded-full overflow-hidden">
                <img
                  src="/images/client3.jpg"
                  alt="Bella Andrew"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute bottom-12 left-12 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                <Icon
                  name="Quote"
                  className="transform rotate-180 text-gray-700 fill-gray-700"
                  size={10}
                />
              </div>

              {/* Text details */}
              <div>
                <span className="text-2xl block font-semibold text-gray-800">
                  Bella Andrew
                </span>
                <span className="block text-base text-gray-500">Customer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
