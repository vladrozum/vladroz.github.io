import React from "react"
import Main from "./main"
import ChatGPT from "./chatgpt"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Store from "./store";



export default function App() {


  return (
    <div>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="chatGPT" element={<ChatGPT />} />
          <Route path="store" element={<Store />} />

        </Route>
      </Routes>
    </BrowserRouter>
      </div>

  )
}

