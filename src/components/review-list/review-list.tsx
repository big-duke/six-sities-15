import { Comment } from '../../types/comment';
import ReviewForm from '../review-form/review-form';
import ReviewItem from '../review-item/review-item';

type ReviewList = {
  list: Comment[];
};

function ReviewList({ list }: ReviewList) {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
                  Reviews · <span className="reviews__amount">{list.length}</span>
      </h2>
      <ul className="reviews__list">
        {
          list.map((item) => <ReviewItem key={item.id} item={item} />)
        }
      </ul>
      <ReviewForm />
    </section>
  );
}

export default ReviewList;
