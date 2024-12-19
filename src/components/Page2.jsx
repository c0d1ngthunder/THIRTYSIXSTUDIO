import React, { useEffect, useRef} from "react";
import data from "../data";
import Canvas from "./Canvas";
import Work from "./Work";

const Page2 = ({ isMaximized, onTriggerAnimation }) => {
  const headref = useRef(null);

  useEffect(() => {
    headref.current.addEventListener("click", () => {});
  });

  return (
    <div className="min-h-screen relative w-full">
      {isMaximized &&
        data[1].map((cdata, cidx) => {
          return <Canvas key={cidx} dets={cdata} />;
        })}
      <h1
        onClick={(e) => onTriggerAnimation(e)}
        ref={headref}
        className="border-b-[1px] w-[99%] border-[#252525] m-auto text-[15vw]"
      >
        Thirtysixstudio
      </h1>
      <Work />
    </div>
  );
};

export default Page2;
