import React from "react";
import Speciality1 from "../assets/speciality-1.jpg";
import Speciality2 from "../assets/speciality-2.jpg";
import Speciality3 from "../assets/speciality-3.jpg";

function Speciality() {
  return (
    <div className="max-w-6xl mx-auto mt-12">
      <div className="relative mb-14">
        <div className="bg-red-300 h-12 w-12 rounded-full absolute -z-10 -top-1 -left-2 lg:hidden"></div>
        <h2 className="text-3xl uppercase font-medium z-20 lg:text-center sm:!text-3xl">
          <span className="!text-5xl sm:!text-3xl"> o</span>ur speciality
        </h2>
      </div>

      {/* 3 cards */}
      <div className="grid grid-cols-3 mt-8 gap-3 mb-8 place-items-center lg:grid-cols-2 md:grid-cols-1">
        <div className="h-[300px] w-[300px] relative rounded-full group overflow-hidden sm:h-[250px] sm:w-[250px]">
          <img
            src={Speciality1}
            alt="/"
            className="h-full w-full object-cover rounded-full group-hover:scale-110 duration-300"
          />
        </div>
        <div className="h-[300px] w-[300px] rounded-full group overflow-hidden sm:h-[250px] sm:w-[250px]">
          <img
            src={Speciality2}
            alt="/"
            className="h-full w-full object-cover rounded-full group-hover:scale-110 duration-300"
          />
        </div>
        <div className="lg:ml-[470px] md:ml-[0]">
          <div className="h-[300px] w-[300px] rounded-full group overflow-hidden sm:h-[250px] sm:w-[250px]">
            <img
              src={Speciality3}
              alt="/"
              className="h-full w-full object-cover rounded-full group-hover:scale-110 duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Speciality;
