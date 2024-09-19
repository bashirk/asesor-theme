import logo from "@/assets/logosaas.png";
import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 text-center">
      <div className="container mx-auto">
        <div className="flex justify-center gap-6 mb-6">
          <SocialX className="h-6 w-6 hover:text-blue-600 transition-colors" />
          <SocialInsta className="h-6 w-6 hover:text-blue-600 transition-colors" />
          <SocialLinkedIn className="h-6 w-6 hover:text-blue-600 transition-colors" />
          <SocialYoutube className="h-6 w-6 hover:text-blue-600 transition-colors" />
        </div>
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image 
            src={logo}
            height={40}
            alt="Workings NG logo"
            className="relative"
          />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Features</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Customers</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Pricing</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Help</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Careers</a>
        </nav>
        <p className="mt-6 text-gray-400">
          &copy; 2024 Asesor Technology Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
