import { useState } from "react";

export const ActionButtons2Phone = ({ handleInnerClick, click, setCreateInfo, defaultInfo, setItems, handleDraft }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
        <div
          onClick={handleInnerClick}
        >
          <div className="flex gap-2 mt-[30px] text-[15px]">
            <button
            type="button"
              className={`${
                isHovered ? "bg-lightbg" : "fromF9to04"
              } duration-200 h-12 px-4 rounded-full invdue2 font-bold`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => {
                setCreateInfo(defaultInfo)
                setItems([{
                  name: "",
                  quantity: 0,
                  price: 0,
                  total: 0,
                }])
                click()
              }}
            >
              Discard
            </button>
            <button
            type="button"
              className={`bg-[#373B53] hover:bg-[#0C0E16] duration-200 from06to05 h-12 px-4 rounded-full invdue2 font-bold`}
              onClick={handleDraft}
            >
              Save as Draft
            </button>
            <button
              type="submit"
              className={`bg-purple hover:bg-lightpurple duration-200 h-12 px-4 rounded-full text-white font-bold`}
            >
              Save & Send
            </button>
          </div>
        </div>
  );
};
