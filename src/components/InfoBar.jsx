import React from "react";
import { Icon } from "./icon";
import Link from "next/link";

export const InfoBar = () => {
  return (
    <div className="w-full bg-[#1f8f6a] text-white text-sm py-2 px-4 flex items-center justify-between">
      {/* Left side of the bar the contact info */}
      <div className="flex items-center gap-3 pl-11">
        <div className="flex items-center">
          <Icon name="Dot" size={30} strokeWidth={4} className="text-yellow-300" />
          <span>7631 sebrina park, 115 devon isle, USA</span>
        </div>
        <div className="flex items-center">
          <Icon name="Dot" size={30} strokeWidth={4} className="text-yellow-300" />
          <span>info@hotel.com</span>
        </div>
        <div className="flex items-center">
          <Icon name="Dot" size={30} strokeWidth={4} className="text-yellow-300" />
          <span>+(1) 987 654 3210</span>
        </div>
      </div>
      <div className="flex items-center gap-3 pr-13">
        {/* Right side of the bar the social Icons */}
        <div className="flex items-center gap-1 justify-between space-x-6">
          <Link href="https://www.facebook.com/">
            <Icon name="facebook" size={20} />
          </Link>
          <Link href="https://www.x.com/">
            <Icon name="twitter" size={20} />
          </Link>
          <Link href="https://www.instagram.com/">
            <Icon name="instagram" size={20} />
          </Link>
          <Link href="https://www.behance.net/">
            <Icon name="behance" size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};
