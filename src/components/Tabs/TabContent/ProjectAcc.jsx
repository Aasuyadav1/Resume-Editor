import React , { useState, useEffect} from 'react'
import InputField from '../../InputField/InputField'
import useResumeStore from '../../../Store/store'
import Button from '../../Button';
import { LuTrash } from "react-icons/lu";
function ProjectAcc() {
    const { resumeData, setProjectName,removeProject, setProjectDescription, setProjectLink,addNewProject } = useResumeStore();
    const [newProject, setNewProject] = useState({
        name: "",
        description: "",
        link: "",
    })
    const [trackAdd, setTrackAdd] = useState(true);
    const [addNew, setAddNew] = useState(false);
    const handleAddProject = () => {
        if (newProject.name && newProject.description && newProject.link) {
          addNewProject(
            newProject.name,
            newProject.description,
            newProject.link
          )
          setNewProject({ date: "", description: "", link: "" });
          setAddNew(false);
        }
      };
      useEffect(() => {
        if (resumeData) {
          const totalIndex = resumeData.Projects.length;
          if (totalIndex == 5) {
            setTrackAdd(false);
          } else {
            setTrackAdd(true);
          }
        }
      }, [resumeData]);
  return (
    <div className='-mt-8 py-2'>
        {
            resumeData && resumeData.Projects.map((data, i)=>
                <div className='mt-6' key={i}>
                  <p className=" text-[#4f4e4e] text-[1rem]"> Project - {i + 1}</p>
                    <InputField
                        label="Name"
                        type="text"
                        value={data.name}
                        onChange={(e) => setProjectName(e.target.value, i)}
                    />
                    <InputField
                        label="Description"
                        type="text"
                        value={data.description}
                        onChange={(e) => setProjectDescription(e.target.value, i)}
                    />
                    <InputField 
                        label="Link"
                        type="text"
                        value={data.link}
                        onChange={(e) => setProjectLink(e.target.value, i)}
                    />
                    <span onClick={() => removeProject(i)} className="mt-1 w-fit justify-center flex gap-1 items-center font-semibold cursor-pointer text-red-600 text-[0.9rem]"><LuTrash />
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
              color=" text-white"
              onClick={handleAddProject}
              classes="mt-4 px-3 py-[8px] rounded-md text-sm"
            />
          </div>
        </div>
      )}

    </div>
  )
}

export default ProjectAcc