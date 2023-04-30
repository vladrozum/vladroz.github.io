import React from "react";
import "./index.css";
import data from "./data";
import Questions from "./questions";

export default function Main() {
  
  const [dataArray, setData] = React.useState(data);
  const [quest, setQuest] = React.useState({
    randomImage: "https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-magician.jpg",   
    first: "",
    second: "",
    third: "",
    fourth: ""
  })

  // console.log(dataArray);

  // function chooseRandomUrl() {
  //   const randomNumber = Math.floor(Math.random() * dataArray.length);
  //   const url = dataArray[randomNumber].img;
  //   setUrl((prevUrl) => ({
  //     ...prevUrl,
  //     randomImage: url,
  //   }));
  // }

  function random(){
    const categories = ['life', 'business', 'YesNot']
    const randomNumber = Math.floor(Math.random() * categories.length);
    const chooseCategory = categories[randomNumber]
    const choose = dataArray[randomNumber].answers[chooseCategory]
    return choose

  }

  function chooseRandomAnswer(){
    const randomNumberForRight = Math.floor(Math.random() * dataArray.length);
    const answ = dataArray[randomNumberForRight].answers.YesNot;
    const url = dataArray[randomNumberForRight].img;

    setQuest(() => (
      
      {
      randomImage: url,
      first: random(),
      second: random(),
      third: random(),
      fourth: random()
    }));
  
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
       <div className="question-container">{}</div> 
    </div>
  );
}
