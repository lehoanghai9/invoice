import plus from "../../assets/icon-plus.svg";

export const PlusButton = ({ textsmall, textlarge, click }) => {
  return (
    <button className=" bg-purple h-[44px] sm:h-[48px] flex items-center p-[6px] rounded-[24px] gap-2 pr-6 hover:bg-lightpurple duration-300"
    onClick={click}>
      <div className="rounded-full aspect-square flex justify-center items-center w-[32px] bg-white">
        <img src={plus} alt=""></img>
      </div>
      <h1 className="text-white hidden sm:flex font-bold sm:text-base">
        {textlarge}
      </h1>
      <h1 className="text-white font-bold sm:hidden">{textsmall}</h1>
    </button>
  );
};
