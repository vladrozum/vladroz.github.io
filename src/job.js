import React from "react";

export default function Job(){

    const data = [
        {
            id:1,
            name: 'Біла',

        },
        {
            id:2,
            name: 'Преміум',
        },{
            id:3,
            name: 'Синя',
        },{
            id:4,
            name: 'Ядро',
        },{
            id:5,
            name: 'Гарбуз',
        },{
            id:6,
            name: 'Мікс 80',
        },{
            id:7,
            name: 'Мікс 120',
        },
        {
            id:8,
            name: 'Сухарики GrizGo Краб',

        },
            {
            id:9,
            name: 'Сухарики GrizGo Сметана і зелень',
        }
        ]
    const [inputText, setInputText] = React.useState("");
    const [all, setAll] = React.useState(data)
    let inputHandler = (e) => {
        search()
      //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };

        function search(){

            setAll(prevAll => prevAll.filter((el) => {
                //if no input the return the original
                if (inputText === '') {
                    return el;
                }
                //return the item which contains the user input
                else {
                    console.log(el.name.toLowerCase().includes(inputText))
                    return el.name.toLowerCase().includes(inputText)
                    
                }
            }))
        }

    const abc = all.map(prev=>{
        return(
            <div>{prev.name}</div>
        )
    })

    return(
      
          <div className="main">
            <h1>React Search</h1>
            <div className="search">
              <input
                id="outlined-basic"
                onChange={inputHandler}
                variant="outlined"
                fullWidth
                label="Search"
              />
            </div>
            {abc}
          </div>
    )
}