import React, { useEffect, useState } from "react";
import { FiBold } from "react-icons/fi";

import { Button } from "@nextui-org/react";
import { FiItalic } from "react-icons/fi";
import useResumeStore from '../Store/store';

function Rightaside() {
  const {selectedElement, setSelectedElement} = useResumeStore();


  const [editData, setEditData] = useState("");

  useEffect(() => {
    if (selectedElement) {
      setEditData(selectedElement.innerHTML);
    }
  }, [selectedElement]);

  const handleEditChanges = (e) => {
      setEditData(e.target.value);
      selectedElement.innerHTML = e.target.value;
  };

  const handleBold = () => {
    if (selectedElement.style.fontWeight === 'bold') {
      // If already bold, remove the bold style
      selectedElement.style.fontWeight = 'normal';
    } else {
      // If not bold, add the bold style
      selectedElement.style.fontWeight = 'bold';
    }
  };

  const handleItalic = () => {
    if (selectedElement.style.fontStyle === 'italic') {
      selectedElement.style.fontStyle = 'normal';
    }else{
      selectedElement.style.fontStyle = 'italic';
    }
  }

  const handleUnderline = () => {
    if (selectedElement.style.textDecoration === 'underline') {
      selectedElement.style.textDecoration = 'none';
    }else{
      selectedElement.style.textDecoration = 'underline';
    }
  }

  const handleStrikethrough = () => {
    if (selectedElement.style.textDecoration === 'line-through') {
      selectedElement.style.textDecoration = 'none';
    }else{
      selectedElement.style.textDecoration = 'line-through';
    }
  }
  

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
        <Button size="md" isIconOnly radius="sm" variant="faded" onClick={handleBold}  >
          <FiBold className="text-xl" />
        </Button>
        <Button size="md" isIconOnly radius="sm" variant="faded" onClick={handleItalic}>
          <FiItalic className="text-xl" />
        </Button>
        <Button size="md" isIconOnly radius="sm" variant="faded" onClick={handleUnderline}>
          <FiItalic className="text-xl" />
        </Button>
        <Button size="md" isIconOnly radius="sm" variant="faded" onClick={handleStrikethrough}>
          <FiItalic className="text-xl" />
        </Button>
        
        </div>
      </div>
    </div>
  );
}

export default Rightaside;
