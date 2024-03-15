import React, { useEffect } from "react";
import InputField from "../../InputField/InputField";
import useResumeStore from "../../../Store/store";

function EduactionAcc() {
  const { resumeData, setEducationDate,setEducationDegree,setEducationUniversity } = useResumeStore();
  const handleDateChange = (date, index) => {
    setEducationDate(date, index); // Call setEducationDate with the new date and index
  };
  const handleDegreeChange = (degree, index) => {
    setEducationDegree(degree, index);
  }
  const handleUniversityChange = (university, index) => {
    setEducationUniversity(university, index);
  }

  return (
    <div>
      {resumeData &&
        resumeData.Education.map((data,i) => (
          <div className="mt-4">
            <InputField
             label="Year"
             type="text"
             value={data.date}
             key={i}
             onChange={(e) => handleDateChange(e.target.value, i)}/>
            <InputField
              label="Degree"
              type="text"
              value={data.degree}
              key={i}
              onChange={((e)=> handleDegreeChange(e.target.value, i))}
              />
            <InputField
              label="University"
              type="text"
              value={data.university}
              key={i}
              onChange={(e)=>handleUniversityChange(e.target.value, i)}
            />
          </div>
        ))}
    </div>
  );
}

export default EduactionAcc;
