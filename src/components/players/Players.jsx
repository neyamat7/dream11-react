// import { use } from "react";
import { useEffect, useState } from "react";
import Button from "../button/Button";
import PlayerList from "./PlayerList";
import SelectedPlayers from "./SelectedPlayers";

const Players = ({ playersData, onChoosePlayer, selected, onDeletePlayer }) => {
  const [showSelect, setShowSelect] = useState(false);

  function handleShowAvailable() {
    setShowSelect(false);
  }

  const [selectedPlayers, setSelectedPlayers] = useState([]);

  useEffect(() => {
    const newSelectedPlayers = playersData.filter((player) =>
      selected.includes(player.id)
    );
    setSelectedPlayers(newSelectedPlayers);
  }, [playersData, selected]);

  function handleShowSelect() {
    if (!selectedPlayers.length) {
      alert("No Player is Selected");
      return;
    }
    setShowSelect(true);
  }

  useEffect(() => {
    if (selected.length < 1) {
      setShowSelect(false);
    }
  }, [selected]);

  return (
    <div>
      <div className="flex justify-between items-center mt-10">
        <h1 className="text-2xl font-semibold">
          {showSelect
            ? `Selected Player(${selectedPlayers.length}/${playersData.length})`
            : "Available Players"}
        </h1>
        <div className="flex">
          <Button
            onclick={handleShowAvailable}
            bg={`${!showSelect ? "#E7FE29" : null}`}
            label={"Available"}
          ></Button>
          <Button
            bg={`${showSelect ? "#E7FE29" : null}`}
            onclick={handleShowSelect}
            label={`Selected(${selectedPlayers.length})`}
          ></Button>
        </div>
      </div>
      <div
        className={`mt-6 ${
          showSelect ? "hidden" : "grid"
        } grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5`}
      >
        {playersData.map((player) => (
          <PlayerList
            onChoosePlayer={onChoosePlayer}
            key={player.id}
            player={player}
          ></PlayerList>
        ))}
      </div>

      <div className={!selected.length ? "hidden" : null}>
        <SelectedPlayers
          playersData={playersData}
          selected={selected}
          setShowSelect={setShowSelect}
          selectedPlayers={selectedPlayers}
          onDeletePlayer={onDeletePlayer}
        ></SelectedPlayers>
      </div>
    </div>
  );
};

export default Players;

