import { Offers } from '../../types/offer';
import OfferCardList from '../offer-card-list/offer-card-list';

type FavoriteOfferCardListProps = {
  offers: Offers;
};

function FavoriteOfferCardList({ offers }: FavoriteOfferCardListProps) {
  const locations = [...new Set(offers.map(({ city }) => city.name))];
  return (
    <ul className="favorites__list">
      {locations.map((city) => {
        const offersByCity = offers.filter((offer) => offer.city.name === city);
        return (
          <li key={city} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{city}</span>
                </a>
              </div>
            </div>
            <OfferCardList offers={offersByCity} variant='favorite' />
          </li>
        );
      })}
    </ul>
  );
}

export default FavoriteOfferCardList;
