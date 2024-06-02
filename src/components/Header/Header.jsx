import * as S from "./Header.styled";
import { Container } from "../Styles/Common.styled";
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
      <Container>
        <S.HeaderBlock>
          {/* здесь было <div className="header__logo _show _light"> */}

          <S.HeaderLogo>
            <a href="" target="_self">
              <img src="/logo.png" alt="logo" />
            </a>
          </S.HeaderLogo>

          {/* здесь было <div className="header__logo _dark"> */}

          <S.HeaderLogo>
            <a href="" target="_self">
              <img src="/logo_dark.png" alt="logo" />
            </a>
          </S.HeaderLogo>
          <S.HeaderNav>
            <S.HeaderBtnMainNew onClick={addCard} id="btnMainNew">
              <a>Создать новую задачу</a>
            </S.HeaderBtnMainNew>
            <S.HeaderUser onClick={toogleDropdown}>Ivan Ivanov</S.HeaderUser>
            {isOpen && (
              <S.HeaderPopUserSet id="user-set-target">
                <S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
                <S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
                <S.PopUserSetTheme>
                  <p>Темная тема</p>
                  <input type="checkbox" name="checkbox" />
                </S.PopUserSetTheme>
                <S.Button type="button">
                  <a href="#popExit">Выйти</a>
                </S.Button>
              </S.HeaderPopUserSet>
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
}

export default Header;
