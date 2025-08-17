"use client";

import { InfoBar } from "@/components/InfoBar";
import { MainPage } from "./components/MainPage";
import { About } from "./components/About";
import { MiddleContent } from "@/components/middleContent";
import { ScrollingBars } from "@/components/ScrollingBars";
import { RoomsAndSuites } from "@/components/RoomsAndSuites";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <InfoBar />
      <MainPage />
      <MiddleContent />
      <About />
      <ScrollingBars />
      <RoomsAndSuites />
    </div>
  );
}
