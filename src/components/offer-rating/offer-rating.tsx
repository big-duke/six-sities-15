import classNames from 'classnames';
import { useOfferRating } from './use-offer-rating';
import { OfferRatingProps } from './types';

function OfferRating({ rating, variant, children }: OfferRatingProps) {
  const {ratingClassName, starClassName, width} = useOfferRating({rating, variant});
  return (
    <div className={classNames(ratingClassName, 'rating')}>
      <div className={classNames(starClassName, 'rating__stars')}>
        <span style={{ width }} />
        <span className="visually-hidden">Rating</span>
      </div>
      {children}
    </div>
  );
}

export default OfferRating;
