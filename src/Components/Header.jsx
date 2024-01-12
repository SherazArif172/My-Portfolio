import React, { useState, useEffect } from "react";
import Headerimg from "../Assets/Images/home-main.svg";

const Header = () => {
  const sentences = [
    "Front-end Developer",
    "Webites Creater",
    "Commited Learner",
  ];

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    const sentence = sentences[currentSentenceIndex];
    let index = 0;

    const interval = setInterval(() => {
      setCurrentText((prevText) => prevText + sentence[index]);
      index += 1;

      if (index === sentence.length) {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentText("");
          setCurrentSentenceIndex(
            (prevIndex) => (prevIndex + 1) % sentences.length
          );
        }, 2000); // Adjust the delay between sentences
      }
    }, 200); // Adjust the typing speed

    return () => clearInterval(interval);
  }, [currentSentenceIndex]);

  return (
    <div className="grid lg:grid-cols-2 mb-16">
      <div className="text-white self-center lg:m-auto lg:text-start text-center md:mb-0 mb-9">
        <h2 className="lg:text-6xl text-4xl mb-4">Hi There!</h2>
        <h1 className="lg:text-6xl text-5xl ">
          I'M <span className="text-purple-400 font-bold">SHERAZ ARIF</span>
        </h1>
        <p className="text-purple-400 lg:text-5xl text-4xl mt-9">
          {currentText}
          <span> |</span>
        </p>
      </div>
      <div className="m-auto">
        <img src={Headerimg} alt="sheraz" className="w-[500px]" />
      </div>
    </div>
  );
};

export default Header;
