import React from "react";
import "./index.css";
import data from "./data";
import Questions from "./questions";

export default function Main() {
  const [url, setUrl] = React.useState({
    randomImage:
      "https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-magician.jpg",
  });
  const [dataArray, setData] = React.useState(data);
  const [quest, setQuest] = React.useState({
    first: "",
    second: "",
    third: "",
    fourth: ""
  })

  console.log(dataArray);

  function chooseRandomUrl() {
    const randomNumber = Math.floor(Math.random() * dataArray.length);
    const url = dataArray[randomNumber].img;
    setUrl((prevUrl) => ({
      ...prevUrl,
      randomImage: url,
    }));
  }

  function chooseRandomAnswer(){
    const randomNumber = Math.floor(Math.random() * dataArray.length);
    const answ = dataArray[randomNumber].img;
    setUrl((prevUrl) => ({
      ...prevUrl,
      randomImage: url,
    }));
  }
  }

  function allNewDice() {
    const newArray = []
    for(let i = 0; i < 10; i++) {
        const newDie = {
            value: randomDieValue(),
            held: false,
            id: i + 1
        }
        newArray.push(newDie)
    }
    return newArray
}


  function generateQuestion(){
    const setq = dataArray.map(answer => {

    })
  }

  const quizElements = dataArray.map((question) => (
    <Questions key={question.id} {...question} />
  ));

  return (
    <div>
      <div className="container">
        <img src={url.randomImage} alt="" className="images"></img>
      </div>
      <div className="button-next">
        <button onClick={chooseRandom} className="but">
          Наступне питання
        </button>
      </div>
       <div className="question-container">{quizElements}</div> 
    </div>
  );
}
