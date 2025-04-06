const InputEmail = () => {
  return (
    <div className="flex">
      <input
        className="flex-1 bg-white rounded-l-lg border border-orange-200 px-4"
        type="text"
        placeholder="Enter Your Email"
      />
      <button className="bg-amber-400 text-black py-2 px-4 rounded-r-lg font-bold">
        Subscribe
      </button>
    </div>
  );
};

export default InputEmail;
