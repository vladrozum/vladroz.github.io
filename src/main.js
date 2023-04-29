import React from "react";
import "./index.css"
import data from "./data"

export default function Main(){  
    const [url, setUrl] = React.useState({randomImage: "https://m.media-amazon.com/images/I/71CF13UqLzS._AC_UF894,1000_QL80_.jpg"})
    const [dataArray, setData] = React.useState(data)
    console.log(dataArray)
    
      function chooseRandom(){
        const randomNumber = Math.floor(Math.random() * dataArray.length)
        const url = dataArray[randomNumber].img
        setUrl(prevUrl=> ({
          ...prevUrl,
          randomImage: url 
        }))
      }
    
        return(
            <div className="container">
                <img src={url.randomImage} alt="" className="images"></img>
                <button onClick={chooseRandom}>kisgfijg</button>
            </div>
        )
    }