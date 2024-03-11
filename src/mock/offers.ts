import { CityName } from '../const';
import { Offers } from '../types/offer';

export const offers: Offers = [
  {
    id: '6c78ef29-5920-4416-8212-3692a57b0b21',
    title: 'The Pondhouse - A Magical Place',
    type: 'house',
    price: 235,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
    city: {
      name: CityName.Paris,
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      'latitude': 48.868610000000004,
      'longitude': 2.342499,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: false,
    rating: 1.5,
    description:
      'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
    ],
    goods: [
      'Towels',
      'Heating',
      'Coffee machine',
      'Kitchen',
      'Baby seat',
      'Cable TV',
      'Dishwasher',
      'Laptop friendly workspace',
      'Wi-Fi',
      'Air conditioning',
      'Breakfast',
      'Washer',
      'Washing machine',
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl:
        'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg',
    },
    bedrooms: 1,
    maxAdults: 10,
  },
  {
    id: '0a4a8329-519e-4553-b463-d00a35f24a46',
    title: 'Wood and stone place',
    type: 'house',
    price: 196,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
    city: {
      name: CityName.Paris,
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      'latitude': 48.858610000000006,
      'longitude': 2.330499,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: true,
    rating: 2.5,
    description:
      'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
    ],
    goods: [
      'Towels',
      'Heating',
      'Coffee machine',
      'Kitchen',
      'Baby seat',
      'Cable TV',
      'Dishwasher',
      'Laptop friendly workspace',
      'Wi-Fi',
      'Air conditioning',
      'Breakfast',
      'Washer',
      'Washing machine',
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl:
        'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg',
    },
    bedrooms: 1,
    maxAdults: 10,
  },
  {
    id: '8c2e7fe7-73bc-4444-8e1a-9abcc2c025ff',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'room',
    price: 215,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    city: {
      name: CityName.Paris,
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      'latitude': 48.834610000000005,
      'longitude': 2.335499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.8,
    description:
      'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
    ],
    goods: [
      'Towels',
      'Heating',
      'Coffee machine',
      'Kitchen',
      'Baby seat',
      'Cable TV',
      'Dishwasher',
      'Laptop friendly workspace',
      'Wi-Fi',
      'Air conditioning',
      'Breakfast',
      'Washer',
      'Washing machine',
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl:
        'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg',
    },
    bedrooms: 1,
    maxAdults: 10,
  },
  {
    id: 'add865ee-2d16-46b5-a1e4-9b5823ee58b9',
    title: 'Loft Studio in the Central Area',
    type: 'hotel',
    price: 239,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
    city: {
      name: CityName.Paris,
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      'latitude': 48.87561,
      'longitude': 2.375499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.2,
    description:
      'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
    ],
    goods: [
      'Towels',
      'Heating',
      'Coffee machine',
      'Kitchen',
      'Baby seat',
      'Cable TV',
      'Dishwasher',
      'Laptop friendly workspace',
      'Wi-Fi',
      'Air conditioning',
      'Breakfast',
      'Washer',
      'Washing machine',
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl:
        'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg',
    },
    bedrooms: 1,
    maxAdults: 10,
  },
];
