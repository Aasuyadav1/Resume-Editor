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
      } else if (selectedEducationDateIndex == 0 || selectedEducationDateIndex) {
        setEditData(resumeData.Education[selectedEducationDateIndex].date);
      } else if (selectedEducationDegreeIndex == 0 || selectedEducationDegreeIndex) {
        setEditData(resumeData.Education[selectedEducationDegreeIndex].degree);
      } else if (selectedEducationUniversityIndex == 0 || selectedEducationUniversityIndex) {
        setEditData(
          resumeData.Education[selectedEducationUniversityIndex].university
        );
      } else if (selectedSkillCatrgoryIndex == 0 || selectedSkillCatrgoryIndex) {
        setEditData(resumeData.Skills[selectedSkillCatrgoryIndex].category);
      } else if (selectedSkillSkillsIndex == 0 || selectedSkillSkillsIndex) {
        setEditData(resumeData.Skills[selectedSkillSkillsIndex].skills);
      } else if (selectedContectLabelIndex == 0 || selectedContectLabelIndex) {
        setEditData(resumeData.Contact[selectedContectLabelIndex].label);
      } else if (selectedContectValueIndex == 0 || selectedContectValueIndex) {
        setEditData(resumeData.Contact[selectedContectValueIndex].value);
      } else if (selectedExperienceDateIndex == 0 || selectedExperienceDateIndex) {
        setEditData(resumeData.Experience[selectedExperienceDateIndex].date);
      } else if (selectedExperienceCompanyIndex == 0 || selectedExperienceCompanyIndex) {
        setEditData(
          resumeData.Experience[selectedExperienceCompanyIndex].company
        );
      } else if (selectedExperiencePositionIndex == 0 || selectedExperiencePositionIndex) {
        setEditData(
          resumeData.Experience[selectedExperiencePositionIndex].position
        );
      } else if (selectedExperienceDescriptionIndex == 0 || selectedExperienceDescriptionIndex) {
        setEditData(
          resumeData.Experience[selectedExperienceDescriptionIndex].description
        );
      } else if (selectedProjectNameIndex == 0 || selectedProjectNameIndex) {
        setEditData(resumeData.Projects[selectedProjectNameIndex].name);
      } else if (selectedProjectdescriptionIndex == 0 || selectedProjectdescriptionIndex) {
        setEditData(
          resumeData.Projects[selectedProjectdescriptionIndex].description
        );
      } else if (selectedProjectlinkIndex == 0 || selectedProjectlinkIndex) {
        setEditData(resumeData.Projects[selectedProjectlinkIndex].link);
      }
       else {
        // setEditData(selectedElement.innerHTML);
        console.log(selectedElement);
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
    } else if (selectedEducationDateIndex == 0 || selectedEducationDateIndex) {
      setEducationDate(e.target.value, selectedEducationDateIndex);
    } else if (selectedEducationDegreeIndex == 0 || selectedEducationDegreeIndex) {
      setEducationDegree(e.target.value, selectedEducationDegreeIndex);
    } else if (selectedEducationUniversityIndex == 0 || selectedEducationUniversityIndex) {
      setEducationUniversity(e.target.value, selectedEducationUniversityIndex);
    } else if (selectedSkillCatrgoryIndex == 0 || selectedSkillCatrgoryIndex) {
      setSkillsCategory(e.target.value, selectedSkillCatrgoryIndex);
    } else if (selectedSkillSkillsIndex == 0 || selectedSkillSkillsIndex) {
      setSkillsSkills(e.target.value, selectedSkillSkillsIndex);
    } else if (selectedContectLabelIndex == 0 || selectedContectLabelIndex) {
      setContactLabel(e.target.value, selectedContectLabelIndex);
    } else if (selectedContectValueIndex == 0 || selectedContectValueIndex) {
      setContactValue(e.target.value, selectedContectValueIndex);
    } else if (selectedExperienceDateIndex == 0 || selectedExperienceDateIndex) {
      setExperienceDate(e.target.value, selectedExperienceDateIndex);
    } else if (selectedExperienceCompanyIndex == 0 || selectedExperienceCompanyIndex) {
      setExperienceCompany(e.target.value, selectedExperienceCompanyIndex);
    } else if (selectedExperiencePositionIndex == 0 || selectedExperiencePositionIndex) {
      setExperiencePosition(e.target.value, selectedExperiencePositionIndex);
    } else if (selectedExperienceDescriptionIndex == 0 || selectedExperienceDescriptionIndex) {
      setExperienceDescription(e.target.value, selectedExperienceDescriptionIndex);
    } else if (selectedProjectNameIndex == 0 || selectedProjectNameIndex) {
      setProjectName(e.target.value, selectedProjectNameIndex);
    } else if (selectedProjectdescriptionIndex == 0 || selectedProjectdescriptionIndex) {
      setProjectDescription(e.target.value, selectedProjectdescriptionIndex);
    } else if (selectedProjectlinkIndex == 0 || selectedProjectlinkIndex) {
      setProjectLink(e.target.value, selectedProjectlinkIndex);
    }
    else {
      // selectedElement.innerHTML = e.target.value;
      console.log("on change", selectedElement);
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
    <div className="flex shadow-sm max-w-[305px] w-full flex-col px-2 py-2 bg-[#fff] fixed h-screen right-0 border-l-2 border-solid top-16 overflow-y-auto">
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
