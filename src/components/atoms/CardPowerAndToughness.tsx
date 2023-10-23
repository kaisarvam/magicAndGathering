type CardPowerAndToughnessProps = {
  power: number;
  toughness: number;
};

function CardPowerAndToughness({
  power,
  toughness,
}: CardPowerAndToughnessProps) {
  return (
    <header className="powerToughness">
      <div>
        <h2>
          {power}/{toughness}
        </h2>
      </div>
    </header>
  );
}

export default CardPowerAndToughness;
