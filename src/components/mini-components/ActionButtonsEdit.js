import { useState } from "react";

export const ActionButtonsEdit = ({click, invData, setEditInfo, setItems}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return(
    <div className="hidden sm:flex justify-end mt-12">
          <div className="flex gap-2">
          <button type="button" className={`${isHovered ? "bg-lightbg" : "fromF9to04"} duration-200 h-12 px-6 rounded-full invdue2 font-bold`}
          onClick={() => {
            setEditInfo(invData)
            setItems(invData.items)
            click()
          }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >Cancel</button>
          <button type="submit" className={`bg-purple hover:bg-lightpurple duration-200 h-12 px-6 rounded-full text-white font-bold`}>Save Changes</button>
          </div>
        </div>
  )
}