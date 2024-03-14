
import { useEffect, useState } from 'react';
import { SortOptions } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setSortOption } from '../../store/action';

export function useOfferSort(ref:React.RefObject<HTMLFormElement>){
  const [isSortOptionsVisible, setSortOptionsVisible] = useState(false);

  const currentSortOption = useAppSelector((state) => state.sortOption);
  const dispatch = useAppDispatch();
  const handleSortOptionsToggle = () =>
    setSortOptionsVisible(!isSortOptionsVisible);

  const handleSortOptionClick = (option: SortOptions) => {
    if (option !== currentSortOption) {
      dispatch(setSortOption(option));
    }
    setSortOptionsVisible(false);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && isSortOptionsVisible) {
      setSortOptionsVisible(false);
    }
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (ref.current?.contains(event.target as Node) === false) {
      setSortOptionsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return {currentSortOption, handleSortOptionsToggle, handleSortOptionClick, isSortOptionsVisible };
}
