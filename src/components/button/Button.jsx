const Button = ({ label, icon, bg, blackBorder, onclick }) => {
  return (
    <div
      className={
        blackBorder
          ? `bg-black p-1 outline outline-[${bg}] rounded-md cursor-pointer`
          : null
      }
    >
      <button onClick={onclick} className={`btn bg-[${bg}] font-bold`}>
        {label} {icon ? icon : null}
      </button>
    </div>
  );
};

export default Button;
