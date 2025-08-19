import Image from "next/image";
import React from "react";

export const StaffCard = ({ staff }) => {
  return (
    <div className="w-full max-w-xs overflow-hidden rounded-xl bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 hover:shadow-xl dark:shadow-gray-900/50">
      {/* Image with hover effect */}
      <div className="relative h-90">
        <Image
          src={staff.image}
          alt={staff.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Text content */}
      <div className="bg-white dark:bg-gray-900 p-6 text-start transition-colors duration-200">
        <h3 className="text-xl font-bold text-black dark:text-white">{staff.name}</h3>
        <p className="flex flex-row mt-1 text-gray-800 dark:text-gray-200">
          <span className="bg-teal-500 w-6 h-0.5 mt-3 mr-4"></span>
          {staff.role}
        </p>
      </div>
    </div>
  );
};
