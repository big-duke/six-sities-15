export type OfferRatingVariant = 'full' | 'card' | 'review';

export type OfferRatingProps = {
  rating: number;
  variant: OfferRatingVariant;
  children?: JSX.Element;
};
