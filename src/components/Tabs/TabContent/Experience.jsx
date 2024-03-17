import React from 'react'
import InputField from '../../InputField/InputField'
import useResumeStore from '../../../Store/store'
import Button from '../../Button';
import { LuTrash } from "react-icons/lu";
import { useState, useEffect } from 'react';

function Experience() {
    const { resumeData, setExperienceCompany,removeExperience, setExperiencePosition, setExperienceDate, setExperienceDescription, addNewExperience } = useResumeStore();
    const [newExperience, setNewExperience] = useState({
        date: "",
        company: "",
        position: "",
        description: "",
    })
    const [trackAdd, setTrackAdd] = useState(true);
    const [addNew, setAddNew] = useState(false);
    const handleAddExperience = () => {
        if (newExperience.date && newExperience.company && newExperience.position && newExperience.description) {
          addNewExperience(
            newExperience.date,
            newExperience.company,
            newExperience.position,
            newExperience.description
          );
          setNewExperience({ date: "", company: "", position: "", description: "" });
          setAddNew(false);
        }
      };
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
        {
            resumeData && resumeData.Experience.map((data, i)=>
                <div className='mt-6' key={i}>
                   <p className=" text-[#4f4e4e] text-[1rem]"> Experience - {i + 1}</p>
                    <InputField
                        label="Date"
                        type="text"
                        value={data.date}
                        onChange={(e) => setExperienceDate(e.target.value, i)}
                    />
                    <InputField
                        label="Company"
                        type="text"
                        value={data.company}
                        onChange={(e) => setExperienceCompany(e.target.value, i)}

                    />
                    <InputField
                        label="Position"
                        type="text"
                        value={data.position}
                        onChange={(e) => setExperiencePosition(e.target.value, i)}

                    />
                    <InputField
                        label="Description"
                        type="text"
                        value={data.description}
                        onChange={(e) => setExperienceDescription(e.target.value, i)}

                    />
                    <span onClick={() => removeExperience(i)} className="mt-1 w-fit justify-center flex gap-1 items-center font-semibold cursor-pointer text-red-600 text-[0.9rem]"><LuTrash />
Remove this</span>
                </div>
            )
        }
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
              color=" text-white"
              onClick={handleAddExperience}
              classes="mt-4 px-3 py-[8px] rounded-md text-sm"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Experience