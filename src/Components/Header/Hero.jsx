import React from "react";
import Btn from "../Btn";

const Hero = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 xl:px-24 lg:py-6 xl:py-5 md:py-4 py-2 flex justify-between sm:items-center flex-col sm:flex-row">
      <div className="sm:w-[50%] xl:w-[35%] order-2 sm:order-none">
        <h1 className="font-[NeueMachina] text-2xl md:text-3xl lg:text-5xl font-[600] lg:leading-[65px]">
          Navigating the digital landscape for success
        </h1>
        <p className="sm:w-[90%] text-gray-900 poppins text-[14px] py-4 sm:py-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores porro
          nihil repudiandae eaque, autem dicta nemo qui veritatis atque ad
          incidunt ipsa mollitia consequuntur non velit nesciunt illum.
        </p>
        <Btn
          title={"Book a consultation"}
          className={
            "bg-black text-white hover:bg-transparent hover:text-black py-3"
          }
        />
      </div>
      <div className="sm:w-[50%] lg:w-[50%] xl:w-[40%] flex items-center justify-center hero-right">
        <img src="/banner.webp" alt="" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Hero;
