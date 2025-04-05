import Button from "../button/Button";
import SelectedPlayer from "./SelectedPlayer";

const SelectedPlayers = ({
  setShowSelect,
  selectedPlayers,
  onDeletePlayer,
}) => {
  return (
    <>
      {selectedPlayers.map((player) => (
        <SelectedPlayer
          key={player.id}
          player={player}
          onDeletePlayer={onDeletePlayer}
        ></SelectedPlayer>
      ))}
      <div className="flex flex-start mt-6">
        <Button
          onclick={() => setShowSelect(false)}
          label={"Add More Player"}
          bg={"#E7FE29"}
        ></Button>
      </div>
    </>
  );
};

export default SelectedPlayers;
