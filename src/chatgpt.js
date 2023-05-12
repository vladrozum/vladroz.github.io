import React from "react";
const { Configuration, OpenAIApi } = require("openai");

export default function ChatGPT() {
  const [query, setQuery] = React.useState();
  const [reply, setReply] = React.useState();
  const [isSubmit, setSubmit] = React.useState(false);
  const [receive, setRecieve] = React.useState(false);
  const [sec, setSec] = React.useState(0);
  const [input, setInput] = React.useState(true)

  async function gpt(event) {
    event.preventDefault();
    const configuration = new Configuration({
      apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);
    if (query && query.length > 0) {
      setSec(0);
      setSubmit(true);

      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: query,
        max_tokens: 512,
        temperature: 0.5,
      });

      if (response.status === 200 && response.data.choices.length > 0) {
        setReply(response.data.choices[0].text);
        setRecieve(true);
        // setReply("Something wrong!");
      } else {
        setReply("Something wrong!");
        // setReply(response.data.choices[0].text);
        setRecieve(true);
      }
    } else {
      setInput(false)
    }
  }

  function refresh() {
    setRecieve(false);
    setSec(0);
    setSubmit(false);
    setInput(true)
  }

  function newq() {
    setRecieve(false);
    setSec(0);
    setSubmit(false);
    setQuery("");
    setInput(true)
  }

  React.useEffect(() => {
    function timer() {
      setSec((prevSec) => prevSec + 1);
    }
    const timerID = setInterval(() => timer(), 1000);
    return () => clearInterval(timerID);
  }, []);

  return (
    <div>
      {(() => {
        if (receive && isSubmit) {
          return (
            <div className="container">
              <p className="reply">{reply}</p>
              {reply === "Something wrong!" ? (
                <button className="buttongpt" onClick={refresh}>
                  Запитати ще раз
                </button>
              ) : (
                <button className="buttongpt" onClick={newq}>
                  Нове питання
                </button>
              )}
            </div>
          );
        } else if (isSubmit) {
          return (
            <div className="container1">
              <p className="wait">Зачекайте, будь ласка </p>
              <p className="already">Ви вже чекаєте {sec} сек.</p>
              <img
                className="image"
                src="https://www.tarotcardmeanings.net/images/tarotcards-large/tarot-magician.jpg"
              ></img>
            </div>
          );
        } else {
          return (
            <form onSubmit={gpt} className="container1">
              <label>
                <p className="question">Задайте питання картам:</p>
                <input
                  className={`input-${input? 'true' : 'false'}`}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </label>
              <input type="submit" className="sumbit" />
            </form>
          );
        }
      })()}
    </div>
  );
}
