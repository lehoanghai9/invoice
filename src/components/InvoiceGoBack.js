import { useState } from "react";
import { useNavigate } from "react-router-dom";
import leftarrow from "../assets/icon-arrow-left.svg";

export const InvoiceGoBack = () => {
  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return(
    <div
          className={`flex items-center w-fit gap-6 cursor-pointer duration-200 ${
            isHovered ? "from07to06" : ""
          }`}
          onClick={() => navigate("/")}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={leftarrow} className="w-[6px] h-[10px] -mt-1" alt=""></img>
          <h2 className="font-bold text-[15px]">Go back</h2>
        </div>
  )
}