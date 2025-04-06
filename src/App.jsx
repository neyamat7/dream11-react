import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Players from "./components/players/Players";
import { useEffect } from "react";
import Footer from "./components/footer/Footer";
import { ToastContainer, toast, Bounce } from "react-toastify";

const App = () => {
  const [coins, setCoins] = useState(0);
  const [playersData, setPlayersData] = useState([]);
  const [selected, setSelected] = useState([]);
  function coinClaimHandler() {
    setCoins(coins + 200000000);
  }

  // fetch all players
  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      toast.success(`🎉Hlw ${email}! It’s party time — you're here again!`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }

    fetch("/Players.JSON")
      .then((res) => res.json())
      .then((data) => setPlayersData(data));
  }, []);

  function handleChoosePlayer(id) {
    if (selected.includes(id)) {
      toast.warn("Player Already Selected!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    } else if (selected.length === 6) {
      toast.warn("You can't select more than 6 players!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }
    const player = playersData.find((player) => player.id == id);
    if (player.bidding_price > coins) {
      toast.warn("Insufficent Balance!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </>
  );
};

export default App;
