import Cards from "../Cards/Cards";

function Column({ status }) {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{status}</p>
      </div>
      <div className="cards">
        <Cards title="Название задачи" date="30.10.23" topic="Web Design" />

        <Cards title="Название задачи" date="30.10.23" topic="Research" />

        <Cards title="Название задачи" date="30.10.23" topic="Copywriting" />
      </div>
    </div>
  );
}

export default Column;
