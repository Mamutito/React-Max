import { useRef } from "react";

const Answers = ({ answers, answerState, selectedAnswer, onSelect }) => {
  const suffledAnswers = useRef();
  if (!suffledAnswers.current) {
    suffledAnswers.current = [...answers];
    suffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {suffledAnswers.current.map((answer) => {
        console.log("answer", suffledAnswers.current);
        const isSelected = selectedAnswer === answer;
        let cssClass;
        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        } else if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }
        console.log("cssClass", cssClass);
        return (
          <li key={answer} className="answer">
            <button
              className={cssClass}
              onClick={() => onSelect(answer)}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
