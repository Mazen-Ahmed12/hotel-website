import React from "react";
import {
  NavigationMenu, NavigationMenuList
} from "@/components/ui/navigation-menu";
import { NavigationItems } from "@/app/components/HotelCheckIn/NavigationItems";
import { Button } from "./ui/button";
export const HeaderLinks = () => {
  return (
    <div className="h-full flex items-center">
      <div className="flex gap-4 px-4 py-3">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationItems
              label="Home"
              className="w-34 h-12 !bg-transparent"
            />
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationItems
              label="Pages"
              className="w-34 h-12 !bg-transparent"
            />
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationItems
              label="RoomsAndSuits"
              className="w-34 h-12 !bg-transparent"
            />
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationItems
              label="Services"
              className="w-34 h-12 !bg-transparent"
            />
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationItems
              label="Blog"
              className="w-34 h-12 !bg-transparent"
            />
          </NavigationMenuList>
        </NavigationMenu>

        <Button
          className="bg-transparent shadow-none text-black place-self-center"
        >
          Contact
        </Button>
      </div>
    </div>
  );
};
