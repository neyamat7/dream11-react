import Button from "../button/Button";
import SelectedPlayer from "./SelectedPlayer";

const SelectedPlayers = ({
  showSelect,
  setShowSelect,
  selectedPlayers,
  onDeletePlayer,
}) => {
  return (
    <div className={showSelect ? null : "hidden"}>
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
    </div>
  );
};

export default SelectedPlayers;
