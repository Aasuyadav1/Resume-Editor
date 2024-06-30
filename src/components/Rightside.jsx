import React, { useEffect, useState } from "react";
import { FiBold } from "react-icons/fi";
import { AiOutlineUnderline } from "react-icons/ai";
import { FiItalic } from "react-icons/fi";
import useResumeStore from "../Store/store";
import { ImStrikethrough } from "react-icons/im";
import { CiTextAlignCenter } from "react-icons/ci";
import { CiTextAlignLeft } from "react-icons/ci";
import { CiTextAlignRight } from "react-icons/ci";
import { CiTextAlignJustify } from "react-icons/ci";


function Rightaside() {
  const {
    resumeData,
    setResumeData,
    selectedElement
  } = useResumeStore((state) => state);

  const [editData, setEditData] = useState("");
  const [color, setColor] = useState("#4F46E5");
 
  const handleFontFamily = (e) => { 
    if(selectedElement?.element){
      selectedElement.element.style.fontFamily = e
    }
  };

  const handleMultipleBold = (e) => {
    if(selectedElement?.element){
      selectedElement.element.style.fontWeight = e
    }
  };

  const handleTextColor = (e) => {
    setColor(e);
    if (selectedElement?.element) {
      selectedElement.element.style.color = e;
    }
  };

  const handleHeadingColor = (color) => {
    let elements = document.querySelectorAll('.heading');
    elements.forEach((ele)=>{
      ele.style.color = color
    })
  }

  const handleStyle = (attribute,style) => {
    if(selectedElement?.element){
      if(selectedElement.element.style[attribute] === style){
        selectedElement.element.style[attribute] = ""
      }else {
        selectedElement.element.style[attribute] = style
      }
    }
  }

  useEffect(() => {
    if(selectedElement){
      if(selectedElement.section === "title" || selectedElement.section === "subtitle" || selectedElement.section === "description"){
        setEditData(resumeData[selectedElement.section])
      }else {
       
        const {section, index,key} = selectedElement

        setEditData(resumeData[section][index][key])
      }
    }
      
  },[selectedElement, resumeData])

  const handleEditChanges = (e) => {
    setEditData(e.target.value)
    if(selectedElement){
      const {section, index, key} = selectedElement
      setResumeData(section, index, key, e.target.value)
    }
  }

  const colors = [
    {
      bg: "#2563EB",
      ring: "ring-[#2563EB]",
      tailbg : "bg-[#2563EB]",
    },
    {
      bg: "#8B5CF6",
      ring: "ring-[#8B5CF6]",
      tailbg : "bg-[#8B5CF6]",
    },
    { bg: "#DB2777", ring: "ring-[#DB2777]", tailbg : "bg-[#DB2777]" },
    { bg: "#000000", ring: "ring-[#000000]", tailbg : "bg-[#000000]" },
    { bg: "#EA580C", ring: "ring-[#EA580C]", tailbg : "bg-[#EA580C]" },
  ];

  return (
    <div className="flex shadow-sm max-w-[305px] w-full flex-col px-2 pb-10 pt-2  bg-[#fff] fixed h-screen right-0 border-l-2 border-solid top-16 ">
      <div>
        <h2 className="text-xl font-semibold">Edit Text</h2>
        <textarea
          value={editData}
          onChange={(e) => handleEditChanges(e)}
          className=" hidescroll w-full px-1 py-2 resize-y border-2 outline-none mt-2 rounded-md border-[#9e9d9d] border-solid"
          rows="4"
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
              className="mt-1.5 w-full rounded-l-lg border-gray-300 border-2 py-2 text-black sm:text-sm"
              onChange={(e) => handleMultipleBold(e.target.value)}
            >
              <option value="300">Light</option>
              <option value="400">Normal</option>
              <option value="500">Medium</option>
              <option value="600">Semibold</option>
              <option value="700">Bold</option>
              <option value="800">Extra Bold</option>
            </select>
            <div className="border-gray-300 relative border-2 border-l-0 flex justify-center mt-1.5 rounded-r-lg gap-2 items-center px-2 h-[40px]  w-[150px]">
              <input type="color" value={color} onChange={(e) => handleTextColor(e.target.value)} className={`w-[50px] h-[35px] border-none outline-none shadow-none rounded-sm cursor-pointer`} />

              {/* <div className={`w-[50px] h-[30px] rounded-sm cursor-pointer `} style={{backgroundColor : color}} onClick={()=>setColorPicker(!colorPicker)}></div> */}
              <span className="text-sm w-[100px] text-black">Color Pick</span>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-4  ">
            <button
              className="px-6 py-2 hover:bg-[#f5f4f7] active:bg-[#efebf6] transition-all rounded-l-sm bg-white border-2 border-solid border-gray-300 "
              onClick={()=>handleStyle("fontWeight",600)}
            >
              <FiBold className="text-xl" />
            </button>
            <button
              className="px-6 py-2 hover:bg-[#f5f4f7] active:bg-[#efebf6] transition-all  bg-white border-2 border-solid border-l-0 border-gray-300 "
              onClick={()=> handleStyle("fontStyle","italic")}
            >
              <FiItalic className="text-xl" />
            </button>
            <button
              className="px-6 py-2 hover:bg-[#f5f4f7] active:bg-[#efebf6] transition-all bg-white border-2 border-solid border-l-0 border-gray-300 "
              onClick={() => handleStyle("textDecoration","underline")}
            >
              <AiOutlineUnderline className="text-xl" />
            </button>
            <button
              className="px-6 hover:bg-[#f5f4f7] active:bg-[#efebf6] transition-all py-2 rounded-r-sm bg-white border-2 border-l-0 border-solid border-gray-300 "
              onClick={() => handleStyle("textDecoration","line-through")}
            >
              <ImStrikethrough className="text-xl" />
            </button>
          </div>
          <div className="mt-2 grid grid-cols-4">
            <button
              className="px-6 hover:bg-[#f5f4f7] active:bg-[#efebf6] transition-all py-2 rounded-l-sm bg-white border-2 border-solid border-gray-300 "
              onClick={() => handleStyle("textAlign","center")}
            >
              <CiTextAlignCenter className="text-xl" />
            </button>
            <button
              className="px-6 py-2 hover:bg-[#f5f4f7] active:bg-[#efebf6] transition-all  border-l-0 bg-white border-2 border-solid border-gray-300 "
               onClick={() => handleStyle("textAlign","left")}
            >
              <CiTextAlignLeft className="text-xl" />
            </button>
            <button
              className="px-6 py-2 hover:bg-[#f5f4f7] active:bg-[#efebf6] transition-all border-l-0 bg-white border-2 border-solid border-gray-300 "
              onClick={() => handleStyle("textAlign","right")}
            >
              <CiTextAlignRight className="text-xl" />
            </button>
            <button
              className="px-6 py-2 hover:bg-[#f5f4f7] active:bg-[#efebf6] transition-all rounded-r-sm border-l-0 bg-white border-2 border-solid border-gray-300 "
              onClick={() => handleStyle("textAlign","justify")}
            >
              <CiTextAlignJustify className="text-xl" />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h2 className="text-xl font-semibold">Resume Style</h2>
        <div className="max-w-md mx-auto px-4">
          <ul className="mt-4 flex items-center flex-wrap gap-4">
            {colors.map((item, idx) => (
              /* Color box */
              <li key={idx} className="flex-none">
                <label htmlFor={item.bg} className="block relative w-8 h-8">
                  <input
                    id={item.bg}
                    type="radio"
                    defaultChecked={idx == 3 ? true : false}
                    name="color"
                    className="sr-only peer"
                    onChange={() => handleHeadingColor(item.bg)}
                  />
                  <span
                    className={`inline-flex justify-center items-center w-full h-full rounded-full peer-checked:ring ring-offset-2 cursor-pointer duration-150 ${item.tailbg} ${item.ring}`}
                  ></span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 text-white absolute inset-0 m-auto z-0 pointer-events-none hidden peer-checked:block duration-150"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Rightaside;
