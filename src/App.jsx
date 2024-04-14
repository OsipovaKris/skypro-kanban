// import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import PopBrowse from "./components/Popups/PopBrowse";
import PopNewCard from "./components/Popups/PopNewCard";
import PopExit from "./components/Popups/PopExit";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <div className="wrapper">
        <PopExit />

        <PopNewCard />

        <PopBrowse />

        <Header />

        <Main />
      </div>

      <script src="js/script.js"></script>
    </>
  );
}

export default App;
