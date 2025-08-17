import Image from "next/image";
import { Icon } from "./icon";

const features = [
  {
    name: "24-Hours Emergency Service",
  },
  {
    name: "Comfortable Atmosphere",
  },
  {
    name: "Something by accident",
  },
  {
    name: "It is a Long Established fact",
  },
  {
    name: "Flexible and Cost-Effective",
  },
  {
    name: "Get Free Consultation Anytime",
  },
];

const ImageGallery = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center bg-[#e9f0ec] p-4 md:p-6 !py-30 font-sans">
      <div className="px-30 flex flex-col lg:flex-row gap-18 items-center">
        {/* Left Side: Image with decorations */}
        <div className="relative w-full h-[450px] sm:h-[550px] flex items-center justify-center">
          {/* Dotted background */}
          <div
            className="absolute -top-20 left-0 w-48 h-48 bg-repeat bg-center rounded-full"
            style={{
              backgroundImage: "radial-gradient(#a0b5a9 2px, transparent 2px)",
              backgroundSize: "16px 16px",
            }}
          ></div>

          {/* Main Image */}
          <div className="relative w-[80%] h-full z-10 rounded-3xl shadow-2xl [clip-path:polygon(0_0,100%_0,100%_calc(100%-50px),calc(100%-50px)_100%,0_100%)]">
            <Image
              src="/images/hotel1.jpg"
              alt="Luxury Hotel Interior"
              fill
              className="object-cover rounded-3xl"
            />
          </div>

          {/* Circular Badge */}
          <div className="absolute !bottom-24 right-0 md:right-5 z-20 w-34 h-34 flex items-center justify-center">
            <div className="absolute w-full h-full animate-spin-slow bg-white rounded-full">
              <div className="relative w-full h-full">
                {"30 Years of Experience - Hotel Business -"
                  .split("")
                  .map((char, i) => (
                    <span
                      key={i}
                      className="absolute left-1/2 top-0 origin-[0_66px] text-sm font-semibold tracking-wider uppercase text-gray-600"
                      style={{ transform: `rotate(${i * 8.5}deg)` }}
                    >
                      {char}
                    </span>
                  ))}
              </div>
            </div>
            <div className="w-12 h-12 bg-teal-500 absolute rounded-full flex items-center justify-center shadow-lg">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col gap-2 ">
          <span className="text-teal-600 bg-white px-3 py-1 rounded-md self-start text-sm font-semibold">
            ABOUT FIXYLAND
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            World Class Luxury Hotel and Resort Near City
          </h1>
          <p className="text-gray-600">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mt-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex items-center gap-3">
                <Icon name="CheckCircle" className="text-teal-500" size={20} />
                <span className="text-gray-700">{feature.name}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-300 flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <Image
                src="/images/images.jpg"
                alt="Robert L. Robinson"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-bold text-gray-800">Robert L. Robinson</p>
              <p className="text-gray-500">CEO & Founder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
