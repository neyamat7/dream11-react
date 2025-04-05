import { FaTrash } from "react-icons/fa";
const SelectedPlayer = (props) => {
  const { id, player_image, player_name, bowling_type, batting_type, role } =
    props.player;
  const onDeletePlayer = props.onDeletePlayer;
  return (
    <div className="flex justify-between items-center mt-8 border border-gray-300 p-3 rounded-lg">
      <div className="flex gap-4">
        <div className="w-12">
          <img className="rounded-lg h-full" src={player_image} alt="" />
        </div>
        <div>
          <h1 className="font-bold">{player_name}</h1>
          <p className="text-gray-500">
            {role === "Batsman" ? `${batting_type}` : `${bowling_type}`}
          </p>
        </div>
      </div>

      <div>
        <FaTrash
          onClick={() => onDeletePlayer(id)}
          className="text-red-500 text-xl cursor-pointer"
        ></FaTrash>
      </div>
    </div>
  );
};

export default SelectedPlayer;
