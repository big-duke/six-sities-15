type OfferInsideProps = {
  goods: string[];
};
function OfferInside({ goods }: OfferInsideProps) {
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos; inside</h2>
      <ul className="offer__inside-list">
        {goods.map((item) => (
          <li className="offer__inside-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default OfferInside;
