import { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { Location } from '../../types/location';
import { useMap } from './use-map';

type MapProps = {
  center: Location;
  points: Location[];
};
function Map({ center, points }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap({mapRef, center});

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker(
            {
              lat: point.latitude,
              lng: point.longitude,
            }
          )
          .addTo(map);
      });
    }
  }, [map, points]);

  return <section className="cities__map map" ref={mapRef}/>;
}

export default Map;
