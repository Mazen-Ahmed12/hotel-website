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
    <NavigationMenuItem>
      <NavigationMenuTrigger className={className}>
        {label}
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
  );
};
