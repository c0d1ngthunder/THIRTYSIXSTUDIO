import React, { useEffect, useRef, useState } from "react";
import data from "../data";
import Canvas from "./Canvas";

const Page2 = ({isMaximized,onTriggerAnimation}) => {

  const headref = useRef(null)

  useEffect(()=>{
    headref.current.addEventListener("click",()=>{
    })
  })

  return (
    <div className="min-h-screen relative w-full">
        {isMaximized && data[0].map((cdata, cidx) => {
          return <Canvas key={cidx} dets={cdata} />;
          })}
      <h1 onClick={(e)=>onTriggerAnimation(e)} ref={headref} className="absolute left-[50%] translate-x-[-50%] text-[15vw]">
        Thirtysixstudio
      </h1>
    </div>
  );
};

export default Page2;
