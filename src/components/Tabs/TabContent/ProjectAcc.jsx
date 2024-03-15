import React from 'react'
import InputField from '../../InputField/InputField'
import useResumeStore from '../../../Store/store'

function ProjectAcc() {
    const { resumeData, setProjectName, setProjectDescription, setProjectLink } = useResumeStore();
  return (
    <div>
        {
            resumeData && resumeData.Projects.map((data, i)=>
                <div className='mt-3' key={i}>
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
                </div>
            )
        }
    </div>
  )
}

export default ProjectAcc