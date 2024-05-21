import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import PopBrowse from "./components/Popups/PopBrowse";
import PopNewCard from "./components/Popups/PopNewCard";
import PopExit from "./components/Popups/PopExit";
import Main from "./components/Main/Main";
import { cardList } from "../data";

function App() {
  const [cardsList, setCardsList] = useState(cardList);

  return (
    <>
      <div className="wrapper">
        <PopExit />

        <PopNewCard />

        <PopBrowse />

        <Header setCardsList={setCardsList} cardsList={cardsList} />

        <Main cardsList={cardsList} />
      </div>

      <script src="js/script.js"></script>
    </>
  );
}

export default App;
