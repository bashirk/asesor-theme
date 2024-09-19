import productImage from "@/assets/product-image.png";
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 py-24 overflow-x-clip text-white">
      <div className="container mx-auto">
        <div className="max-w-[540px] mx-auto text-center">
          <div className="tag bg-blue-600 text-white inline-block px-3 py-1 rounded-full">Boost your productivity</div>
          <h2 className="section-title mt-5 text-white">A more effective way to track progress</h2>
          <p className="section-description mt-5 text-gray-300">
            Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
          </p>
        </div>
        <div className="relative mt-10 flex justify-center">
          <Image src={productImage} alt="Product image" className="mx-auto" />
          <div className="absolute -right-36 -top-32">
            <div className="cube"></div>
          </div>
          <div className="absolute bottom-24 -left-36">
            <div className="cylinder"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
