import React, { useEffect, useRef, useState } from "react";
import { AiFillRobot } from "react-icons/ai";
import { TbArrowsMinimize } from "react-icons/tb";
const Bot = () => {
  const [inputMsg, setInputMsg] = useState([]);
  const [botMsgs, setBotMsgs] = useState([]);
  const botBtnRef = useRef();
  const msgRef = useRef();
  const lastRef = useRef();

  useEffect(() => {
    lastRef.current.scrollIntoView({ behavior: "smooth" });
  }, [botMsgs]);

  const openBotHandler = () => {
    botBtnRef.current.classList.remove("inactive");
    botBtnRef.current.classList.add("active");
  };

  const closeBotHandler = (e) => {
    e.stopPropagation();
    botBtnRef.current.classList.remove("active");
    botBtnRef.current.classList.add("inactive");
  };

  const inputHandler = (e) => {
    const textcontent = e.target.textContent.toString();
    if (textcontent !== inputMsg) {
      setInputMsg(textcontent);
    } else {
      setBotMsgs([
        ...botMsgs,
        {
          bot: false,
          msg: inputMsg,
        },
      ]);
      setInputMsg("");
      msgRef.current.textContent = "";
    }
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
        <div className="bot-text-content">
          <div className="isBot">
            <p>Hello there! You can ask me anything I know from Yu.</p>
            <p className="mt-2 font-extrabold">*pun intended ;D</p>
          </div>
          {botMsgs.map((msg, i) => (
            <div key={i} className={msg.bot ? "isBot" : "notBot"}>
              <p>{msg.msg}</p>
            </div>
          ))}
          <div ref={lastRef}></div>
        </div>
        <div className="bot-textbox-container">
          <p
            contentEditable
            ref={msgRef}
            className="h-full"
            onInput={inputHandler}
            suppressContentEditableWarning={true}></p>
        </div>
      </div>
    </div>
  );
};

export default Bot;
