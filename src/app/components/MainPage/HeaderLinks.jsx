import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { NavigationItems } from "@/components/NavigationItems";
export const HeaderLinks = () => {
   const className =
      "bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-transparent data-[state=open]:focus:bg-transparent data-[state=open]:bg-transparent ";
  return (
    <NavigationMenu className="flex items-center px-4 py-3">
      <NavigationMenuList className="flex gap-6">
        <NavigationItems label="Simple" className={className}/>
        <NavigationItems label="Home" className={className}/>
        <NavigationItems label="Pages" className={className}/>
        <NavigationItems label="Rooms & Suites" className={className}/>
        <NavigationItems label="Services" className={className}/>
        <NavigationItems label="Contact" className={className}/>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={`!bg-transparent hover:!bg-transparent ${navigationMenuTriggerStyle()}`}
          >
            <Link href="/">Docs</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
