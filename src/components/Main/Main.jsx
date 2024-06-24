import * as S from "./Main.styled";
import { Container } from "../Styles/Common.styled";
import Column from "../Column/Column";
import { statusList } from "../../../data";

function Main({ cardsList, isLoading }) {
  return (
    <S.Main>
      <Container>
        <S.MainBlock>
          <S.MainContent>
            {isLoading ? (
              "Данные загружаются"
            ) : (
              <>
                {statusList.map((status) => (
                  <Column
                    key={status}
                    title={status}
                    cardList={cardsList.filter(
                      (card) => card.status === status
                    )}
                  />
                ))}
              </>
            )}
          </S.MainContent>
        </S.MainBlock>
      </Container>
    </S.Main>
  );
}

export default Main;
