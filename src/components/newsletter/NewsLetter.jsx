import InputEmail from "../footer/InputEmail";

const NewsLetter = () => {
  return (
    <div className="p-5 border rounded-xl -translate-y-1/2">
      <div className="bg-[linear-gradient(to_bottom_left,_#fb923c_0%,_white_40%,_#7dd3fc_100%)] bg-cover py-20 rounded-xl text-center">
        <div className="max-w-[520px] mx-auto space-y-4 text-black">
          <h1 className="font-bold text-4xl">Subscribe to our Newsletter</h1>
          <p>Get the latest updates and news right in your inbox!</p>
          <InputEmail></InputEmail>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
