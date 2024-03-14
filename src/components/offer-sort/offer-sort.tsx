import cn from 'classnames';
import { useRef } from 'react';
import { SortOptions } from '../../const';
import { useOfferSort } from './use-offer-sort';

function OfferSort() {
  const sortOptionsRef = useRef<HTMLFormElement>(null);
  const {currentSortOption, handleSortOptionsToggle, handleSortOptionClick ,isSortOptionsVisible} = useOfferSort(sortOptionsRef);
  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      ref={sortOptionsRef}
    >
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleSortOptionsToggle}
      >
        {currentSortOption}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={cn('places__options places__options--custom', {
          ['places__options--opened']: isSortOptionsVisible,
        })}
      >
        {Object.values(SortOptions).map((option) => (
          <li
            onClick={() => handleSortOptionClick(option)}
            className={cn('places__option', {
              ['places__option--active']: option === currentSortOption,
            })}
            tabIndex={0}
            key={option}
          >
            {option}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default OfferSort;
