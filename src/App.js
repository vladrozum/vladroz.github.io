import React from "react"
import Main from "./main"
import ChatGPT from "./chatgpt"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Store from "./store";
// import Zaika from "./zaika";



export default function App() {
  const [make, setMake] = React.useState(false)
  function change(make){
    setMake(make)
  }


  return (
    <div>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout on={make}/>}>
          <Route index element={<Main />} />
          <Route path="chatGPT" element={<ChatGPT />} />
          <Route path="store" element={<Store on={change}/>} />
          {/* <Route path="zaika" element={<Zaika />}      /> */}

        </Route>
      </Routes>
    </BrowserRouter>
      </div>

  )
}

