import { useState } from 'react';

const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 300;
export function useCommentForm() {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(NaN);
  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setComment(event.target.value);

  const handleRateChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setRating(Number(event.currentTarget.value));

  const isSubmitDisabled =
    Number.isNaN(rating) ||
    comment.length < MIN_COMMENT_LENGTH ||
    comment.length > MAX_COMMENT_LENGTH;

  return {
    comment,
    handleCommentChange,
    handleRateChange,
    isSubmitDisabled,
    rating,
  };
}
