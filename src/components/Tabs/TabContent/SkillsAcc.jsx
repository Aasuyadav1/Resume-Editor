import React from 'react'
import InputField from '../../InputField/InputField'
import useResumeStore from '../../../Store/store'

function SkillsAcc() {
    const { resumeData, setSkillsCategory, setSkillsSkills } = useResumeStore();
  return (
    <div>
        {
            resumeData && resumeData.Skills.map((data, i)=> 
                <div className='mt-3' key={i}>
                    <InputField
                        label="Category"
                        type="text" 
                        value={data.category}
                        onChange={(e) => setSkillsCategory(e.target.value, i)}
                    />
                    <InputField
                        label="Skills"
                        type="text"
                        value={data.skills}
                        onChange={(e) => setSkillsSkills(e.target.value, i)}
                    />
                </div>
            )
        }
    </div>
  )
}

export default SkillsAcc