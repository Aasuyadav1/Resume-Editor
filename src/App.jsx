import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify'; // Correct import statement
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for styling toast messages
import ResumeLanding from "./Pages/ResumeLanding";
import ResumeEditor from "./Pages/ResumeEditor";
import Error from "./Pages/Error";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import useAppwriteStore from "./Store/AppwriteStore";
import Dashboard from "./components/Dashboard";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ResumeLanding />} />
          <Route path="/editor/:id?" element={<ResumeEditor />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Error />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/:id" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer /> {/* Correct component name */}
    </>
  );
}

export default App;
