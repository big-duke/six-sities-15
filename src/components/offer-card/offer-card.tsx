import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import PremiumLabel from '../premium-label/premium-label';
import OfferRating from '../offer-rating/offer-rating';
import OfferPrice from '../offer-price/offer-price';
import OfferBookmarkButton from '../offer-bookmark-button/offer-bookmark-button';

import { useOfferCard } from './useOfferCard';
import './styles.css';

export type OfferVariant = 'favorite' | 'card' | 'near-places';

type OfferCardProps = {
  offer: Offer;
  variant: OfferVariant;
  onCardHover?: (id: string | null) => void;
};

function OfferCard({
  offer,
  variant,
  onCardHover,
}: OfferCardProps): JSX.Element {
  const {
    isPremium,
    previewImage,
    price,
    title,
    type,
    rating,
    id,
    isFavorite,
  } = offer;

  const { url, articleClassName,wrapperClassName, infoClassName, onMouseEnter, onMouseLeave } = useOfferCard({ id, variant, onCardHover });
  return (
    <article className={articleClassName}>

      <PremiumLabel isPremium={isPremium} variant="card" />
      <div
        className={wrapperClassName}
      >
        <Link to={url}>
          <img
            className="place-card__image"
            src={previewImage}
            alt={title}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        </Link>
      </div>
      <div className={infoClassName}>
        <div className="place-card__price-wrapper">
          <OfferPrice price={price} variant="card" />
          <OfferBookmarkButton isFavorite={isFavorite} variant="card" />
        </div>
        <OfferRating rating={rating} variant="card" />
        <h2 className="place-card__name">
          <Link to={url}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
