import { File } from "lucide-react";
import React, { useState } from "react";

const Syllabus = ({ details }) => {
  const [openSection, setOpenSection] = useState(null);

  const toggleAccordion = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <section
      id="syllabus-section"
      className="mx-auto rounded-lg lg:w-1/2 w-[95%] border border-1 px-4 py-2"
    >
      <div className="syllabus flex items-center justify-center">
        <div className="container py-5 w-full">
          <h1 className="text-center lg:mb-4 lg:text-4xl text-5xl mb-7 font-semibold tracking-wide">
            Course Syllabus
          </h1>
          <div className="space-y-4">
            {/* Accordion Items */}
            {details.map((item, index) => (
              <div className="border-b py-6 lg:py-0" key={index}>
                <h2 className="cursor-pointer">
                  <button
                    className="flex justify-between items-center w-full py-3 text-left focus:outline-none"
                    onClick={() => toggleAccordion(index)}
                  >
                    <div>
                      <h5 className="lg:text-xl text-4xl">{item.title}</h5>
                      <span className="flex items-center lg:gap-1 gap-2 my-2">
                        <File />
                        <p className="lg:text-base text-3xl ">
                          {item.items.length} Topics
                        </p>
                      </span>
                    </div>
                    <svg
                      className={`w-5 h-5 transform ${
                        openSection === index ? "rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </h2>
                {openSection === index && (
                  <div className="pl-6">
                    <ul>
                      {item.items.map((topic, topicIndex) => (
                        <li
                          className="my-2 flex items-center gap-3"
                          key={topicIndex}
                        >
                          <span className="lg:h-2 lg:w-2 h-4 w-4 rounded-full bg-gray-700"></span>
                          <h1 className="lg:text-base text-3xl my-2">
                            {topic}
                          </h1>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-2">
        {/* <button className="lg:px-3 lg:py-2 lg:text-base text-4xl px-7 rounded-md py-5 bg-green-300 my-10 lg:my-0 lg:rounded-sm ">
          Download Curriculum
        </button> */}
      </div>
    </section>
  );
};

export default Syllabus;
