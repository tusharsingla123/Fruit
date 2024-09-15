import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Chat.css";

const Chatbot = () => {
  const navi = useNavigate();

  const handleClick = (path) => {
    navi(path); // This will navigate to the given path
  };
  return (
    <div className="chat">
      <div
        className="n"
        onClick={() => handleClick("/cha")}
        style={{ cursor: "pointer" }}
      >
        now
      </div>
    </div>
  );
};

export default Chatbot;
