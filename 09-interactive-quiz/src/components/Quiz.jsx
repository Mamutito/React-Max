import { useCallback, useState } from "react";
import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";
import QuestionTimer from "./QuestionTimer";
const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const [isCorrect, setIsCorrect] = useState();
  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback((selectedAnswer) => {
    setUserAnswers((prevUserAnswers) => [...prevUserAnswers, selectedAnswer]);
    setIsCorrect(selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]);
  }, []);

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

  const suffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  suffledAnswers.sort(() => Math.random() - 0.5);

  let isCorrectClass;
  if (isCorrect) {
    isCorrectClass = "correct";
  } else if (isCorrect !== undefined) {
    isCorrectClass = "wrong";
  }
  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {suffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button
                className={
                  userAnswers[activeQuestionIndex] === answer
                    ? isCorrectClass
                    : undefined
                }
                onClick={() => handleSelectAnswer(answer)}
              >
                {answer}
              </button>
            </li>
          ))}
        </ul>
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />
      </div>
    </div>
  );
};

export default Quiz;
