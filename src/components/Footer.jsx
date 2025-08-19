import React from "react";
import { Icon } from "@/components/icon";
import { Newsletter } from "@/components/Newsletter";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#191919] bg-[radial-gradient(#222_1px,transparent_1px)] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-2 text-2xl font-bold text-white mb-4">
              <Icon name="House" size={25} />
              <span>FixyLand</span>
            </div>
            <p className="text-gray-400 mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. it to make a type specimen book. It has survived not
              only five centuries.
            </p>
            <div className="flex space-x-4">
              <Button className=" bg-[#444] rounded-lg shadow-md hover:bg-[#444] ">
                <Icon name="facebook" className="" size={30} />
              </Button>
              <Button className=" bg-[#444] rounded-lg shadow-md hover:bg-[#444] ">
                <Icon name="twitter" size={30} />
              </Button>
              <Button className=" bg-[#444] rounded-lg shadow-md hover:bg-[#444] ">
                <Icon name="instagram" size={30} />
              </Button>
              <Button className=" bg-[#444] rounded-lg shadow-md hover:bg-[#444] ">
                <Icon name="behance" size={30} />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-3">
              {[
                "About Hotel",
                "Pricing",
                "Hotel Staff",
                "Latest News",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Icon
                  name="map-pin"
                  className="text-[#3c9c64] mt-1 mr-3"
                  size={18}
                />
                <span className="text-gray-400">
                  123 Hotel Street, City, Country
                </span>
              </li>
              <li className="flex items-center">
                <Icon name="phone" className="text-[#3c9c64] mr-3" size={18} />
                <span className="text-gray-400">[+1] 234 567 890</span>
              </li>
              <li className="flex items-center">
                <Icon name="mail" className="text-[#3c9c64] mr-3" size={18} />
                <span className="text-gray-400">info@Domain.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <Newsletter />
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} FixyLand. All Rights Reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Terms & Conditions
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm border-l-1 pl-5 border-gray-500 ">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
