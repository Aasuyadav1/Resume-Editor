import React from "react";


function Features() {
  return (
    <div className="max-w-screen-xl mx-auto px-4  md:mt-10 gap-12 text-gray-600 bg-[rgb(250,247,254)] md:px-8">
    <h1 className="text-4xl space-y-5 max-w-4xl mx-auto  text-center text-gray-800 font-extrabold  md:text-5xl">Achieve your ideal career with <span> our cutting-edge resume builder!</span></h1>
      <div className="grid mt-10 md:mt-28 md:grid-cols-2 grid-cols-1  place-content-center gap-10 md:gap-40">
       
        <div>
          <h2 className=" text-gray-800 font-semibold text-2xl">
          Revolutionize Your Resume with Our Easy-to-Use Editor!
          </h2>
          <ul className="pl-4 text-xl list-disc mt-10">
            <li>
              Select from a Variety of Professional Templates Customize with
              Ease
            </li>
            <li className="mt-3">Instantly Edit and Update</li>
            <li className="mt-3">Free Download</li>
            <li className="mt-3">Create a Stunning Resume in Minutes!</li>
          </ul>
        </div>

        <div className=" order-first md:order-last ">
          <img
            src="./images/Template.png"
            className="w-full max-w-[1000px] shadow-lg rounded-lg border"
            alt=""
          />
        </div>
      </div>
      <div className="grid md:mt-40 mt-8 md:grid-cols-2 order-last grid-cols-1 place-content-center gap-10 md:gap-16">
        <div className="">
          <img
            src="./images/styles.png"
            className="w-full max-w-[1000px] shadow-lg rounded-lg border"
            alt=""
          />
        </div>
        <div className="">
          <div>
            <h2 className=" text-gray-800 font-semibold text-2xl">
              Empower Your Creativity with Direct Editing and Styling
            </h2>
            <ul className="pl-4 text-xl list-disc mt-10">
              <li>Click Anywhere on Your Content to Edit</li>
              <li className="mt-3">
                {" "}
                Easily Adjust Fonts, Bold, Italics, and Alignment
              </li>
              <li className="mt-3">Choose from a Range of Font Families</li>
              <li className="mt-3">
                Take Control of Your Resume's Appearance with Just a Click!
              </li>
            </ul>
          </div>

          {/* <p>Instantly Edit and Update</p>
          <p>Create a Stunning Resume in Minutes!</p> */}
        </div>
      </div>
    </div>
  );
}

export default Features;
