import React, { useEffect, useState } from "react";
import useResumeStore from "../Store/store";
import useAppwriteStore from "../Store/AppwriteStore";
import { useParams } from "react-router-dom";

function Resume1() {
  const { setSelectedElement, resumeData, selectedTemplateId } = useResumeStore(
    (state) => state
  );
  const [selectedImage, setSelectedImage] = useState(
    "https://media.istockphoto.com/id/1473711983/photo/university-tablet-and-campus-student-typing-internet-web-or-website-search-for-college.webp?b=1&s=170667a&w=0&k=20&c=LPhIpcyCjIweAILxehKYkyWehSzc4Uf8HM0rtfqgTIk="
  );

  const { singleResumeData, singleData } = useAppwriteStore();
  const { id } = useParams();

  const handleImageClick = () => {
    // Trigger click event on hidden file input
    document.getElementById("fileInput").click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // Update selected image
        document.querySelector("img").src = e.target.result;
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

  const handleClick = async (section, index, key, element) => {
    setSelectedElement(section, index, key, element);
  };

  return (
    <div className="flex break-words flex-col gap-20 text-wrap">
      {
        selectedTemplateId == 1 ? (
          <div
  id="resume1pdf"
  className="w-[672px] shadow-xl mx-auto cursor-pointer bg-white mt-20 mb-20 py-8 px-10 font-sans overflow-hidden text-wrap break-words"
>
  <div
    onDrop={handleDrop}
    onDragOver={handleDragOver}
    style={{
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      gap: "40px",
      paddingBlock: "20px",
      paddingInline: "4px",
    }}
  >
    <img
      src="../images/profile.jpg"
      alt="Selected"
      className="imgess border-dashed hover:border-indigo-600 border-[2px] border-transparent cursor-pointer"
      style={{
        width: "100px",
        height: "100px",
        objectFit: "cover",
        borderRadius: "50%",
        cursor: "pointer",
      }}
      onClick={handleImageClick}
      draggable="true"
    />
    <input
      type="file"
      id="fileInput"
      className="hidden"
      onChange={handleImageChange}
    />
    <div className="w-[450px] text-wrap break-words">
      <p
        className="clickable-element hover:border-indigo-600 border-[2px] border-dashed border-transparent text-black"
        style={{
          fontSize: "60px",
          lineHeight: "1",
          paddingBottom: "8px",
          width: "100%",
          fontStyle: "bold",
          textAlign: "left",
          wordWrap: "break-word",
        }}
        onClick={(e) =>
          handleClick("title", 0, "title", e.currentTarget)
        }
      >
        {resumeData.title}
      </p>
      <p
        className="text-2xl clickable-element text-black text-wrap font-normal border-dashed hover:border-indigo-600 border-transparent border-[2px]"
        onClick={(e) =>
          handleClick("subtitle", 0, "subtitle", e.currentTarget)
        }
      >
        {resumeData.subtitle}
      </p>
    </div>
  </div>
  <div className="flex break-words gap-8 mt-4 px-5">
    <div className="w-[150px] text-wrap break-words">
      <h2 className="heading text-md w-[150px] clickable-element font-semibold">
        Education
      </h2>
      <hr className="border-[1.5px] border-[#6580ec] mt-1 w-16 rounded-md" />
      {resumeData.Education.map((data, i) => (
        <div className="mt-3" key={i}>
          <p
            onClick={(e) =>
              handleClick("Education", i, "date", e.currentTarget)
            }
            className="text-sm border-dashed clickable-element hover:border-indigo-600 border-transparent border-[2px]"
          >
            {data.date}
          </p>
          <p
            onClick={(e) =>
              handleClick("Education", i, "degree", e.currentTarget)
            }
            className="text-sm clickable-element text-[#787777] border-dashed hover:border-indigo-600 border-transparent border-[2px]"
          >
            {data.degree}
          </p>
          <p
            onClick={(e) =>
              handleClick("Education", i, "university", e.currentTarget)
            }
            className="text-sm clickable-element text-[#787777] leading-snug border-dashed hover:border-indigo-600 border-transparent border-[2px]"
          >
            {data.university}
          </p>
        </div>
      ))}
      <h2 className="heading text-lg clickable-element font-semibold mt-10">
        Contact
      </h2>
      <hr className="border-[1.5px] border-[#6580ec] mt-1 w-16 rounded-md" />
      {resumeData.Contact.map((data, i) => (
        <div className="mt-3" key={i}>
          <h1
            onClick={(e) =>
              handleClick("Contact", i, "label", e.currentTarget)
            }
            className="text-sm clickable-element border-dashed hover:border-indigo-600 border-transparent border-[2px]"
          >
            {data.label}
          </h1>
          <p
            onClick={(e) =>
              handleClick("Contact", i, "value", e.currentTarget)
            }
            className="text-[#868686] clickable-element border-dashed hover:border-indigo-600 border-transparent border-[2px] text-sm leading-snug"
          >
            {data.value}
          </p>
        </div>
      ))}
      <div>
        <h2 className="heading text-lg clickable-element font-semibold mt-10">
          Skills
        </h2>
        <hr className="border-[1.5px] border-[#6580ec] mt-1 w-16 rounded-md" />
        {resumeData.Skills.map((data, i) => (
          <div className="mt-3" key={i}>
            <h1
              onClick={(e) =>
                handleClick("Skills", i, "category", e.currentTarget)
              }
              className="text-sm clickable-element font-semibold border-dashed hover:border-indigo-600 border-transparent border-[2px]"
            >
              {data.category}
            </h1>
            <p
              onClick={(e) =>
                handleClick("Skills", i, "skills", e.currentTarget)
              }
              className="clickable-element border-dashed hover:border-indigo-600 border-transparent border-[2px] text-sm leading-snug"
            >
              {data.skills}
            </p>
          </div>
        ))}
      </div>
    </div>
    <div className="w-[388px] text-wrap break-words">
      <div>
        <h2 className="heading text-lg clickable-element w-[388px] font-semibold">
          Profile
        </h2>
        <hr className="border-[1.5px] border-[#6580ec] mt-1 w-16 rounded-md" />
        <p
          onClick={(e) =>
            handleClick("description", 0, "description", e.currentTarget)
          }
          className="mt-2 clickable-element text-sm border-dashed hover:border-indigo-600 border-transparent border-[2px]"
        >
          {resumeData.description}
        </p>
      </div>
      <div className="mt-10">
        <h2 className="heading text-lg clickable-element font-semibold">
          Experience
        </h2>
        <hr className="border-[1.5px] border-[#6580ec] mt-1 w-16 rounded-md" />
        <div>
          {resumeData.Experience.map((data, i) => (
            <div className="flex gap-8 mt-6" key={i}>
              <div className="w-[130px] text-wrap">
                <p
                  onClick={(e) =>
                    handleClick("Experience", i, "date", e.currentTarget)
                  }
                  className="clickable-element text-sm w-[130px] font-semibold text-[#868686] tracking-normal leading-snug border-dashed hover:border-indigo-600 border-transparent border-[2px]"
                >
                  {data.date}
                </p>
                <p
                  onClick={(e) =>
                    handleClick("Experience", i, "company", e.currentTarget)
                  }
                  className="clickable-element text-sm text-[#868686] leading-snug border-dashed hover:border-indigo-600 border-transparent border-[2px]"
                >
                  {data.company}
                </p>
              </div>
              <div className="w-[225px] text-wrap">
                <h1
                  onClick={(e) =>
                    handleClick("Experience", i, "position", e.currentTarget)
                  }
                  className="text-md w-[225px] clickable-element font-semibold border-dashed hover:border-indigo-600 border-transparent border-[2px]"
                >
                  {data.position}
                </h1>
                <p
                  onClick={(e) =>
                    handleClick("Experience", i, "description", e.currentTarget)
                  }
                  className="text-[#868686] clickable-element text-sm leading-snug border-dashed hover:border-indigo-600 border-transparent border-[2px]"
                >
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <h2 className="heading text-lg clickable-element font-semibold">
          Projects
        </h2>
        <hr className="border-[1.5px] border-[#6580ec] mt-1 w-16 rounded-md" />
        {resumeData.Projects.map((data, i) => (
          <div className="mt-4" key={i}>
            <h1
              onClick={(e) =>
                handleClick("Projects", i, "name", e.currentTarget)
              }
              className="text-md clickable-element font-semibold border-dashed hover:border-indigo-600 border-transparent border-[2px]"
            >
              &#x2022; {data.name}
            </h1>
            <p
              onClick={(e) =>
                handleClick("Projects", i, "description", e.currentTarget)
              }
              className="text-[#868686] clickable-element text-sm leading-snug border-dashed hover:border-indigo-600 border-transparent border-[2px]"
            >
              {data.description}
            </p>
            <p
              onClick={(e) =>
                handleClick("Projects", i, "link", e.currentTarget)
              }
              className="border-dashed clickable-element hover:border-indigo-600 border-transparent border-[2px] block -mt-0 text-sm text-blue-400 leading-snug"
            >
              {data.link}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

        ) 
       : (
        <div
        id="resume2pdf"
        className="w-[672px] shadow-xl mx-auto cursor-pointer bg-white mb-20 mt-20 pb-8 px-10 font-sans overflow-hidden text-wrap break-words"
      >
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            gap: "40px",
            paddingBlock: "20px",
            paddingInline: "4px",
          }}
        >
          <div className="w-[550px] text-wrap break-words">
            <p
              className="border-dashed clickable-element hover:border-indigo-600 border-transparent border-[2px] text-black"
              style={{
                fontSize: "60px",
                lineHeight: "1",
                paddingBottom: "8px",
                width: "100%",
                fontStyle: "bold",
                textAlign: "left",
                wordWrap: "break-word",
              }}
              onClick={(e) => handleClick("title", 0, "title", e.currentTarget)}
            >
              {resumeData.title}
            </p>
            <p
              className="text-2xl text-black text-wrap font-normal border-dashed clickable-element hover:border-indigo-600 border-transparent border-[2px]"
              onClick={(e) => handleClick("subtitle", 0, "subtitle", e.currentTarget)}
            >
              {resumeData.subtitle}
            </p>
          </div>

          <div className="mt-3">
            {resumeData.Contact.map((data, i) => (
              <div key={i}>
                <p
                  onClick={(e) => handleClick("Contact", i, "value", e.currentTarget)}
                  className="text-[#868686] border-dashed clickable-element hover:border-indigo-600 border-transparent border-[2px] text-sm leading-snug"
                >
                  {data.value}
                </p>
              </div>
            ))}
          </div>
        </div>
        <p
          onClick={(e) => handleClick("description", 0, "description", e.currentTarget)}
          className="mt-2 text-sm border-dashed clickable-element hover:border-indigo-600 border-transparent border-[2px]"
        >
          {resumeData.description}
        </p>
        <div className="flex gap-8">
          <div className="mt-10">
            <h2
              onClick={(e) => handleClick("Experience", 0, "header", e.currentTarget)}
              className="heading text-lg font-semibold border-dashed clickable-element hover:border-indigo-600 border-transparent border-[2px]"
            >
              Experience
            </h2>
            <hr className="border-[1.5px] border-[#6580ec] mt-1 w-16 rounded-md" />
            <div>
              {resumeData.Experience.map((data, i) => (
                <div className="flex gap-8 mt-6" key={i}>
                  <div className="w-[130px] text-wrap">
                    <p
                      onClick={(e) => handleClick("Experience", i, "date", e.currentTarget)}
                      className="text-sm w-[130px] font-semibold text-[#868686] tracking-normal leading-snug border-dashed clickable-element hover:border-indigo-600 border-transparent border-[2px]"
                    >
                      {data.date}
                    </p>
                    <p
                      onClick={(e) => handleClick("Experience", i, "company", e.currentTarget)}
                      className="text-sm text-[#868686] leading-snug border-dashed clickable-element hover:border-indigo-600 border-transparent border-[2px]"
                    >
                      {data.company}
                    </p>
                  </div>
                  <div className="w-[225px] text-wrap">
                    <h1
                      onClick={(e) => handleClick("Experience", i, "position", e.currentTarget)}
                      className="text-md w-[225px] font-semibold border-dashed clickable-element hover:border-indigo-600 border-transparent border-[2px]"
                    >
                      {data.position}
                    </h1>
                    <p
                      onClick={(e) => handleClick("Experience", i, "description", e.currentTarget)}
                      className="text-[#868686] text-sm leading-snug border-dashed clickable-element hover:border-indigo-600 border-transparent border-[2px]"
                    >
                      {data.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <h2
              onClick={(e) => handleClick("Education", 0, "header", e.currentTarget)}
              className="heading text-md w-[150px] font-semibold border-dashed clickable-element hover:border-indigo-600 border-transparent border-[2px]"
            >
              Education
            </h2>
            <hr className="border-[1.5px] border-[#6580ec] mt-1 w-16 rounded-md" />
            {resumeData.Education.map((data, i) => (
              <div className="mt-3" key={i}>
                <p
                  onClick={(e) => handleClick("Education", i, "date", e.currentTarget)}
                  className="text-sm border-dashed clickable-element hover:border-indigo-600 border-transparent border-[2px]"
                >
                  {data.date}
                </p>
                <p
                  onClick={(e) => handleClick("Education", i, "degree", e.currentTarget)}
                  className="text-sm text-[#787777] border-dashed clickable-element hover:border-indigo-600 border-transparent border-[2px]"
                >
                  {data.degree}
                </p>
                <p
                  onClick={(e) => handleClick("Education", i, "university", e.currentTarget)}
                  className="text-sm text-[#787777] leading-snug border-dashed clickable-element hover:border-indigo-600 border-transparent border-[2px]"
                >
                  {data.university}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-8 mt-10">
          <div>
            <h2
              onClick={(e) => handleClick("Skills", 0, "header", e.currentTarget)}
              className="heading text-lg font-semibold mt-10 border-dashed clickable-element hover:border-indigo-600 border-transparent border-[2px]"
            >
              Skills
            </h2>
            <hr className="border-[1.5px] border-[#6580ec] mt-1 w-16 rounded-md" />
            {resumeData.Skills.map((data, i) => (
              <div className="mt-3" key={i}>
                <h1
                  onClick={(e) => handleClick("Skills", i, "category", e.currentTarget)}
                  className="text-sm font-semibold border-dashed clickable-element hover:border-indigo-600 border-transparent border-[2px]"
                >
                  {data.category}
                </h1>
                <p
                  onClick={(e) => handleClick("Skills", i, "skills", e.currentTarget)}
                  className="hover:border-indigo-600 border-dashed border-2 border-transparent clickable-element text-sm leading-snug"
                >
                  {data.skills}
                </p>
              </div>
            ))}
          </div>
          <div>
            <h2
              onClick={(e) => handleClick("Projects", 0, "header", e.currentTarget)}
              className="heading text-lg font-semibold border-dashed clickable-element hover:border-indigo-600 border-transparent border-[2px]"
            >
              Projects
            </h2>
            <hr className="border-[1.5px] border-[#6580ec] mt-1 w-16 rounded-md" />
            {resumeData.Projects.map((data, i) => (
              <div className="mt-4" key={i}>
                <h1
                  onClick={(e) => handleClick("Projects", i, "name", e.currentTarget)}
                  className="text-md font-semibold border-dashed clickable-element hover:border-indigo-600 border-transparent border-[2px]"
                >
                  &#x2022; {data.name}
                </h1>
                <p
                  onClick={(e) => handleClick("Projects", i, "description", e.currentTarget)}
                  className="text-[#868686] text-sm leading-snug border-dashed clickable-element hover:border-indigo-600 border-transparent border-[2px]"
                >
                  {data.description}
                </p>
                <p
                  onClick={(e) => handleClick("Projects", i, "link", e.currentTarget)}
                  className="border-dashed clickable-element hover:border-indigo-600 border-transparent border-[2px] block -mt-0 text-sm text-blue-400 leading-snug"
                >
                  {data.link}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      )
    }
     
      
    </div>
  );
}

export default Resume1;
