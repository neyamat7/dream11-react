import { FaUserAlt } from "react-icons/fa";
import Button from "../button/Button";

const PlayerList = (props) => {
  const selected = props.selected;

  const {
    id,
    player_name,
    country,
    country_flag,
    player_image,
    role,
    batting_type,
    bowling_type,
    bidding_price,
  } = props.player;

  const onChoosePlayer = props.onChoosePlayer;
  return (
    <div className="max-h-[530px] h-full w-full border border-gray-200 p-4 space-y-3 rounded-lg">
      <div className="w-full max-h-[240px] h-full">
        <img
          className="rounded-lg w-full h-full"
          src={player_image}
          alt={player_name}
        />
      </div>
      <div className="flex items-center text-xl font-semibold gap-4">
        <span>
          <FaUserAlt></FaUserAlt>
        </span>
        <h2>{player_name}</h2>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center text-gray-500">
          <div className="w-5">
            <img src={country_flag} alt="" />
          </div>
          <span>{country}</span>
        </div>

        <Button label={role}></Button>
      </div>

      <hr className="border border-gray-100" />

      <div>
        <p className="font-semibold">Rating</p>
      </div>

      <div className="font-semibold">
        <p>{role === "Batsman" ? batting_type : bowling_type}</p>
      </div>

      <div className="flex justify-between items-center font-semibold">
        <p>Price: ${bidding_price}</p>
        <Button
          onclick={() => onChoosePlayer(id)}
          label={selected.includes(id) ? "Chosen Player" : "Choose Player"}
          bg={selected.includes(id) ? "#A7B49E" : null}
        ></Button>
      </div>
    </div>
  );
};

export default PlayerList;

// "player_name": "Virat Kohli",
// "country": "India",
// "country_flag": "https://path_to_flag_image/india_flag.png",
// "player_image": "https://path_to_player_image/virat_kohli.png",
// "role": "Batsman",
// "batting_type": "Right-hand bat",
// "bowling_type": "None",
// "bidding_price": 150000000

// {
//     player_name,
//     country,
//     country_flag,
//     player_image,
//     role,
//     batting_type,
//     bowling_type,
//     bidding_price,
//   }
