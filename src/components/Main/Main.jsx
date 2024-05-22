import Column from "../Column/Column";
import { statusList } from "../../../data";

function Main({ cardsList, isLoading }) {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
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
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
