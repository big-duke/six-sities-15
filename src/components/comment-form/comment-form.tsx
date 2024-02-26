import { Fragment, useState } from 'react';

const rates = [
  { value: 1, title: 'terribly' },
  { value: 2, title: 'badly' },
  { value: 3, title: 'not bad' },
  { value: 4, title: 'good' },
  { value: 5, title: 'perfect' },
];
const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 300;

function CommentForm() {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(NaN);
  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setComment(event.target.value);

  const handleRateChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setRating(Number(event.currentTarget.value));

  const isSubmitDisabled = Number.isNaN(rating) || comment.length < MIN_COMMENT_LENGTH || comment.length > MAX_COMMENT_LENGTH;
  return (
    <form className="reviews__form form">
      <label
        className="reviews__label form__label"
        htmlFor="review"
      >
      Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {
          rates.map(({title, value}) => {
            const id = `${value}-stars`;
            return(
              (
                <Fragment key={value}>
                  <input
                    className="form__rating-input visually-hidden"
                    name="rating"
                    defaultValue={value}
                    id={id}
                    type="radio"
                    checked={value === rating}
                    onChange={handleRateChange}
                  />
                  <label
                    htmlFor={id}
                    className="reviews__rating-label form__rating-label"
                    title={title}
                  >
                    <svg className="form__star-image" width={37} height={33}>
                      <use xlinkHref="#icon-star" />
                    </svg>
                  </label>
                </Fragment>
              )
            );
          })
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={handleCommentChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
        To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
        your stay with at least
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitDisabled}
        >
        Submit
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
