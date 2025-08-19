import React from "react";
import Image from 'next/image';
import { Icon } from '../../../components/icon';
import { Button } from "@/components/ui/button";

export const RoomCard = ({room}) => {
  return (
    <div className="flex-shrink-0 w-[420px] bg-[#e9f0ec] dark:bg-gray-900 ">
      <div className="relative h-80">
        <Image src={room.image} alt={room.name} fill className="object-cover" />
        <div className="absolute top-4 left-4 bg-teal-600 text-white text-sm font-bold px-3 py-1 rounded-md">
          ${room.price} / Night
        </div>
      </div>
      <div className="flex flex-col pt-6 gap-4">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{room.name}</h3>
        <div className="flex items-center gap-6 text-gray-600">
          <span className="flex items-center gap-2 text-black dark:text-gray-200">
            <Icon name="Users" size={18} className="text-teal-600" />
            {room.guests} Guests
          </span>
          <span className="flex items-center gap-2 text-black dark:text-gray-200">
            <Icon name="Bed" size={18} className="text-teal-600" /> {room.beds}
            Beds
          </span>
          <span className="flex items-center gap-2 text-black dark:text-gray-200">
            <Icon name="Bath" size={18} className="text-teal-600" /> {room.bath}
            Bath
          </span>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed dark:text-gray-200">
          {room.description}
        </p>
        <Button className="flex items-start justify-start w-34 text-teal-600 bg-transparent shadow-none font-semibold rounded-none border-b-2 border-teal-600 gap-2">
          Read More
          <Icon
            name="MoveUpRight"
            size={16}
            className="transition-transform duration-300 group-hover:rotate-45"
          />
        </Button>
      </div>
    </div>
  );
};
