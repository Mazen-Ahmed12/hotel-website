import React from "react";

import { CheckInDate } from "./CheckInDate";
import { NavigationItems } from "./NavigationItems";
import { NavigationMenu, NavigationMenuList } from "../../../components/ui/navigation-menu";
import { Button } from "../../../components/ui/button";
import { Icon } from "../../../components/icon";

export const MiddleContent = () => {
  return (
    <div className="absolute inset-x-0 left-60 -bottom-40 mx-auto w-[84%] z-10 ">
      <div className="flex w-full h-40 bg-[#487964]/70 p-6 rounded-lg shadow-lg">
        <div className="flex items-center gap-6">
          <CheckInDate label="Check In" />
          <CheckInDate label="Check Out" />

          <div className="h-full flex items-center">
            <div className="flex gap-4 px-4 py-3">
              
              <div className="flex flex-col gap-3">
                <h1>Room</h1>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationItems label="Room" className="w-34 h-12" />
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
              
              <div className="flex flex-col gap-3">
                <h1>Adults</h1>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationItems label="Adults" className="w-34 h-12" />
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
              
              <div className="flex flex-col gap-3">
                <h1>Children</h1>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationItems label="Children" className="w-34 h-12 " />
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>
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
