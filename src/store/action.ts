import { createAction } from '@reduxjs/toolkit';
import { CityName } from '../const';
import { Offers } from '../types/offer';

export const setActiveCity = createAction<CityName>('setCity');
export const fetchOffers = createAction<Offers>('fetchOffers');
