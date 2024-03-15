import React, { useEffect, useState } from "react";
import { FiBold } from "react-icons/fi";
import { AiOutlineUnderline } from "react-icons/ai";
import Button from "./Button";
import { FiItalic } from "react-icons/fi";
import useResumeStore from "../Store/store";
import { ImStrikethrough } from "react-icons/im";
import { CiTextAlignCenter } from "react-icons/ci";
import { CiTextAlignLeft } from "react-icons/ci";
import { CiTextAlignRight } from "react-icons/ci";
import { CiTextAlignJustify } from "react-icons/ci";

function Rightaside() {
  const {
    selectedElement,
    setSelectedElement,
    resumeData,
    selectedDataIndex,
    setResumeSubtitle,
    setResumetitle,
    setResumedescription,
    selectedEducationDateIndex,
    setEducationDate

  } = useResumeStore();

  const [editData, setEditData] = useState("");
  const [color, setColor] = useState("#61fff4");

  useEffect(() => {
    if (selectedElement) {
      if (selectedDataIndex == "resumeData.subtitle") {
        console.log(resumeData.subtitle);
        setEditData(resumeData.subtitle);
      } else if (selectedDataIndex == "resumeData.description") {
        setEditData(resumeData.description);
      } else if (selectedDataIndex == "resumeData.title") {
        setEditData(resumeData.title);
     } else if (selectedEducationDateIndex) {
        setEditData(resumeData.Education[selectedEducationDateIndex].date);
     }
     else {
       
          setEditData(selectedElement.innerHTML);
        console.log(selectedEducationDateIndex)
       
      }
    }
  }, [selectedElement, resumeData]);

  const handleEditChanges = (e) => {
    setEditData(e.target.value);
    if (selectedDataIndex == "resumeData.subtitle") {
      setResumeSubtitle(e.target.value);
    } else if (selectedDataIndex == "resumeData.description") {
      setResumedescription(e.target.value);
    } else if (selectedDataIndex == "resumeData.title") {
      setResumetitle(e.target.value);
    } else if (selectedEducationDateIndex) {
      setEducationDate(e.target.value, selectedEducationDateIndex);
    }
     else {
      selectedElement.innerHTML = e.target.value;
    }

  };

  const handleBold = () => {
    if (selectedElement.style.fontWeight === "bold") {
      // If already bold, remove the bold style
      selectedElement.style.fontWeight = "normal";
    } else {
      // If not bold, add the bold style
      selectedElement.style.fontWeight = "bold";
    }
  };

  const handleItalic = () => {
    if (selectedElement.style.fontStyle === "italic") {
      selectedElement.style.fontStyle = "normal";
    } else {
      selectedElement.style.fontStyle = "italic";
    }
  };

  const handleUnderline = () => {
    if (selectedElement.style.textDecoration === "underline") {
      selectedElement.style.textDecoration = "none";
    } else {
      selectedElement.style.textDecoration = "underline";
    }
  };

  const handleStrikethrough = () => {
    if (selectedElement.style.textDecoration === "line-through") {
      selectedElement.style.textDecoration = "none";
    } else {
      selectedElement.style.textDecoration = "line-through";
    }
  };

  const handleTestAlign = (c) => {
    switch (c) {
      case "left": {
        selectedElement.style.textAlign = "left";
        break;
      }
      case "center": {
        selectedElement.style.textAlign = "center";
        break;
      }
      case "right": {
        selectedElement.style.textAlign = "right";
        break;
      }
      case "justify": {
        selectedElement.style.textAlign = "justify";
        break;
      }
      default: {
        break;
      }
    }
  };

  const handleFontFamily = (e) => {
    selectedElement.style.fontFamily = e;
  };

  const handleMultipleBold = (e) => {
    selectedElement.style.fontWeight = e;
  };

  const handleTextColor = (e) => {
    setColor(e);
    if (selectedElement) {
      selectedElement.style.color = e;
    }
  };

  // useEffect(() => {
    
  // },[resumeData])

  return (
    <div className="flex w-[300px] flex-col px-2 py-2 bg-[#fff] fixed h-screen right-0 top-16 overflow-y-auto">
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
          <div>
            <select
              className="mt-1.5 w-full rounded-lg border-gray-300 border-2 py-2 text-black sm:text-sm"
              name="font"
              onChange={(e) => handleFontFamily(e.target.value)}
            >
              <option value="sans-serif">sans-serif</option>
              <option value="serif">serif</option>
              <option value="monospace">monospace</option>
              <option value="cursive">cursive</option>
              <option value="fantasy">fantasy</option>
              <option value="system-ui">system-ui</option>
            </select>
          </div>
          <div className="mt-2 flex ">
            <select
              name="bold"
              id=""
              className="mt-1.5 w-full rounded-lg border-gray-300 border-2 py-2 text-black sm:text-sm"
              onChange={(e) => handleMultipleBold(e.target.value)}
            >
              <option value="300">Light</option>
              <option value="400">Normal</option>
              <option value="500">Medium</option>
              <option value="600">Semibold</option>
              <option value="700">Bold</option>
              <option value="800">Extra Bold</option>
            </select>
            <div className="border-gray-300 border-2 flex justify-center mt-1.5 rounded-lg gap-2 items-center px-2 w-[150px]">
              <input
                type="color"
                value={color}
                className="  w-[50px]  h-full  appearance-none"
                onChange={(e) => handleTextColor(e.target.value)}
              />
              <span className="text-sm w-[100px] text-black">{color}</span>
            </div>
          </div>
          <div className="mt-3">
            <button
              className="px-6 py-2 rounded-sm bg-white border-2 border-solid border-gray-300 "
              onClick={handleBold}
            >
              <FiBold className="text-xl" />
            </button>
            <button
              className="px-6 py-2 rounded-sm bg-white border-2 border-solid border-gray-300 "
              onClick={handleItalic}
            >
              <FiItalic className="text-xl" />
            </button>
            <button
              className="px-6 py-2 rounded-sm bg-white border-2 border-solid border-gray-300 "
              onClick={handleUnderline}
            >
              <AiOutlineUnderline className="text-xl" />
            </button>
            <button
              className="px-6 py-2 rounded-sm bg-white border-2 border-solid border-gray-300 "
              onClick={handleStrikethrough}
            >
              <ImStrikethrough className="text-xl" />
            </button>
          </div>
          <div className="mt-2">
            <button
              className="px-6 py-2 rounded-sm bg-white border-2 border-solid border-gray-300 "
              onClick={() => handleTestAlign("center")}
            >
              <CiTextAlignCenter className="text-xl" />
            </button>
            <button
              className="px-6 py-2 rounded-sm bg-white border-2 border-solid border-gray-300 "
              onClick={() => handleTestAlign("left")}
            >
              <CiTextAlignLeft className="text-xl" />
            </button>
            <button
              className="px-6 py-2 rounded-sm bg-white border-2 border-solid border-gray-300 "
              onClick={() => handleTestAlign("right")}
            >
              <CiTextAlignRight className="text-xl" />
            </button>
            <button
              className="px-6 py-2 rounded-sm bg-white border-2 border-solid border-gray-300 "
              onClick={() => handleTestAlign("justify")}
            >
              <CiTextAlignJustify className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightaside;
