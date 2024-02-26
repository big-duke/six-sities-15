type OfferGalleryProps = {
  images: string[];
  title: string;
};
function OfferGallery({ images, title }: OfferGalleryProps) {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {images.slice(0, 6).map((image) => (
          <div key={image} className="offer__image-wrapper">
            <img className="offer__image" src={image} alt={title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfferGallery;
