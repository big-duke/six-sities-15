import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import { Navigate, useParams } from 'react-router-dom';
import { offers } from '../../mock/offers';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferFeatures from '../../components/offer-features/offer-features';
import OfferInside from '../../components/offer-inside/offer-inside';
import OfferHost from '../../components/offer-host/offer-host';
import PremiumLabel from '../../components/premium-label/premium-label';
import OfferRating from '../../components/offer-rating/offer-rating';
import OfferPrice from '../../components/offer-price/offer-price';
import OfferBookmarkButton from '../../components/offer-bookmark-button/offer-bookmark-button';
import ReviewList from '../../components/review-list/review-list';
import { comments } from '../../mock/comments';
import Map from '../../components/map/map';
import OfferCardList from '../../components/offer-card-list/offer-card-list';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { CityCenter } from '../../const';
import { useEffect } from 'react';
import { setHoverOfferId } from '../../store/action';
import { Point } from '../../types/location';

function OfferScreen(): JSX.Element {
  const { id } = useParams();
  const offer = offers.find((item) => item.id === id);
  const activeCity = useAppSelector((store) => store.activeCity);
  const dispatch = useAppDispatch();
  const center = CityCenter[activeCity];

  useEffect(() => {
    if (id) {
      dispatch(setHoverOfferId(id));
    }
    return () => {
      dispatch(setHoverOfferId(null));
    };
  }, [dispatch, id]);

  if (!offer) {
    return <Navigate to="/offer-not-found" />;
  }
  const {
    bedrooms,
    description,
    goods,
    host,
    images,
    isPremium,
    maxAdults,
    price,
    rating,
    title,
    type,
    isFavorite,
  } = offer;

  const nearByOffers = offers.filter((item) => item.id !== id);
  const nearByPoints: Point[] = nearByOffers.map(({ id: offerId, location }) => ({ ...location, offerId }));
  nearByPoints.push({...offer.location,offerId:offer.id});



  return (
    <div className="page">
      <Helmet>
        <title>Six cities. {title}</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </a>
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
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery title={title} images={images} />
          <div className="offer__container container">
            <div className="offer__wrapper">
              <PremiumLabel isPremium={isPremium} variant="full" />
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{title}</h1>
                <OfferBookmarkButton isFavorite={isFavorite} variant="full" />
              </div>
              <OfferRating rating={rating} variant="full" />
              <OfferFeatures
                bedrooms={bedrooms}
                maxAdults={maxAdults}
                type={type}
              />
              <OfferPrice price={price} variant="full" />
              <OfferInside goods={goods} />
              <OfferHost host={host} description={description} />
              <ReviewList list={comments} />
            </div>
          </div>
          <Map points={nearByPoints} center={center} variant="offer" />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <OfferCardList offers={nearByOffers} variant="near-places" />
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
