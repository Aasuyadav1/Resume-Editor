import React from "react";
import Accordian from "./Accordian/Accordian";
import PersonalDetails from "./PersonalDetails";
import EduactionAcc from "./EduactionAcc";

function CreateTab() {
    const accordian = [
        {
            key:"1",
            title:"Personal Details",
            content:<PersonalDetails/>
        },
        {
            key:"2",
            title:"Educational Details",
            content:<EduactionAcc/>
        },
        {
            key:"3",
            title:"Skills Details",
            content:"Skills Details"
        },
        {
            key:"4",
            title:"Experience Details",
            content:"Experience Details"
        },
        {
            key:"5",
            title:"Project Details",
            content:"Project Details"
        }


    ]
  return (
    <div>
      {
        accordian.map((data)=>(
            <Accordian key={data.key} title={data.title} content={data.content} />
        ))
      }
      
    </div>
  );
}

export default CreateTab;
