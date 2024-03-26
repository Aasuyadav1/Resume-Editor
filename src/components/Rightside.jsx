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
    selectedProjectNameIndex,
    selectedProjectdescriptionIndex,
    selectedProjectlinkIndex,
    selectedEducationDateIndex,
    selectedEducationDegreeIndex,
    selectedEducationUniversityIndex,
    selectedSkillCatrgoryIndex,
    selectedSkillSkillsIndex,
    selectedContectLabelIndex,
    selectedContectValueIndex,
    selectedExperienceDateIndex,
    selectedExperienceCompanyIndex,
    selectedExperiencePositionIndex,
    selectedExperienceDescriptionIndex,

    setEducationDate,
    setEducationDegree,
    setEducationUniversity,

    setContactLabel,
    setContactValue,

    setSkillsCategory,
    setSkillsSkills,

    setExperienceDate,
    setExperienceCompany,
    setExperiencePosition,
    setExperienceDescription,

    setProjectName,
    setProjectDescription,
    setProjectLink,
  } = useResumeStore();

  const [editData, setEditData] = useState("");
  const [color, setColor] = useState("#4F46E5");

  useEffect(() => {
    if (selectedElement) {
      if (selectedDataIndex == "resumeData.subtitle") {
        if (resumeData && resumeData.subtitle) {
          setEditData(resumeData.subtitle);
        }
      } else if (selectedDataIndex == "resumeData.description") {
        if (resumeData && resumeData.description) {
          setEditData(resumeData.description);
        }
      } else if (selectedDataIndex == "resumeData.title") {
        if (resumeData && resumeData.title) {
          setEditData(resumeData.title);
        }
      } else if (
        selectedEducationDateIndex == 0 ||
        selectedEducationDateIndex
      ) {
        if (
          resumeData &&
          resumeData.Education &&
          resumeData.Education[selectedEducationDateIndex] &&
          resumeData.Education[selectedEducationDateIndex].date
        ) {
          setEditData(resumeData.Education[selectedEducationDateIndex].date);
        }
      } else if (
        selectedEducationDegreeIndex == 0 ||
        selectedEducationDegreeIndex
      ) {
        if (
          resumeData &&
          resumeData.Education &&
          resumeData.Education[selectedEducationDegreeIndex] &&
          resumeData.Education[selectedEducationDegreeIndex].degree
        ) {
          setEditData(
            resumeData.Education[selectedEducationDegreeIndex].degree
          );
        }
      } else if (
        selectedEducationUniversityIndex == 0 ||
        selectedEducationUniversityIndex
      ) {
        if (
          resumeData &&
          resumeData.Education &&
          resumeData.Education[selectedEducationUniversityIndex] &&
          resumeData.Education[selectedEducationUniversityIndex].university
        ) {
          setEditData(
            resumeData.Education[selectedEducationUniversityIndex].university
          );
        }
      } else if (
        selectedSkillCatrgoryIndex == 0 ||
        selectedSkillCatrgoryIndex
      ) {
        if (
          resumeData &&
          resumeData.Skills &&
          resumeData.Skills[selectedSkillCatrgoryIndex] &&
          resumeData.Skills[selectedSkillCatrgoryIndex].category
        ) {
          setEditData(resumeData.Skills[selectedSkillCatrgoryIndex].category);
        }
      } else if (selectedSkillSkillsIndex == 0 || selectedSkillSkillsIndex) {
        if (
          resumeData &&
          resumeData.Skills &&
          resumeData.Skills[selectedSkillSkillsIndex] &&
          resumeData.Skills[selectedSkillSkillsIndex].skills
        ) {
          setEditData(resumeData.Skills[selectedSkillSkillsIndex].skills);
        }
      } else if (selectedContectLabelIndex == 0 || selectedContectLabelIndex) {
        if (
          resumeData &&
          resumeData.Contact &&
          resumeData.Contact[selectedContectLabelIndex] &&
          resumeData.Contact[selectedContectLabelIndex].label
        ) {
          setEditData(resumeData.Contact[selectedContectLabelIndex].label);
        }
      } else if (selectedContectValueIndex == 0 || selectedContectValueIndex) {
        if (
          resumeData &&
          resumeData.Contact &&
          resumeData.Contact[selectedContectValueIndex] &&
          resumeData.Contact[selectedContectValueIndex].value
        ) {
          setEditData(resumeData.Contact[selectedContectValueIndex].value);
        }
      } else if (
        selectedExperienceDateIndex == 0 ||
        selectedExperienceDateIndex
      ) {
        if (
          resumeData &&
          resumeData.Experience &&
          resumeData.Experience[selectedExperienceDateIndex] &&
          resumeData.Experience[selectedExperienceDateIndex].date
        ) {
          setEditData(resumeData.Experience[selectedExperienceDateIndex].date);
        }
      } else if (
        selectedExperienceCompanyIndex == 0 ||
        selectedExperienceCompanyIndex
      ) {
        if (
          resumeData &&
          resumeData.Experience &&
          resumeData.Experience[selectedExperienceCompanyIndex] &&
          resumeData.Experience[selectedExperienceCompanyIndex].company
        ) {
          setEditData(
            resumeData.Experience[selectedExperienceCompanyIndex].company
          );
        }
      } else if (
        selectedExperiencePositionIndex == 0 ||
        selectedExperiencePositionIndex
      ) {
        if (
          resumeData &&
          resumeData.Experience &&
          resumeData.Experience[selectedExperiencePositionIndex] &&
          resumeData.Experience[selectedExperiencePositionIndex].position
        ) {
          setEditData(
            resumeData.Experience[selectedExperiencePositionIndex].position
          );
        }
      } else if (
        selectedExperienceDescriptionIndex == 0 ||
        selectedExperienceDescriptionIndex
      ) {
        if (
          resumeData &&
          resumeData.Experience &&
          resumeData.Experience[selectedExperienceDescriptionIndex] &&
          resumeData.Experience[selectedExperienceDescriptionIndex].description
        ) {
          setEditData(
            resumeData.Experience[selectedExperienceDescriptionIndex]
              .description
          );
        }
      } else if (selectedProjectNameIndex == 0 || selectedProjectNameIndex) {
        if (
          resumeData &&
          resumeData.Projects &&
          resumeData.Projects[selectedProjectNameIndex] &&
          resumeData.Projects[selectedProjectNameIndex].name
        ) {
          setEditData(resumeData.Projects[selectedProjectNameIndex].name);
        }
      } else if (
        selectedProjectdescriptionIndex == 0 ||
        selectedProjectdescriptionIndex
      ) {
        if (
          resumeData &&
          resumeData.Projects &&
          resumeData.Projects[selectedProjectdescriptionIndex] &&
          resumeData.Projects[selectedProjectdescriptionIndex].description
        ) {
          setEditData(
            resumeData.Projects[selectedProjectdescriptionIndex].description
          );
        }
      } else if (selectedProjectlinkIndex == 0 || selectedProjectlinkIndex) {
        if (
          resumeData &&
          resumeData.Projects &&
          resumeData.Projects[selectedProjectlinkIndex] &&
          resumeData.Projects[selectedProjectlinkIndex].link
        ) {
          setEditData(resumeData.Projects[selectedProjectlinkIndex].link);
        }
      } else {
        if (resumeData) {
          setEditData(selectedElement.innerHTML);
        }
      }
    }
  }, [selectedElement, resumeData]);

  const handleEditChanges = (e) => {
    if (selectedElement == null) {
      alert("Please select an element to edit");
      return;
    }
    setEditData(e.target.value);
    if (selectedDataIndex == "resumeData.subtitle") {
      setResumeSubtitle(e.target.value);
    } else if (selectedDataIndex == "resumeData.description") {
      setResumedescription(e.target.value);
    } else if (selectedDataIndex == "resumeData.title") {
      setResumetitle(e.target.value);
    } else if (selectedEducationDateIndex == 0 || selectedEducationDateIndex) {
      console.log(
        "before set",
        resumeData.Education[selectedEducationDateIndex].date
      );
      setEducationDate(e.target.value, selectedEducationDateIndex);
      console.log(
        "after set",
        resumeData.Education[selectedEducationDateIndex].date
      );
    } else if (
      selectedEducationDegreeIndex == 0 ||
      selectedEducationDegreeIndex
    ) {
      setEducationDegree(e.target.value, selectedEducationDegreeIndex);
    } else if (
      selectedEducationUniversityIndex == 0 ||
      selectedEducationUniversityIndex
    ) {
      setEducationUniversity(e.target.value, selectedEducationUniversityIndex);
    } else if (selectedSkillCatrgoryIndex == 0 || selectedSkillCatrgoryIndex) {
      setSkillsCategory(e.target.value, selectedSkillCatrgoryIndex);
    } else if (selectedSkillSkillsIndex == 0 || selectedSkillSkillsIndex) {
      setSkillsSkills(e.target.value, selectedSkillSkillsIndex);
    } else if (selectedContectLabelIndex == 0 || selectedContectLabelIndex) {
      setContactLabel(e.target.value, selectedContectLabelIndex);
    } else if (selectedContectValueIndex == 0 || selectedContectValueIndex) {
      setContactValue(e.target.value, selectedContectValueIndex);
    } else if (
      selectedExperienceDateIndex == 0 ||
      selectedExperienceDateIndex
    ) {
      setExperienceDate(e.target.value, selectedExperienceDateIndex);
    } else if (
      selectedExperienceCompanyIndex == 0 ||
      selectedExperienceCompanyIndex
    ) {
      setExperienceCompany(e.target.value, selectedExperienceCompanyIndex);
    } else if (
      selectedExperiencePositionIndex == 0 ||
      selectedExperiencePositionIndex
    ) {
      setExperiencePosition(e.target.value, selectedExperiencePositionIndex);
    } else if (
      selectedExperienceDescriptionIndex == 0 ||
      selectedExperienceDescriptionIndex
    ) {
      setExperienceDescription(
        e.target.value,
        selectedExperienceDescriptionIndex
      );
    } else if (selectedProjectNameIndex == 0 || selectedProjectNameIndex) {
      setProjectName(e.target.value, selectedProjectNameIndex);
    } else if (
      selectedProjectdescriptionIndex == 0 ||
      selectedProjectdescriptionIndex
    ) {
      setProjectDescription(e.target.value, selectedProjectdescriptionIndex);
    } else if (selectedProjectlinkIndex == 0 || selectedProjectlinkIndex) {
      setProjectLink(e.target.value, selectedProjectlinkIndex);
    } else {
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

  const handleBgColor = (color) => {
    let elements = document.querySelectorAll('.heading');
    elements.forEach((element) => {
      element.style.color = color
    })
    console.log(color)
  }

  useEffect(() => {
    console.log(resumeData);
  }, [resumeData]);

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
    <div className="flex shadow-sm max-w-[305px] w-full flex-col px-2 pb-10 pt-2 overflow-y-auto bg-[#fff] fixed h-screen right-0 border-l-2 border-solid top-16 ">
      <div>
        <h2 className="text-xl font-semibold">Edit Text</h2>
        <textarea
          value={resumeData && editData}
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
            <div className="border-gray-300 border-2 border-l-0 flex justify-center mt-1.5 rounded-r-lg gap-2 items-center px-2 w-[150px]">
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
              className="px-6 py-2 rounded-l-sm bg-white border-2 border-solid border-gray-300 "
              onClick={handleBold}
            >
              <FiBold className="text-xl" />
            </button>
            <button
              className="px-6 py-2  bg-white border-2 border-solid border-l-0 border-gray-300 "
              onClick={handleItalic}
            >
              <FiItalic className="text-xl" />
            </button>
            <button
              className="px-6 py-2 bg-white border-2 border-solid border-l-0 border-gray-300 "
              onClick={handleUnderline}
            >
              <AiOutlineUnderline className="text-xl" />
            </button>
            <button
              className="px-6 py-2 rounded-r-sm bg-white border-2 border-l-0 border-solid border-gray-300 "
              onClick={handleStrikethrough}
            >
              <ImStrikethrough className="text-xl" />
            </button>
          </div>
          <div className="mt-2">
            <button
              className="px-6 py-2 rounded-l-sm bg-white border-2 border-solid border-gray-300 "
              onClick={() => handleTestAlign("center")}
            >
              <CiTextAlignCenter className="text-xl" />
            </button>
            <button
              className="px-6 py-2  border-l-0 bg-white border-2 border-solid border-gray-300 "
              onClick={() => handleTestAlign("left")}
            >
              <CiTextAlignLeft className="text-xl" />
            </button>
            <button
              className="px-6 py-2 border-l-0 bg-white border-2 border-solid border-gray-300 "
              onClick={() => handleTestAlign("right")}
            >
              <CiTextAlignRight className="text-xl" />
            </button>
            <button
              className="px-6 py-2 rounded-r-sm border-l-0 bg-white border-2 border-solid border-gray-300 "
              onClick={() => handleTestAlign("justify")}
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
                    onChange={(e) => handleBgColor(item.bg)}
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
