import React from "react";
import { Icon } from "../../../components/icon";

export const RoomCard = ({ item }) => {
  return (
    <div className="w-full rounded-lg bg-white dark:bg-gray-950 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl dark:shadow-gray-800/50 md:w-[30%]">
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <span className="absolute left-3 top-3 rounded bg-white/90 dark:bg-gray-900/90 px-2 py-1 text-xs font-medium text-gray-800 dark:text-gray-200 backdrop-blur-sm">
          {item.type}
        </span>
      </div>
      <div className="p-4">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500 dark:text-gray-400">
          <span className="flex items-center">
            <Icon name="Calendar" className="pr-1" size={20} />
            {item.date}
          </span>
          <span className="bg-gray-400 w-4 h-0.5 "></span>
          <span className="flex items-center">
            <Icon name="User" className="pr-1" size={20} />
            {item.author}
          </span>
        </div>
        <h3 className="w-4/5 mt-2 text-xl text-start font-bold text-gray-800 dark:text-white">
          {item.title}
        </h3>
        <p className="mt-1 text-l text-start text-gray-600 dark:text-gray-300">
          {item.description}
        </p>
        <button className="mt-3 flex flex-row items-center rounded-md bg-teal-600 hover:bg-teal-700 dark:bg-teal-700 dark:hover:bg-teal-800 px-5 py-1.5 text-sm text-white transition-colors duration-200">
          Read More
          <Icon name="MoveUpRight" className="pl-2" size={25} />
        </button>
      </div>
    </div>
  );
};
