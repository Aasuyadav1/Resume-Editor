import React, { useState, useEffect } from 'react';
import InputField from '../../InputField/InputField';
import useResumeStore from '../../../Store/store';
import Button from '../../Button';
import { LuTrash } from "react-icons/lu";

function Experience() {
  const { resumeData, setResumeData, addNewField, removeField } = useResumeStore();

  const [newExperience, setNewExperience] = useState({
    date: "",
    company: "",
    position: "",
    description: "",
  });
  const [trackAdd, setTrackAdd] = useState(true);
  const [addNew, setAddNew] = useState(false);

  const handleChange = (section, index, name, value) => {
    setResumeData(section, index, name, value);
  }

  const handleAdd = (section) => {
    if (newExperience.date && newExperience.company && newExperience.position && newExperience.description) {
      addNewField(section, newExperience);
      setNewExperience({ date: "", company: "", position: "", description: "" });
      setAddNew(false);
    }
  }

  useEffect(() => {
    if (resumeData) {
      const totalIndex = resumeData.Experience.length;
      if (totalIndex === 5) {
        setTrackAdd(false);
      } else {
        setTrackAdd(true);
      }
    }
  }, [resumeData]);

  return (
    <div className='-mt-8 py-2'>
      {resumeData &&
        resumeData.Experience.map((data, i) => (
          <div className='mt-6' key={i}>
            <p className="text-[#4f4e4e] text-[1rem]">Experience - {i + 1}</p>
            <InputField
              label="Date"
              type="text"
              name="date"
              value={data.date}
              onChange={(e) => handleChange('Experience', i, e.target.name, e.target.value)}
            />
            <InputField
              label="Company"
              type="text"
              name="company"
              value={data.company}
              onChange={(e) => handleChange('Experience', i, e.target.name, e.target.value)}
            />
            <InputField
              label="Position"
              type="text"
              name="position"
              value={data.position}
              onChange={(e) => handleChange('Experience', i, e.target.name, e.target.value)}
            />
            <InputField
              label="Description"
              type="text"
              name="description"
              value={data.description}
              onChange={(e) => handleChange('Experience', i, e.target.name, e.target.value)}
            />
            <span onClick={() => removeField('Experience', i)} className="mt-1 w-fit justify-center flex gap-1 items-center font-semibold cursor-pointer text-red-600 text-[0.9rem]"><LuTrash />Remove this</span>
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
            label="Date"
            type="text"
            value={newExperience.date}
            onChange={(e) =>
              setNewExperience({ ...newExperience, date: e.target.value })
            }
          />
          <InputField
            label="Company"
            type="text"
            value={newExperience.company}
            onChange={(e) =>
              setNewExperience({ ...newExperience, company: e.target.value })
            }
          />
          <InputField
            label="Position"
            type="text"
            value={newExperience.position}
            onChange={(e) =>
              setNewExperience({ ...newExperience, position: e.target.value })
            }
          />
          <InputField
            label="Description"
            type="text"
            value={newExperience.description}
            onChange={(e) =>
              setNewExperience({ ...newExperience, description: e.target.value })
            }
          />
          <div className="flex justify-end">
            <Button
              label="Add Now"
              bgColor="bg-black"
              color="text-white"
              onClick={() => handleAdd('Experience')}
              classes="mt-4 px-3 py-[8px] rounded-md text-sm"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Experience;
