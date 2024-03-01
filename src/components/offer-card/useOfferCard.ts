import { generatePath } from 'react-router-dom';
import { AppRoute } from '../../const';
import { OfferVariant } from './offer-card';

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
  let height: number;

  if (variant === 'card') {
    width = 260;
    height = 200;
  } else {
    width = 150;
    height = 110;
  }

  const url = generatePath(AppRoute.Offer, { id });

  const onMouseEnter = () => onCardHover?.(id);
  const onMouseLeave = () => onCardHover?.(null);

  return { width, height, url, onMouseEnter, onMouseLeave };
}
