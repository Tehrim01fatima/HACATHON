import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-screen-xl h-auto bg-[#F0F2F3] flex flex-col sm:flex-row justify-between items-center px-6 sm:px-10 lg:px-16 py-6">
        
      
        <div className="flex flex-col justify-center items-center sm:items-start w-full sm:w-1/2 space-y-4 sm:space-y-6">
          <h1 className="text-[14px] sm:text-[18px] md:text-[24px] lg:text-[32px] pt-[50px] sm:pt-[119px] font-normal text-[#272343] text-center sm:text-left">
            WELCOME TO CHAIRY
          </h1>
          <p className="w-full sm:w-[557px] text-[30px] sm:text-[40px] lg:text-[60px] font-bold text-center sm:text-left mb-6">
            Best Furniture Collection for your interior.
          </p>
          <button className="bg-[#029FAE] w-[171px] h-[52px] text-white py-4 px-6 rounded-[8px] flex items-center gap-[20px] text-[16px] hover:bg-blue-700 mx-auto sm:mx-0">
            <span>Shop Now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12h18M15 18l6-6-6-6"
              />
            </svg>
          </button>
        </div>

    
        <div className="w-full sm:w-1/2 mt-6 sm:mt-0 sm:ml-[130px] flex justify-center">
          <Image
            src="/pictures/Product Image.png"
            alt="Product Image"
            width={434}
            height={584}
            priority
            className="object-contain sm:object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;