import { Link } from 'react-router-dom';
import { CityName } from '../../const';
import { useAppSelector } from '../../hooks/redux';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { setActiveCity } from '../../store/action';


function LocationTabs() {
  const activeCity = useAppSelector((state) => state.activeCity);
  const dispatch = useDispatch();
  const handleTabClick = (city:CityName) => dispatch(setActiveCity(city));
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            Object.values(CityName).map((city) => (
              <li className="locations__item" key={city} onClick={() => handleTabClick(city)}>
                <Link className={cn('locations__item-link tabs__item',{['tabs__item--active']: city === activeCity})} to="/">
                  <span>{city}</span>
                </Link>
              </li>
            ))
          }

        </ul>
      </section>
    </div>
  );
}


export default LocationTabs;

