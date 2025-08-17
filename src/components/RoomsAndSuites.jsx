import * as React from 'react';
import { RoomCard } from './RoomCard';

const roomData = [
  {
    name: 'Deluxe Rooms',
    price: 800,
    image: '/images/Room1.jpg',
    guests: 2,
    beds: 2,
    bath: 1,
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
  },
  {
    name: 'Junior Rooms',
    price: 400,
    image: '/images/Room2.jpg',
    guests: 2,
    beds: 1,
    bath: 1,
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
  },
  {
    name: 'Family Rooms',
    price: 600,
    image: '/images/Room3.jpg',
    guests: 2,
    beds: 2,
    bath: 1,
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
  },
  {
    name: 'Single Rooms',
    price: 750,
    image: '/images/Room4.jpg',
    guests: 2,
    beds: 1,
    bath: 1,
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
  },
];

export const RoomsAndSuites = () => {
  return (
    <section className="bg-[#e9f0ec] py-24 font-sans">
        <div className="absolute w-full left-0 -top-20 h-40 bg-[#e9f0ec] [clip-path:ellipse(50%_40%_at_50%_0%)]"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-teal-600 bg-white px-4 py-2 rounded-md text-sm font-semibold tracking-wider">
            ROOM TYPE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">The Best Luxury Rooms And Suites</h2>
        </div>
        <div className="flex gap-8 pb-8 overflow-x-auto scrollbar-hide">
          {roomData.map(room => <RoomCard key={room.name} room={room} />)}
        </div>
      </div>
    </section>
  );
};
