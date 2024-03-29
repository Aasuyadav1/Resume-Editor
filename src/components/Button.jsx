import React from "react";

function Button({bgColor, color, onClick,label,classes,icon,...props}) {
  return <button onClick={onClick} className={`${bgColor} ${color} px-1 py-1 ${classes}`} {...props}>{icon}{label}</button>;
}

export default Button;
