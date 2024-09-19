import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 py-24 text-white overflow-hidden">
      <div className="container mx-auto">
        <div className="section-heading relative text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Sign Up for Free Today</h2>
          <p className="text-lg text-gray-300 mb-8">
            Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
          </p>
          <div className="relative flex justify-center mb-10">
            <Image 
              src={starImage}
              alt="Star image"
              width={360}
              className="absolute -left-20 -top-16 opacity-20"
            />
            <Image 
              src={springImage}
              alt="Spring image"
              width={360}
              className="absolute -right-20 -bottom-16 opacity-20"
            />
          </div>
        </div>
        <div className="flex gap-4 justify-center">
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-outline flex items-center">
            <span>Learn More</span>
            <ArrowRight className="h-5 w-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};
