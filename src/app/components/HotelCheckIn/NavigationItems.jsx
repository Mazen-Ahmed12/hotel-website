import React from "react";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export const NavigationItems = ({ label, className }) => {
  return (
    <NavigationMenuItem >
      <NavigationMenuTrigger className={className}>
        {label}
      </NavigationMenuTrigger>
      <NavigationMenuContent className="!w-35">
        <ul className="!bg-transparent">
          <NavigationMenuLink asChild>
            <Link href="#" className="w-full px-4 py-2 hover:bg-gray-100">
              Single Room
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link href="#" className="w-full px-4 py-2 hover:bg-gray-100 ">
              Double Room
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link href="#" className="w-full px-4 py-2 hover:bg-gray-100 ">
              Suite
            </Link>
          </NavigationMenuLink>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
