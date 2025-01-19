import { Calendar } from "lucide-react";
import React from "react";
import { Slider } from "../../Slider";
import Countdown from "../../Countdown";

const Hero = ({ details }) => {
  return (
    <main className="lg:flex lg:mx-20  lg:mt-20 mt-16 gap-5">
      <div className="lg:w-1/2">
        <div className="flex gap-3 items-center">
          <div className="lg:rounded-sm bg-[#F5BD02] text-white w-fit lg:px-2 lg:py-1 lg:text-base sm:text-4xl px-5 py-4 rounded-md">
            AI Powered
          </div>
          <div className="flex gap-2 items-center">
            <Calendar className="w-12 h-12 lg:w-6 lg:h-6 " />
            <p className="lg:text-lg text-4xl">#45 Days</p>
          </div>
        </div>
        <div className="mt-2">
          <h1 className="font-bold tracking-wider lg:text-2xl text-6xl leading-[70px] lg:leading-none my-5 lg:my-0">
            Python Programming Mastery Online Training
          </h1>
          <p className="lg:text-base text-[30px] lg:mb-0 mb-4">
            Master Advance Python Programming skills with the comfort of
            learning in your native language.
          </p>
          <h1 className="text-3xl my-2 font-semibold lg:hidden block">
            Online Classes Starting From 18 Feb 2025*
          </h1>
          <div className="lg:hidden">
            <Slider details={details} />
          </div>
          <div className="lg:flex  hidden gap-2 items-center mt-2 ">
            <div className="rounded-full bg-green-300 w-8 h-8 flex items-center justify-center">
              <h5 className="font-bold">அ</h5>
            </div>
            <p>Tamil</p>
          </div>
          <div className="flex items-center mt-2 lg:justify-normal justify-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="lg:h-[14px] lg:w-[15.75px] h-10 w-10 "
              viewBox="0 0 576 512"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="lg:h-[14px] lg:w-[15.75px] h-10 w-10 "
              viewBox="0 0 576 512"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="lg:h-[14px] lg:w-[15.75px] h-10 w-10 "
              viewBox="0 0 576 512"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="lg:h-[14px] lg:w-[15.75px] h-10 w-10 "
              viewBox="0 0 576 512"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="lg:h-[14px] lg:w-[15.75px] h-10 w-10 "
              viewBox="0 0 576 512"
            >
              <path d="M288 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L288.1 86.9l-.1 .3 0 289.2zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L288.1 439.8 159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z" />
            </svg>
            <p className="ml-1 lg:text-base text-4xl">4.6</p>
          </div>
          <p className="text-center lg:text-left lg:text-base text-3xl">
            17 ratings
          </p>
          {/* rating */}
          <div className="lg:w-fit mt-2">
            <div className="flex gap-2 mt-3 items-center lg:justify-normal justify-center">
              <button className="lg:px-3 lg:py-2 px-6 py-5 rounded-[4px] bg-[rgb(243,80,80)] hover:bg-[rgb(256,80,80)] font-semibold text-xl tracking-wider text-white ">
                <span className="lg:text-base text-5xl">Join Now @ ₹1999</span>
              </button>
              <strike className="lg:block hidden">₹3000</strike>
            </div>
            <div className="lg:w-fit mt-2 ">
              <p className="text-3xl lg:text-left text-center lg:text-sm ">
                Offer valid till 30th Jan
              </p>
              {/* Price Tag */}
            </div>
          </div>
          <h1 className="text-lg my-2 font-semibold lg:block hidden">
            Classes Starting From 18 Feb 2025*
          </h1>
        </div>
        <img
          src="/assets/design/border.jpg"
          alt=""
          className="lg:hidden w-3/4 my-4 mx-auto"
        />
        {/* <div className="mt-3 lg:block hidden">
          <b>Perks you get</b>
          <ol className="list-decimal ml-3 flex lg:block">
            <div className="flex gap-2">
              <li className="my-1">3 Days Refund Policy*</li>
              <span className="bg-red-400 px-2 rounded-full text-sm text-white flex justify-center items-center ">
                New
              </span>
            </div>
            <li className="my-1">Recorded Classes</li>
            <li className="my-1">Completion Certificate</li>
            <li className="my-1">1:1 Doubts Clearing</li>
            <li className="my-1">Practical Session</li>
            <li className="my-1">Assignments & Projects</li>
            <li className="my-1">Final Assesment Exam</li>
            <li className="my-1">6 Months Code Support</li>
          </ol>
        </div> */}
        <div className="lg:block ">
          <p className="text-5xl lg:text-left lg:text-lg lg:mt-4 text-center font-semibold lg:my-4 my-20">
            Perks you get
          </p>
          <div className="flex lg:justify-normal lg:flex-row flex-col  lg:gap-5 items-center lg:items-start gap-10  justify-between lg:mt-4 lg:mx-0  mx-2">
            <div>
              <ul className="list-disc pl-6 flex flex-col lg:gap-5 gap-10">
                <li className="lg:text-base  text-4xl">
                  3 Days Refund Policy*
                </li>
                <li className="lg:text-base text-4xl">Recorded Classes</li>
                <li className="lg:text-base text-4xl">
                  Completion Certificate
                </li>
                <li className="lg:text-base text-4xl">6 Months Code Support</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc pl-6 flex flex-col lg:gap-5 gap-10">
                <li className="lg:text-base text-4xl">1:1 Doubts Clearing</li>
                <li className="lg:text-base text-4xl">Practical Session</li>
                <li className="lg:text-base text-4xl">
                  Assignments & Projects
                </li>
                <li className="lg:text-base text-4xl">Final Assesment Exam</li>
              </ul>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* This is for info  */}
      <div className="lg:w-1/2 hidden lg:flex items-center justify-center  rounded-sm flex-col">
        <Slider details={details} />
        <div className="lg:block hidden mt-4">
          <Countdown targetDate={"2025-01-30"} />
          <p className="text-center my-2 lg:mt-4">🔥Limited Time Deal🔥</p>
        </div>
      </div>
      {/* This is for slider  */}
      {/* <Slider details={Slider_info} /> */}
    </main>
  );
};

export default Hero;
