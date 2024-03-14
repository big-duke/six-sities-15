export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type Point = Omit<Location, 'zoom'> & { offerId?: string | null };
