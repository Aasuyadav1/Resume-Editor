import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Leftaside from "../components/Lefttaside";
import Rightaside from "../components/Rightside";
import Resume1 from "../components/Resume1";
import { toast } from 'react-toastify';
import useAppwriteStore from "../Store/AppwriteStore";

function ResumeEditor() {
  const {userData, getCurrentUser} = useAppwriteStore();
  useEffect(()=>{
    getCurrentUser();
    if(userData.userStatus === true){
      toast.success(`Hello , ${userData.userName}`);
    }
  },[userData.userStatus])
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
