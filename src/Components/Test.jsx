import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const TypeWriter = () => {
  const [text] = useTypewriter({
    words: ["Hello", "From", "Typewriter", "Hook!"],
    loop: 3,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  return (
    <div className="App">
      <span>{text}</span>
      <Cursor cursorColor="red" />
    </div>
  );
};

export default TypeWriter;
