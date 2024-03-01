import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import classNames from 'classnames';

type LogoProps = {
  isActive?: boolean;
};
function Logo({ isActive }: LogoProps) {
  const className = classNames('header__logo-link', { 'header__logo-link--active': isActive });
  return (
    <div className="header__left">
      <Link
        className={className}
        to={AppRoute.Main}
      >
        <img
          className="header__logo"
          src="img/logo.svg"
          alt="6 cities logo"
          width={81}
          height={41}
        />
      </Link>
    </div>
  );
}
export default Logo;
