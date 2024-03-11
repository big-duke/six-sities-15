import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import OfferCardList from '../../components/offer-card-list/offer-card-list';
import { AppRoute, CityCenter } from '../../const';
import { Helmet } from 'react-helmet-async';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks/redux';
import LocationTabs from '../../components/location-tabs/location-tabs';
import NoPlacesScreen from '../no-places-screen/no-places-screen';

function MainScreen(): JSX.Element {
  const activeCity = useAppSelector((store) => store.activeCity);
  const offers = useAppSelector((store) => store.offers);
  const offersByCity = offers.filter((offer) => offer.city.name === activeCity);
  const points = offersByCity.map(({ location }) => location);
  const center = CityCenter[activeCity];
  const placeFound = `${offersByCity.length} places to stay in ${activeCity}`;

  if (offersByCity.length === 0) {
    return <NoPlacesScreen />;
  }

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo isActive />
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={AppRoute.Favorites}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationTabs />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placeFound}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>
              <OfferCardList offers={offersByCity} variant="card" />
            </section>
            <div className="cities__right-section">
              <Map points={points} center={center} variant="cities" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
