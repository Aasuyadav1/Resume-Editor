import React from "react";

function Button({ bgColor,color,onClick,label,classes,...props}) {
  return <button onClick={onClick} className={`${bgColor} ${color} px-1 py-1 mt-4 ${classes}`} {...props}>{label}</button>;
}

export default Button;
