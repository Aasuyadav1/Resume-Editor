import React, { useEffect, useState } from "react";
import { FiBold } from "react-icons/fi";

import { Button } from "@nextui-org/react";
import { FiItalic } from "react-icons/fi";
import useResumeStore from "../Store/store";

function Rightaside() {
  const data = useResumeStore((state) => state.resumeContent);
  const setResumeContent = useResumeStore((state) => state.setResumeContent);
  // const {setBold} = useResumeStore();

  const [editData, setEditData] = useState("");

  useEffect(() => {
    if (data) {
      setEditData(data);
    }
  }, [data]);

  const handleEditChanges = (e) => {
    
   
      setEditData(e.target.value);
  
    setResumeContent(e.target.value);
    console.log()
    console.log("after adding changes on textarea then store data ", data);
  };

  // const handleBold = () => {
  //   setBold();
  // }

  return (
    <div className="flex w-[300px] flex-col px-2 py-2 bg-[#fff] fixed h-screen right-0 top-16">
      <div>
        <h2 className="text-xl font-semibold">Edit Text</h2>
        <textarea
          value={editData}
          onChange={(e) => handleEditChanges(e)}
          className=" hidescroll w-full px-1 py-2 resize-y border-2 outline-none mt-2 rounded-md border-[#9e9d9d] border-solid"
          rows="2"
          placeholder="Click on text to edit"
        ></textarea>
       
      </div>
      <div className="mt-5">
        <h2 className="text-xl font-semibold">Text Style</h2>
        <div className="mt-2">
        <Button size="md" isIconOnly radius="sm" variant="faded"  >
          <FiBold className="text-xl" />
        </Button>
        <Button size="md" isIconOnly radius="sm" variant="faded">
          <FiItalic className="text-xl" />
        </Button>
        
        </div>
      </div>
    </div>
  );
}

export default Rightaside;
