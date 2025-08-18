import { cn } from '@/lib/utils';
import React from 'react';

export const ServiceCard = ({ icon, title, description, highlighted, className, image }) => {
  return (
    <div
      className={`relative p-6 rounded-lg shadow-md flex flex-col items-start overflow-hidden h-70 ${
        highlighted ? 'text-white' : 'bg-white text-gray-700'
      }`}>
      {highlighted && (
        <div
          className={cn("absolute inset-0 bg-cover bg-center z-0", highlighted ? 'bg-[#00bba7]' : '')}
          style={{ backgroundImage: image ? `url(${image})` : 'none' }}
        >
          <div className="absolute inset-0 bg-teal-500 opacity-75"></div>
        </div>
      )}
      <div className="relative z-10">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

