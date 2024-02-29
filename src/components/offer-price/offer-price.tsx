type OfferPriceProps = {
  price:number;
  variant: 'full'| 'card';
}

function OfferPrice({price, variant}:OfferPriceProps) {
  if (variant === 'card') {
    return (
      <div className="place-card__price">
        <b className="place-card__price-value">€{price}</b>
        <span className="place-card__price-text">/&nbsp;night</span>
      </div>
    );
  }
  if (variant === 'full') {
    return (
      <div className="offer__price">
        <b className="offer__price-value">€{price}</b>
        <span className="offer__price-text">&nbsp;night</span>
      </div>
    );
  }
}

export default OfferPrice;

