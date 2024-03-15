import React from "react";
import useResumeStore from "../../../Store/store";
import InputField from "../../InputField/InputField";
function ContactAcc() {
  const { resumeData, setContactLabel, setContactValue } = useResumeStore();
  const handleContactLabel = (value, index) => {
    setContactLabel(value, index);
  };
  const handleContactValue = (value, index) => {
    setContactValue(value, index);
  };
  return (
    <div>
      {resumeData &&
        resumeData.Contact.map((data, i) => (
          <div key={i} className="mt-3">
            <InputField
              label="Label"
              type="text"
              value={data.label}
              onChange={(e) => handleContactLabel(e.target.value, i)}
            />
            <InputField
              label="Value"
              type="text"
              value={data.value}
              onChange={(e) => handleContactValue(e.target.value, i)}
            />
          </div>
        ))}
    </div>
  );
}

export default ContactAcc;
