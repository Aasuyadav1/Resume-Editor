import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-[rgb(250,247,254)]">
      <div className="max-w-screen-xl mx-auto px-4 pt-14 pb-10 md:pt-24 md:pb-20 md:px-8">
        <div className="grid gap-12 items-center md:grid-cols-2">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-700 bg-indigo-100/70 px-4 py-2 rounded-full w-fit">
              Smart Resume Builder
            </p>
            <h1 className="text-4xl text-gray-900 font-extrabold leading-tight md:text-5xl lg:text-6xl">
              Build a standout resume with a
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                modern, powerful editor
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Create, edit, and style your resume in minutes. Pick a clean
              template, customize instantly, and download when you are ready.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/editor"
                className="inline-flex py-3 px-8 text-white font-semibold bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-full shadow-lg hover:shadow-md"
              >
                Create Resume
              </Link>
              <p className="text-sm text-gray-500">
                No design skills needed • Fast and simple
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#4F46E5]/20 to-[#E114E5]/20 blur-2xl rounded-3xl" />
            <img
              src="./images/ResumeEditor.png"
              className="relative w-full max-w-[1000px] mx-auto shadow-2xl rounded-2xl border border-indigo-100"
              alt="Resume editor preview"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
