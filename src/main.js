import React from "react";
import "./index.css";
import data from "./data";


export default function Main() {
  const [dataArray, setData] = React.useState(data);
  const [quest, setQuest] = React.useState(generateAllQuestions());
  const [set, setRight] = React.useState(false)
 
  // React.useEffect(()=>{
  //   if (answerQuestion)
  // }
  // )

  
    function random() {
      const categories = ["life", "business", "YesNot"];
      const randomNumber = Math.floor(Math.random() * categories.length);
      const randomNumber2 = Math.floor(Math.random() * dataArray.length);
      const chooseCategory = categories[randomNumber];
      const choose = dataArray[randomNumber2].answers[chooseCategory];
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
    const url = chooseRandomAnswer()[1];
    const newArray = {url: url, answerOptions: []};
    for (let i = 0; i < 3; i++) {
      const newQuestion = {
        value: random(),
        isCorrect: false,
      };
      newArray.answerOptions.push(newQuestion)
    }

    const rightAnswer = {
      value: chooseRandomAnswer()[0],
      isCorrect: true,
    };
   newArray.answerOptions.push(rightAnswer)


    return [newArray];
  }



  function generateQuestions() {
    setQuest(generateAllQuestions());
  }

  function checkAnswer(isCorrect){
    if(isCorrect){
      setRight(true)
    }
  

  }


  const styles = {
    backgroundColor : set? 'green' : ""
  } 

  return (
    <div>
      <div className="container">
        <p className="whats-true">Що з цього правда?</p>
        <img
          src={generateAllQuestions()[0].url}
          alt=""
          className="images"
        ></img>
      </div>
      <div className="button-next">
        {set && <button onClick={generateQuestions} className="but">
          Наступне питання
        </button>}
      </div>
      <div className="question-container">
        {quest[0].answerOptions.map((question) => (
      <button className="button" style={styles} onClick={()=> checkAnswer(question.isCorrect)}>{question.value}</button>))}
      </div>
    </div>
  );
}