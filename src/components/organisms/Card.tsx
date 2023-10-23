// Card.tsx

import React from "react";
import CardHeader from "../atoms/CardHeader";
import CardImage from "../atoms/CradImage";
import CardType from "../atoms/Cardtype";
import CradBodyText from "../atoms/CradBodyText";
import CardPowerAndToughness from "../atoms/CardPowerAndToughness";

interface CardProps {
  imageUrl: string;
  name: string;
  manaCost: Array<string>;
  cardType: string;
  description: string;
  power: number;
  toughness: number;
  cardTypeIcon: string;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  name,
  manaCost,
  cardType,
  description,
  power,
  toughness,
  cardTypeIcon,
}) => {
  return (
    <>
      <div className="card front">
        <div className="card-background">
          <article>
            <div className="card-body"></div>
            <CardHeader name={name} manaCost={manaCost} />
            <CardImage imageUrl={imageUrl} />
            <CardType cardType={cardType} cardTypeIcon={cardTypeIcon} />
            <CradBodyText cardBodyText={description} />
            <CardPowerAndToughness power={power} toughness={toughness} />

            <footer>
              <p>
                100/100 C<br />
                ABC ‧ EN - Ronniemon
              </p>
              <h6>™ &amp; © 2023 Wizards of the Coast test</h6>
            </footer>
          </article>
        </div>
      </div>
      <div className="card back">
        <img src="images/Back.jpg" alt="Back" width="100%" height="auto" />
      </div>
    </>
  );
};

export default Card;
