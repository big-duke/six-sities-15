import { createReducer } from '@reduxjs/toolkit';
import { CityName, SortOptions } from '../const';
import { Offers } from '../types/offer';
import { fetchOffers, setActiveCity, setHoverOfferId, setSortOption } from './action';
import { offers } from '../mock/offers';

type AppState = {
  activeCity: CityName;
  offers: Offers;
  sortOption: SortOptions;
  hoverOfferId: string | null;
};
const initialState: AppState = {
  activeCity: CityName.Paris,
  offers,
  sortOption: SortOptions.POPULAR,
  hoverOfferId: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(fetchOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setSortOption, (state, action) => {
      state.sortOption = action.payload;
    })
    .addCase(setHoverOfferId,(state, action) => {
      state.hoverOfferId = action.payload;
    })
    ;
});
