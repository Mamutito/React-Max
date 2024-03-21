import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";
const Summary = ({ userAnswers }) => {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );
  const wrongAnswers = userAnswers.filter(
    (answer, index) => answer !== QUESTIONS[index].answers[0]
  );

  const calculatePercent = (current, max) => Math.round((current * 100) / max);

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trophy icon" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">
            {calculatePercent(skippedAnswers.length, userAnswers.length)}%
          </span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">
            {calculatePercent(correctAnswers.length, userAnswers.length)}%
          </span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">
            {calculatePercent(wrongAnswers.length, userAnswers.length)}%
          </span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass;
          if (answer === null) {
            cssClass = "skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass = "correct";
          } else {
            cssClass = "wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <div className="question">{QUESTIONS[index].text}</div>
              <div className={`user-answer ${cssClass}`}>
                {answer ?? "Skipped"}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Summary;
