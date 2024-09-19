import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import test from "node:test";
import { twMerge } from 'tailwind-merge';
import Image from "next/image";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool.",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
];

export const Testimonials = () => {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 py-24 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Users Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(({ text, imageSrc, name, username }, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Image src={imageSrc} alt={name} width={50} height={50} className="rounded-full" />
                <div className="ml-3">
                  <div className="font-semibold">{name}</div>
                  <div className="text-gray-400">{username}</div>
                </div>
              </div>
              <p className="text-gray-300">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
