import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import { GlobalStyle } from "./components/Styles/Global.styled";
import { Wrapper } from "./components/Styles/Common.styled";
import Header from "./components/Header/Header";
import PopBrowse from "./components/Popups/PopBrowse";
import PopNewCard from "./components/Popups/PopNewCard";
import PopExit from "./components/Popups/PopExit";
import Main from "./components/Main/Main";
import { cardList } from "../data";

function App() {
  const [cardsList, setCardsList] = useState(cardList);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 2000);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <PopExit />

        <PopNewCard />

        <PopBrowse />

        <Header setCardsList={setCardsList} cardsList={cardsList} />

        <Main cardsList={cardsList} isLoading={isLoading} />
      </Wrapper>

      <script src="js/script.js"></script>
    </>
  );
}

export default App;
