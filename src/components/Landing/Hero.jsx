import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-[rgb(250,247,254)]">
    <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 bg-[rgb(250,247,254)] md:px-8">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
            <h1 className="text-sm text-indigo-600 font-medium">
                Build products for everyone
            </h1>
            <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
                Design your Resume faster with  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">the powerful editor</span>
            </h2>
            <p className="max-w-2xl mx-auto">
            Edit Your Resume Content with Ease, Choose from Stunning Templates, and Download Instantly
            </p>
            <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                <Link to="/editor" className="block py-2 px-8 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                    Try Now editor
                </Link>
               
            </div>
        </div>
        <div className="mt-14">
            <img src="./images/editortest.png" className="w-full shadow-lg rounded-lg border" alt="" />
        </div>
    </div>
</section>
  );
}

export default Hero;
