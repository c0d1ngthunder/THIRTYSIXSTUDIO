import React, {useRef } from "react";
import img from './../assets/thirtysixstudio.png';
import {gsap} from "gsap";
import { useGSAP } from "@gsap/react";


const TextPage = () => {

  const imgref = useRef(null)

  useGSAP(()=>{
    gsap.to(imgref.current,{
      rotate:360,
      duration:10,
      ease:"none",
      repeat:-1
    })
  })

  return (
    <>
    <div id="text-cont" className="mt-24 m-4 flex">

      <div id="text-right" className="text flex flex-col items-end w-[50%]">
        <div id="real-text" className="w-[50%]">

        <h3 className="text-[35px] leading-[40px] ">
          At Thirtysixstudio, we build immersive digital experiences for brands
          with a purpose.
        </h3>
        <p className="mt-8 text-sm">We’re a boutique production studio focused on design, motion, and creative technology, constantly reimagining what digital craft can do for present-time ads and campaigns</p>
        <p className="mt-8">Scroll</p>
        </div>
      </div>
      <div id="imgcont" className="w-[50%] flex justify-center items-center">
        <img ref={imgref} className="w-[250px] block h-[250px]" src={img} alt="bad " />
      </div>
    </div>
    </>
  );
};

export default TextPage;
