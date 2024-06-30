import React, { useState, useEffect } from 'react';
import InputField from '../../InputField/InputField';
import useResumeStore from '../../../Store/store';
import Button from '../../Button';
import { LuTrash } from "react-icons/lu";

function SkillsAcc() {
  const { resumeData, setResumeData, addNewField, removeField } = useResumeStore();

  const [newSkill, setNewSkill] = useState({
    category: "",
    skills: "",
  });
  const [trackAdd, setTrackAdd] = useState(true);
  const [addNew, setAddNew] = useState(false);

  const handleChange = (section, index, name, value) => {
    setResumeData(section, index, name, value);
  };

  const handleAdd = (section) => {
    if (newSkill.category && newSkill.skills) {
      addNewField(section, newSkill);
      setNewSkill({ category: "", skills: "" });
      setAddNew(false);
    }
  };

  useEffect(() => {
    if (resumeData) {
      const totalIndex = resumeData.Skills.length;
      if (totalIndex === 3) {
        setTrackAdd(false);
      } else {
        setTrackAdd(true);
      }
    }
  }, [resumeData]);

  return (
    <div className='-mt-8 py-2'>
      {resumeData &&
        resumeData.Skills.map((data, i) => (
          <div className='mt-6' key={i}>
            <p className="text-[#4f4e4e] text-[1rem]">Skill - {i + 1}</p>
            <InputField
              label="Category"
              type="text"
              name="category"
              value={data.category}
              onChange={(e) => handleChange('Skills', i, e.target.name, e.target.value)}
            />
            <InputField
              label="Skills"
              type="text"
              name="skills"
              value={data.skills}
              onChange={(e) => handleChange('Skills', i, e.target.name, e.target.value)}
            />
            <span onClick={() => removeField('Skills', i)} className="mt-1 w-fit justify-center flex gap-1 items-center font-semibold cursor-pointer text-red-600 text-[0.9rem]"><LuTrash />Remove this</span>
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
            label="Category"
            type="text"
            value={newSkill.category}
            onChange={(e) =>
              setNewSkill({ ...newSkill, category: e.target.value })
            }
          />
          <InputField
            label="Skills"
            type="text"
            value={newSkill.skills}
            onChange={(e) =>
              setNewSkill({ ...newSkill, skills: e.target.value })
            }
          />
          <div className="flex justify-end">
            <Button
              label="Add Now"
              bgColor="bg-black"
              color="text-white"
              onClick={() => handleAdd('Skills')}
              classes="mt-4 px-3 py-[8px] rounded-md text-sm"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default SkillsAcc;
