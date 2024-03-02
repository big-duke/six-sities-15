import { generatePath } from 'react-router-dom';
import { AppRoute } from '../../const';
import { OfferVariant } from './offer-card';
import classNames from 'classnames';


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
  const url = generatePath(AppRoute.Offer, { id });

  let articleClassName;
  let wrapperClassName;

  switch (variant) {
    case 'card':
      articleClassName = 'cities__card place-card';
      wrapperClassName = 'cities__image-wrapper place-card__image-wrapper';
      break;
    case 'favorite':
      articleClassName = 'favorites__card place-card';
      wrapperClassName = 'favorites__image-wrapper place-card__image-wrapper';
      break;
    case 'near-places':
      articleClassName = 'near-places__card place-card';
      wrapperClassName = 'near-places__image-wrapper place-card__image-wrapper ';
  }
  const infoClassName = classNames('place-card__info', {
    'favorites__card-info': variant === 'favorite',
  });

  const onMouseEnter = () => onCardHover?.(id);
  const onMouseLeave = () => onCardHover?.(null);

  return { url, articleClassName,wrapperClassName, infoClassName, onMouseEnter, onMouseLeave };
}
