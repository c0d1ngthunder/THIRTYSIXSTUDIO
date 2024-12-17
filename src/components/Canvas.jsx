import { useEffect, useRef, useState } from "react";
import canvasimages from "../../canvasimages";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Canvas = ({ dets }) => {
  const { startIndex, numImages, duration, size, top, left, zIndex } = dets;

  const canvasref = useRef(null);
  const [index, setIndex] = useState({ value: startIndex });

  useGSAP(() => {
    gsap.to(index, {
      value: startIndex + 149,
      duration: dets.duration,
      ease: "linear",
      repeat: -1,
      onUpdate: () => {
        setIndex({ value: Math.round(index.value) });
      },
    });
  });

  useEffect(() => {
    const scale = window.devicePixelRatio;
    const canvas = canvasref.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = canvasimages[index.value];
    img.onload = () => {
      canvas.width = canvas.offsetWidth * scale;
      canvas.height = canvas.offsetHeight * scale;
      canvas.style.width = canvas.offsetWidth + "px";
      canvas.style.height = canvas.offsetHeight + "px";
      ctx.scale(scale, scale);
      ctx.drawImage(img, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
    };
  }, [index]);

  return (
    <canvas
      className="absolute"
      style={{
        width: `${size * 1.2}px`,
        height: `${size * 1.2}px`,
        top: `${top}%`,
        left: `${left}%`,
      }}
      ref={canvasref}
      id="canvas"
    ></canvas>
  );
};

export default Canvas;
