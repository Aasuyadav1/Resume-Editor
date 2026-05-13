import React from "react";

function Features() {
  return (
    <section className="bg-[rgb(250,247,254)] pb-16 md:pb-24">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 text-gray-700">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Everything you need to craft a
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
              {" "}modern resume
            </span>
          </h2>
          <p className="mt-5 text-lg text-gray-600">
            Follow a polished workflow with ready-made templates, flexible
            editing tools, and one-click export.
          </p>
        </div>

        <div className="grid mt-12 md:mt-16 gap-8 md:grid-cols-3">
          {[
            {
              title: "Professional templates",
              desc: "Choose from clean, recruiter-friendly resume layouts made for modern hiring.",
            },
            {
              title: "Live editing",
              desc: "Update text directly and instantly preview every change without friction.",
            },
            {
              title: "Quick export",
              desc: "Download your final resume quickly and share it confidently anywhere.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="mt-3 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid mt-16 items-center gap-10 md:gap-20 md:grid-cols-2">
          <img
            src="./images/Template.png"
            className="w-full shadow-xl rounded-2xl border border-indigo-100"
            alt="Template gallery"
          />
          <img
            src="./images/styles.png"
            className="w-full shadow-xl rounded-2xl border border-indigo-100"
            alt="Resume styling panel"
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
