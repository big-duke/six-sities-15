import { Comment } from '../../types/comment';
import { formatDate } from '../../utils';
import OfferRating from '../offer-rating/offer-rating';
type ReviewItemProps = {
  item: Comment;
};
function ReviewItem({ item }: ReviewItemProps) {
  const { rating, user, date,comment } = item;
  const formattedDate = formatDate(date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width={54}
            height={54}
            alt={user.name}
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <OfferRating variant="review" rating={rating} />
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{formattedDate}</time>
      </div>
    </li>
  );
}

export default ReviewItem;
