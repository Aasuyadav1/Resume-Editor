import React from "react";
import InputField from "./InputField/InputField";
import useResumeStore from "../Store/store";

function EduactionAcc() {
  const { resumeData } = useResumeStore();
  return (
    <div>
      {resumeData &&
        resumeData.Education.map((data) => (
          <div className="mt-4">
            <InputField label="Year" type="text" value={data.date} />
            <InputField label="Degree" type="text" value={data.degree} />
            <InputField
              label="University"
              type="text"
              value={data.university}
            />
          </div>
        ))}
    </div>
  );
}

export default EduactionAcc;
