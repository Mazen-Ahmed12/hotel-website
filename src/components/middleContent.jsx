import React from "react";

import { CheckInDate } from "./CheckInDate";
import { NavigationItems } from "./NavigationItems";
import { NavigationMenu, NavigationMenuList } from "./ui/navigation-menu";
import { Button } from "./ui/button";
import { Icon } from "./icon";

export const MiddleContent = () => {
  return (
    <div className="absolute inset-x-0 left-60 -bottom-40 mx-auto w-[84%] z-10 ">
      <div className="flex w-full h-40 bg-[#487964]/70 p-6 rounded-lg shadow-lg">
        <div className="flex items-center gap-6">
          <CheckInDate label="Check In" />
          <CheckInDate label="Check Out" />

          <div className="h-full flex items-center">
            <NavigationMenu className="flex items-center px-4 py-3">
              <NavigationMenuList className="flex gap-4">
                <div className="flex flex-col gap-3">
                  <h1>Room</h1>
                  <NavigationItems label="Room" className="w-34 h-12" />
                </div>
                <div className="flex flex-col gap-3">
                  <h1>Room</h1>
                  <NavigationItems label="Adults" className="w-34 h-12" />
                </div>
                <div className="flex flex-col gap-3">
                  <h1>Room</h1>
                  <NavigationItems label="children" className="w-34 h-12" />
                </div>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <Button className="flex items-center mt-8 !p-6 bg-[#e6c466] hover:bg-[#e6c466] !px-7 py-5 !rounded-sm text-black">
            <span>Book Now</span>
            <Icon
              name="MoveUpRight"
              size={16}
              strokeWidth={3}
              className="text-black"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};
