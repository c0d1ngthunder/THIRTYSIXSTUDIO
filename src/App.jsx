import Canvas from "./components/canvas";
import data from "./data";

const App = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden bg-black text-white">
            {data[0].map((cdata, cidx) => {
              return <Canvas key={cidx} dets={cdata} />;
            })}
    </div>
  );
};

export default App;
