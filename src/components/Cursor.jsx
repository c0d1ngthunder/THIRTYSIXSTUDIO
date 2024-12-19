import React, { useRef } from "react";
import { useEffect, useState } from "react";
import gsap from "gsap";

const Cursor = () => {
  const cursorref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Attach event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);


  return (
    <div
      ref={cursorref}
      style={{ top: position.y, left: position.x }}
      className={`z-[99] fixed bg-white h-6 w-6 bg- rounded-full -translate-x-[50%] pointer-events-none -translate-y-[50%]`}
    >
      {}
    </div>
  );
};

export default Cursor;
