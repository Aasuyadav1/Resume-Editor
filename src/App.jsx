import React from "react";
import ResumeLanding from "./Pages/ResumeLanding";
import ResumeEditor from "./Pages/ResumeEditor";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ResumeLanding />} />
        <Route path="/editor" element={<ResumeEditor />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
