import React, { useEffect } from "react";
import HeroPizza1 from "../assets/home-img-1.png";
import HeroPizza2 from "../assets/home-img-2.png";
import HeroPizza3 from "../assets/home-img-3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper";
import Speciality from "../components/Speciality";
import FeaturedProducts from "../components/FeaturedProducts";
import Banner from "../components/Banner";
import { useNavigate } from "react-router-dom";

function Home() {
  // const user = JSON.parse(localStorage.getItem("user"));
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!localStorage.getItem("user")) {
  //     navigate("/login");
  //   }
  // }, [navigate, user]);

  return (
    <>
      <div className="bg-primary h-[68vh] w-full flex items-center justify-between test">
        <div className="max-w-6xl mx-auto flex justify-between items-center w-full h-full ">
          <div className="h-full w-[60%] text-white relative overflow-hidden md:hidden">
            <h2 className="capitalize underline font-satisfy text-7xl -rotate-[40deg] absolute bottom-[50%] md:text-3xl">
              <span className="text-secondary">d</span>elicious
            </h2>
            <div className="flex items-center gap-3 absolute bottom-12 left-9">
              <span className="text-base bg-slate-100 text-black h-8 w-8 flex items-center justify-center rounded-full"></span>
              <span className="text-base bg-slate-200 text-black h-6 w-6 flex items-center justify-center rounded-full"></span>
              <span className="text-base bg-slate-300 text-black h-4 w-4 flex items-center justify-center rounded-full"></span>
              <span className="text-base bg-slate-300 text-black h-2 w-2 flex items-center justify-center rounded-full"></span>
              <span className="text-base bg-slate-300 text-black h-1 w-1 flex items-center justify-center rounded-full"></span>
            </div>
          </div>
          <Swiper
            className="!w-full md:!w-[70%] lm:!w-full -z-10"
            modules={[EffectFade, Autoplay]}
            spaceBetween={30}
            effect={"fade"}
            loop={true}
            autoplay={{
              delay: 4500,
            }}
          >
            <SwiperSlide className="flex items-center justify-center">
              <div className="h-[80%] w-[80%] lm:ml-2">
                <img
                  src={HeroPizza1}
                  alt="/"
                  className="h-full w-full object-contain"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center">
              <div className="h-[80%] w-[80%] lm:ml-2">
                <img
                  src={HeroPizza2}
                  alt="/"
                  className="h-full w-full object-contain"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center">
              <div className="h-[80%] w-[80%] lm:ml-2">
                <img
                  src={HeroPizza3}
                  alt="/"
                  className="h-full w-full object-contain"
                />
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="h-full w-[60%] text-white relative overflow-hidden md:hidden">
            <h2 className="capitalize underline font-satisfy text-7xl -rotate-[-40deg] absolute bottom-[50%] md:text-3xl">
              <span className="text-secondary">s</span>atisfying
            </h2>
            <div className="flex items-center gap-3 absolute bottom-12 right-9">
              <span className="text-base bg-slate-300 text-black h-1 w-1 flex items-center justify-center rounded-full"></span>
              <span className="text-base bg-slate-300 text-black h-2 w-2 flex items-center justify-center rounded-full"></span>
              <span className="text-base bg-slate-300 text-black h-4 w-4 flex items-center justify-center rounded-full"></span>
              <span className="text-base bg-slate-200 text-black h-6 w-6 flex items-center justify-center rounded-full"></span>
              <span className="text-base bg-slate-100 text-black h-8 w-8 flex items-center justify-center rounded-full"></span>
            </div>
          </div>
        </div>
      </div>
      <Speciality />
      <FeaturedProducts />
      <Banner />
    </>
  );
}

export default Home;
