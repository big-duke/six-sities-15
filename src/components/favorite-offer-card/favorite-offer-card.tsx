import { Link, generatePath } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { AppRoute } from '../../const';
import PremiumLabel from '../premium-label/premium-label';
import OfferRating from '../offer-rating/offer-rating';
import OfferPrice from '../offer-price/offer-price';
import OfferBookmarkButton from '../offer-bookmark-button/offer-bookmark-button';
type FavoriteOfferCardProps = {
  offer: Offer;
};
function FavoriteOfferCard({ offer }: FavoriteOfferCardProps) {
  const {
    previewImage,
    price,
    rating,
    type,
    title,
    isPremium,
    isFavorite,
    id,
  } = offer;
  const url = generatePath(AppRoute.Offer, { id });
  return (
    <article className="favorites__card place-card">
      <PremiumLabel isPremium={isPremium} variant="card" />
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={url}>
          <img
            className="place-card__image"
            src={previewImage}
            width={150}
            height={110}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
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
export default FavoriteOfferCard;
