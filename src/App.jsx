import { useEffect, useRef, useState } from "react";
import Canvas from "./components/canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import Navbar from "./components/Navbar";
import TextPage from "./components/TextPage";
import Page2 from "./components/Page2";
import gsap from "gsap";

const App = () => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [showCanvas, setShowCanvas] = useState(false);
  const growingspan = useRef(null);
  const [event, setEvent] = useState({});
  const handleAnimation = (e) => {
    setEvent(e); // Update event details
    setIsMaximized((prevState) => !prevState); // Toggle maximize/minimize
  };

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  });

  useEffect(() => {
    if (growingspan.current) {
      if (isMaximized) {
        // Maximize span

        setTimeout(() => {
          gsap.to("body",{
            color:"black"
          })
        }, 500);

        gsap.set(growingspan.current, {
          top: event.clientY,
          left: event.clientX,
          scale: 0,
        });

        gsap.to(growingspan.current, {
          scale: 1000,
          duration: 1.5, // Adjust animation duration
          ease: "power3.inOut",
          onComplete: () => {
            setShowCanvas(true); 
          },
        });

      } else {
        setTimeout(() => {
          setShowCanvas(false);
          gsap.to("body",{
            color:"white"
          })
        }, 500);
        gsap.to(growingspan.current, {
          scale: 0,
          duration: 1, 
          ease: "power3.out",
          onComplete: () => {
            gsap.set(growingspan.current, { clearProps: "all" }); // Clear inline styles
            
          },
        });
      }
    }
  }, [isMaximized, event]);

  return (
    <>
      <span
        ref={growingspan}
        className="bg-[#fd2c2a] rounded-full fixed top-[-20px] left-0 w-5 h-5 growing block"
      ></span>
      <Navbar />
      <div className="w-full relative h-screen">
        {showCanvas &&
          data[0].map((cdata, cidx) => {
            return <Canvas key={cidx} dets={cdata} />;
          })}
        <TextPage />
      </div>
      <Page2 onTriggerAnimation={handleAnimation} isMaximized={showCanvas} />
    </>
  );
};

export default App;
