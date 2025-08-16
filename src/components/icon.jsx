"use client";
import React from "react";  
import icons from "@/assets/Icons";



const sizeMap = {
  sm: "!w-4 !h-4", // 16px
  md: "!w-6 !h-6", // 24px
  lg: "!w-8 !h-8", // 32px
};

export const Icon = ({
  name,
  sizeClass = "md",
  size,
  className = "",
  ...props
}) => {
  const IconComponent = icons[name];
  const sizeClassName = !size && sizeMap[sizeClass];

  if (!IconComponent) return null; // safeguard if name doesn't exist

  return (
    <IconComponent
      className={`${sizeClassName} ${className}`}
      aria-hidden="true"
      size={size}
      {...props}
    />
  );
};
