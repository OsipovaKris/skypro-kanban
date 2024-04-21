import Cards from "../Cards/Cards";

function Column({ title, cardList }) {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cardList.map((item) => (
          <Cards
            key={item.id}
            title={item.title}
            date={item.date}
            topic={item.topic}
          />
        ))}
      </div>
    </div>
  );
}

export default Column;
