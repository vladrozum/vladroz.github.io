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
    const randomNumber2 = Math.floor(Math.random() * dataArray.length);
    const chooseCategory = categories[randomNumber];
    const choose = dataArray[randomNumber2].answers[chooseCategory];
    console.log(choose.split('\n')[0]);
    return choose;
  }

  function chooseRandomAnswer() {
    const arrAnswer = [];
    const categories = ["life", "business", "YesNot"];
    const randomNumber = Math.floor(Math.random() * categories.length);
    const randomNumber2 = Math.floor(Math.random() * dataArray.length);
    const choose = dataArray[randomNumber2].answers[categories[randomNumber]];
    const url = dataArray[randomNumber2].img;
    arrAnswer.push(choose, url);
    return arrAnswer;
  }

  function generateAllQuestions() {
    const url = chooseRandomAnswer()[1]
    const val = chooseRandomAnswer()[0]
    const newArray = [];
    for (let i = 0; i < 3; i++) {
      const newQuestion = {
        url: url,
        value: random(),
        held: false,
        answer: false,
        id: i + 1,
      };
      newArray.push(newQuestion);
    }
    const rightAnswer = {
      url: url,
      value: val,
      held: false,
      answer: true,
      id: 4,
    };
    newArray.push(rightAnswer);
    // console.log(newArray);
    return newArray;
  }

  function generateQuestions() {
    setQuest(generateAllQuestions())

  }

  
  function answerQuestion(id) {
    setQuest((prevQuest) => prevQuest.map(questions => {
        return questions.id===id? 
            {...prevQuest, held: true} : 
            prevQuest
    }))
  }

  console.log(quest)
  
  const quizElements = quest.map((question) => (
    <Choice key={question.id} {...question} hold={()=> answerQuestion(question.id)}/>
  ));

  return (
    <div>
      <div className="container">
        <p className="whats-true">Що з цього правда?</p>
        <img src={generateAllQuestions()[0].url} alt="" className="images"></img>
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
