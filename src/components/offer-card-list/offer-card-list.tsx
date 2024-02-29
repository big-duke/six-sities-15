/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { Offers } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OfferCardListProps = {
  offers: Offers;
};
function OfferCardList({ offers }: OfferCardListProps) {
  const [hoverCard, setHoverCard] = useState<string | null>(null);
  const handleHoverCard = (id: string | null) => setHoverCard(id);
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} onCardHover={handleHoverCard} variant='card' />
      ))}
    </div>
  );
}

export default OfferCardList;
