// components/FoodDrinkSection.tsx
import Image from "next/image";
import { Icon } from "@/components/icon";
import { Button } from "@/components/ui/button";

export const FoodAndDrinks = () => {
  const features = [
    {
      title: "Free Breakfast, Tea & Coffee",
      description:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator.",
    },
    {
      title: "Quality Foods & Drink",
      description:
        "It uses a dictionary of over Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum text.",
    },
    {
      title: "Restorent & Bar",
      description:
        "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    },
  ];
  const clients = [
    "/images/client1.jpg",
    "/images/client2.jpg",
    "/images/client3.jpg",
    "/images/client4.jpg",
    "/images/client5.jpg",
    "/images/client6.jpg",
    "/images/client7.jpg",
  ];
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
      <div className="flex flex-col md:flex-row gap-12 items-stretch">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide">
            Food & Drink
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
            Quality Food And Drink <br /> Your Trip Are Enjoyable
          </h2>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nenean ac
            tortor at tellus fringilla congue quis sit nunc. Semper ac dolor
            vitae accumsan.
          </p>

          <ul className="mt-6 space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <Icon
                  name="CheckCircle"
                  className="text-teal-500 w-6 h-6 flex-shrink-0"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <Button className="w-50 h-11 mt-8 inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg shadow hover:bg-teal-700 transition">
            Learn More Hotel
            <Icon
              name="MoveUpRight"
              size={16}
              strokeWidth={4}
              className="text-white"
            />
          </Button>
        </div>

        {/* Right Content */}
        <div className="flex-1 relative h-full min-h-[400px]">
          <div className="h-full flex items-center">
            <div className="relative w-full h-[500px]">
              {/* Left Image */}
              <div className="absolute top-5 left-0 w-[46%] h-full">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/food.jpg"
                    alt="Food"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Right Image  */}
              <div className="absolute bottom-5 right-0 w-[46%] h-full">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/drink.jpg"
                    alt="Drink"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Floating Client */}
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-white shadow-xl rounded-lg p-4 w-48 z-10">
                <div className="flex flex-col items-center justify-between">
                  <div className="text-center pb-3">
                    <p className="text-xs text-gray-500">Popular Client</p>
                  </div>
                  <div className="flex -space-x-4">
                    {clients.map((src, index) => (
                      <img
                        key={`${src}-${index}`}
                        src={src}
                        alt={`Client ${index + 1}`}
                        className="w-8 h-8 rounded-full object-cover border-2 border-white"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
