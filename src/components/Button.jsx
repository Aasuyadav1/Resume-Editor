import React from "react";

function Button({ onClick,label,classes,icon,...props}) {
  return <button onClick={onClick} className={`px-1 py-1 ${classes}`} {...props}>{icon}{label}</button>;
}

export default Button;
