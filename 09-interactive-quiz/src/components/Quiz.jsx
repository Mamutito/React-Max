import { useCallback, useState } from "react";
import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";
import Question from "./Question";
const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    (selectedAnswer) => {
      setUserAnswers((prevUserAnswers) => [...prevUserAnswers, selectedAnswer]);
    },
    [activeQuestionIndex]
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Trophy icon" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipedAnswer={handleSkipAnswer}
      />
    </div>
  );
};

export default Quiz;
