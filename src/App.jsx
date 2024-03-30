import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify'; // Correct import statement
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for styling toast messages
import ResumeLanding from "./Pages/ResumeLanding";
import ResumeEditor from "./Pages/ResumeEditor";
import Error from "./Pages/Error";

function App() {
  useEffect(() => {
    toast.success('Welcome to Resume Builder'); // Correct usage of toast object
  }, []) // Empty dependency array to run the effect only once

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ResumeLanding />} />
          <Route path="/editor" element={<ResumeEditor />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer /> {/* Correct component name */}
    </>
  );
}

export default App;
