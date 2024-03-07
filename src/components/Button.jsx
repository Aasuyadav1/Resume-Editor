import React from "react";

function Button({ label,bgColor,color,onClick }) {
  return <button onClick={onClick} className={`${bgColor} ${color} `}>{label}</button>;
}

export default Button;
