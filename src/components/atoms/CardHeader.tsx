type CardHeaderProps = {
  name: string;
  manaCost: Array<string>;
};

function CardHeader({ name, manaCost }: CardHeaderProps) {
  return (
    <header className="card-name">
      <div>
        <h1 style={{ textAlign: "left" }}>{name}</h1>
        {manaCost.map((manaSymbol, index) => {
          return (
            <i
              style={{ marginLeft: "5px" }}
              className={`ms ms-${manaSymbol} ms-cost ms-shadow`}
              key={index}
            ></i>
          );
        })}
      </div>
    </header>
  );
}

export default CardHeader;
