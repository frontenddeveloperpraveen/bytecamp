import React from "react";

const About_python = () => {
  return (
    <>
      <section className="mt-20  ">
        <div className="bg-blue-100  px-20 pb-16">
          <div className="flex items-center justify-between">
            <div className="flex gap-5 flex-col">
              <span>
                <h1 className="lg:text-3xl lg:py-5 font-bold tracking-wider text-6xl text-center lg:text-left pt-10">
                  Why Python ?
                </h1>
              </span>
              <div className="lg:hidden flex justify-center mt-[-70px]">
                <img src="/assets/avatar/ITgirl.png" width={500} alt="" />
              </div>
              <span>
                <h1 className="lg:text-xl lg:font-semibold my-2 text-5xl">
                  Versatility
                </h1>
                <p className=" lg:text-base text-4xl lg:my-0 my-5">
                  Machine Learning, AI, Web Development, Hacking, IoT, and more.
                  Python is used everywhere.
                </p>
              </span>
              <span>
                <h1 className="lg:text-xl lg:font-semibold my-2 text-5xl">
                  Beginner friendly
                </h1>
                <p className=" lg:text-base text-4xl lg:my-0 my-5">
                  A simple and powerful syntax makes Python one of the easiest
                  languages to learn.
                </p>
              </span>
              <span>
                <h1 className="lg:text-xl lg:font-semibold my-2 text-5xl">
                  Demand
                </h1>
                <p className=" lg:text-base text-4xl lg:my-0 my-5">
                  Python is the fastest growing language according to Stack
                  Overflow with an average fresher salary of 5 LPA+ according to
                  Glassdoor.
                </p>
              </span>
            </div>
            <div className="lg:block hidden">
              <img src="/assets/avatar/ITgirl.png" width={400} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About_python;
