import React from 'react'
import { useState } from 'react';
import useStore from '../Store/store';

function resume1() {

  const setResumeHTML = useStore((state) => state.setResumeHTML);
    const [selectedImage, setSelectedImage] = useState(
        "https://media.istockphoto.com/id/1473711983/photo/university-tablet-and-campus-student-typing-internet-web-or-website-search-for-college.webp?b=1&s=170667a&w=0&k=20&c=LPhIpcyCjIweAILxehKYkyWehSzc4Uf8HM0rtfqgTIk="
      ); // Default image path
    
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
    
      const handleClick = (event) => {
        var elements = document.querySelectorAll(".border-blue-900");
elements.forEach(function(element) {
  element.classList.remove("border-blue-900");

});
        const selectedDiv = event.target;
        
        setResumeHTML(selectedDiv)
        
        selectedDiv.classList.toggle("border-blue-900");

      };

      
  return (
    <div className="max-w-2xl mx-auto cursor-pointer bg-white mt-20 mb-20  py-8 px-10 font-sans">
      <div
        className="w-full h-fit flex items-center gap-10 px-5 py-1"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <img
          src={selectedImage}
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
            Aasu Yadav
          </p>
          <p
            className="text-2xl text-black font-normal border-solid hover:border-blue-900 border-transparent border-[2px]"
            onClick={handleClick}
          >
            Software Developer
          </p>
        </div>
      </div>
      <div className="flex gap-12 justify-center  mt-4 px-3 py-1">
        <div className="w-[500px]">
          <h2 className="text-md font-semibold border-solid hover:border-blue-900 border-transparent border-[2px]">
            Education
          </h2>
          <hr className="border-[1.5px] border-[#6580ec] mt-1 w-16 rounded-md" />
          <div className="mt-3">
            <p className="text-sm border-solid hover:border-blue-900 border-transparent border-[2px]">
              2024-2025
            </p>
            <p className="text-sm text-[#787777] border-solid hover:border-blue-900 border-transparent border-[2px]">
              B.Tech
            </p>
            <p className="text-sm text-[#787777] leading-snug border-solid hover:border-blue-900 border-transparent border-[2px]">
              university Name
            </p>
          </div>
          <div className="mt-3">
            <p className="text-sm border-solid hover:border-blue-900 border-transparent border-[2px]">
              2024-2025
            </p>
            <p className="text-sm text-[#787777] border-solid hover:border-blue-900 border-transparent border-[2px]">
              B.Tech
            </p>
            <p className="text-sm text-[#787777] leading-snug border-solid hover:border-blue-900 border-transparent border-[2px]">
              university Name
            </p>
          </div>
          <div className="mt-3">
            <p className="text-sm border-solid hover:border-blue-900 border-transparent border-[2px]">
              2024-2025
            </p>
            <p className="text-sm text-[#787777] border-solid hover:border-blue-900 border-transparent border-[2px]">
              B.Tech
            </p>
            <p className="text-sm text-[#787777] leading-snug border-solid hover:border-blue-900 border-transparent border-[2px]">
              university Name
            </p>
          </div>

          <h2 className="text-lg font-semibold mt-10 border-solid hover:border-blue-900 border-transparent border-[2px]">
            Contact
          </h2>
          <hr className="border-[1.5px] border-[#6580ec] mt-1 w-16 rounded-md" />
          <div className="mt-3">
            <h1 className="text-sm border-solid hover:border-blue-900 border-transparent border-[2px]">
              Phone
            </h1>
            <p className="text-[#868686] border-solid hover:border-blue-900 border-transparent border-[2px] text-sm leading-snug">
              +91 1234567890
            </p>
          </div>
          <div className="mt-3">
            <h1 className="text-sm border-solid hover:border-blue-900 border-transparent border-[2px]">
              Email
            </h1>
            <p className="text-[#868686] border-solid hover:border-blue-900 border-transparent border-[2px] text-sm leading-snug">
              abcd@example.com
            </p>
          </div>

          <div>
          <h2 className="text-lg font-semibold mt-10 border-solid hover:border-blue-900 border-transparent border-[2px]">
            Skills
          </h2>
          <hr className="border-[1.5px] border-[#6580ec] mt-1 w-16 rounded-md" />
          <div className="mt-3">
            <h1 className="text-sm font-semibold border-solid hover:border-blue-900 border-transparent border-[2px]">
              Frontend Developer
            </h1>
            <p className=" border-solid hover:border-blue-900 border-transparent border-[2px] text-sm leading-snug">
              html, css, js, react.js, tailwind css
            </p>
          </div>
          <div className="mt-4">
            <h1 className="text-sm font-semibold border-solid hover:border-blue-900 border-transparent border-[2px]">
              Backend Developer
            </h1>
            <p className=" border-solid hover:border-blue-900 border-transparent border-[2px] text-sm leading-snug">
              Nodejs, Express.js, MongoDB, Appwrite
            </p>
          </div>
          </div>
        </div>
        <div className="max-w-[400px]">
          <div>
            <h2 className="text-lg font-semibold border-solid hover:border-blue-900 border-transparent border-[2px]">
              Profile
            </h2>
            <hr className="border-[1.5px] border-[#6580ec] mt-1 w-16 rounded-md" />
            <p className="mt-2 text-sm border-solid hover:border-blue-900 border-transparent border-[2px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
              illo qui deserunt vero repellat temporibus mollitia, sint eum
              praesentium voluptatem reprehenderit earum ullam nemo! Molestiae
              corrupti blanditiis ex iusto minus.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-lg font-semibold border-solid hover:border-blue-900 border-transparent border-[2px]">
              Experiance
            </h2>
            <hr className="border-[1.5px] border-[#6580ec] mt-1 w-16 rounded-md" />
            <div>
              <div className="flex gap-10 justify-between mt-3 ">
                <div className="w-[180px] text-wrap">
                  <p className="text-sm font-semibold text-[#868686] tracking-normal leading-snug border-solid hover:border-blue-900 border-transparent border-[2px]">
                    2020-present
                  </p>
                  <p className=" text-sm text-[#868686] leading-snug border-solid hover:border-blue-900 border-transparent border-[2px]">
                    Company Name
                  </p>
                </div>
                <div>
                  <h1 className="text-md font-semibold border-solid hover:border-blue-900 border-transparent border-[2px]">
                    Frontend Developer
                  </h1>
                  <p className="text-[#868686] text-sm leading-snug border-solid hover:border-blue-900 border-transparent border-[2px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores, beatae.
                  </p>
                </div>
              </div>
              <div className="flex gap-10 justify-between mt-8 ">
                <div className="w-[180px] text-wrap">
                  <p className="text-sm font-semibold border-solid hover:border-blue-900 border-transparent border-[2px] text-[#868686] tracking-normal leading-snug">
                    2020-present
                  </p>
                  <p className=" text-sm text-[#868686] leading-snug border-solid hover:border-blue-900 border-transparent border-[2px]">
                    Company Name
                  </p>
                </div>
                <div>
                  <h1 className="text-md font-semibold border-solid hover:border-blue-900 border-transparent border-[2px]">
                    Frontend Developer
                  </h1>
                  <p className="text-[#868686] text-sm leading-snug border-solid hover:border-blue-900 border-transparent border-[2px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores, beatae.
                  </p>
                </div>
              </div>
              <div className="flex gap-10 justify-between mt-8 ">
                <div className="w-[180px] text-wrap">
                  <p className="text-sm font-semibold text-[#868686] tracking-normal border-solid hover:border-blue-900 border-transparent border-[2px] leading-snug">
                    2020-present
                  </p>
                  <p className="border-solid hover:border-blue-900 border-transparent border-[2px] text-sm text-[#868686] leading-snug">
                    Company Name
                  </p>
                </div>
                <div>
                  <h1 className="text-md font-semibold border-solid hover:border-blue-900 border-transparent border-[2px] ">
                    Frontend Developer
                  </h1>
                  <p className="text-[#868686] text-sm leading-snug border-solid hover:border-blue-900 border-transparent border-[2px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores, beatae.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-lg font-semibold border-solid hover:border-blue-900 border-transparent border-[2px]">
              Projects
            </h2>
            <hr className="border-[1.5px] border-[#6580ec] mt-1 w-16 rounded-md" />

            <div className="mt-3">
              <h1 className="text-md font-semibold border-solid hover:border-blue-900 border-transparent border-[2px]">
              &#x2022; E-commerce website
              </h1>
              <p className="text-[#868686] text-sm leading-snug border-solid hover:border-blue-900 border-transparent border-[2px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, beatae.
              </p>
              <a target="_blank" className="block -mt-0 text-sm text-blue-400 leading-snug" href="https://e-commerce-ready-apy.vercel.app/">https://e-commerce-ready-apy.vercel.app</a>
            </div>
            <div className="mt-5">
              <h1 className="text-md font-semibold border-solid hover:border-blue-900 border-transparent border-[2px]">
              &#x2022; Whiteboard editor
              </h1>
              <p className="text-[#868686] text-sm leading-snug border-solid hover:border-blue-900 border-transparent border-[2px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, beatae.
              </p>
              <a target="_blank" className="block -mt-0 text-sm text-blue-400 leading-snug" href="https://e-commerce-ready-apy.vercel.app/">https://e-commerce-ready-apy.vercel.app</a>
            </div>
            <div className="mt-5">
              <h1 className="text-md font-semibold border-solid hover:border-blue-900 border-transparent border-[2px]">
              &#x2022; Blog website
              </h1>
              <p className="text-[#868686] text-sm leading-snug border-solid hover:border-blue-900 border-transparent border-[2px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, beatae.
              </p>
              <a target="_blank" className="block -mt-0 text-sm text-blue-400 leading-snug" href="https://e-commerce-ready-apy.vercel.app/">https://e-commerce-ready-apy.vercel.app</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default resume1