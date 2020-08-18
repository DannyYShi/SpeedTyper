import React from "react";
import "./App.css";
import useTypingGame from "./useTypingGame";

function App() {
  const {
    textBoxRef,
    handleChange,
    text,
    isTimeRemaining,
    timeRemaining,
    startGame,
    wordCount,
  } = useTypingGame();

  return (
    <React.Fragment>
      <h1>How Fast Can You Type?</h1>
      <textarea
        ref={textBoxRef}
        onChange={handleChange}
        value={text}
        disabled={!isTimeRemaining}
      />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isTimeRemaining}>
        Start
      </button>
      <h1>Word Count: {wordCount}</h1>
    </React.Fragment>
  );
}

export default App;
