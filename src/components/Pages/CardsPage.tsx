import Card from "../organisms/Card";

const cardDataAll = [
  {
    imageUrl:
      "https://t4.ftcdn.net/jpg/05/64/57/07/240_F_564570700_QhuVCAjNfAW1IP4HAGE91D9uwM2vwU2X.jpg",
    name: "Assassin's Dagger",
    manaCosts: ["1", "b"],
    cardType: "Equipment",
    description:
      "Equip creature gets +2/+0 and has deathtouch. When equipped creature deals combat damage to a player, that player loses the game.",
    power: 2,
    toughness: 1,
    cardTypeIcon: "ss-hml",
  },
  {
    imageUrl:
      "https://t3.ftcdn.net/jpg/05/78/31/10/240_F_578311067_uRl5a8covnwh2Uur0UsARSi9wnfTD9Ol.jpg",
    name: "Fireball",
    manaCosts: ["1", "g", "r"],
    cardType: "Sorcery",
    description: "Deal 3 damage to any target.",
    power: 2,
    toughness: 2,
    cardTypeIcon: "ss-fem",
  },
  {
    imageUrl:
      "https://i.pinimg.com/originals/5b/9d/34/5b9d349aececf74cb57bfc5ec8e5aa3b.jpg",
    name: "God of thunder",
    manaCosts: ["1", "r", "r"],
    cardType: "Instant",
    description: "Deal 3 damage to any target.",
    power: 3,
    toughness: 2,
    cardTypeIcon: "ss-tor",
  },
  {
    imageUrl:
      "https://t4.ftcdn.net/jpg/05/64/57/07/240_F_564570700_QhuVCAjNfAW1IP4HAGE91D9uwM2vwU2X.jpg",
    name: "Assassin's Dagger",
    manaCosts: ["1", "b"],
    cardType: "Equipment",
    description:
      "Equip creature gets +2/+0 and has deathtouch. When equipped creature deals combat damage to a player, that player loses the game.",
    power: 2,
    toughness: 1,
    cardTypeIcon: "ss-hml",
  },
  {
    imageUrl:
      "https://t3.ftcdn.net/jpg/05/78/31/10/240_F_578311067_uRl5a8covnwh2Uur0UsARSi9wnfTD9Ol.jpg",
    name: "Fireball",
    manaCosts: ["1", "g", "r"],
    cardType: "Sorcery",
    description: "Deal 3 damage to any target.",
    power: 2,
    toughness: 2,
    cardTypeIcon: "ss-fem",
  },
  {
    imageUrl:
      "https://i.pinimg.com/originals/5b/9d/34/5b9d349aececf74cb57bfc5ec8e5aa3b.jpg",
    name: "God of thunder",
    manaCosts: ["1", "r", "r"],
    cardType: "Instant",
    description: "Deal 3 damage to any target.",
    power: 3,
    toughness: 2,
    cardTypeIcon: "ss-tor",
  },
];
function CardsPage() {
  return (
    <div>
      {cardDataAll.map((card, index) => (
        <div className="flip-container" key={index}>
          <div className="flipper">
            <Card
              imageUrl={card.imageUrl}
              name={card.name}
              manaCost={card.manaCosts}
              cardType={card.cardType}
              description={card.description}
              power={card.power}
              toughness={card.toughness}
              cardTypeIcon={card.cardTypeIcon}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardsPage;
