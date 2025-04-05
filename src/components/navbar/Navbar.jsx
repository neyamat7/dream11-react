import Button from "../button/Button";

const Navbar = ({ coins = 0 }) => {
  return (
    <div className=" flex flex-col md:flex-row gap-5 justify-between items-center mt-5">
      <div className="w-16">
        <img className="w-full" src="/assets/logo.png" alt="" />
      </div>
      <ul className="flex flex-wrap justify-center gap-5 items-center text-gray-500">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Fixture</a>
        </li>
        <li>
          <a href="#">Teams</a>
        </li>
        <li>
          <a href="#">Schedules</a>
        </li>
        <Button label={`${coins} Coin 🪙`}></Button>
      </ul>
    </div>
  );
};

export default Navbar;
