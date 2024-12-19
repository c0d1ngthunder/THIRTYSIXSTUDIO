import { GoDash } from "react-icons/go";

const Work = () => {
  return (
    <div id="work-cont" className="my-20 h-screen flex pb-[60px] w-[100%]">
      <div id="head-cont" className="w-[60%] flex justify-center">
        <h5 className="text-2xl">
          01<GoDash className="inline"></GoDash>WHAT WE DO
        </h5>
      </div>
      <div id="work-para" className="text-3xl w-[40%]">
        <p className="w-[55%]">
          We aim to revolutionize digital production in the advertising space,
          bringing your ideas to life.
        </p>
        <p className="text-sm mt-40 w-[60%]">
          As a contemporary studio, we use cutting-edge design practices and the
          latest technologies to deliver seamless digital work.
        </p>
        <p className="text-sm w-[60%] mt-10">
          Our commitment to creativity, innovation, and simplicity, paired with
          our agile approach, ensures your journey with us is smooth and
          enjoyable from start to finish.
        </p>
      </div>
    </div>
  );
};

export default Work;
