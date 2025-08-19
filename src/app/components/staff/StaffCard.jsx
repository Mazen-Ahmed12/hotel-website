import Image from "next/image";
import React from "react";

export const StaffCard = ({ staff }) => {
  return (
    <div className="w-full max-w-xs overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="relative h-90">
        <Image
          src={staff.image}
          alt={staff.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="bg-white p-6 text-start">
        <h3 className="text-xl font-bold text-black  ">{staff.name}</h3>
        <p className="flex flex-row mt-1 text-gray-800">
          <span className="bg-green-500 w-6 h-0.5 mt-3 mr-4"></span>
          {staff.role}
        </p>
      </div>
    </div>
  );
};
