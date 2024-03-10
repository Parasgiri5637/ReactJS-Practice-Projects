import { useEffect, useState } from "react";
import "./App.css";

const tyPingPhase = {
  Typing: "Typing",
  Pausing: "Pausing",
  Deleting: "Deleting",
};

const words = ["Skin Care", "Body Lotion", "Cleanser", "Sunscreen"];
// const words = "Skin Care";

function App() {
  const [currentText, setCurrentText] = useState("");
  const [phase, setPhase] = useState(tyPingPhase.Typing);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 200;
    const deletingSpeed = 150;
    const pauseDuration = 400;

    const str = words[currentTextIndex];

    let timeOut;

    switch (phase) {
      case tyPingPhase.Typing:
        if (currentText.length < str.length) {
          timeOut = setTimeout(() => {
            setCurrentText(str.slice(0, currentText.length + 1));
          }, typingSpeed);
        } else {
          timeOut = setTimeout(() => {
            setPhase(tyPingPhase.Pausing);
          }, pauseDuration);
        }
        break;

      case tyPingPhase.Deleting:
        if (currentText.length > 0) {
          timeOut = setTimeout(() => {
            setCurrentText(currentText.slice(0, currentText.length - 1));
          }, deletingSpeed);
        } else {
          timeOut = setTimeout(() => {
            setPhase(tyPingPhase.Typing);
            setCurrentTextIndex((currentTextIndex + 1) % words.length);
          }, pauseDuration);
        }
        break;

      case tyPingPhase.Pausing:
        timeOut = setTimeout(() => {
          if (currentText === "") {
            setPhase(tyPingPhase.Typing);
          } else {
            setPhase(tyPingPhase.Deleting);
          }
        }, pauseDuration);
        break;
      default:
        break;
    }

    return () => clearTimeout(timeOut);
  }, [phase, currentText]);

  return <h1>The Best {currentText}</h1>;
}

export default App;
