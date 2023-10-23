type CardtypeProps = {
  cardType: string;
  cardTypeIcon: string;
};

function CardType({ cardType, cardTypeIcon }: CardtypeProps) {
  return (
    <header className="card-type">
      <div>
        <h2 style={{ display: "flex", justifyContent: "space-between" }}>
          Card Type — {cardType} <i className={`ss  ${cardTypeIcon}`}></i>
        </h2>
      </div>
    </header>
  );
}

export default CardType;
