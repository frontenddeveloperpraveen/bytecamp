import React, { useRef, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ArrowBigLeft, ArrowLeft, ArrowRight } from "lucide-react";

const CustomerReviews = ({ reviews }) => {
  const [sliderRef, slider] = useKeenSlider({
    loop: true, // Enables infinite loop
    slides: {
      perView: 1, // Default number of slides for smaller screens
      spacing: 16, // Default spacing
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 1, spacing: 16 },
      },
      "(min-width: 768px)": {
        slides: { perView: 1, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 16 },
      },
    },
  });

  const intervalRef = useRef(null);

  // Auto-scroll setup
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      slider?.current?.next();
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [slider]);

  return (
    <section className="bg-white py-12 lg:py-8">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center lg:text-2xl font-bold tracking-tight text-gray-900 text-5xl pb-4 lg:pb-0">
          Read trusted reviews from our students
        </h2>

        <div className="relative mt-8 lg:w-full w-[85%] mx-auto">
          {/* Slider */}
          <div className="keen-slider" ref={sliderRef}>
            {reviews.map((review, index) => (
              <div
                key={index}
                className="keen-slider__slide rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8"
              >
                <blockquote>
                  <div className="flex items-center gap-4 justify-center lg:justify-normal flex-col lg:flex-row">
                    <img
                      alt={review.name}
                      src={review.image}
                      className="lg:h-14 lg:w-14 w-[100px] h-[100px] overflow-hidden rounded-full object-cover "
                    />
                    <div>
                      <p className="lg:mt-0.5 my-3 font-semibold  lg:text-lg  lg:font-medium text-gray-900 text-4xl">
                        {review.name}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 lg:text-lg text-gray-700 text-4xl py-4 mx-10 lg:mx-0 lg:py-0 lg:text-left text-justify">
                    {review.review}
                  </p>
                </blockquote>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-[-50px] -translate-y-1/2">
            <button
              className="rounded-full bg-gray-200 p-2 text-gray-900 shadow-md hover:bg-gray-300 sm:p-3"
              onClick={() => slider?.current?.prev()}
            >
              <ArrowLeft />
            </button>
          </div>
          <div className="absolute top-1/2 right-[-50px] -translate-y-1/2">
            <button
              className="rounded-full bg-gray-200 p-2 text-gray-900 shadow-md hover:bg-gray-300 sm:p-3"
              onClick={() => slider?.current?.next()}
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
