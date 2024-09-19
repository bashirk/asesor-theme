import ArrowIcon from "@/assets/arrow-right.svg";
import chatbotImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import Image from "next/image";
// import chatbotImage from "@/assets/chatbot-illustration.png";

export const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
              Automate Support.
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-600">
                Elevate Business.
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Custom AI chatbots to streamline your customer support and investor reporting. Empower your startup with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-outline">Book a Demo</button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
              <Image
                src={chatbotImage}
                alt="AI Chatbot Illustration"
                width={600}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-blue-200 to-blue-100 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
