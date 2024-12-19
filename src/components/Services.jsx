import React, { useEffect } from "react";
import data from "./../data";
import Canvas from "./Canvas";

const Services = (showCanvas) => {
  return (
    <div className="services w-[99%] border-t-[1px] relative z-[0] m-auto">
      
      <div className="w-[50%] m-auto">
        <h3 className="my-20 ">OUR SERVICES</h3>
        <p className="text-3xl">
          We provide captivating design, interactive animations, advanced
          usability, reliable code, and immaculate project coordination.Whether
          you need a campaign built from scratch orassistance at a specific
          phase ,we’ve got you covered.
        </p>
      </div>
    </div>
  );
};

export default Services;
