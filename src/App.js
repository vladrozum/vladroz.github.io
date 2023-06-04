import React from "react";
import Main from "./main";
import ChatGPT from "./chatgpt";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Store from "./store";
import Zaika from "./zaika";
import "./zaika.css";
import ZaikaShop from "./zaikaShop";
import Job from "./job";

export default function App() {
  const [make, setMake] = React.useState(true);
  function change(make) {
    setMake(make);
  }
  console.log(make)

  return (
    <div>
      
        <BrowserRouter>
          {!make ? (
            <Routes>
              <Route path="/" element={<Layout on={make} />}>
                <Route index element={<Main />} />
                <Route path="chatGPT" element={<ChatGPT />} />
                <Route path="store" element={<Store on={change} />} />
              </Route>
            </Routes>
          ) : (
            <Routes>
              {" "}
              <Route path="/" element={<Layout />} />
              <Route path="/zaika" element={<Zaika />} />
              <Route path="/products" element={<ZaikaShop on={change} />} />
              <Route path="/work" element={<Job />} />
            </Routes>
          )}
        </BrowserRouter>
    </div>
  );
}
