import React from "react";
import "./index.css";
import data from "./data";

export default function Main() {
  const [dataArray, setData] = React.useState(data);
  const [right, setRightAnswer] = React.useState(chooseRandomAnswer()[1]);
  const [game, setGame] = React.useState(false);
  const [quest, setQuest] = React.useState(generateAllQuestions());
  const [set, setRight] = React.useState(false);
  const [number, setNumber] = React.useState(0);
  const [counter, setCounter] = React.useState(0);
  const [questions, setQuestions] = React.useState([
    generateAllQuestions()[0].answerOptions.sort(() => 0.5 - Math.random()),
  ]);
  const [best, setBest] = React.useState()

  function random() {
    const categories = ["life", "business", "advice", "dayCard"];
    const randomNumber = Math.floor(Math.random() * categories.length);
    const randomNumber2 = Math.floor(Math.random() * dataArray.length);
    const chooseCategory = categories[randomNumber];
    const choose = dataArray[randomNumber2].answers[chooseCategory];
    return choose;
  }

  function chooseRandomAnswer() {
    const arrAnswer = [];
    const categories = ["life", "business", "advice", "dayCard"];
    const randomNumber = Math.floor(Math.random() * categories.length);
    const randomNumber2 = Math.floor(Math.random() * dataArray.length);
    const choose = dataArray[randomNumber2].answers[categories[randomNumber]];
    const url = dataArray[randomNumber2].img;
    arrAnswer.push(url, choose);
    return arrAnswer;
  }

  function generateAllQuestions() {
    const answer = chooseRandomAnswer();
    const newArray = { url: answer[0], answerOptions: [] };
    for (let i = 0; i < 3; i++) {
      const newQuestion = {
        value: random(),
        isCorrect: false,
        id: i + 1,
      };
      newArray.answerOptions.push(newQuestion);
    }

    const rightAnswer = {
      value: answer[1],
      isCorrect: true,
      id: 4,
    };
    newArray.answerOptions.push(rightAnswer);
    return [newArray];
  }

  function generateQuestions() {
    setQuestions([
      generateAllQuestions()[0].answerOptions.sort(() => 0.5 - Math.random()),
    ]);
    setRight(false);
    setRightAnswer(chooseRandomAnswer()[1]);
    setQuest(generateAllQuestions());
  }

  function checkAnswer(isCorrect, id) {
    if (isCorrect && id === 4) {
      setRight(true);
      setNumber((prevNumber) => prevNumber + 1);
    } else if (!isCorrect) {
      setGame(true);
    }
  }

  function refresh() {
    setRight(false);
    setGame(false);
    setNumber(0);
    setCounter(0);
    generateQuestions();
  }

  const styles = {
    backgroundColor: set ? "green" : "",
  };

  React.useEffect(() => {
    function timer() {
      if (!game) {
        setCounter((prevSec) => prevSec + 1);
        setBest(counter)
      }
      
    }

    const timerID = setInterval(() => timer(), 1000);
    return () => clearInterval(timerID);
  }, [generateAllQuestions]);

  return (
    <div>
      {counter}
      {game ? (
        <div className="container">
          <div className={`whats-true`}>
            <p>Ви програли</p>
            <p>Правильна відповідь: <span className="rightAnswer">{right}</span></p>
            <p>Правильних відповідей: <span className="rightAnswer">{number}</span></p>
            <p>Витрачено часу: <span className="rightAnswer">{counter}</span></p>
            <div className="button-next">
              <button onClick={refresh} className="but">
                Почати знову
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="container2">
            <p className="whats-true">Що з цього правда?</p>
            <p className="number">
              {number} {counter}
            </p>
          </div>
          <img src={quest[0].url} alt="" className="images"></img>
          <div className={`button-next`}>
            {set && (
              <button onClick={generateQuestions} className="but">
                Наступне питання
              </button>
            )}
          </div>
          <div className="question-container">
            {questions[0].map((question) => (
              <button
                className="button"
                style={styles}
                onClick={() => checkAnswer(question.isCorrect, question.id)}
                key={question.id}
              >
                {question.value}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
