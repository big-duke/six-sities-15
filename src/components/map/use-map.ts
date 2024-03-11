import { useEffect, useState, useRef } from 'react';
import leaflet, { Map } from 'leaflet';
import { Location } from '../../types/location';

type MapController = {
  mapRef: React.MutableRefObject<HTMLElement | null>;
  center: Location;
};

export function useMap({ center, mapRef }: MapController) {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);
  const { latitude: lat, longitude: lng, zoom } = center;
  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {lat, lng},
        zoom,
      });
      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          }
        )
        .addTo(instance);
      setMap(instance);
      isRenderedRef.current = true;
    }
    map?.setView({ lat , lng }, zoom);
  }, [lat, lng, map, mapRef, zoom]);

  return map;
}
