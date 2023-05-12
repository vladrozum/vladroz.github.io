import React from "react";
import "./index.css";
import data from "./data";

export default function Main() {
  // data
  const [dataArray, setData] = React.useState(data);

  // right answer
  // const [right, setRightAnswer] = React.useState('');

  // win
  const [game, setGame] = React.useState(false);

  // answer options
  const [quest, setQuest] = React.useState(generateAllQuestions());

  // if right answer
  const [set, setRight] = React.useState(false);

  // count of right answers
  const [number, setNumber] = React.useState(0);

  // timer
  const [counter, setCounter] = React.useState(1);

  // All randomed answer options
  const [questions, setQuestions] = React.useState([
    generateAllQuestions()[0].answerOptions.sort(() => 0.5 - Math.random()),
  ]);

  
  // Choose 3 wrong random answer options
  function random() {
    const categories = ["life", "business", "advice", "dayCard"];
    const randomNumber = Math.floor(Math.random() * categories.length);
    const randomNumber2 = Math.floor(Math.random() * dataArray.length);
    const chooseCategory = categories[randomNumber];
    const choose = dataArray[randomNumber2].answers[chooseCategory];
    return choose;
  }


  // Choose 1 right answer options
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

  // Generate array of answer options
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

  // Generate array of answer options after clicking next button
  function generateQuestions() {
    setQuestions([
      generateAllQuestions()[0].answerOptions.sort(() => 0.5 - Math.random()),
    ]);
    setRight(false);
    setQuest(generateAllQuestions())
  }


  // Check answer
  function checkAnswer(isCorrect, id) {
    if (isCorrect && id === 4) {
      setRight(true);
      setNumber((prevNumber) => prevNumber + 1);
    } else if (!isCorrect) {
      setGame(true);
    }
  }    


  // Refresh after endgame
  function refresh() {
    setRight(false);
    setGame(false);
    setNumber(0);
    setCounter(1);
    generateQuestions();
  }

  // timer
  React.useEffect(() => {
    function timer() {
      if (!game) {
        setCounter((prevSec) => prevSec + 1);
      }
    }

    const timerID = setInterval(() => timer(), 1000);
    return () => clearInterval(timerID);
  }, [generateAllQuestions]);

  const styles = {
    backgroundColor: set ? "green" : "",
  };

  return (
    <div>
      {game ? (
        <div className="container">
          <div className={`whats-true`}>
            <p className="lose">Ви програли</p>
            <p>      
              Правильних відповідей:
              <span className="rightAnswer"> {number}</span>
            </p>
            <p>
              Витрачено часу: <span className="rightAnswer">{counter} (Середнє: {number === 0 ? 0 : Math.ceil(counter/number)} на одне питання)</span>
            </p>
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
              Вгадала: {number}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Час: {counter}
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
