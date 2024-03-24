import React from "react";
import Accordian from "../../Accordian/Accordian";
import PersonalDetails from "../TabContent/PersonalDetails";
import EduactionAcc from "../TabContent/EduactionAcc";
import ContactAcc from "../TabContent/ContactAcc";
import SkillsAcc from "../TabContent/SkillsAcc";
import Experience from "../TabContent/Experience";
import ProjectAcc from "../TabContent/ProjectAcc";

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
            title:"Contact Details",
            content:<ContactAcc/>
        },
        {
            key:"4",
            title:"Skills Details",
            content:<SkillsAcc/>
        },
        {
            key:"5",
            title:"Experience Details",
            content:<Experience/>
        },
        {
            key:"6",
            title:"Project Details",
            content:<ProjectAcc/>
        }


    ]
  return (
    <div className="pb-12 flex flex-col items-center h-full w-full  ">
      {
        accordian.map((data)=>(
            <Accordian key={data.key} accordionKey={data.key} title={data.title} content={data.content} />
        ))
      }
      
    </div>
  );
}

export default CreateTab;
