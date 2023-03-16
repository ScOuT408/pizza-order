import React from "react";
import PizzaLogo from "../assets/pizza-logo.png";
import App from "../assets/app.png";

function Footer() {
  return (
    <div className="bg-primary h-[50vh] test md:h-full">
      <div className="max-w-6xl mx-auto !overflow-hidden">
        <div className="grid grid-cols-3 gap-2 place-items-center pt-6 md:grid-cols-2 sm:grid-cols-1 pb-12">
          <div className="w-full">
            <div className="h-[160px] w-[160px] mx-auto sm:ml-[20px]">
              <img
                src={PizzaLogo}
                alt="/"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-[70%] mt-5 sm:w-full sm:ml-[50px]">
            <div>
              <h1 className="capitalize text-3xl text-white underline lg:text-2xl">
                contact us
              </h1>
            </div>
            <div className="mt-3 flex  flex-col text-white text-lg">
              <span className="mt-2"> +123 456 789 </span>
              <span className="mt-2"> xyz@gmail.com </span>
              <span className="mt-2"> +999 098 234 </span>
            </div>
          </div>
          <div className="w-[75%] mt-5 sm:w-full sm:ml-[50px]">
            <div>
              <h1 className="capitalize text-3xl text-white underline lg:text-2xl">
                download our app
              </h1>
            </div>
            <div className="mt-3">
              <img src={App} alt="/" width={150} height={150} />
            </div>
          </div>
        </div>
        <div className="w-full border-t border-t-slate-200">
          <div className="flex items-center justify-center mt-5 pb-5">
            <h3 className="text-white capitalize text-xl tracking-wider px-4 text-center">
              designed by biswajeet dash || 2022
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
