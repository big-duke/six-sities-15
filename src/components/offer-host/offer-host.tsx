import { Host } from '../../types/offer';

type OfferHostProps = {
  host: Host;
  description: string;
};
function OfferHost({ host, description }: OfferHostProps) {
  const {avatarUrl, isPro, name} = host;
  return (
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>
      <div className="offer__host-user user">
        <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
          <img
            className="offer__avatar user__avatar"
            src={avatarUrl}
            width={74}
            height={74}
            alt={name}
          />
        </div>
        <span className="offer__user-name">{host.name}</span>
        {isPro && <span className="offer__user-status">Pro</span>}
      </div>
      <div className="offer__description">
        {description}
      </div>
    </div>
  );
}
export default OfferHost;
