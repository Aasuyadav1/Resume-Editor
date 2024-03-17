import React, { useState, useEffect } from "react";
import useResumeStore from "../../../Store/store";
import InputField from "../../InputField/InputField";
import Button from "../../Button";
import { LuTrash } from "react-icons/lu";
function ContactAcc() {
  const { resumeData, setContactLabel, setContactValue,addNewContact, removeContact } = useResumeStore();
  const [newContact, setNewContact] = useState({
    label: "",
    value: "",
  });
  const [trackAdd, setTrackAdd] = useState(true);
  const [addNew, setAddNew] = useState(false);
  const handleContactLabel = (value, index) => {
    setContactLabel(value, index);
  };
  const handleContactValue = (value, index) => {
    setContactValue(value, index);
  };
  const handleAddContact = () => {
    if (newContact.label && newContact.value ) {
      addNewContact(
        newContact.label,
        newContact.value
      );
      setNewContact({ label: "", value: "" });
      setAddNew(false);
    }
  };
  useEffect(() => {
    if (resumeData) {
      const totalIndex = resumeData.Contact.length;
      if (totalIndex === 4) {
        setTrackAdd(false);
      } else {
        setTrackAdd(true);
      }
    }
  }, [resumeData]);
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
            <span onClick={() => removeContact(i)} className="mt-1 w-fit justify-center flex gap-1 items-center font-semibold cursor-pointer text-red-600 text-[0.9rem]"><LuTrash />
Remove this</span>
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
            label="Label"
            type="text"
            value={newContact.label}
            onChange={(e) =>
              setNewContact({ ...newContact, label: e.target.value })
            }
          />
          <InputField
            label="Value"
            type="text"
            value={newContact.value}
            onChange={(e) =>
              setNewContact({ ...newContact, value: e.target.value })
            }
          />
          
          <div className="flex justify-end">
            <Button
              label="Add Now"
              bgColor="bg-black"
              color=" text-white"
              onClick={handleAddContact}
              classes="mt-4 px-3 py-[8px] rounded-md text-sm"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactAcc;
