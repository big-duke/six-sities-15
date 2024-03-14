import { SortOptions } from '../const';
import { useAppSelector } from './redux';
import { Offers } from '../types/offer';

export function useSort(offers: Offers): Offers {
  const currentSortOption = useAppSelector((state) => state.sortOption);
  switch (currentSortOption) {
    case SortOptions.TOP_RATED_FIRST:
      return offers.toSorted((a, b) => b.rating - a.rating);
    case SortOptions.PRICE_HIGH_TO_LOW:
      return offers.toSorted((a, b) => b.price - a.price);
    case SortOptions.PRICE_LOW_TO_HIGH:
      return offers.toSorted((a, b) => a.price - b.price);
    case SortOptions.POPULAR:
      return offers;
  }
}
