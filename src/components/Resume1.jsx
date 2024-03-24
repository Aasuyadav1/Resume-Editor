import React, { useEffect } from "react";
import { useState } from "react";
import useResumeStore from "../Store/store";



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
    console.log('selected el', selectedElement);
    console.log(resumeData)
   
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
      // const all = document.querySelectorAll('html')
      // all.forEach(element => {
      //   element.classList.remove('border-blue-700')
      // })
      selectedElement.classList.add('border-blue-700')
    }
  }, [selectedElement]);
 

  return (
    <div className="flex break-words flex-col gap-20 text-wrap">
    <div id="resumepdf" className=" w-[672px]  shadow-xl mx-auto cursor-pointer bg-white mt-20 mb-20  py-8 px-10 font-sans overflow-hidden text-wrap break-words">
      <div
        // className="w-full h-fit flex items-center gap-10 px-5 py-1"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{width : '100%', height : '100%', display : 'flex', alignItems : 'center', gap : '40px', paddingBlock : '20px' , paddingInline : '4px'}}
      >
        <img
          src={resumeData.image}
          alt="Selected"
          className= " imgess border-solid hover:border-blue-900 border-[2px] border-transparent cursor-pointer"
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
            className=" border-solid hover:border-blue-900 border-[2px] border-transparent text-black"
            style={{fontSize : '60px', lineHeight : '1', paddingBottom : '8px', width : '100%', fontStyle : 'bold', textAlign : 'left', wordWrap : 'break-word'}}
            onClick={(e)=>handleResumeInfoClick(e,"resumeData.title")}
          >
            {resumeData.title}
          </p>
          <p
            className="text-2xl text-black text-wrap  font-normal border-solid hover:border-blue-900 border-transparent border-[2px]"
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
            className="text-md w-[150px] font-semibold border-solid hover:border-blue-900 border-transparent border-[2px]"
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
              className="text-sm border-solid  hover:border-blue-900 border-transparent border-[2px] "
            >
              {data.date}
            </p>
            <p
              onClick={(e)=>handleEducationDegree(e,i)}
              className="text-sm text-[#787777] border-solid hover:border-blue-900 border-transparent border-[2px]"
            >
              {data.degree}
            </p>
            <p
              onClick={(e)=>handleEducationUniversity(e,i)}
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
            resumeData.Contact.map((data,i)=>(
              <div className="mt-3" key={i}>
            <h1
              onClick={(e)=>handleContactLabel(e,i)}
              className="text-sm border-solid hover:border-blue-900 border-transparent border-[2px]"
            >
              {data.label}
            </h1>
            <p
              onClick={(e)=>handleContactValue(e,i)}
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
            resumeData.Skills.map((data,i)=>(
              <div className="mt-3" key={i}>
              <h1
                onClick={(e)=>handleSkillCategory(e,i)}
                className="text-sm font-semibold border-solid hover:border-blue-900 border-transparent border-[2px]"
              >
                {data.category}
              </h1>
              <p
                onClick={(e)=>handleSkillSkills(e,i)}
                className=" border-solid hover:border-blue-900 border-transparent border-[2px] text-sm leading-snug"
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
              className="text-lg w-[388px] font-semibold border-solid hover:border-blue-900 border-transparent border-[2px]"
            >
              Profile
            </h2>
            <hr className="border-[1.5px] border-[#6580ec] mt-1 w-16 rounded-md" />
            <p
              onClick={(e)=>handleResumeInfoClick(e,"resumeData.description")}
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
              resumeData.Experience.map((data,i)=>(
                <div className="flex gap-8  mt-6 " key={i}>
                <div className="w-[130px] text-wrap">
                  <p
                    onClick={(e)=>handleExperienceDate(e,i)}
                    className="text-sm w-[130px] font-semibold text-[#868686] tracking-normal leading-snug border-solid hover:border-blue-900 border-transparent border-[2px]"
                  >
                    {data.date}
                  </p>
                  <p onClick={(e)=>handleExperienceCompany(e,i)} className=" text-sm text-[#868686] leading-snug border-solid hover:border-blue-900 border-transparent border-[2px]">
                    {data.company}
                  </p>
                </div>
                <div className="w-[225px] text-wrap">
                  <h1
                    onClick={(e)=>handleExperiencePosition(e,i)}
                    className="text-md w-[225px] font-semibold border-solid hover:border-blue-900 border-transparent border-[2px]"
                  >
                    {data.position}
                  </h1>
                  <p
                    onClick={(e)=>handleExperienceDescription(e,i)}
                    className="text-[#868686] text-sm leading-snug border-solid hover:border-blue-900 border-transparent border-[2px]"
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
              className="text-lg font-semibold border-solid hover:border-blue-900 border-transparent border-[2px]"
            >
              Projects
            </h2>
            <hr className="border-[1.5px] border-[#6580ec] mt-1 w-16 rounded-md" />

            {
              resumeData.Projects.map((data,i)=>(
                <div className="mt-4" key={i}>
              <h1
                onClick={(e)=>handleProjectsName(e,i)}
                className="text-md font-semibold border-solid hover:border-blue-900 border-transparent border-[2px]"
              >
                &#x2022; {data.name}
              </h1>
              <p
                onClick={(e)=>handleProjectsDescription(e,i)}
                className="text-[#868686] text-sm leading-snug border-solid hover:border-blue-900 border-transparent border-[2px]"
              >
                {data.description}
              </p>
              <p
                onClick={(e)=>handleProjectsLink(e,i)}
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
   

      {/* <div className="bg-gray-100 max-w-2xl mx-auto p-4">
        <div className="border-1 shadow-lg shadow-gray-700 rounded-lg">
       
          <div className="flex rounded-t-lg bg-top-color sm:px-2 w-full">
            <div className="h-40 w-40 overflow-hidden sm:rounded-full sm:relative sm:p-0 top-10 left-5 p-3">
              <img src="https://plus.unsplash.com/premium_photo-1710459650163-2929d2ab1660?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D" />
            </div>
            <div className="w-2/3 sm:text-center pl-5 mt-10 text-start">
              <p className="font-poppins font-bold text-heading sm:text-4xl text-2xl">
                Amit Pachange
              </p>
              <p className="text-heading">Software Engineer</p>
            </div>
          </div>
          
          <div className="p-5">
            <div className="flex flex-col sm:flex-row sm:mt-10">
              <div className="flex flex-col sm:w-1/3">
                
                <div className="py-3 sm:order-none order-3">
                  <h2 className="text-lg font-poppins font-bold text-top-color">My Contact</h2>
                  <div className="border-2 w-20 border-top-color my-3" />
                  <div>
                    <div className="flex items-center my-1">
                      <a className="w-6 text-gray-700 hover:text-orange-600"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-4">
                          <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                          </path>
                        </svg>
                      </a>
                      <div className="ml-2 truncate">amitpachange@gmail.com</div>
                    </div>
                    <div className="flex items-center my-1">
                      <a className="w-6 text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds YouTube" href target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-4">
                          <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                          </path>
                        </svg>
                      </a>
                      <div>9145258775</div>
                    </div>
                    <div className="flex items-center my-1">
                      <a className="w-6 text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds Facebook" href target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-4">
                          <path fill="currentColor" d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                          </path>
                        </svg>
                      </a>
                      <div>sale galli latur</div>
                    </div>
                    <div className="flex items-center my-1">
                      <a className="w-6 text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds Twitter" href target="_blank"><svg className="h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                          </path>
                        </svg>
                      </a>
                      <div>amitpachange21</div>
                    </div>
                  </div>
                </div>
                
                <div className="py-3 sm:order-none order-2">
                  <h2 className="text-lg font-poppins font-bold text-top-color">Skills</h2>
                  <div className="border-2 w-20 border-top-color my-3" />
                  <div>
                    <div className="flex items-center my-1">
                      <a className="w-6 text-gray-700 hover:text-orange-600">
                        <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill="currentColor" d="M7.50006 2.5C6.47409 2.5 5.59203 2.77691 4.89966 3.37037C4.21227 3.95956 3.76259 4.81729 3.51314 5.88638C3.45869 6.1197 3.57742 6.35885 3.79619 6.45654C4.01496 6.55423 4.27228 6.483 4.40967 6.28672C4.7263 5.8344 5.04244 5.56261 5.3462 5.42313C5.64038 5.28805 5.95748 5.26068 6.32069 5.35797C6.68723 5.45615 6.97097 5.74369 7.41643 6.22816L7.43082 6.24382C7.76661 6.60905 8.17623 7.0546 8.73649 7.40028C9.31785 7.75898 10.0413 7.99999 11.0001 7.99999C12.026 7.99999 12.9081 7.72307 13.6005 7.12962C14.2878 6.54043 14.7375 5.6827 14.987 4.61361C15.0414 4.38029 14.9227 4.14114 14.7039 4.04345C14.4852 3.94576 14.2278 4.01698 14.0904 4.21326C13.7738 4.66559 13.4577 4.93737 13.1539 5.07686C12.8597 5.21194 12.5426 5.23931 12.1794 5.14202C11.8129 5.04384 11.5291 4.7563 11.0837 4.27182L11.0693 4.25616C10.7335 3.89093 10.3239 3.44538 9.76362 3.09971C9.18227 2.74101 8.45883 2.5 7.50006 2.5Z" />
                          <path fill="currentColor" d="M4.00006 6.99999C2.97409 6.99999 2.09203 7.2769 1.39966 7.87036C0.712271 8.45955 0.262592 9.31727 0.0131365 10.3864C-0.0413057 10.6197 0.0774162 10.8588 0.296186 10.9565C0.514956 11.0542 0.772276 10.983 0.909673 10.7867C1.2263 10.3344 1.54244 10.0626 1.8462 9.92312C2.14038 9.78804 2.45747 9.76067 2.82069 9.85796C3.18723 9.95614 3.47097 10.2437 3.91643 10.7282L3.93082 10.7438C4.2666 11.109 4.67624 11.5546 5.23649 11.9003C5.81785 12.259 6.54128 12.5 7.50006 12.5C8.52602 12.5 9.40808 12.2231 10.1005 11.6296C10.7878 11.0404 11.2375 10.1827 11.487 9.1136C11.5414 8.88027 11.4227 8.64113 11.2039 8.54343C10.9852 8.44574 10.7278 8.51697 10.5904 8.71325C10.2738 9.16558 9.95768 9.43736 9.65391 9.57684C9.35974 9.71192 9.04264 9.7393 8.67942 9.64201C8.31289 9.54383 8.02915 9.25628 7.58369 8.77181L7.56929 8.75615C7.23351 8.39092 6.82388 7.94537 6.26362 7.59969C5.68227 7.241 4.95883 6.99999 4.00006 6.99999Z" />
                        </svg>
                      </a>
                      <div className="ml-2">Tailwind CSS</div>
                    </div>
                    <div className="flex items-center my-1">
                      <a className="w-6 text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds YouTube" href target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 515 515" className="h-4">
                          <path d="M193.918,208.369c-4.729-10.456-6.849-22.652-3.236-33.731c3.612-11.327,11.703-20.413,19.794-28.878
		c22.525-22.531,50.285-39.085,72.316-61.986c12.197-12.573,22.278-27.634,25.762-44.937c2.864-12.695,1.496-25.764-1.117-38.337
		c11.7,13.319,15.559,32.363,12.197,49.541c-3.608,19.292-14.316,36.344-26.886,51.031c-10.081,11.827-21.659,22.282-33.731,31.993
		c-14.065,11.327-27.88,23.524-36.716,39.457c-7.472,12.943-9.215,28.876-4.11,42.942c8.341,24.146,27.756,42.071,38.338,64.848
		c-11.703-10.332-23.152-21.036-33.86-32.361C211.471,236.001,200.889,223.307,193.918,208.369z M257.398,189.448
		c-2.115,19.792,8.213,38.462,20.539,53.151c5.972,6.596,11.076,14.687,11.323,23.899c0.251,12.318-6.716,23.774-15.684,31.861
		c2.119-0.246,3.612-2.115,5.355-3.11c13.443-8.589,26.385-19.418,32.982-34.227c4.357-10.083,3.362-22.034-2.362-31.371
		c-6.724-10.953-15.559-20.662-20.786-32.61c-2.867-6.721-3.862-14.562-1.496-21.657c3.114-9.583,9.834-17.426,16.93-24.272
		c19.54-18.544,43.189-31.743,65.844-46.179c-28.629,8.214-56.883,19.542-81.03,37.343
		C273.702,153.727,259.515,169.658,257.398,189.448z M393.447,283.052c13.568,0.748,26.882,10.704,29.374,24.397
		c2.366,11.825-3.358,23.524-10.705,32.485c-12.075,14.438-28.382,24.771-44.807,33.609c-1.622,0.991-2.99,2.237-4.235,3.608
		c21.659-5.478,43.314-13.689,60.867-27.756c9.705-8.091,18.294-18.799,20.163-31.619c1.743-11.076-2.86-22.528-11.077-29.871
		c-9.96-9.09-24.021-12.448-37.218-10.704c-7.593,0.995-15.931,2.613-21.158,8.961C380.877,284.921,386.971,282.429,393.447,283.052
		z M123.22,318.647c16.303,4.357,33.108,5.603,49.787,6.724c14.936,0.995,29.875,1.246,44.937,1.12
		c38.833-0.619,77.916-3.236,116.003-11.699c3.608-0.87,7.593-1.493,10.833-3.733c6.347-4.11,13.313-7.347,20.162-10.583
		c-30.995,4.979-62.113,9.215-93.478,11.205c-31.74,1.991-63.731,3.236-95.593,1.121c-9.086-0.87-18.423-1.371-26.886-4.858
		c-1.994-0.87-4.733-2.609-3.738-5.227c1.869-3.361,5.603-4.977,8.839-6.72c13.694-6.473,28.629-10.081,43.193-14.313
		c-25.021-0.376-49.916,5.971-72.814,15.806c-5.105,2.491-10.83,4.481-14.936,8.714c-1.622,1.739-1.622,4.732,0.247,6.222
		C113.511,315.787,118.487,317.28,123.22,318.647z M324.864,352.88c-21.784,3.859-43.694,7.472-65.726,8.589
		c-24.147,1.618-48.294,0.247-72.191-2.241c-4.604-0.623-9.211-1.368-13.317-3.483c-2.116-1.246-4.231-3.236-4.106-5.854
		c0.247-4.106,3.73-6.967,6.222-9.956c-7.715,2.739-15.434,5.599-21.906,10.708c-2.742,2.116-5.478,5.474-4.733,9.208
		c1.125,4.356,5.356,6.97,9.09,8.96c9.208,4.733,19.54,6.846,29.625,8.714c25.511,4.11,51.527,4.235,77.167,2.488
		c27.141-2.115,54.148-6.594,80.411-14.313C337.932,362.342,330.836,358.479,324.864,352.88z M188.068,395.951
		c-6.97,1.99-14.066,4.357-19.79,8.957c-2.868,2.241-5.105,6.104-3.734,9.713c1.743,4.604,6.1,7.347,10.203,9.705
		c10.708,5.854,22.78,8.589,34.604,10.708c26.765,4.229,54.27,3.608,80.908-1.12c15.806-2.989,31.615-7.221,46.301-13.815
		c-9.584-3.984-18.917-8.467-27.878-13.693c-15.559,2.738-31.246,5.603-47.178,6.598c-21.032,1.618-42.319-0.125-63.355-2.738
		c-4.98-1.121-11.202-1.618-14.563-5.976C181.847,400.677,185.828,398.063,188.068,395.951z M358.345,475.982
		c17.424-3.604,34.977-7.719,50.908-15.806c4.976-2.867,11.076-5.979,12.698-11.95c0.87-5.725-5.105-8.714-9.337-11.08
		c2.613,2.993,4.356,7.347,1.74,10.83c-4.357,5.853-11.821,8.091-18.42,10.332c-20.66,5.85-42.072,8.216-63.355,10.582
		c-56.385,5.102-113.146,6.348-169.528,1.618c-18.92-1.994-38.217-4.109-56.264-10.829c-2.86-1.246-7.217-2.492-7.217-6.352
		c1.117-3.354,4.357-5.227,7.217-6.845c12.945-6.595,27.384-10.207,41.822-11.077c-4.228-2.491-9.208-2.738-14.062-2.613
		c-12.076,0.373-23.9,3.483-35.349,7.347c-9.834,3.604-19.916,7.59-27.76,14.811c-3.111,2.735-5.971,7.962-2.739,11.699
		c4.98,5.353,12.699,6.72,19.54,8.338c38.338,6.599,77.171,10.328,116.011,11.699C255.781,488.184,307.684,485.942,358.345,475.982z
		 M409.378,482.706c-23.402,7.468-47.672,11.574-71.822,14.936c-41.696,5.227-83.769,6.845-125.716,5.603
		c-25.515-0.995-51.03-2.738-76.176-6.974c5.85,3.984,13.071,5.227,19.794,7.096c28.257,5.976,57.255,7.096,86.01,7.966
		c42.19,0.748,84.387-0.87,125.962-7.468c19.669-3.48,39.459-7.715,57.13-16.927c9.215-4.854,18.552-12.326,20.163-23.152
		C435.391,473.741,421.951,478.349,409.378,482.706z">
                          </path>
                        </svg>
                      </a>
                      <div className="ml-2">Java</div>
                    </div>
                    <div className="flex items-center my-1">
                      <a className="w-6 text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds Facebook" href target="_blank">
                        <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                          <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                            <g id="Logo" transform="translate(0.000000, -144.000000)">
                              <g id="Android_2_fill" transform="translate(0.000000, 144.000000)">
                                <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fillRule="nonzero">
                                </path>
                                <path d="M18.4472,4.10555 C18.9412,4.35254 19.1414,4.95321 18.8944,5.44719 L17.7199,7.79631 C20.3074,9.6038 22,12.6042 22,16 L22,17 C22,18.1046 21.1046,19 20,19 L4,19 C2.89543,19 2,18.1046 2,17 L2,16 C2,12.6042 3.69259,9.60379 6.28014,7.79631 L5.10558,5.44719 C4.85859,4.95321 5.05881,4.35254 5.55279,4.10555 C6.04677,3.85856 6.64744,4.05878 6.89443,4.55276 L8.028,6.8199 C9.24553,6.29239 10.5886,6 12,6 C13.4114,6 14.7545,6.29239 15.972,6.81991 L17.1056,4.55276 C17.3526,4.05878 17.9532,3.85856 18.4472,4.10555 Z M7.5,12 C6.67157,12 6,12.6716 6,13.5 C6,14.3284 6.67157,15 7.5,15 C8.32843,15 9,14.3284 9,13.5 C9,12.6716 8.32843,12 7.5,12 Z M16.5,12 C15.6716,12 15,12.6716 15,13.5 C15,14.3284 15.6716,15 16.5,15 C17.3284,15 18,14.3284 18,13.5 C18,12.6716 17.3284,12 16.5,12 Z" id="形状结合" fill="#09244B">
                                </path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </a>
                      <div className="ml-2">Andoid</div>
                    </div>
                    <div className="flex items-center my-1">
                      <a className="w-6 text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds Twitter" href target="_blank">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
                          <path d="M13.9868 5L12.9934 8.70743M11.8432 13L10.0132 19.8297" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
                          <path d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </a>
                      <div className="ml-2">Html, Css, JS</div>
                    </div>
                  </div>
                </div>
             
                <div className="py-3 sm:order-none order-1">
                  <h2 className="text-lg font-poppins font-bold text-top-color">Education Background</h2>
                  <div className="border-2 w-20 border-top-color my-3" />
                  <div className="flex flex-col space-y-1">
                    <div className="flex flex-col">
                      <p className="font-semibold text-xs text-gray-700">2021</p>
                      <p className="text-sm font-medium">
                        <span className="text-green-700">B.E. (INFORMATION TECHNOLOGY)</span>, PIMPRI CHINCHWAD
                        COLLEGE OF ENGINEERING, PUNE.
                      </p>
                      <p className="font-bold text-xs text-gray-700 mb-2">Percentage: 76.61</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-semibold text-xs text-gray-700">2017</p>
                      <p className="text-sm font-medium"><span className="text-green-700">HSC</span>, RAJARSHI SHAHU
                        COLLEGE, LATUR.</p>
                      <p className="font-bold text-xs text-gray-700 mb-2">Percentage: 80.77</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-semibold text-xs text-gray-700">2015</p>
                      <p className="text-sm font-medium"><span className="text-green-700">SSC</span>, DNYANESHWAR HIGH
                        SCHOOL, LATUR.</p>
                      <p className="font-bold text-xs text-gray-700 mb-2">Percentage: 93.80</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:w-2/3 order-first sm:order-none sm:-mt-10">
               
                <div className="py-3">
                  <h2 className="text-lg font-poppins font-bold text-top-color">About Me</h2>
                  <div className="border-2 w-20 border-top-color my-3" />
                  <p>To get a career opportunity which would help me to utilize my academic background to assist
                    me to gain experience, employ my excellent skills, and enable me to make positive
                    contribution.</p>
                </div>
                
                <div className="py-3">
                  <h2 className="text-lg font-poppins font-bold text-top-color">Professional Experience</h2>
                  <div className="border-2 w-20 border-top-color my-3" />
                  <div className="flex flex-col">
                    <div className="flex flex-col">
                      <p className="text-lg font-bold text-gray-700">Netcracker Technology | Software Engineer</p>
                      <p className="font-semibold text-sm text-gray-700">2021 - Present</p>
                      <p className="font-semibold text-sm text-gray-700 mt-2 mb-1">Key Responsibilities</p>
                      <ul className="text-sm list-disc pl-4 space-y-1">
                        <li>Working on customer facing product</li>
                        <li>Deliverying highly efficient solutions</li>
                        <li>Solving critical bugs</li>
                      </ul>
                    </div>
                    <div className="flex flex-col mt-8">
                      <p className="text-lg font-bold text-gray-700">TailwindFlex.com | Lead</p>
                      <p className="font-semibold text-sm text-gray-700">2020-2021</p>
                      <p className="font-semibold text-sm text-gray-700 mt-2 mb-1">Key Responsibilities</p>
                      <ul className="text-sm list-disc pl-4 space-y-1">
                        <li>Developed usable components</li>
                        <li>Solving complex problems</li>
                        <li>Solving critical bugs</li>
                      </ul>
                    </div>
                  </div>
                </div>
           
                <div className="py-3">
                  <h2 className="text-lg font-poppins font-bold text-top-color">Projects</h2>
                  <div className="border-2 w-20 border-top-color my-3" />
                  <div className="flex flex-col">
                    <div className="flex flex-col">
                      <p className="text-lg font-semibold text-gray-700">Used Books mobile app</p>
                      <p className="font-normal text-sm text-gray-700 mb-1 pl-2">A platform to sell as well as to
                        buy used books only for PCCoE College due to this reuse of books will be there
                        beneficial for environment also indirectly helps increase communication between
                        juniors and seniors.</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-lg font-semibold text-gray-700">Parking Automation System</p>
                      <p className="font-normal text-sm text-gray-700 mb-1 pl-2">it’s a web application which
                        helps you to book your slot for your car just like booking a movie ticket from home.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  */}
 
    </div>
  );
}

export default resume1;
