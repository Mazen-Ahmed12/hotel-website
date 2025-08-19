"use client";

import React, { useState, useEffect } from "react";
import { Icon } from "./icon";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export const InfoBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Check for dark mode on mount and set up listener for changes
  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setDarkMode(isDark);
    };
    
    // Initial check
    checkDarkMode();
    
    // Listen for changes to dark mode
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`w-full ${darkMode ? 'bg-gray-900' : 'bg-[#1f8f6a]'} text-white text-sm py-2 px-4 flex items-center justify-between transition-colors duration-200`}>
      {/* Left side of the bar the contact info */}
      <div className="flex items-center gap-3 pl-11">
        <div className="flex items-center">
          <Icon name="Dot" size={30} strokeWidth={4} className="text-yellow-300" />
          <span>7631 sebrina park, 115 devon isle, USA</span>
        </div>
        <div className="flex items-center">
          <Icon name="Dot" size={30} strokeWidth={4} className="text-yellow-300" />
          <span>info@hotel.com</span>
        </div>
        <div className="flex items-center">
          <Icon name="Dot" size={30} strokeWidth={4} className="text-yellow-300" />
          <span>+(1) 987 654 3210</span>
        </div>
      </div>
      
      {/* Right side - Social Icons and Theme Toggle */}
      <div className="flex items-center gap-3 pr-13">
        <div className="flex items-center gap-1 justify-between space-x-6">
          <Link href="https://www.facebook.com/" className="hover:text-yellow-300 transition-colors">
            <Icon name="facebook" size={20} />
          </Link>
          <Link href="https://www.x.com/" className="hover:text-yellow-300 transition-colors">
            <Icon name="twitter" size={20} />
          </Link>
          <Link href="https://www.instagram.com/" className="hover:text-yellow-300 transition-colors">
            <Icon name="instagram" size={20} />
          </Link>
          <Link href="https://www.behance.net/" className="hover:text-yellow-300 transition-colors">
            <Icon name="behance" size={20} />
          </Link>
        </div>
        <div className="h-6 w-px bg-white/30 mx-1" />
        <ThemeToggle />
      </div>
    </div>
  );
};
