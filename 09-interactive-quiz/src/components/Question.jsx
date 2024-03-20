import { useState } from "react";
import QUESTIONS from "../questions";
import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";
const Question = ({ onSelectAnswer, onSkipedAnswer, index }) => {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }
  const handleSelect = (answer) => {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });
    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: answer === QUESTIONS[index].answers[0],
      });
      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  };
  let answerState = "";
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }
  return (
    <div id="question">
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        answers={QUESTIONS[index].answers}
        answerState={answerState}
        selectedAnswer={answer.selectedAnswer}
        onSelect={handleSelect}
      />
      <QuestionTimer
        key={timer}
        timeout={timer}
        mode={answerState}
        onTimeout={!answer.selectedAnswer ? onSkipedAnswer : null}
      />
    </div>
  );
};

export default Question;
