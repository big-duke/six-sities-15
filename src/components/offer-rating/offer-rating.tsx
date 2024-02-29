type OfferRatingProps ={
  rating:number;
  variant: 'full'| 'card';
}
function OfferRating({rating, variant}:OfferRatingProps) {
  const width = `${Math.round(rating * 20)}%`;

  if (variant === 'card') {
    return (
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{ width }} />
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div className="offer__rating rating">
        <div className="offer__stars rating__stars">
          <span style={{ width }} />
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="offer__rating-value rating__value">
          {rating}
        </span>
      </div>
    );
  }
}

export default OfferRating;
