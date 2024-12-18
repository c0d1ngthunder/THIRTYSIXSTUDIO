import { useEffect } from "react";
import Canvas from "./components/canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  });

  return (
    <>
    <div className="w-full relative min-h-screen">
      {data[0].map((cdata, cidx) => {
        return <Canvas key={cidx} dets={cdata} />;
      })}
    </div>
    <div className="w-full relative min-h-screen">
      {data[1].map((cdata, cidx) => {
        return <Canvas key={cidx} dets={cdata} />;
      })}
    </div>
    <div className="w-full relative min-h-screen">
      {data[2].map((cdata, cidx) => {
        return <Canvas key={cidx} dets={cdata} />;
      })}
    </div>
    <div className="w-full relative min-h-screen">
      {data[3].map((cdata, cidx) => {
        return <Canvas key={cidx} dets={cdata} />;
      })}
    </div>
    <div className="w-full relative min-h-screen">
      {data[4].map((cdata, cidx) => {
        return <Canvas key={cidx} dets={cdata} />;
      })}
    </div>
      </>
  );
};

export default App;
