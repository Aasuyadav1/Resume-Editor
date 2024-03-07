import React from 'react'
import { resume1 } from '../Data/resume1'

function Resum() {
  return (
    <div className='max-w-2xl mx-auto cursor-pointer bg-white mt-20 mb-20  py-8 px-10 font-sans'>{
        resume1.map((data)=>(
            <div
            className="w-full h-fit flex items-center gap-10 px-5 py-1"
            // onDrop={handleDrop}
            // onDragOver={handleDragOver}
          >
            <img
              src={selectedImage}
              alt="Selected"
              className="w-[100px] rounded-full object-cover aspect-square  border-solid hover:border-blue-900 border-[2px] border-transparent cursor-pointer"
            //   onClick={handleImageClick}
              draggable="true"
            />
            <input
              type="file"
              id="fileInput"
              className="hidden"
            //   onChange={handleImageChange}
            />
            <div className="flex-grow">
              <p
                className="text-6xl pb-2 w-full border-solid hover:border-blue-900 border-[2px] border-transparent text-black font-bold text-left break-words text-wrap"
                // onClick={handleClick}
              >
                Aasu Yadav
              </p>
              <p
                className="text-2xl text-black font-normal border-solid hover:border-blue-900 border-transparent border-[2px]"
                // onClick={handleClick}
              >
                Software Developer
              </p>
            </div>
          </div>

        ))
        }</div>
  )
}

export default Resum