import React from "react";
import Navbar from "../components/Navbar";
import Leftaside from "../components/Lefttaside";
import Rightaside from "../components/Rightside";
import Resume1 from "../components/Resume1";

function ResumeEditor() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center">
        <Leftaside />
        <Resume1 />

        <Rightaside />
      </div>
    </div>
  );
}

export default ResumeEditor;
