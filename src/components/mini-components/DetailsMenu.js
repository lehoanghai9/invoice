import { useState } from "react";

export const DetailsMenu = ({ click, setCompleted, setInvData, removeClick, remove, invData }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleSetPaid = () => {
    setInvData({...invData, status: "paid"})
  }
  return (
    <div className="sm:hidden flex justify-center items-center fixed bottom-0 left-0 w-full h-[90px] invoice">
      <div className="flex text-[15px] font-bold gap-2">
        <button
          className={`px-6 pt-[18px] pb-[15px] fromF9to04 from07to05 rounded-full ${
            isHovered && "from05toF text-[#7E88C3]"
          } duration-200`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={click}
        >
          Edit
        </button>
        <button
          className="px-6 pt-[18px] pb-[15px] bg-[#EC5757] rounded-full text-white hover:bg-[#FF9797] duration-200"
          onClick={removeClick}
        >
          Delete
        </button>
        <button
          className={`px-6 pt-[18px] pb-[15px] inactive ${
            invData.status === "pending" ? "active" : "inactive"
          } rounded-full  duration-200`}
          onClick={() => {(invData.status === "pending") && handleSetPaid()}}
        >
          Mark as Paid
        </button>
      </div>
    </div>
  );
};
