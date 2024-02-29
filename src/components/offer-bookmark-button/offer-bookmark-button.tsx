import classNames from 'classnames';

type OfferBookmarkButtonProps = {
  isFavorite: boolean;
  variant: 'full'| 'card';
}

function OfferBookmarkButton({isFavorite, variant}:OfferBookmarkButtonProps) {
  const altText = isFavorite ? 'In bookmarks' : 'To bookmarks';
  if (variant === 'card') {
    const className = classNames('button','place-card__bookmark-button', {'place-card__bookmark-button--active':isFavorite});
    return (
      <button className={className} type="button">
        <svg className="place-card__bookmark-icon" width={18} height={19}>
          <use xlinkHref="#icon-bookmark" />
        </svg>
        <span className="visually-hidden">{altText}</span>
      </button>
    );
  }

  if (variant === 'full') {
    const className = classNames('button','offer__bookmark-button', {'offer__bookmark-button--active':isFavorite});
    return (
      <button className={className} type="button">
        <svg className="offer__bookmark-icon" width={31} height={33}>
          <use xlinkHref="#icon-bookmark" />
        </svg>
        <span className="visually-hidden">{altText}</span>
      </button>
    );
  }
}

export default OfferBookmarkButton;
