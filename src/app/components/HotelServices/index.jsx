import React from "react";
import { ServiceCard } from "./ServiceCard";
import { Icon } from "../../../components/icon";

export const HotelServices = () => {
  const services = [
    {
      icon: <Icon name="Dumbbell" size={48} />,
      title: "Fitness Center",
      description:
        "orem npsum dolor sit conse cteturs adipisciorem npsum dolor sit conse ctetur adipiscin",
      highlighted: true,
      className: "bg-[#00bba7]",
      image: "/images/fitness-center.jpg",
    },
    {
      icon: <Icon name="Bath" size={48} />,
      title: "Jacuzzi",
      description:
        "orem npsum dolor sit conse cteturs adipisciorem npsum dolor sit conse ctetur adipiscin",
      highlighted: false,
    },
    {
      icon: <Icon name="Waves" size={48} />,
      title: "Swimming Pool",
      description:
        "orem npsum dolor sit conse cteturs adipisciorem npsum dolor sit conse ctetur adipiscin",
      highlighted: false,
    },
    {
      icon: <Icon name="Bubbles" size={48} />,
      title: "SPA Treatments",
      description:
        "orem npsum dolor sit conse cteturs adipisciorem npsum dolor sit conse ctetur adipiscin",
      highlighted: false,
    },
  ];

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-950 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-row items-center -mx-4 gap-6">
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0 place-self-start">
            <p className="w-[140px] h-[35px] text-teal-500 bg-white rounded-md text-sm text-center place-content-center font-semibold tracking-wider">
              HOTEL SERVICES
            </p>
            <h2 className="text-4xl font-bold my-4 text-gray-800 dark:text-white">
              Get The Best Hotel Fixyland Services
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Nulla vitae ex nunc. Morbi quis purus convallis, fermentum hioon
              metus volutpat denign nodinien purus. Nunc quis an mauris etion
              eros vulputate mattis Nulla vitae ex nunc.
            </p>
            <button className="bg-teal-500 text-white font-bold py-3.5 px-6 rounded-lg flex items-center">
              View All <Icon name="MoveUpRight" className="ml-2" />
            </button>
          </div>
          <div className="w-full md:w-2/3 px-4">
            <div className="flex flex-wrap justify-center -mx-3 gap-4">
              {services.map((service, index) => (
                <div key={index} className="w-full md:w-[35%] px-3 mb-6">
                  <ServiceCard
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    highlighted={service.highlighted}
                    className={service.className}
                    image={service.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-6 text-sm text-gray-600 dark:text-gray-200 gap-x-6">
          <span>Call us Today: (11) 907 654 3210</span>
          <span>OR</span>
          <span>Email us: info@domain.com</span>
        </div>
      </div>
    </section>
  );
};
