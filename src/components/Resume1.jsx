import React, { useEffect, useState } from "react";
import useResumeStore from "../Store/store";
import useAppwriteStore from "../Store/AppwriteStore";
import { useParams } from "react-router-dom";

function Resume1() {
  const { setSelectedElement, resumeData } = useResumeStore(
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
      <div
        id="resume1pdf"
        className=" w-[672px]  shadow-xl mx-auto cursor-pointer bg-white mt-20 mb-20  py-8 px-10 font-sans overflow-hidden text-wrap break-words"
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
            className=" imgess border-dashed hover:border-indigo-600 border-[2px] border-transparent cursor-pointer"
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
              onClick={(e) => handleClick("title", 0, "title", e.currentTarget)}
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
            <h2
              onClick={() => handleClick("Education")}
              className="heading text-md w-[150px] clickable-element font-semibold border-dashed hover:border-indigo-600 border-transparent border-[2px]"
            >
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
                  onClick={() => handleClick("Education", i, "degree")}
                  className="text-sm clickable-element text-[#787777] border-dashed hover:border-indigo-600 border-transparent border-[2px]"
                >
                  {data.degree}
                </p>
                <p
                  onClick={() => handleClick("Education", i, "university")}
                  className="text-sm clickable-element text-[#787777] leading-snug border-dashed hover:border-indigo-600 border-transparent border-[2px]"
                >
                  {data.university}
                </p>
              </div>
            ))}
            <h2
              onClick={() => handleClick("Contact")}
              className="heading text-lg clickable-element font-semibold mt-10 border-dashed hover:border-indigo-600 border-transparent border-[2px]"
            >
              Contact
            </h2>
            <hr className="border-[1.5px] border-[#6580ec] mt-1 w-16 rounded-md" />
            {resumeData.Contact.map((data, i) => (
              <div className="mt-3" key={i}>
                <h1
                  onClick={() => handleClick("Contact", i, "label")}
                  className="text-sm clickable-element border-dashed hover:border-indigo-600 border-transparent border-[2px]"
                >
                  {data.label}
                </h1>
                <p
                  onClick={() => handleClick("Contact", i, "value")}
                  className="text-[#868686] clickable-element border-dashed hover:border-indigo-600 border-transparent border-[2px] text-sm leading-snug"
                >
                  {data.value}
                </p>
              </div>
            ))}
            <div>
              <h2
                onClick={() => handleClick("Skills")}
                className="heading text-lg clickable-element font-semibold mt-10 border-dashed hover:border-indigo-600 border-transparent border-[2px]"
              >
                Skills
              </h2>
              <hr className="border-[1.5px] border-[#6580ec] mt-1 w-16 rounded-md" />
              {resumeData.Skills.map((data, i) => (
                <div className="mt-3" key={i}>
                  <h1
                    onClick={() => handleClick("Skills", i, "category")}
                    className="text-sm clickable-element font-semibold border-dashed hover:border-indigo-600 border-transparent border-[2px]"
                  >
                    {data.category}
                  </h1>
                  <p
                    onClick={() => handleClick("Skills", i, "skills")}
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
              <h2
                onClick={() => handleClick("Profile")}
                className="heading text-lg clickable-element w-[388px] font-semibold border-dashed hover:border-indigo-600 border-transparent border-[2px]"
              >
                Profile
              </h2>
              <hr className="border-[1.5px] border-[#6580ec] mt-1 w-16 rounded-md" />
              <p
                onClick={(e) =>
                  handleClick(
                    "description",
                    "4",
                    "description",
                    e.currentTarget
                  )
                }
                className="mt-2 clickable-element text-sm border-dashed hover:border-indigo-600 border-transparent border-[2px]"
              >
                {resumeData.description}
              </p>
            </div>
            <div className="mt-10">
              <h2
                onClick={() => handleClick("Experience")}
                className="heading text-lg clickable-element font-semibold border-dashed hover:border-indigo-600 border-transparent border-[2px]"
              >
                Experience
              </h2>
              <hr className="border-[1.5px] border-[#6580ec] mt-1 w-16 rounded-md" />
              <div>
                {resumeData.Experience.map((data, i) => (
                  <div className="flex gap-8 mt-6" key={i}>
                    <div className="w-[130px] text-wrap">
                      <p
                        onClick={() => handleClick("Experience", i, "date")}
                        className="clickable-element text-sm w-[130px] font-semibold text-[#868686] tracking-normal leading-snug border-dashed hover:border-indigo-600 border-transparent border-[2px]"
                      >
                        {data.date}
                      </p>
                      <p
                        onClick={() => handleClick("Experience", i, "company")}
                        className="clickable-element text-sm text-[#868686] leading-snug border-dashed hover:border-indigo-600 border-transparent border-[2px]"
                      >
                        {data.company}
                      </p>
                    </div>
                    <div className="w-[225px] text-wrap">
                      <h1
                        onClick={() => handleClick("Experience", i, "position")}
                        className="text-md w-[225px] clickable-element font-semibold border-dashed hover:border-indigo-600 border-transparent border-[2px]"
                      >
                        {data.position}
                      </h1>
                      <p
                        onClick={() =>
                          handleClick("Experience", i, "description")
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
              <h2
                onClick={() => handleClick("Projects")}
                className="heading text-lg clickable-element font-semibold border-dashed hover:border-indigo-600 border-transparent border-[2px]"
              >
                Projects
              </h2>
              <hr className="border-[1.5px] border-[#6580ec] mt-1 w-16 rounded-md" />
              {resumeData.Projects.map((data, i) => (
                <div className="mt-4" key={i}>
                  <h1
                    onClick={() => handleClick("Projects", i, "name")}
                    className="text-md clickable-element font-semibold border-dashed hover:border-indigo-600 border-transparent border-[2px]"
                  >
                    &#x2022; {data.name}
                  </h1>
                  <p
                    onClick={() => handleClick("Projects", i, "description")}
                    className="text-[#868686] clickable-element text-sm leading-snug border-dashed hover:border-indigo-600 border-transparent border-[2px]"
                  >
                    {data.description}
                  </p>
                  <p
                    onClick={() => handleClick("Projects", i, "link")}
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
    </div>
  );
}

export default Resume1;
