import { useRef, useEffect } from 'react';
import leaflet, {layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { Location } from '../../types/location';
import { useMap } from './use-map';
import './styles.css';
type MapProps = {
  center: Location;
  points: Location[];
  variant: 'cities' | 'offer';
};
function Map({ center, points , variant}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap({mapRef, center});

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        leaflet
          .marker(
            {
              lat: point.latitude,
              lng: point.longitude,
            }
          )
          .addTo(markerLayer);
      });
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points]);

  return <section className={`${variant}__map map`} ref={mapRef}/>;
}

export default Map;
