import React, { useEffect, useState } from "react";
import InputField from "../../InputField/InputField";
import useResumeStore from "../../../Store/store";
import Button from "../../Button";
import { LuTrash } from "react-icons/lu";

function EduactionAcc() {
  const {
    resumeData,
    setEducationDate,
    setEducationDegree,
    setEducationUniversity,
    addNewEducation,
    removeEducation,
  } = useResumeStore();

  const [newEduction, setNewEducation] = useState({
    date: "",
    degree: "",
    university: "",
  });
  const [trackAdd, setTrackAdd] = useState(true);
  const [addNew, setAddNew] = useState(false);
  const handleDateChange = (date, index) => {
    setEducationDate(date, index); // Call setEducationDate with the new date and index
  };
  const handleDegreeChange = (degree, index) => {
    setEducationDegree(degree, index);
  };
  const handleUniversityChange = (university, index) => {
    setEducationUniversity(university, index);
  };
  const handleAddEducation = () => {
    if (newEduction.date && newEduction.degree && newEduction.university) {
      addNewEducation(
        newEduction.date,
        newEduction.degree,
        newEduction.university
      );
      console.log(
        "add new education",
        newEduction.date,
        newEduction.degree,
        newEduction.university
      );
      setNewEducation({ date: "", degree: "", university: "" });
      console.log(resumeData.Education);
      console.log("add new education", resumeData);
      setAddNew(false);
    }
  };
  useEffect(() => {
    if (resumeData) {
      const totalIndex = resumeData.Education.length;
      if (totalIndex === 3) {
        setTrackAdd(false);
      } else {
        setTrackAdd(true);
      }
    }
  }, [resumeData]);
  return (
    <div className="-mt-8 py-2">
      {resumeData &&
        resumeData.Education.map((data, i) => (
          <div className="mt-6" key={i}>
            <p className=" text-[#4f4e4e] text-[1rem]"> Education - {i + 1}</p>
            <InputField
              label="Year"
              type="text"
              value={data.date}
              onChange={(e) => handleDateChange(e.target.value, i)}
            />
            <InputField
              label="Degree"
              type="text"
              value={data.degree}
              onChange={(e) => handleDegreeChange(e.target.value, i)}
            />
            <InputField
              label="University"
              type="text"
              value={data.university}
              onChange={(e) => handleUniversityChange(e.target.value, i)}
            />
            <span onClick={() => removeEducation(i)} className="mt-1 w-fit justify-center flex gap-1 items-center font-semibold cursor-pointer text-red-600 text-[0.9rem]"><LuTrash />
Remove this</span>
          </div>
        ))}
      {trackAdd && (
        <p
          className="mt-6 mb-4 font-semibold cursor-pointer text-blue-600 text-[0.9rem]"
          onClick={() => setAddNew(!addNew)}
        >
          {addNew ? "- Cancel" : "+ Add One More"}
        </p>
      )}
      {addNew && (
        <div className="mt-4 mb-4  w-full">
          <InputField
            label="Year"
            type="text"
            value={newEduction.date}
            onChange={(e) =>
              setNewEducation({ ...newEduction, date: e.target.value })
            }
          />
          <InputField
            label="Degree"
            type="text"
            value={newEduction.degree}
            onChange={(e) =>
              setNewEducation({ ...newEduction, degree: e.target.value })
            }
          />
          <InputField
            label="University"
            type="text"
            value={newEduction.university}
            onChange={(e) =>
              setNewEducation({ ...newEduction, university: e.target.value })
            }
          />
          <div className="flex justify-end">
            <Button
              label="Add Now"
              bgColor="bg-black"
              color=" text-white"
              onClick={handleAddEducation}
              classes="mt-4 px-3 py-[8px] rounded-md text-sm"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default EduactionAcc;
