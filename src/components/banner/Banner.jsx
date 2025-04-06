import Button from "../button/Button";

const Banner = ({ onCoinClaim }) => {
  return (
    <div className="mt-5 bg-gray-900 py-8 relative rounded-lg">
      <div className="flex flex-col justify-center text-center items-center space-y-5 bg-transparent z-50">
        <div className="mx-auto">
          <img src="/assets/banner-main.png" alt="" />
        </div>

        <h1 className="text-white text-4xl font-bold">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-gray-400">Beyond Boundaries Beyound Limits</p>
        <div className="z-50">
          <Button
            label={"Claim Free Credit"}
            bg={"#E7FE29"}
            blackBorder={true}
            onclick={onCoinClaim}
          ></Button>
        </div>
      </div>

      <div className="absolute inset-0 z-10 h-full w-full">
        <img
          className="h-full w-full rounded-lg"
          src="/assets/bg-shadow.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
