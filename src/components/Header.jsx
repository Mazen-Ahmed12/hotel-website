import { Button } from "@/components/ui/button";

import { Icon } from "./icon";
import { HeaderLinks } from "@/components/HeaderLinks";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full">
      <div className="max-w mx-auto flex justify-between place-content-between ">
        {/* Logo */}
        <div className="bg-white dark:bg-gray-900 transform -skew-x-26 pl-30 pr-30 py-2">
          <div className="transform skew-x-[25deg]">
            <Link href="/" className="flex items-center text-black dark:text-white text-2xl font-bold">
              <Icon name="House" size={25} strokeWidth={4} className="text-black dark:text-white" />
              <span>Fixyland</span>
            </Link>
          </div>
        </div>

        {/* Header Links */}
        <HeaderLinks />

        {/* CTA Button */}
        <div className="flex items-center gap-4 px-4 py-3">
          <button className="w-12 h-12 flex items-center justify-center rounded-full transition hover:scale-105 !bg-amber-50/20">
            <Icon
              name="Search"
              size={25}
              strokeWidth={4}
              className="text-white"
            />
          </button>
          <button className="w-12 h-12 flex items-center justify-center rounded-full transition hover:scale-105 !bg-amber-50/20">
            <Icon
              name="Menu"
              size={25}
              strokeWidth={4}
              className="text-white"
            />
          </button>
          <Button className="bg-[#e6c466] hover:bg-[#e6c466] !px-7 py-5 !rounded-sm text-black">
            Book Your Stay
            <Icon
              name="MoveUpRight"
              size={25}
              strokeWidth={4}
              className="text-black"
            />
          </Button>
        </div>
      </div>
    </header>
  );
}
