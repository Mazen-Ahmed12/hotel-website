import React, { useState } from "react";
import { VideoDialog } from "./VideoDialog";
import { Icon } from "../../../components/icon";
import { Button } from "../../../components/ui/button";

export const VideoSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <section
        className="relative h-[500px] bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/Room2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <Button
            className="w-24 h-24 bg-white bg-opacity-30 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 hover:bg-opacity-40 transition-all duration-300"
            aria-label="Play video"
            onClick={() => setIsDialogOpen(true)}
          >
            <Icon name="Play" size={25} />
          </Button>
        </div>
      </section>
      <VideoDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        videoSrc="/videos/hotel.mp4"
      />
    </>
  );
};
