/* eslint-disable @typescript-eslint/no-unused-vars */
import { OfferVariant } from '../offer-card/offer-card';
import { useAppDispatch } from '../../hooks/redux';
import { setHoverOfferId } from '../../store/action';

type OfferCardListController= {

  variant: OfferVariant;
}
export function useOfferCardList({variant}:OfferCardListController){
  const dispatch = useAppDispatch();
  const isHoverEnabled = variant === 'card';
  const handleHoverCard = isHoverEnabled ? (id: string | null) => dispatch(setHoverOfferId(id)) : undefined;

  let className = '';
  switch (variant) {
    case 'card':
      className = 'cities__places-list places__list tabs__content';
      break;
    case 'favorite':
      className = 'favorites__places';
      break;
    case 'near-places':
      className = 'near-places__list places__list';
  }
  return {className, handleHoverCard};
}
