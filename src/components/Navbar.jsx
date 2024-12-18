import React from "react";

const Navbar = () => {
  return <>
  <div className="w-full">
        <nav  className="flex w-full absolute top-0 left-0 p-4 font-normal justify-between border-b-[1px] border-black">
          <div className="brand text-normal">Thirtysixstudio</div>
          <div className="links text-normal w-1/2 flex gap-10">
            {["What we do","Who we are","How we give back","Talk to us"].map((link,idx)=>
              <a className="transition-all text-normal" key={idx} href={`#${link.toLowerCase()}`}>{link}</a>
            )}
          </div>
        </nav>
      </div>
  </>;
};

export default Navbar;