"use client";

import { Header } from "@/components/Header";
import { Icon } from "@/components/icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";

export const MainPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hotel1.jpg"
          alt="Luxury Hotel Lobby"
          priority
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />
        
        {/* Hero Content */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto space-y-6 md:space-y-8">
            <div className="overflow-hidden">
              <h1 
                className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 md:mb-4 transform transition-all duration-700 ease-out ${
                  isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                Experience Unmatched Luxury
              </h1>
            </div>
            
            <div className="overflow-hidden">
              <h2 
                className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#e6c466] mb-6 md:mb-8 transform transition-all duration-700 ease-out delay-100 ${
                  isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                Where Every Stay is Exceptional
              </h2>
            </div>
            
            <div className="overflow-hidden">
              <p 
                className={`text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 md:mb-12 transform transition-all duration-700 ease-out delay-200 ${
                  isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                Indulge in the perfect blend of comfort and sophistication at our luxury hotel. Experience world-class amenities, exquisite dining, and impeccable service in the heart of the city.
              </p>
            </div>
            
            <div 
              className={`flex flex-col sm:flex-row justify-center gap-4 md:gap-6 transform transition-all duration-700 ease-out delay-300 ${
                isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <Button 
                className="bg-[#e6c466] hover:bg-[#d4b35a] text-black hover:text-white px-8 py-6 rounded-sm font-medium text-sm md:text-base transition-all duration-300 flex items-center gap-2 animate-bounce"
                size="lg"
              >
                Book Your Stay
                <Icon
                  name="MoveUpRight"
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Button>
              <Button 
                variant="outline" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6 rounded-sm font-medium text-sm md:text-base transition-all duration-300 flex items-center gap-2 group"
                size="lg"
              >
                Explore Our Rooms
                <Icon
                  name="ArrowRight"
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
