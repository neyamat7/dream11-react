const Button = ({ label, icon, bg, blackBorder, onclick }) => {
  console.log(bg);

  return (
    <div
      className={
        blackBorder ? `bg-black p-1 outline rounded-md cursor-pointer` : null
      }
      style={{ outlineColor: bg }}
    >
      <button
        onClick={onclick}
        className={`btn font-bold`}
        style={{ backgroundColor: bg }}
      >
        {label} {icon ? icon : null}
      </button>
    </div>
  );
};

export default Button;
