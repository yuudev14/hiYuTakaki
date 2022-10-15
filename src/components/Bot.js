import React from "react";
import { AiFillRobot } from "react-icons/ai";
import { TbArrowsMinimize } from "react-icons/tb";
const Bot = () => {
  return (
    <div className="fixed bottom-7 right-7 z-10">
      <div className="absolute bottom-1 right-1 bg-[#16bbac] p-5 rounded-full shadow-md shadow-[#16bbac] transition-all hover:scale-105 cursor-pointer z-50">
        <AiFillRobot size={40} />
      </div>
      <div className="bg-white h-[500px] w-[400px] absolute bottom-8 right-10 z-40 shadow-2xl border-gray-200 border-2 rounded-md flex flex-col">
        <div className="h-16 w-full bg-[#16bbac] flex justify-end items-center p-5">
          <TbArrowsMinimize size={20} />
        </div>
        <div className="flex-1 w-full p-5"></div>
        <div className="h-16 w-full flex border-gray-200 border-t-2">
          <TbArrowsMinimize size={20} />
        </div>
      </div>
    </div>
  );
};

export default Bot;
