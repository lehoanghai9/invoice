import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Ip from "../Ip";

export const Deletion = ({ remove, removeClick, id }) => {
  const handleInnerClick = (event) => {
    event.stopPropagation();
  };

  const navigate = useNavigate()

  const [isHovered, setIsHovered] = useState(false);

  const handleDeletion = () => {
    fetch(`http://${Ip}/invoices/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        navigate("/")
      })
      .catch((err) => {
        console.log(err.message);
      });
  }


  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <AnimatePresence>
      {remove && (
        <motion.div
          className="fixed inset-0 flex justify-center items-center bg-[#000000bc] overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.6 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.6 }}
            className=" w-[85%] fromFto03 p-8 sm:p-12 cursor-default rounded-[8px] max-w-[480px]"
            onClick={handleInnerClick}
          >
            <h1 className="text-2xl font-bold">Confirm Deletion</h1>
            <p className="text-[#888EB0] text-[13px] mt-2 sm:mt-3">
              Are you sure you want to delete invoice #{id}? This action cannot
              be undone.
            </p>
            <div className="flex justify-end mt-5 text-[15px] gap-2">
              <button
                type="button"
                className={`${
                  isHovered ? "bg-lightbg" : "fromF9to04"
                } duration-200 rounded-full invdue2 font-bold w-[90px] h-[48px]`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={removeClick}
              >
                Cancel
              </button>
              <button className="px-6 font-bold w-[90px] h-[48px] bg-[#EC5757] rounded-full text-white hover:bg-[#FF9797] duration-200"
              onClick={handleDeletion}>
                Delete
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
