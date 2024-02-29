import { Link, generatePath } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Offer } from '../../types/offer';
import PremiumLabel from '../premium-label/premium-label';
import OfferRating from '../offer-rating/offer-rating';
import OfferPrice from '../offer-price/offer-price';
import OfferBookmarkButton from '../offer-bookmark-button/offer-bookmark-button';

type OfferCardProps = {
  offer: Offer;
  onCardHover: (id: string | null) => void;
};
function OfferCard({ offer, onCardHover }: OfferCardProps): JSX.Element {
  const { isPremium, previewImage, price, title, type, rating, id, isFavorite } = offer;

  const url = generatePath(AppRoute.Offer, { id });
  const handleOnMouseEnter = () => onCardHover(id);
  const handleOnMouseLeave = () => onCardHover(null);
  return (
    <article
      className="cities__card place-card"
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <PremiumLabel isPremium={isPremium} variant="card" />
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={url}>
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
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
