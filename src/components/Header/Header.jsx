import * as S from "./Header.styled";
import { useState } from "react";

function Header({ cardsList, setCardsList }) {
  const [isOpen, setIsOpen] = useState(false);

  function toogleDropdown() {
    setIsOpen(!isOpen);
  }

  function addCard() {
    const newCard = {
      id: cardsList.length + 1,
      topic: "Web Design",
      title: "Новая задача",
      date: "30.10.23",
      status: "Без статуса",
    };
    setCardsList([...cardsList, newCard]);
  }

  return (
    <S.Header>
      <S.Container>
        <S.HeaderBlock>
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="/logo_dark.png" alt="logo" />
            </a>
          </div>
          <S.HeaderNav>
            <button
              onClick={addCard}
              className="header__btn-main-new _hover01"
              id="btnMainNew"
            >
              <a>Создать новую задачу</a>
            </button>
            <a className="header__user _hover02" onClick={toogleDropdown}>
              Ivan Ivanov
            </a>
            {isOpen && (
              <div
                className="header__pop-user-set pop-user-set"
                id="user-set-target"
              >
                <S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
                <S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
                <S.PopUserSetTheme>
                  <p>Темная тема</p>
                  <input type="checkbox" name="checkbox" />
                </S.PopUserSetTheme>
                <button type="button" className="_hover03">
                  <a href="#popExit">Выйти</a>
                </button>
              </div>
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </S.Container>
    </S.Header>
  );
}

export default Header;
