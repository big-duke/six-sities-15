import { OfferRatingVariant } from './types';
import { useOfferRating } from './use-offer-rating';

type OfferRatingProps = {
  rating: number;
  variant: OfferRatingVariant;
  children?: JSX.Element;
};


function OfferRating({ rating, variant, children }: OfferRatingProps) {
  const { width, ratingClassName, starClassName } = useOfferRating({rating, variant});

  return(
    <div className={ratingClassName}>
      <div className={starClassName}>
        <span style={{ width }} />
        <span className="visually-hidden">Rating</span>
      </div>
      {children}
    </div>
  );
}

export default OfferRating;
