type PremiumLabelProps = {
  isPremium: boolean;
  variant: 'full' | 'card';
};
function PremiumLabel({ isPremium, variant }: PremiumLabelProps) {
  const className = variant === 'card' ? 'place-card__mark' : 'offer__mark';
  return (
    isPremium && (
      <div className={className}>
        <span>Premium</span>
      </div>
    )
  );
}
export default PremiumLabel;
