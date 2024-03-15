import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Timer = () => {
  const BirthdayTime = new Date("2024-03-16T00:00:00");
  const navigate = useNavigate();

  const calculateTimeRemaining = () => {
    const now = new Date();
    const Difference = BirthdayTime - now;
    if (Difference <= 0) {
      navigate("/homepage"); // Navigate to homepage when time expires
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(Difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (Difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((Difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((Difference % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerStyle = {
    fontSize: "4rem",
    color: "#8a2be2", // Purple color for timer
    fontFamily: "Courier New, monospace", // Edgy font
    textTransform: "uppercase",
    fontWeight: "bold",
  };

  return (
    <div className="relative bg-yellow-200 h-screen flex justify-center items-center">
      {/* Timer */}
      <div className="text-center">
        <span className="text-5xl font-bold" style={timerStyle}>
          <span>{timeRemaining.days} <b style={{ color: 'black' }}>days</b></span>{" "}
          <span>{timeRemaining.hours} <b style={{ color: 'black' }}>hours</b></span>{" "}
          <span>{timeRemaining.minutes} <b style={{ color: 'black' }}>minutes</b></span>{" "}
          <span>{timeRemaining.seconds} <b style={{ color: 'black' }}>seconds</b></span>
        </span>
      </div>
    </div>
  );
};

export default Timer;
