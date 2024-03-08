import React from "react";

function Button({ bgColor,color,onClick }) {
  return <button onClick={onClick} className={`${bgColor} ${color} px-1 py-1`}></button>;
}

export default Button;
