type OfferPriceProps = {
  price: number;
  variant: 'full' | 'card';
};

function OfferPrice({ price, variant }: OfferPriceProps) {
  const classPrefix = variant === 'card' ? 'place-card' : 'offer__price';

  return (
    <div className={`${classPrefix}__price`}>
      <b className={`${classPrefix}__price-value`}>€{price}</b>
      <span className={`${classPrefix}____price-text`}>/&nbsp;night</span>
    </div>
  );
}

export default OfferPrice;
