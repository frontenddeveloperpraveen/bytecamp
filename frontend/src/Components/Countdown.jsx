import React, { useState, useEffect } from "react";

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date(targetDate);
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();

    const timerId = setInterval(calculateTimeLeft, 1000); // Update every second

    return () => clearInterval(timerId); // Cleanup on unmount
  }, [targetDate]);

  const { days, hours, minutes, seconds } = timeLeft;
  if (!(days > 0 || hours > 0 || minutes > 0 || seconds > 0)) {
    return;
  }

  return (
    <div>
      {days > 0 || hours > 0 || minutes > 0 || seconds > 0 ? (
        <div className="flex gap-5 mt-2 border-2 rounded-lg px-4 py-2">
          <div className="flex flex-col items-center">
            <span>{String(days).padStart(2, "0")}</span>
            <span>day{days !== 1 ? "s" : ""}</span>
          </div>
          <div className="flex flex-col items-center">
            <span>{String(hours).padStart(2, "0")}</span>
            <span>hours</span>
          </div>
          <div className="flex flex-col items-center">
            <span>{String(minutes).padStart(2, "0")}</span>
            <span>minutes</span>
          </div>
          <div className="flex flex-col items-center">
            <span>{String(seconds).padStart(2, "0")}</span>
            <span>seconds</span>
          </div>
        </div>
      ) : (
        <h2>The Offer {targetDate} has ended!</h2>
      )}
    </div>
  );
};

export default Countdown;
