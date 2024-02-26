import { City } from './city';
import { Location } from './location';

export type OfferCard = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

export type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

type OfferDetail = {
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
};

export type Offer = OfferCard & OfferDetail;
export type Offers = Offer[];
