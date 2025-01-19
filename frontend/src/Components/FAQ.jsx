import React, { useState } from "react";

const FAQ = ({ faqs }) => {
  // State to track the currently open FAQ index
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle the open FAQ
  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="relative w-full bg-white px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 lg:mx-auto  lg:rounded-lg lg:px-10">
      <div className="lg:mx-auto lg:px-5">
        <div className="flex flex-col items-center">
          <h2 className="mt-5 text-center lg:text-4xl font-bold tracking-tight text-7xl">
            FAQ
          </h2>
          <p className="mt-3 text-4xl text-neutral-500 lg:text-xl">
            Frequently asked questions
          </p>
        </div>
        <div className="mx-auto mt-8 grid w-[90%] divide-y divide-neutral-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-5">
              <div
                className="flex cursor-pointer list-none items-center justify-between my-6 lg:my-0 lg:text-base text-3xl mr-2 lg:mx-0"
                onClick={() => handleToggle(index)}
              >
                <span className="lg:text-base text-4xl">{faq.question}</span>
                <span
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-3 text-neutral-600 text-3xl lg:text-base">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
