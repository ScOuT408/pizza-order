import React from "react";
import BannerImg from "../assets/banner.jpeg";

function Banner() {
  return (
    <div className="max-w-6xl mx-auto mt-14">
      <div className="relative mb-12">
        <img src={BannerImg} alt="/" className="h-[60vh] w-full object-cover" />
        <div className="text-slate-200 capitalize font-satisfy absolute top-2 left-10 !flex !justify-center items-start h-full flex-col lm:left-5">
          <h2 className="text-4xl mb-2">
            <span className="text-secondary">d</span>elightful...
          </h2>
          <h2 className="text-4xl md:hidden">
            Pizza is not a 'trend' it's a way of life
          </h2>
          <div className="flex items-center gap-3 absolute bottom-[100px] left-0 md:bottom-[120px]">
            <span className="text-base bg-slate-100 text-black h-8 w-8 flex items-center justify-center rounded-full"></span>
            <span className="text-base bg-slate-200 text-black h-6 w-6 flex items-center justify-center rounded-full"></span>
            <span className="text-base bg-slate-300 text-black h-4 w-4 flex items-center justify-center rounded-full"></span>
            <span className="text-base bg-slate-300 text-black h-2 w-2 flex items-center justify-center rounded-full"></span>
            <span className="text-base bg-slate-300 text-black h-1 w-1 flex items-center justify-center rounded-full"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
