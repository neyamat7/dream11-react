import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Players from "./components/players/Players";
import { useEffect } from "react";
import Footer from "./components/footer/Footer";

const App = () => {
  const [coins, setCoins] = useState(0);
  const [playersData, setPlayersData] = useState([]);
  const [selected, setSelected] = useState([]);
  function coinClaimHandler() {
    setCoins(coins + 200000000);
  }

  // fetch all players
  useEffect(() => {
    fetch("/Players.JSON")
      .then((res) => res.json())
      .then((data) => setPlayersData(data));
  }, []);

  function handleChoosePlayer(id) {
    if (selected.includes(id)) {
      alert("Player Already Selected");
      return;
    }
    const player = playersData.find((player) => player.id == id);
    if (player.bidding_price > coins) {
      alert("Insufficent Balance!");
      return;
    }
    setSelected([...selected, id]);
    setCoins(coins - player.bidding_price);
  }

  function handleDeletePlayer(id) {
    const newSelected = selected.filter((playerId) => playerId !== id);
    setSelected(newSelected);

    const player = playersData.find((player) => player.id === id);
    setCoins(coins + player.bidding_price);
  }

  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-5">
        <Navbar coins={coins}></Navbar>
        <Banner onCoinClaim={coinClaimHandler}></Banner>
        <Players
          coins={coins}
          playersData={playersData}
          onChoosePlayer={handleChoosePlayer}
          selected={selected}
          onDeletePlayer={handleDeletePlayer}
        ></Players>
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;
