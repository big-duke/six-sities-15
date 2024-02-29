import classNames from 'classnames';

type PremiumLabelProps = {
  isPremium: boolean;
  variant: 'full' | 'card';
};
function PremiumLabel({ isPremium, variant }: PremiumLabelProps) {
  const className = classNames({
    'offer__mark': variant === 'full',
    'place-card__mark': variant === 'card',
  });
  return (
    isPremium && (
      <div className={className}>
        <span>Premium</span>
      </div>
    )
  );
}
export default PremiumLabel;
