import { useState } from "react";
import arrowdown from "../assets/icon-arrow-down.svg";
import { PlusButton } from "./mini-components/PlusButton";
import check from "../assets/icon-check.svg";
import { motion, AnimatePresence } from "framer-motion";

export const Summary = ({ data, click, filters, setFilters, activeFilters }) => {
  const [filterOn, setFilterOn] = useState(false);
  const handleFilterToggle = () => {
    setFilterOn(!filterOn);
  };

  return (
    data && (
      <div className={`flex justify-between  items-center select-none`}>
        <div>
          <h1 className="font-bold text-2xl sm:text-4xl sm:mb-1">Invoices</h1>
          {data.length === 0 ? (
            <h3 className="text-sm greyy sm:flex hidden">No invoices</h3>
          ) : (
            <h3 className="text-sm greyy sm:flex hidden">
              {Object.keys(activeFilters).length === 1
                ? `There are ${data.length} ${activeFilters[0]} invoices`
                : `There are a total of ${data.length} invoices`}
            </h3>
          )}
          {data.length === 0 ? (
            <h3 className="text-sm sm:hidden greyy">No invoices</h3>
          ) : (
            <h3 className="text-sm greyy sm:hidden">{data.length} invoices</h3>
          )}
        </div>

        <div className="flex items-center gap-5 sm:gap-10">
          <div className=" relative">
            <div
              className="flex items-center cursor-pointer gap-3 select-none hover:text-lightpurple duration-300"
              onClick={handleFilterToggle}
            >
              <h2 className="font-bold sm:hidden">Filter</h2>
              <h2 className="font-bold hidden sm:flex">Filter by status</h2>
              <img
                src={arrowdown}
                className={`w-[8.5px] h-[5px] duration-200 ${
                  filterOn && "rotate-180"
                }`}
                alt=""
              ></img>
            </div>
            <AnimatePresence>
              {filterOn && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-10 fromFto04 -left-[25%] p-6 rounded-[8px] w-[192px]"
                >
                  <ul className="text-[15px] font-bold flex flex-col gap-[15px]">
                    <li
                      className="flex gap-3 items-center filterList cursor-pointer "
                      onClick={() => {
                        setFilters({
                          ...filters,
                          draft: !filters.draft,
                        });
                      }}
                    >
                      <div
                        className={`w-4 h-4 flex justify-center items-center ${
                          filters.draft ? "bg-purple" : "from05to03"
                        } rounded-[2px]`}
                      >
                        {filters.draft && <img src={check} alt=""></img>}
                      </div>
                      <h2 className="">Draft</h2>
                    </li>
                    <li
                      className="flex gap-3 items-center filterList cursor-pointer "
                      onClick={() => {
                        setFilters({
                          ...filters,
                          pending: !filters.pending,
                        });
                      }}
                    >
                      <div
                        className={`w-4 h-4 flex justify-center items-center ${
                          filters.pending ? "bg-purple" : "from05to03"
                        } rounded-[2px]`}
                      >
                        {filters.pending && <img src={check} alt=""></img>}
                      </div>
                      <h2 className="">Pending</h2>
                    </li>
                    <li
                      className="flex gap-3 items-center filterList cursor-pointer "
                      onClick={() => {
                        setFilters({
                          ...filters,
                          paid: !filters.paid,
                        });
                      }}
                    >
                      <div
                        className={`w-4 h-4 flex justify-center items-center ${
                          filters.paid ? "bg-purple" : "from05to03"
                        } rounded-[2px]`}
                      >
                        {filters.paid && <img src={check} alt=""></img>}
                      </div>
                      <h2 className="">Paid</h2>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <PlusButton textsmall="New" textlarge="New Invoice" click={click} />
        </div>
      </div>
    )
  );
};
