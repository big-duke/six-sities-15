import { Link, generatePath } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Offer } from '../../types/offer';

type OfferCardProps = {
  offer: Offer;
  onCardHover: (id: string | null) => void;
};
function OfferCard({ offer, onCardHover }: OfferCardProps): JSX.Element {
  const { isPremium, previewImage, price, title, type, rating, id } = offer;
  const width = `${Math.round(rating * 20)}%`;
  const url = generatePath(AppRoute.Offer, { id });
  const handleOnMouseEnter = () => onCardHover(id);
  const handleOnMouseLeave = () => onCardHover(null);
  return (
    <article
      className="cities__card place-card"
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
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
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={url}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
