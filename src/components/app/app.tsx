import MainScreen from '../../pages/main-screen/main-screen';
type AppProps = {
  placeCardsCount: number;
};
function App({ placeCardsCount }: AppProps): JSX.Element {
  return <MainScreen placeCardsCount={placeCardsCount} />;
}

export default App;
