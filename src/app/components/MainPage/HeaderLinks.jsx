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

export const HeaderLinks = () => {
  return (
    <NavigationMenu className="flex items-center px-4 py-3">
      <NavigationMenuList className="flex gap-6">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:!bg-transparent [&[data-state=open]]:bg-transparent">
            Simple
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex w-full gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">Lorem Ipsum</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Lorem Ipsum</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Lorem Ipsum</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:!bg-transparent [&[data-state=open]]:bg-transparent">
            Home
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex w-full gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">Lorem Ipsum</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Lorem Ipsum</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Lorem Ipsum</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:!bg-transparent [&[data-state=open]]:bg-transparent">
            Pages
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex w-full gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">Lorem Ipsum</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Lorem Ipsum</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Lorem Ipsum</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:!bg-transparent [&[data-state=open]]:bg-transparent">
            Rooms & Suites
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex w-full gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">Lorem Ipsum</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Lorem Ipsum</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Lorem Ipsum</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:!bg-transparent [&[data-state=open]]:bg-transparent">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex w-full gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">Lorem Ipsum</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Lorem Ipsum</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Lorem Ipsum</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
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

 
