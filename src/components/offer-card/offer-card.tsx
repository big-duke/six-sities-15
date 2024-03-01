import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import PremiumLabel from '../premium-label/premium-label';
import OfferRating from '../offer-rating/offer-rating';
import OfferPrice from '../offer-price/offer-price';
import OfferBookmarkButton from '../offer-bookmark-button/offer-bookmark-button';
import classNames from 'classnames';
import { useOfferCard } from './useOfferCard';

export type OfferVariant = 'favorite'| 'card'

type OfferCardProps = {
  offer: Offer;
  variant: OfferVariant;
  onCardHover?: (id: string | null) => void;
};


function OfferCard({ offer, variant, onCardHover }: OfferCardProps): JSX.Element {
  const { isPremium, previewImage, price, title, type, rating, id, isFavorite } = offer;
  const {width,height, url, onMouseEnter, onMouseLeave} = useOfferCard({id,variant, onCardHover});
  return (
    <article className={classNames(variant === 'card' ? 'cities__card' : 'favorites__card', 'place-card')}>
      <PremiumLabel isPremium={isPremium} variant="card" />
      <div className={classNames('place-card__image-wrapper', variant === 'card' ? 'cities__image-wrapper' : 'favorites__image-wrapper')}>
        <Link to={url}>
          <img
            className="place-card__image"
            src={previewImage}
            alt={title}
            width={width}
            height={height}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        </Link>
      </div>
      <div className={classNames('place-card__info', {'favorites__card-info':variant === 'favorite'})} >
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
