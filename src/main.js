import React from "react";
import "./index.css";
import data from "./data";

export default function Main() {
  const [dataArray, setData] = React.useState(data);
  const [quest, setQuest] = React.useState(generateQuestions);

  function random() {
    const categories = ["life", "business", "YesNot"];
    const randomNumber = Math.floor(Math.random() * categories.length);
    const chooseCategory = categories[randomNumber];
    const choose = dataArray[randomNumber].answers[chooseCategory];
    console.log(choose);
    return choose;
  }

  function chooseRandomAnswer() {
    const arrAnswer = []
    const categories = ["life", "business", "YesNot"];
    const randomNumber = Math.floor(Math.random() * categories.length);
    const choose = dataArray[randomNumber].answers[categories[randomNumber]]
    const url = dataArray[randomNumber].img;
    arrAnswer.push(choose, url)
    return arrAnswer
  }

    function generateQuestions() {
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
        value: chooseRandomAnswer()[0],
        held: false,
        answer: true,
        id: 4,
      };
      newArray.push(rightAnswer);
      console.log(newArray)
      return newArray;

    }

    
    return (
      <div>
        <div className="container">
          <img src={quest.randomImage} alt="" className="images"></img>
        </div>
        <div className="button-next">
          <button onClick={chooseRandomAnswer} className="but">
            Наступне питання
          </button>
        </div>
        <div className="question-container">
          <button>{quest.first}</button>
          <button>{quest.second}</button>
          <button>{quest.third}</button>
          <button>{quest.fourth}</button>
        </div>
      </div>
    );
  }


//   setQuest(() => (

//     {
//     randomImage: url,
//     first: answ,
//     second: random(),
//     third: random(),
//     fourth: random()
//   }));

// }