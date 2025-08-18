import React from "react";
import Image from 'next/image';
import { Icon } from '../../../components/icon';

export const RoomCard = ({room}) => {
  return (
    <div className="flex-shrink-0 w-[420px] bg-white rounded-2xl overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2">
      <div className="relative h-80">
        <Image src={room.image} alt={room.name} fill className="object-cover" />
        <div className="absolute top-4 left-4 bg-teal-600 text-white text-sm font-bold px-3 py-1 rounded-md">
          ${room.price} / Night
        </div>
      </div>
      <div className="p-6 flex flex-col gap-4">
        <h3 className="text-2xl font-bold text-gray-800">{room.name}</h3>
        <div className="flex items-center gap-6 text-gray-600">
          <span className="flex items-center gap-2">
            <Icon name="Users" size={18} className="text-teal-600" />
            {room.guests} Guests
          </span>
          <span className="flex items-center gap-2">
            <Icon name="Bed" size={18} className="text-teal-600" /> {room.beds}
            Beds
          </span>
          <span className="flex items-center gap-2">
            <Icon name="Bath" size={18} className="text-teal-600" /> {room.bath}
            Bath
          </span>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed">
          {room.description}
        </p>
        <a
          href="#"
          className="text-teal-600 font-semibold flex items-center gap-2 group"
        >
          Read More
          <Icon
            name="MoveUpRight"
            size={16}
            className="transition-transform duration-300 group-hover:rotate-45"
          />
        </a>
      </div>
    </div>
  );
};
