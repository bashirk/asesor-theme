import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import apexLogo from "@/assets/logo-apex.png";
import echoLogo from "@/assets/logo-echo.png";
import pulseLogo from "@/assets/logo-pulse.png";
import celestialLogo from "@/assets/logo-celestial.png";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-black">
      <div className="container mx-auto">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex gap-14 flex-none animate-marquee">
            <Image src={acmeLogo} className="logo-ticker-image" alt="Acme Logo" />
            <Image src={quantumLogo} className="logo-ticker-image" alt="Quantum Logo" />
            <Image src={apexLogo} className="logo-ticker-image" alt="Apex Logo" />
            <Image src={echoLogo} className="logo-ticker-image" alt="Echo Logo" />
            <Image src={pulseLogo} className="logo-ticker-image" alt="Pulse Logo" />
            <Image src={celestialLogo} className="logo-ticker-image" alt="Celestial Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};
