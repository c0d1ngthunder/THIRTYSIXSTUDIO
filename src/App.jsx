import { useEffect, useRef, useState } from "react";
import Canvas from "./components/canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import Navbar from "./components/Navbar";
import TextPage from "./components/TextPage";
import Page2 from "./components/Page2";
import gsap from "gsap";

const App = () => {
  const [animateSpan, setAnimateSpan] = useState(false);
  const growingspan = useRef(null);
  const [showCanvas, setShowCanvas] = useState(false);
  const [event,setEvent] = useState({})
  const handleAnimation = (e) => {
    setAnimateSpan(true); // Trigger animation
    setEvent(e)
  };

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  });

  useEffect(() => {
    if (animateSpan) {
      // Perform GSAP animation
      gsap.set(growingspan.current, {
        top:event.clientY,
        left: event.clientX,
        onComplete: () => {
          gsap.to(growingspan.current,{
            scale:0,
            clearProps:"all",
          })
          setAnimateSpan(false)
        },
      });
      setShowCanvas(!showCanvas)
      gsap.to(growingspan.current,{
        scale:1000,
        duration:4,
        ease:"ease.inout"
      })
      // gsap.from()
    }
  }, [animateSpan]);

  return (
    <>
      <span ref={growingspan} className="bg-[#fd2c2a] rounded-full fixed top-0 left-0 w-5 h-5 growing block"></span>
      <Navbar />
      <div className="w-full relative h-screen">
        {showCanvas &&
          data[0].map((cdata, cidx) => {
            return <Canvas key={cidx} dets={cdata} />;
          })}
        <TextPage />
      </div>
      <Page2 onTriggerAnimation={handleAnimation} showCanvas={showCanvas} />
    </>
  );
};

export default App;
