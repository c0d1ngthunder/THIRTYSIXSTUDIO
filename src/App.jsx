import { useEffect, useRef, useState } from "react";
import Canvas from "./components/Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import Navbar from "./components/Navbar";
import TextPage from "./components/TextPage";
import Page2 from "./components/Page2";
import gsap from "gsap";
import Cursor from "./components/Cursor";
import Services from "./components/Services";

const App = () => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [showCanvas, setShowCanvas] = useState(false);
  const growingspan = useRef(null);
  const [event, setEvent] = useState({});
  const audio1 = new Audio('/THIRTYSIXSTUDIO/media/world1.mp3');
  const audio2 = new Audio('/THIRTYSIXSTUDIO/media/world2.mp3');

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
          gsap.to("body", {
            color: "black",
          });
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
          gsap.to("body", {
            color: "white",
          });
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

  useEffect(()=>{
    window.addEventListener('click',(e)=>{
    if (showCanvas){
      audio2.pause()
      audio1.play();

    }else{
      audio1.pause();
      audio2.play();
    }
    })
  },[showCanvas])


  return (
    <>
      <Cursor />
      <span
        ref={growingspan}
        className="bg-[#fd2c2a] rounded-full fixed top-[-20px] left-0 w-5 h-5 growing block"
      ></span>
      <Navbar />
      <div className="w-full relative min-h-screen">
        {showCanvas &&
          data[0].map((cdata, cidx) => {
            return <Canvas key={cidx} dets={cdata} />;
          })}
        <TextPage />
      </div>
      <Page2 onTriggerAnimation={handleAnimation} isMaximized={showCanvas} />
      <div className="relative">
      {showCanvas &&
        data[2].map((cdata, cidx) => {
          return <Canvas key={cidx} dets={cdata} />;
        })}
        <Services showCanvas={showCanvas} />
      </div>
    </>
  );
};

export default App;