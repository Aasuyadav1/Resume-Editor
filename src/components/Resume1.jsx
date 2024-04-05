import React, { useEffect } from "react";
import { useState } from "react";
import useResumeStore from "../Store/store";
import { Tailwind,  compile } from "@onedoc/react-print";



function resume1() {
  const { selectedElement,
          setSelectedElement,
          resumeData,
          setSelectedDataIndex,
          selectedDataIndex,

          setselectedEducationDateIndex,
          setselectedEducationDegreeIndex,
          setselectedEducationUniversityIndex,

          setselectedSkillCategoryIndex,
          setselectedSkillSkillsIndex,

          setselectedContactLabelIndex,
          setselectedContactValueIndex,

          setselectedExperienceDateIndex,
          setselectedExperienceCompanyIndex,
          setselectedExperiencePositionIndex,
          setselectedExperienceDescriptionIndex,

          setselectedProjectNameIndex,
          setselectedProjectdescriptionIndex,
          setselectedProjectlinkIndex,

          setResumeimage,
          selectedTemplateId,
        } = useResumeStore();
  const [selectedDivContent, setSelectedDivContent] = useState(null);
  const [selectedElements, setSelectedElements] = useState(null);
  const [selectedImage, setSelectedImage] = useState(
    "https://media.istockphoto.com/id/1473711983/photo/university-tablet-and-campus-student-typing-internet-web-or-website-search-for-college.webp?b=1&s=170667a&w=0&k=20&c=LPhIpcyCjIweAILxehKYkyWehSzc4Uf8HM0rtfqgTIk="
  ); 

  const handleImageClick = () => {
    // Trigger click event on hidden file input
    document.getElementById("fileInput").click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setResumeimage(e.target.result); // Update selected image
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result); // Update selected image
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const setNull = () => {
    setSelectedDataIndex(null)
    setselectedEducationDateIndex(null)
    setselectedEducationDegreeIndex(null)
    setselectedEducationUniversityIndex(null)
    setselectedSkillCategoryIndex(null)
    setselectedSkillSkillsIndex(null)
    setselectedContactLabelIndex(null)
    setselectedContactValueIndex(null)
    setselectedExperienceDateIndex(null)
    setselectedExperienceCompanyIndex(null)
    setselectedExperiencePositionIndex(null)
    setselectedExperienceDescriptionIndex(null)
    setselectedProjectNameIndex(null)
    setselectedProjectdescriptionIndex(null)
    setselectedProjectlinkIndex(null)
  }

  const handleClick =  (e) => {
    setNull()
    const element = e.target;
    setSelectedElement(element);
  };

  const handleResumeInfoClick = (e, key) => {
    setNull()
    const element = e.target;
    setSelectedElement(element);
    setSelectedDataIndex(key)
  }

  const handleEducationDate = (e, index) => {
    setNull()
    const element = e.target;
    setSelectedElement(element);
    setselectedEducationDateIndex(index)
  }

  const handleEducationDegree = (e, index) => {
    setNull()
    const element = e.target;
    setSelectedElement(element);
    setselectedEducationDegreeIndex(index)
  }

  const handleEducationUniversity = (e, index) => {
    setNull()
    const element = e.target;
    setSelectedElement(element);
    setselectedEducationUniversityIndex(index)
  }

  const handleContactLabel = (e, index) => {
    setNull()
    const element = e.target;
    setSelectedElement(element);
    setselectedContactLabelIndex(index)
  }

  const handleContactValue = (e, index) => {
    setNull()
    const element = e.target;
    setSelectedElement(element);
    setselectedContactValueIndex(index)
  }

  const handleSkillCategory = (e, index) => {
    setNull()
    const element = e.target;
    setSelectedElement(element);
    setselectedSkillCategoryIndex(index)
  }

  const handleSkillSkills = (e, index) => {
    setNull()
    const element = e.target;
    setSelectedElement(element);
    setselectedSkillSkillsIndex(index)
  }

  const handleExperienceDate = (e, index) => {
    setNull()
    const element = e.target;
    setSelectedElement(element);
    setselectedExperienceDateIndex(index)
  }

  const handleExperienceCompany = (e, index) => {
    setNull()
    const element = e.target;
    setSelectedElement(element);
    setselectedExperienceCompanyIndex(index)
  }

  const handleExperiencePosition = (e, index) => {
    setNull()
    const element = e.target;
    setSelectedElement(element);
    setselectedExperiencePositionIndex(index)
  }

  const handleExperienceDescription = (e, index) => {
    setNull()
    const element = e.target;
    setSelectedElement(element);
    setselectedExperienceDescriptionIndex(index)
  }

  const handleProjectsName = (e, index) => {
    setNull()
    const element = e.target;
    setSelectedElement(element);
    setselectedProjectNameIndex(index)
  }

  const handleProjectsDescription = (e, index) => {
    setNull()
    const element = e.target;
    setSelectedElement(element);
    setselectedProjectdescriptionIndex(index)
  }

  const handleProjectsLink = (e, index) => {
    setNull()
    const element = e.target;
    setSelectedElement(element);
    setselectedProjectlinkIndex(index)
  }

  useEffect(() => {
    if (selectedElement) {
      const elements = document.querySelectorAll(".clickable-element");
      elements.forEach((element)=>{
        if(element === selectedElement){
          selectedElement.classList.add('activeelement');
        } else{
          element.classList.remove('activeelement');
        }
      })
      
     }
  }, [selectedElement]);
 

  return  (
   
      <div className="flex break-words flex-col gap-20 text-wrap">
    {
      selectedTemplateId === 1 && 
      <div id="resume1pdf" className=" w-[672px]  shadow-xl mx-auto cursor-pointer bg-white mt-20 mb-20  py-8 px-10 font-sans overflow-hidden text-wrap break-words">
      <div
        // className="w-full h-fit flex items-center gap-10 px-5 py-1"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{width : '100%', height : '100%', display : 'flex', alignItems : 'center', gap : '40px', paddingBlock : '20px' , paddingInline : '4px'}}
      >
        <img
          src={resumeData.image}
          alt="Selected"
          className= " imgess border-dashed hover:border-indigo-600 border-[2px] border-transparent cursor-pointer"
          style={{width : '100px', height : '100px', objectFit : 'cover', borderRadius : '50%', cursor : 'pointer',}}
          onClick={handleImageClick}
          draggable="true"
        />
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={handleImageChange}
        />
        <div className="w-[450px]  text-wrap break-words">
          <p
            className="  clickable-element hover:border-indigo-600 border-[2px] border-dashed border-transparent text-black"
            style={{fontSize : '60px', lineHeight : '1', paddingBottom : '8px', width : '100%', fontStyle : 'bold', textAlign : 'left', wordWrap : 'break-word'}}
            onClick={(e)=>handleResumeInfoClick(e,"resumeData.title")}
          >
            {resumeData.title}
          </p>
          <p
            className="text-2xl   clickable-element text-black text-wrap  font-normal border-dashed hover:border-indigo-600 border-transparent border-[2px]"
            onClick={(e)=>handleResumeInfoClick(e,"resumeData.subtitle")}
          >
            {resumeData.subtitle}
          </p>
        </div>
      </div>
      <div className="flex  break-words  gap-8   mt-4 px-5">
        <div className="w-[150px]  text-wrap break-words">
          <h2
            onClick={handleClick}
            className="heading    text-md w-[150px] clickable-element font-semibold border-dashed hover:border-indigo-600 border-transparent border-[2px]"
          >
            Education
          </h2>
          <hr className="border-[1.5px] border-[#6580ec] mt-1 w-16 rounded-md" />
         {
         // education map
          resumeData.Education.map((data,i)=>(
            <div className="mt-3" key={i}>
            <p
              onClick={(e)=>handleEducationDate(e,i)}
              className="text-sm   border-dashed clickable-element  hover:border-indigo-600 border-transparent border-[2px] "
            >
              {data.date}
            </p>
            <p
              onClick={(e)=>handleEducationDegree(e,i)}
              className="text-sm  clickable-element text-[#787777] border-dashed hover:border-indigo-600 border-transparent border-[2px]"
            >
              {data.degree}
            </p>
            <p
              onClick={(e)=>handleEducationUniversity(e,i)}
              className="text-sm   clickable-element text-[#787777] leading-snug border-dashed hover:border-indigo-600 border-transparent border-[2px]"
            >
              {data.university}
            </p>
          </div>
          ))
         }
          <h2
            onClick={handleClick}
            className="heading   text-lg clickable-element font-semibold mt-10 border-dashed hover:border-indigo-600 border-transparent border-[2px]"
          >
            Contact
          </h2>
          <hr className="border-[1.5px] border-[#6580ec] mt-1 w-16 rounded-md" />
          {
            resumeData.Contact.map((data,i)=>(
              <div className="mt-3" key={i}>
            <h1
              onClick={(e)=>handleContactLabel(e,i)}
              className="text-sm   clickable-element border-dashed hover:border-indigo-600 border-transparent border-[2px]"
            >
              {data.label}
            </h1>
            <p
              onClick={(e)=>handleContactValue(e,i)}
              className="text-[#868686]   clickable-element border-dashed hover:border-indigo-600 border-transparent border-[2px] text-sm leading-snug"
            >
              {data.value}
            </p>
          </div>
            ))
          }
         

          <div>
            <h2
              onClick={handleClick}
              className="heading  text-lg clickable-element font-semibold mt-10 border-dashed hover:border-indigo-600 border-transparent border-[2px]"
            >
              Skills
            </h2>
            <hr className="border-[1.5px] border-[#6580ec] mt-1 w-16 rounded-md" />
           {
            resumeData.Skills.map((data,i)=>(
              <div className="mt-3" key={i}>
              <h1
                onClick={(e)=>handleSkillCategory(e,i)}
                className="text-sm  clickable-element font-semibold border-dashed hover:border-indigo-600  border-transparent border-[2px]"
              >
                {data.category}
              </h1>
              <p
                onClick={(e)=>handleSkillSkills(e,i)}
                className="clickable-element  border-dashed hover:border-indigo-600 border-transparent border-[2px] text-sm leading-snug"
              >
                {data.skills}
              </p>
            </div>
            ))
           }
          </div>
        </div>
        <div className="w-[388px]  text-wrap break-words">
          <div>
            <h2
              onClick={handleClick}
              className="heading   text-lg clickable-element w-[388px] font-semibold border-dashed hover:border-indigo-600 border-transparent border-[2px]"
            >
              Profile
            </h2>
            <hr className="border-[1.5px] border-[#6580ec] mt-1 w-16 rounded-md" />
            <p
              onClick={(e)=>handleResumeInfoClick(e,"resumeData.description")}
              className="mt-2   clickable-element text-sm border-dashed hover:border-indigo-600 border-transparent border-[2px]"
            >
              {resumeData.description}
            </p>
          </div>

          <div className="mt-10">
            <h2
              onClick={handleClick}
              className="heading   text-lg clickable-element font-semibold border-dashed hover:border-indigo-600 border-transparent border-[2px]"
            >
              Experience
            </h2>
            <hr className="border-[1.5px] border-[#6580ec] mt-1 w-16 rounded-md" />
            <div>
             {
              resumeData.Experience.map((data,i)=>(
                <div className="flex gap-8  mt-6 " key={i}>
                <div className="w-[130px] text-wrap">
                  <p
                    onClick={(e)=>handleExperienceDate(e,i)}
                    className="clickable-element   text-sm w-[130px] font-semibold text-[#868686] tracking-normal leading-snug border-dashed hover:border-indigo-600 border-transparent border-[2px]"
                  >
                    {data.date}
                  </p>
                  <p onClick={(e)=>handleExperienceCompany(e,i)} className="clickable-element   text-sm text-[#868686] leading-snug border-dashed hover:border-indigo-600 border-transparent border-[2px]">
                    {data.company}
                  </p>
                </div>
                <div className="w-[225px] text-wrap">
                  <h1
                    onClick={(e)=>handleExperiencePosition(e,i)}
                    className="text-md w-[225px]   clickable-element font-semibold border-dashed hover:border-indigo-600 border-transparent border-[2px]"
                  >
                    {data.position}
                  </h1>
                  <p
                    onClick={(e)=>handleExperienceDescription(e,i)}
                    className="text-[#868686]   clickable-element text-sm leading-snug border-dashed hover:border-indigo-600 border-transparent border-[2px]"
                  >
                    {data.description}
                  </p>
                </div>
              </div>
              ))
             }           
            </div>
          </div>

          <div className="mt-10">
            <h2
              onClick={handleClick}
              className="heading text-lg   clickable-element font-semibold border-dashed hover:border-indigo-600 border-transparent border-[2px]"
            >
              Projects
            </h2>
            <hr className="border-[1.5px] border-[#6580ec] mt-1 w-16 rounded-md" />

            {
              resumeData.Projects.map((data,i)=>(
                <div className="mt-4" key={i}>
              <h1
                onClick={(e)=>handleProjectsName(e,i)}
                className="text-md   clickable-element font-semibold border-dashed hover:border-indigo-600 border-transparent border-[2px]"
              >
                &#x2022; {data.name}
              </h1>
              <p
                onClick={(e)=>handleProjectsDescription(e,i)}
                className="text-[#868686]   clickable-element text-sm leading-snug border-dashed hover:border-indigo-600 border-transparent border-[2px]"
              >
                {data.description}
              </p>
              <p
                onClick={(e)=>handleProjectsLink(e,i)}
                className="border-dashed   clickable-element hover:border-indigo-600 border-transparent border-[2px] block -mt-0 text-sm text-blue-400 leading-snug"
              >
                {data.link}
              </p>
            </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
    }
   

     {
      selectedTemplateId === 2 && 
      <div id="resume2pdf" className=" w-[672px]  shadow-xl mx-auto cursor-pointer bg-white mb-20 mt-20 pb-8 px-10 font-sans overflow-hidden text-wrap break-words">
        <div
        // className="w-full h-fit flex items-center gap-10 px-5 py-1"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{width : '100%', height : '100%', display : 'flex', alignItems : 'center', gap : '40px', paddingBlock : '20px' , paddingInline : '4px'}}
      >
         <div className="w-[550px]  text-wrap break-words">
          <p
            className="border-dashed  clickable-element  hover:border-indigo-600 border-transparent border-[2px] text-black"
            style={{fontSize : '60px', lineHeight : '1', paddingBottom : '8px', width : '100%', fontStyle : 'bold', textAlign : 'left', wordWrap : 'break-word'}}
            onClick={(e)=>handleResumeInfoClick(e,"resumeData.title")}
          >
            {resumeData.title}
          </p>
          <p
            className="text-2xl text-black text-wrap  font-normal border-dashed clickable-element  hover:border-indigo-600 border-transparent border-[2px]"
            onClick={(e)=>handleResumeInfoClick(e,"resumeData.subtitle")}
          >
            {resumeData.subtitle}
          </p>
        </div>

        <div className="mt-3">
        {
            resumeData.Contact.map((data,i)=>(
              <div  key={i}>
            
            <p
              onClick={(e)=>handleContactValue(e,i)}
              className="text-[#868686] border-dashed  clickable-element  hover:border-indigo-600 border-transparent border-[2px] text-sm leading-snug"
            >
              {data.value}
            </p>
          </div>
            ))
          }
        </div>
         
        
        </div> 
        <p
              onClick={(e)=>handleResumeInfoClick(e,"resumeData.description")}
              className="mt-2 text-sm border-dashed  clickable-element  hover:border-indigo-600 border-transparent border-[2px]"
            >
              {resumeData.description}
        </p>
        <div className="flex gap-8 ">
          <div className="mt-10">
            <h2
              onClick={handleClick}
              className="heading text-lg font-semibold border-dashed clickable-element  hover:border-indigo-600 border-transparent border-[2px]"
            >
              Experience
            </h2>
            <hr className="border-[1.5px] border-[#6580ec] mt-1 w-16 rounded-md" />
            <div>
             {
              resumeData.Experience.map((data,i)=>(
                <div className="flex gap-8  mt-6 " key={i}>
                <div className="w-[130px] text-wrap">
                  <p
                    onClick={(e)=>handleExperienceDate(e,i)}
                    className="text-sm w-[130px] font-semibold text-[#868686] tracking-normal leading-snug border-dashed  clickable-element  hover:border-indigo-600 border-transparent border-[2px]"
                  >
                    {data.date}
                  </p>
                  <p onClick={(e)=>handleExperienceCompany(e,i)} className=" text-sm text-[#868686] leading-snug border-dashed  clickable-element  hover:border-indigo-600 border-transparent border-[2px]">
                    {data.company}
                  </p>
                </div>
                <div className="w-[225px] text-wrap">
                  <h1
                    onClick={(e)=>handleExperiencePosition(e,i)}
                    className="text-md w-[225px] font-semibold border-dashed  clickable-element  hover:border-indigo-600 border-transparent border-[2px]"
                  >
                    {data.position}
                  </h1>
                  <p
                    onClick={(e)=>handleExperienceDescription(e,i)}
                    className="text-[#868686] text-sm leading-snug border-dashed clickable-element  hover:border-indigo-600 border-transparent border-[2px]"
                  >
                    {data.description}
                  </p>
                </div>
              </div>
              ))
             }           
            </div>
          </div>
          <div className="mt-10">
          <h2
            onClick={handleClick}
            className="heading text-md w-[150px] font-semibold border-dashed  clickable-element  hover:border-indigo-600 border-transparent border-[2px]"
          >
            Education
          </h2>
          <hr className="border-[1.5px] border-[#6580ec] mt-1 w-16 rounded-md" />
         {
         // education map
          resumeData.Education.map((data,i)=>(
            <div className="mt-3" key={i}>
            <p
              onClick={(e)=>handleEducationDate(e,i)}
              className="text-sm border-dashed  clickable-element  hover:border-indigo-600 border-transparent border-[2px]"
            >
              {data.date}
            </p>
            <p
              onClick={(e)=>handleEducationDegree(e,i)}
              className="text-sm text-[#787777] border-dashed  clickable-element  hover:border-indigo-600 border-transparent border-[2px]"
            >
              {data.degree}
            </p>
            <p
              onClick={(e)=>handleEducationUniversity(e,i)}
              className="text-sm text-[#787777] leading-snug border-dashed  clickable-element  hover:border-indigo-600 border-transparent border-[2px]"
            >
              {data.university}
            </p>
          </div>
          ))
         }
          </div>
        </div>
        <div className="flex gap-8 mt-10">
            <div>
        <h2
              onClick={handleClick}
              className="heading text-lg font-semibold mt-10 border-dashed  clickable-element  hover:border-indigo-600 border-transparent border-[2px]"
            >
              Skills
            </h2>
            <hr className="border-[1.5px] border-[#6580ec] mt-1 w-16 rounded-md" />
           {
            resumeData.Skills.map((data,i)=>(
              <div className="mt-3" key={i}>
              <h1
                onClick={(e)=>handleSkillCategory(e,i)}
                className="text-sm font-semibold border-dashed  clickable-element  hover:border-indigo-600 border-transparent border-[2px]"
              >
                {data.category}
              </h1>
              <p
                onClick={(e)=>handleSkillSkills(e,i)}
                className=" hover:border-indigo-600 border-dashed border-2 border-transparent clickable-element text-sm leading-snug"
              >
                {data.skills}
              </p>
            </div>
            ))
           }
            </div>
            <div >
            <h2
              onClick={handleClick}
              className="heading text-lg font-semibold border-dashed  clickable-element  hover:border-indigo-600 border-transparent border-[2px]"
            >
              Projects
            </h2>
            <hr className="border-[1.5px] border-[#6580ec] mt-1 w-16 rounded-md" />

            {
              resumeData.Projects.map((data,i)=>(
                <div className="mt-4" key={i}>
              <h1
                onClick={(e)=>handleProjectsName(e,i)}
                className="text-md font-semibold border-dashed clickable-element  hover:border-indigo-600 border-transparent border-[2px]"
              >
                &#x2022; {data.name}
              </h1>
              <p
                onClick={(e)=>handleProjectsDescription(e,i)}
                className="text-[#868686] text-sm leading-snug border-dashed  clickable-element  hover:border-indigo-600 border-transparent border-[2px]"
              >
                {data.description}
              </p>
              <p
                onClick={(e)=>handleProjectsLink(e,i)}
                className="border-dashed  clickable-element  hover:border-indigo-600 border-transparent border-[2px] block -mt-0 text-sm text-blue-400 leading-snug"
              >
                {data.link}
              </p>
            </div>
              ))
            }
          </div>
        </div>

     </div>
     }
 
    </div>
    
  );
}

export default resume1;
