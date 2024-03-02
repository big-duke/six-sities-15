import { OfferRatingVariant } from './types';

const variantRatingClassName = {
  card: 'place-card__rating rating',
  full: 'offer__rating rating',
  review: 'reviews__rating rating',
};

const variantStarClassName = {
  card: 'place-card__stars rating__stars',
  full: 'offer__stars rating__stars',
  review: 'reviews__stars rating__stars',
};

type OfferRatingController = {
  rating: number;
  variant: OfferRatingVariant;
};
export function useOfferRating({ rating, variant }: OfferRatingController) {
  const width = `${Math.round(rating * 20)}%`;
  const ratingClassName = variantRatingClassName[variant];
  const starClassName = variantStarClassName[variant];

  return { width, ratingClassName, starClassName };
}
