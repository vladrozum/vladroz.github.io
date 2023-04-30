import React from "react";
import "./index.css";
import data from "./data";
import Choice from "./choice";

export default function Main() {
  const [dataArray, setData] = React.useState(data);
  const [quest, setQuest] = React.useState(generateAllQuestions());

  function random() {
    const categories = ["life", "business", "YesNot"];
    const randomNumber = Math.floor(Math.random() * categories.length);
    const chooseCategory = categories[randomNumber];
    const choose = dataArray[randomNumber].answers[chooseCategory];
    console.log(choose.split('\n')[0]);
    return choose;
  }

  function chooseRandomAnswer() {
    const arrAnswer = [];
    const categories = ["life", "business", "YesNot"];
    const randomNumber = Math.floor(Math.random() * categories.length);
    const choose = dataArray[randomNumber].answers[categories[randomNumber]];
    const url = dataArray[randomNumber].img;
    arrAnswer.push(choose, url);
    return arrAnswer;
  }

  function generateAllQuestions() {
    const newArray = [];
    for (let i = 0; i < 3; i++) {
      const newQuestion = {
        value: random(),
        held: false,
        answer: false,
        id: i + 1,
      };
      newArray.push(newQuestion);
    }
    const rightAnswer = {
      url: chooseRandomAnswer()[1],
      value: chooseRandomAnswer()[0],
      held: false,
      answer: true,
      id: 4,
    };
    newArray.push(rightAnswer);
    // console.log(newArray);
    return newArray;
  }

  function generateQuestions() {
    setQuest((oldQuestion) =>
      oldQuestion.map((die, i) => {
        return { value: random(), held: false, id: i + 1 };
      })
    );
  }
  
  const quizElements = quest.map((question) => (
    <Choice key={question.id} {...question} />
  ));

  return (
    <div>
      <div className="container">
        <p className="whats-true">Що з цього правда?</p>
        <img src={generateAllQuestions()[3].url} alt="" className="images"></img>
      </div>
      <div className="button-next">
        <button onClick={generateQuestions} className="but">
          Наступне питання
        </button>
      </div>
      <div className="question-container">{quizElements}</div>
    </div>
  );
}
