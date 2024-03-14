import { Location } from './types/location';

export const Settings = {
  placeCardsCount: 4,
};

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NoPlaces='/no-places'
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const CityCenter: Record<CityName, Location> = {
  [CityName.Paris]: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 12
  },
  [CityName.Cologne ]: {
    latitude: 50.938361,
    longitude: 6.959974,
    zoom: 12
  },
  [CityName.Brussels ]: {
    latitude: 50.846557,
    longitude: 4.351697,
    zoom: 12
  },
  [CityName.Amsterdam ]: {
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 12
  },
  [CityName.Hamburg ]: {
    latitude: 53.550341,
    longitude: 10.000654,
    zoom: 12
  },
  [CityName.Dusseldorf ]: {
    latitude: 51.225402,
    longitude: 6.776314,
    zoom: 12
  },
};

export enum SortOptions {
  POPULAR = 'Popular',
  PRICE_LOW_TO_HIGH = 'Price: low to high',
  PRICE_HIGH_TO_LOW = 'Price: high to low',
  TOP_RATED_FIRST = 'Top rated first'
}

