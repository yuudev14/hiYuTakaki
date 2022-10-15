import React, { useRef } from "react";
import { AiFillRobot } from "react-icons/ai";
import { TbArrowsMinimize } from "react-icons/tb";
const Bot = () => {
  const botBtnRef = useRef();

  const openBotHandler = () => {
    botBtnRef.current.classList.remove("inactive");
    botBtnRef.current.classList.add("active");
  };
  const closeBotHandler = (e) => {
    e.stopPropagation();
    botBtnRef.current.classList.remove("active");
    botBtnRef.current.classList.add("inactive");
  };
  return (
    <div className="bot-container">
      <div
        ref={botBtnRef}
        onClick={openBotHandler}
        className="bot-msg-box inactive shadow-lg border-2 border-zinc-200">
        <div className="bot-header">
          <AiFillRobot size={40} className="bot-icon" />
          <TbArrowsMinimize
            size={20}
            className="bot-minimize"
            onClick={closeBotHandler}
          />
        </div>
        <div className="bot-text-content"></div>
        <div className="bot-textbox-container">
          <p contentEditable>
            Consectetur nostrud occaecat irure adipisicing ut irure dolor quis
            reprehenderit elit occaecat fugiat cillum. Eu mollit amet veniam
            incididunt duis in ipsum nostrud labore sint ipsum amet qui
            consectetur. Nisi ipsum magna deserunt cillum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bot;
