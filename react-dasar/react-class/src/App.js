import SeasonsDisplay from "./SeasonsDisplay";

function App() {
  window.navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(position);
    },
    (err) => console.log(err)
  );
  return <SeasonsDisplay />;
}

export default App;
