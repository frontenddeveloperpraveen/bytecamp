import React, { useState } from "react";
import "./style.css";
import { X } from "lucide-react";

const Notification = () => {
  const [isVisible, setIsVisible] = useState(true); // State to manage visibility

  const closeNotification = () => {
    setIsVisible(false); // Update state to hide the notification
  };

  if (!isVisible) return null; // Don't render the notification if it's hidden

  return (
    <div
      className="w-full bg-[rgba(250,172,182,0.68)] leading-[30px] h-[40px] flex justify-center items-center relative"
      id="notification-bar"
    >
      <h1 className="text-2xl lg:text-sm">
        Admission starts from <b>21 Jan 2025</b>
      </h1>
      <b className="absolute top-[18%] right-5 cursor-pointer">
        <X size={25} onClick={closeNotification} />
      </b>
    </div>
  );
};

export default Notification;
