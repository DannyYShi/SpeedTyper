import { useEffect, useRef, useState } from "react";

function useTypingGame(STARTING_TIME = 10) {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [isTimeRemaining, setIsTimeRemaining] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textBoxRef = useRef(null);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(" ");
    return wordsArr.filter((word) => word !== "").length;
  }

  function startGame() {
    setIsTimeRemaining(true);
    setTimeRemaining(STARTING_TIME);
    setText("");
    textBoxRef.current.disabled = false;
    textBoxRef.current.focus();
  }

  function endGame() {
    setIsTimeRemaining(false);
    setWordCount(calculateWordCount(text));
  }

  useEffect(() => {
    if (isTimeRemaining && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRemaining]);

  return {
    textBoxRef,
    handleChange,
    text,
    isTimeRemaining,
    timeRemaining,
    startGame,
    wordCount,
  };
}
export default useTypingGame;
