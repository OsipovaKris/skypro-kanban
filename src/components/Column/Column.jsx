import * as S from "./Column.styled";
import Cards from "../Cards/Cards";

function Column({ title, cardList }) {
  return (
    <S.MainColumn>
      <S.ColumnTitle>
        <p>{title}</p>
      </S.ColumnTitle>
      <S.Cards>
        {cardList.map((item) => (
          <Cards
            key={item.id}
            title={item.title}
            date={item.date}
            topic={item.topic}
          />
        ))}
      </S.Cards>
    </S.MainColumn>
  );
}

export default Column;
