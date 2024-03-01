import { generatePath } from 'react-router-dom';
import { AppRoute } from '../../const';
import { OfferVariant } from './offer-card';
import classNames from 'classnames';

type CardImgSize = Record<OfferVariant, { width: number; height: number }>;

type OfferCardController = {
  variant: OfferVariant;
  id: string;
  onCardHover?: (id: string | null) => void;
};

export function useOfferCard({
  id,
  variant,
  onCardHover,
}: OfferCardController) {
  let width: number;
  let heigth: number;

  if (variant === 'card') {
    width = 260;
    heigth = 200;
  } else {
    width = 150;
    heigth = 110;
  }

  const url = generatePath(AppRoute.Offer, { id });

  const className = classNames(
    variant === 'card' ? 'cities__card' : 'favorites__card',
    'place-card'
  );

  const onMouseEnter = () => onCardHover?.(id);
  const onMouseLeave = () => onCardHover?.(null);

  return { width, heigth, url, className, onMouseEnter, onMouseLeave };
}
