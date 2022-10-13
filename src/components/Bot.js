import React from "react";
import { AiFillRobot } from "react-icons/ai";
const Bot = () => {
  return (
    <div className="fixed bottom-7 right-7 z-10">
      <div className="absolute bottom-1 right-1 bg-[#16bbac] p-5 rounded-full shadow-md shadow-[#16bbac] transition-all hover:scale-105 cursor-pointer z-50">
        <AiFillRobot size={40} />
      </div>
      <div className="bg-white h-[500px] w-[400px] absolute bottom-8 right-10 z-40"></div>
    </div>
  );
};

export default Bot;
