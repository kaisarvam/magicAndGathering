type CardBodyTextProps = {
  cardBodyText: string;
};

function CradBodyText({ cardBodyText }: CardBodyTextProps) {
  return (
    <div className="textBox">
      <div
        style={{
          height: "135px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {cardBodyText}
      </div>
    </div>
  );
}

export default CradBodyText;
