import React, { useState, useEffect } from "react";
import useResumeStore from "../../../Store/store";
import InputField from "../../InputField/InputField";
import Button from "../../Button";
import { LuTrash } from "react-icons/lu";

function EducationAcc() {
  const { resumeData, setResumeData, addNewField, removeField } = useResumeStore();

  const [newEducation, setNewEducation] = useState({
    date: "",
    degree: "",
    university: "",
  });
  const [trackAdd, setTrackAdd] = useState(true);
  const [addNew, setAddNew] = useState(false);

  const handleChange = (section, index, name, value) => {
    setResumeData(section, index, name, value);
  }

  const handleAdd = (section) => {
    if (newEducation.date && newEducation.degree && newEducation.university) {
      addNewField(section, newEducation);
      setNewEducation({ date: "", degree: "", university: "" });
      setAddNew(false);
    }
  }

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
          <div key={i} className="mt-6">
            <p className="text-[#4f4e4e] text-[1rem]">Education - {i + 1}</p>
            <InputField
              label="Year"
              type="text"
              name="date"
              value={data.date}
              onChange={(e) => handleChange('Education', i, e.target.name, e.target.value)}
            />
            <InputField
              label="Degree"
              type="text"
              name="degree"
              value={data.degree}
              onChange={(e) => handleChange('Education', i, e.target.name, e.target.value)}
            />
            <InputField
              label="University"
              type="text"
              name="university"
              value={data.university}
              onChange={(e) => handleChange('Education', i, e.target.name, e.target.value)}
            />
            <span onClick={() => removeField('Education', i)} className="mt-1 w-fit justify-center flex gap-1 items-center font-semibold cursor-pointer text-red-600 text-[0.9rem]"><LuTrash />Remove this</span>
          </div>
        ))}

      {trackAdd && (
        <p
          className="mt-4 font-semibold cursor-pointer text-blue-600 text-[0.9rem]"
          onClick={() => setAddNew(!addNew)}
        >
          {addNew ? "- Cancel" : "+ Add One More"}
        </p>
      )}
      {addNew && (
        <div className="mt-4 w-full">
          <InputField
            label="Year"
            type="text"
            value={newEducation.date}
            onChange={(e) =>
              setNewEducation({ ...newEducation, date: e.target.value })
            }
          />
          <InputField
            label="Degree"
            type="text"
            value={newEducation.degree}
            onChange={(e) =>
              setNewEducation({ ...newEducation, degree: e.target.value })
            }
          />
          <InputField
            label="University"
            type="text"
            value={newEducation.university}
            onChange={(e) =>
              setNewEducation({ ...newEducation, university: e.target.value })
            }
          />
          <div className="flex justify-end">
            <Button
              label="Add Now"
              bgColor="bg-black"
              color="text-white"
              onClick={() => handleAdd('Education')}
              classes="mt-4 px-3 py-[8px] rounded-md text-sm"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default EducationAcc;
