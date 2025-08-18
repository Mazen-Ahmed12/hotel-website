"use client";

import { InfoBar } from "@/components/InfoBar";
import { MainPage } from "./components/MainPage";
import { About } from "./components/About";
import { MiddleContent } from "@/app/components/HotelCheckIn";
import { ScrollingBars } from "@/app/components/ScrollingBars";
import { RoomsAndSuites } from "@/app/components/RoomsAndSuites";
import { HotelServices } from "@/app/components/HotelServices";
import { VideoSection } from "@/app/components/VideoSection";
import { FoodAndDrinks } from "@/app/components/FoodAndDrinks";
import { SpecialOffers } from "./components/SpecialOffers";
import { Testimonial } from "./components/Testimonial";
import { Staff } from "./components/staff";
import { HotelNews } from "@/app/components/HotelNews";
import { Gallery } from "@/app/components/Gallery";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <InfoBar />
      <MainPage />
      <MiddleContent />
      <About />
      <ScrollingBars />
      <RoomsAndSuites />
      <HotelServices />
      <VideoSection />
      <FoodAndDrinks />
      <SpecialOffers />
      <Testimonial />
      <Staff/>
      <HotelNews/>
      <Gallery />
      <Footer />
    </div>
  );
}
