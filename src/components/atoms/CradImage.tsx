type CardImageProps = {
  imageUrl: string;
};

function CradImage({ imageUrl }: CardImageProps) {
  return (
    <div className="art">
      <img src={imageUrl} alt="Brawler's%20Plate" width="100%" height="auto" />
    </div>
  );
}

export default CradImage;
