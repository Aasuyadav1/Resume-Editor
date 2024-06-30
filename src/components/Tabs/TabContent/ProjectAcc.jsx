import React, { useState, useEffect } from 'react';
import InputField from '../../InputField/InputField';
import useResumeStore from '../../../Store/store';
import Button from '../../Button';
import { LuTrash } from "react-icons/lu";

function ProjectAcc() {
  const { resumeData, setResumeData, addNewField, removeField } = useResumeStore();

  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    link: "",
  });
  const [trackAdd, setTrackAdd] = useState(true);
  const [addNew, setAddNew] = useState(false);

  const handleChange = (section, index, name, value) => {
    setResumeData(section, index, name, value);
  }

  const handleAdd = (section) => {
    if (newProject.name && newProject.description && newProject.link) {
      addNewField(section, newProject);
      setNewProject({ name: "", description: "", link: "" });
      setAddNew(false);
    }
  }

  useEffect(() => {
    if (resumeData) {
      const totalIndex = resumeData.Projects.length;
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
        resumeData.Projects.map((data, i) => (
          <div className='mt-6' key={i}>
            <p className="text-[#4f4e4e] text-[1rem]">Project - {i + 1}</p>
            <InputField
              label="Name"
              type="text"
              name="name"
              value={data.name}
              onChange={(e) => handleChange('Projects', i, e.target.name, e.target.value)}
            />
            <InputField
              label="Description"
              type="text"
              name="description"
              value={data.description}
              onChange={(e) => handleChange('Projects', i, e.target.name, e.target.value)}
            />
            <InputField
              label="Link"
              type="text"
              name="link"
              value={data.link}
              onChange={(e) => handleChange('Projects', i, e.target.name, e.target.value)}
            />
            <span onClick={() => removeField('Projects', i)} className="mt-1 w-fit justify-center flex gap-1 items-center font-semibold cursor-pointer text-red-600 text-[0.9rem]"><LuTrash />Remove this</span>
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
            label="Name"
            type="text"
            value={newProject.name}
            onChange={(e) =>
              setNewProject({ ...newProject, name: e.target.value })
            }
          />
          <InputField
            label="Description"
            type="text"
            value={newProject.description}
            onChange={(e) =>
              setNewProject({ ...newProject, description: e.target.value })
            }
          />
          <InputField
            label="Link"
            type="text"
            value={newProject.link}
            onChange={(e) =>
              setNewProject({ ...newProject, link: e.target.value })
            }
          />
          <div className="flex justify-end">
            <Button
              label="Add Now"
              bgColor="bg-black"
              color="text-white"
              onClick={() => handleAdd('Projects')}
              classes="mt-4 px-3 py-[8px] rounded-md text-sm"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectAcc;
