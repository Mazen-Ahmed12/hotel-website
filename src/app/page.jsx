"use client";

import { InfoBar } from "@/components/InfoBar";
import { MainPage } from "./components/MainPage";
import { About } from "./components/About";
import { MiddleContent } from "@/components/middleContent";

export default function Home() {
  return (
    <>
      <InfoBar />
      <MainPage />
      <MiddleContent />
      <About />
    </>
  );
}
