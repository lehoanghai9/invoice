

import { useState } from "react";

export const ActionButtonsEditPhone = ({ handleInnerClick, setEditInfo, setItems, invData, click }) => {
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
            <button type="button"
              className={`${
                isHovered ? "bg-lightbg" : "fromF9to04"
              } duration-200 h-12 px-4 rounded-full invdue2 font-bold`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => {
                setEditInfo(invData)
                setItems(invData.items)
                click()
              }}
            >
              Cancel
            </button>
            <button type="submit"
              className={`bg-purple hover:bg-lightpurple duration-200 h-12 px-4 rounded-full text-white font-bold`}
            >
              Save Changes
            </button>
          </div>
        </div>
  );
};
