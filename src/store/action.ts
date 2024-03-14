import { createAction } from '@reduxjs/toolkit';
import { CityName, SortOptions } from '../const';
import { Offers } from '../types/offer';

export const setActiveCity = createAction<CityName>('setCity');
export const fetchOffers = createAction<Offers>('fetchOffers');
export const setSortOption = createAction<SortOptions>('setSortOption');
export const setHoverOfferId = createAction<string | null>('setHoverOfferId');
