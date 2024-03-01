import classNames from 'classnames';
import './styles.css';

type OfferBookmarkButtonProps = {
  isFavorite: boolean;
  variant: 'full'| 'card';
}

function OfferBookmarkButton({isFavorite, variant}:OfferBookmarkButtonProps) {
  const altText = isFavorite ? 'In bookmarks' : 'To bookmarks';

  const classPrefix = variant === 'card' ? 'place-card' : 'offer';
  const className = classNames('button',`${classPrefix}__bookmark-button`, {[`${classPrefix}__bookmark-button--active`]:isFavorite});

  return (
    <button className={className} type="button">
      <svg className={`${classPrefix}__bookmark-icon`}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">{altText}</span>
    </button>
  );
}

export default OfferBookmarkButton;
