import { createReducer } from '@reduxjs/toolkit';
import { CityName } from '../const';
import { Offers } from '../types/offer';
import { fetchOffers, setActiveCity } from './action';
import { offers } from '../mock/offers';

type AppState = {
  activeCity: CityName;
  offers: Offers;
};
const initialState:AppState = {
  activeCity: CityName.Paris,
  offers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(fetchOffers, (state, action) => {
      state.offers = action.payload;
    });
});
