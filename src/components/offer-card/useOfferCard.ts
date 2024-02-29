import { generatePath } from 'react-router-dom';
import { AppRoute } from '../../const';
import { OfferVariant } from './offer-card';
import classNames from 'classnames';

type CardImgSize = Record<OfferVariant, { width: number; height: number }>;

const cardImgSize: CardImgSize = {
  favorite: { width: 150, height: 110 },
  card: { width: 260, height: 200 },
};

type OfferCardController = {
  variant: OfferVariant;
  id: string;
  onCardHover?: (id: string | null) => void;
};

export function useOfferCard({ id, variant, onCardHover}: OfferCardController) {
  const imgSize = cardImgSize[variant];
  const url = generatePath(AppRoute.Offer, { id });

  const config = {
    className: classNames(variant === 'card' ? 'cities__card' : 'favorites__card','place-card'),
    onMouseEnter:() => onCardHover && onCardHover(id),
    onMouseLeave:() => onCardHover && onCardHover(null)
  }
  return { imgSize, url, config};
}
