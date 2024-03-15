import React from "react";
import "./style2.css";
const BirthdayCard = () => {
  return (
    <div className="birthdayCard">
      <div className="cardFront">
        <h3 className="happy">
          HAPPY BIRTHDAY{" "}
          <span style={{ fontWeight: "700", color: "red" }}>SHIMPI</span>!
        </h3>
        <div className="balloons">
          <div className="balloonOne" />
          <div className="balloonTwo" />
          <div className="balloonThree" />
          <div className="balloonFour" />
        </div>
      </div>
      <div className="cardInside">
        <h3 className="back">
          HAPPY BIRTHDAY{" "}
          <span style={{ fontWeight: "700", color: "pink" }}>SHIMPI</span>!
        </h3>
        <p>Dear ,</p>
        <p>
          Happy Birthday Mohtarma 🌝❤...may god bless you and all your wishes
          come true..have a great day and year ahead... Tumhari saari problems
          khatm ho jaye (mujhe chor kr 🤣👍🏻) and U know u r special and this one
          is for you 🌺💐.. Once again Happy Birthday....!! 🫶🏻
        </p>
        <p className="name">Pawan</p>
      </div>
    </div>
  );
};

export default BirthdayCard;
