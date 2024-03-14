import { useRef, useEffect } from 'react';
import leaflet, {layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { Location, Point } from '../../types/location';
import { useMap } from './use-map';
import './styles.css';
import { useAppSelector } from '../../hooks/redux';
type MapProps = {
  center: Location;
  points: Point[];
  variant: 'cities' | 'offer';
};
const defaultPin = leaflet.icon({
  iconUrl:  'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [12, 20],
});

const activePin = leaflet.icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [12, 20],
});

function Map({ center, points , variant}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap({mapRef, center});
  const hoverCardId = useAppSelector((state) => state.hoverOfferId);
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
          .setIcon(point.offerId === hoverCardId ? activePin : defaultPin)
          .addTo(markerLayer);
      });
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [hoverCardId, map, points]);

  return <section className={`${variant}__map map`} ref={mapRef}/>;
}

export default Map;
