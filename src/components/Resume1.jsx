import React, { useEffect } from "react";
import { useState } from "react";
import useResumeStore from "../Store/store";
import { resumeData } from "../Data/resume1";

function resume1() {
  const {selectedElement, setSelectedElement} = useResumeStore();
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
        setSelectedImage(e.target.result); // Update selected image
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

  const handleClick =  (e) => {
    const element = e.target;
    setSelectedElement(element);
    console.log('selected el', selectedElement);
    console.log(resumeData)
   
  };
  
  useEffect(() => {
    if (selectedElement) {
      // const all = document.querySelectorAll('html')
      // all.forEach(element => {
      //   element.classList.remove('border-blue-700')
      // })
      selectedElement.classList.add('border-blue-700')
    }
  }, [selectedElement]);
 

  return (
    <div className="max-w-2xl mx-auto cursor-pointer bg-white mt-20 mb-20  py-8 px-10 font-sans overflow-hidden">
      <div
        className="w-full h-fit flex items-center gap-10 px-5 py-1"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <img
          src={resumeData.image}
          alt="Selected"
          className="w-[100px] rounded-full object-cover aspect-square  border-solid hover:border-blue-900 border-[2px] border-transparent cursor-pointer"
          onClick={handleImageClick}
          draggable="true"
        />
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={handleImageChange}
        />
        <div className="flex-grow">
          <p
            className="text-6xl pb-2 w-full border-solid hover:border-blue-900 border-[2px] border-transparent text-black font-bold text-left break-words text-wrap"
            onClick={handleClick}
          >
            {resumeData.title}
          </p>
          <p
            className="text-2xl text-black font-normal border-solid hover:border-blue-900 border-transparent border-[2px]"
            onClick={handleClick}
          >
            {resumeData.subtitle}
          </p>
        </div>
      </div>
      <div className="flex gap-12 justify-center  mt-4 px-3 py-1">
        <div className="w-[500px]">
          <h2
            onClick={handleClick}
            className="text-md font-semibold border-solid hover:border-blue-900 border-transparent border-[2px]"
          >
            Education
          </h2>
          <hr className="border-[1.5px] border-[#6580ec] mt-1 w-16 rounded-md" />
         {
          resumeData.Education.map((data)=>(
            <div className="mt-3">
            <p
              onClick={handleClick}
              className="text-sm border-solid  hover:border-blue-900 border-transparent border-[2px] "
            >
              {data.date}
            </p>
            <p
              onClick={handleClick}
              className="text-sm text-[#787777] border-solid hover:border-blue-900 border-transparent border-[2px]"
            >
              {data.degree}
            </p>
            <p
              onClick={handleClick}
              className="text-sm text-[#787777] leading-snug border-solid hover:border-blue-900 border-transparent border-[2px]"
            >
              {data.university}
            </p>
          </div>
          ))
         }
          <h2
            onClick={handleClick}
            className="text-lg font-semibold mt-10 border-solid hover:border-blue-900 border-transparent border-[2px]"
          >
            Contact
          </h2>
          <hr className="border-[1.5px] border-[#6580ec] mt-1 w-16 rounded-md" />
          {
            resumeData.Contact.map((data)=>(
              <div className="mt-3">
            <h1
              onClick={handleClick}
              className="text-sm border-solid hover:border-blue-900 border-transparent border-[2px]"
            >
              {data.label}
            </h1>
            <p
              onClick={handleClick}
              className="text-[#868686] border-solid hover:border-blue-900 border-transparent border-[2px] text-sm leading-snug"
            >
              {data.value}
            </p>
          </div>
            ))
          }
         

          <div>
            <h2
              onClick={handleClick}
              className="text-lg font-semibold mt-10 border-solid hover:border-blue-900 border-transparent border-[2px]"
            >
              Skills
            </h2>
            <hr className="border-[1.5px] border-[#6580ec] mt-1 w-16 rounded-md" />
           {
            resumeData.Skills.map((data)=>(
              <div className="mt-3">
              <h1
                onClick={handleClick}
                className="text-sm font-semibold border-solid hover:border-blue-900 border-transparent border-[2px]"
              >
                {data.category}
              </h1>
              <p
                onClick={handleClick}
                className=" border-solid hover:border-blue-900 border-transparent border-[2px] text-sm leading-snug"
              >
                {data.skills}
              </p>
            </div>
            ))
           }
          </div>
        </div>
        <div className="max-w-[400px]">
          <div>
            <h2
              onClick={handleClick}
              className="text-lg font-semibold border-solid hover:border-blue-900 border-transparent border-[2px]"
            >
              Profile
            </h2>
            <hr className="border-[1.5px] border-[#6580ec] mt-1 w-16 rounded-md" />
            <p
              onClick={handleClick}
              className="mt-2 text-sm border-solid hover:border-blue-900 border-transparent border-[2px]"
            >
              {resumeData.description}
            </p>
          </div>

          <div className="mt-10">
            <h2
              onClick={handleClick}
              className="text-lg font-semibold border-solid hover:border-blue-900 border-transparent border-[2px]"
            >
              Experiance
            </h2>
            <hr className="border-[1.5px] border-[#6580ec] mt-1 w-16 rounded-md" />
            <div>
             {
              resumeData.Experience.map((data)=>(
                <div className="flex gap-10 justify-between mt-6 ">
                <div className="w-[180px] text-wrap">
                  <p
                    onClick={handleClick}
                    className="text-sm font-semibold text-[#868686] tracking-normal leading-snug border-solid hover:border-blue-900 border-transparent border-[2px]"
                  >
                    {data.date}
                  </p>
                  <p className=" text-sm text-[#868686] leading-snug border-solid hover:border-blue-900 border-transparent border-[2px]">
                    {data.company}
                  </p>
                </div>
                <div>
                  <h1
                    onClick={handleClick}
                    className="text-md font-semibold border-solid hover:border-blue-900 border-transparent border-[2px]"
                  >
                    {data.position}
                  </h1>
                  <p
                    onClick={handleClick}
                    className="text-[#868686] text-sm leading-snug border-solid hover:border-blue-900 border-transparent border-[2px]"
                  >
                    {resumeData.description}
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
              className="text-lg font-semibold border-solid hover:border-blue-900 border-transparent border-[2px]"
            >
              Projects
            </h2>
            <hr className="border-[1.5px] border-[#6580ec] mt-1 w-16 rounded-md" />

            {
              resumeData.Projects.map((data)=>(
                <div className="mt-4">
              <h1
                onClick={handleClick}
                className="text-md font-semibold border-solid hover:border-blue-900 border-transparent border-[2px]"
              >
                &#x2022; {data.name}
              </h1>
              <p
                onClick={handleClick}
                className="text-[#868686] text-sm leading-snug border-solid hover:border-blue-900 border-transparent border-[2px]"
              >
                {data.description}
              </p>
              <p
                onClick={handleClick}
                className="border-solid hover:border-blue-900 border-transparent border-[2px] block -mt-0 text-sm text-blue-400 leading-snug"
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
  );
}

export default resume1;
