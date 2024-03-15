import React from 'react'
import InputField from '../../InputField/InputField'
import useResumeStore from '../../../Store/store'

function Experience() {
    const { resumeData, setExperienceCompany, setExperiencePosition, setExperienceDate, setExperienceDescription } = useResumeStore();
  return (
    <div>
        {
            resumeData && resumeData.Experience.map((data, i)=>
                <div className='mt-3' key={i}>
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
                </div>
            )
        }
    </div>
  )
}

export default Experience