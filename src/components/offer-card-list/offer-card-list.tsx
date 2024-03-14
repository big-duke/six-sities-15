/* eslint-disable @typescript-eslint/no-unused-vars */
import { Offers } from '../../types/offer';
import OfferCard, { OfferVariant } from '../offer-card/offer-card';
import { useOfferCardList } from './use-offer-card-list';

type OfferCardListProps = {
  offers: Offers;
  variant: OfferVariant;
};
function OfferCardList({ offers , variant}: OfferCardListProps) {
  const {className, handleHoverCard} = useOfferCardList({variant});
  return (
    <div className={className}>
      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} onCardHover={handleHoverCard} variant={variant} />
      ))}
    </div>
  );
}

export default OfferCardList;

