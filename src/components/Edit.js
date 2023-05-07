import { InvoiceGoBack2 } from "./InvoiceGoBack2";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ItemsListLg } from "./mini-components/ItemsListLg";
import { ItemsListPhone } from "./mini-components/ItemsListPhone";
import { ActionButtonsEdit } from "./mini-components/ActionButtonsEdit";
import { ActionButtonsEditPhone } from "./mini-components/ActionsButtonsEditPhone";
import Ip from "../Ip";

export const Edit = ({ click, isVisible, invData, invId, setCompleted, completed }) => {
  const [items, setItems] = useState(invData.items);
  const [editInfo, setEditInfo] = useState(invData);
  const editDate = new Date(editInfo.createdAt);
  const formattedDate = editDate
    .toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .replace(",", "")
    .replace(/(\w+)\s(\d+)\s(\d+)/, "$2 $1 $3");

  const handleInnerClick = (event) => {
    event.stopPropagation();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(editInfo.status === "draft"){
      setEditInfo({...editInfo, status : "pending"})
    }
    setCompleted(true)
    click();
  };

  useEffect(() => {
    if (completed) {
      fetch(`http://${Ip}/invoices/${invId}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(editInfo),
      })
        .then((res) => {
          setEditInfo(invData);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [completed]);

  return (
    <AnimatePresence>
      {isVisible && (
        <form
          onSubmit={handleSubmit}
          className="fixed inset-0 bg-[#00000081] overflow-y-auto cursor-pointer"
          onClick={click}
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, type: "tween" }}
            exit={{ x: "-100%" }}
            className="absolute mt-[72px] pt-8 sm:pt-[60px] sm:mt-20 lg:mt-0 top-0 left-0 fromFto12 w-full sm:w-[80%] max-w-[720px] sm:rounded-r-[20px] lg:pl-40 px-6 sm:px-14 pb-44 sm:pb-12 cursor-default"
            onClick={handleInnerClick}
          >
            <div className="sm:hidden">
              <InvoiceGoBack2 click={click} />
            </div>
            <h1 className="font-bold text-2xl mt-6 sm:mt-0">
              Edit <span className="text-[#888EB0]">#</span>
              {invData.id}
            </h1>
            <div className="mt-[46px]">
              <h1 className="text-[#7C5DFA] font-bold text-[15px]">
                Bill From
              </h1>
              <div className="text-[15px] mt-6">
                <div>
                  <h2 className="invdue2">Street Address</h2>
                  <input
                    className="w-full from05to04 invoice mt-2 pt-4 pb-3 px-5 rounded-[4px] text-[15px] font-bold"
                    required
                    value={editInfo.senderAddress.street}
                    onChange={(e) =>
                      setEditInfo({
                        ...editInfo,
                        senderAddress: {
                          ...editInfo.senderAddress,
                          street: e.target.value,
                        },
                      })
                    }
                  ></input>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6">
                  <div>
                    <h2 className="invdue2">City</h2>
                    <input
                      className="w-full from05to04 invoice mt-2 pt-4 pb-3 px-5 rounded-[4px] text-[15px] font-bold"
                      required
                      value={editInfo.senderAddress.city}
                      onChange={(e) =>
                        setEditInfo({
                          ...editInfo,
                          senderAddress: {
                            ...editInfo.senderAddress,
                            city: e.target.value,
                          },
                        })
                      }
                    ></input>
                  </div>
                  <div>
                    <h2 className="invdue2">Post Code</h2>
                    <input
                      className="w-full from05to04 invoice mt-2 pt-4 pb-3 px-5 rounded-[4px] text-[15px] font-bold"
                      required
                      value={editInfo.senderAddress.postCode}
                      onChange={(e) =>
                        setEditInfo({
                          ...editInfo,
                          senderAddress: {
                            ...editInfo.senderAddress,
                            postCode: e.target.value,
                          },
                        })
                      }
                    ></input>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <h2 className="invdue2">Country</h2>
                    <input
                      className="w-full from05to04 invoice mt-2 pt-4 pb-3 px-5 rounded-[4px] text-[15px] font-bold"
                      required
                      value={editInfo.senderAddress.country}
                      onChange={(e) =>
                        setEditInfo({
                          ...editInfo,
                          senderAddress: {
                            ...editInfo.senderAddress,
                            country: e.target.value,
                          },
                        })
                      }
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[46px] ">
              <h1 className="text-[#7C5DFA] font-bold text-[15px]">Bill To</h1>
              <div className="text-[15px] flex flex-col gap-6 mt-6">
                <div>
                  <h2 className="invdue2">Client's Name</h2>
                  <input
                    className="w-full from05to04 invoice mt-2 pt-4 pb-3 px-5 rounded-[4px] text-[15px] font-bold"
                    required
                    value={editInfo.clientName}
                    onChange={(e) =>
                      setEditInfo({ ...editInfo, clientName: e.target.value })
                    }
                  ></input>
                </div>

                <div>
                  <h2 className="invdue2">Client's Email</h2>
                  <input
                    className="w-full from05to04 invoice mt-2 pt-4 pb-3 px-5 rounded-[4px] text-[15px] font-bold "
                    required
                    value={editInfo.clientEmail}
                    onChange={(e) =>
                      setEditInfo({ ...editInfo, clientEmail: e.target.value })
                    }
                  ></input>
                </div>
                <div>
                  <h2 className="invdue2">Street Address</h2>
                  <input
                    className="w-full from05to04 invoice mt-2 pt-4 pb-3 px-5 rounded-[4px] text-[15px] font-bold"
                    required
                    value={editInfo.clientAddress.street}
                    onChange={(e) =>
                      setEditInfo({
                        ...editInfo,
                        clientAddress: {
                          ...editInfo.clientAddress,
                          street: e.target.value,
                        },
                      })
                    }
                  ></input>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  <div>
                    <h2 className="invdue2">City</h2>
                    <input
                      className="w-full from05to04 invoice mt-2 pt-4 pb-3 px-5 rounded-[4px] text-[15px] font-bold"
                      required
                      value={editInfo.clientAddress.city}
                      onChange={(e) =>
                        setEditInfo({
                          ...editInfo,
                          clientAddress: {
                            ...editInfo.clientAddress,
                            city: e.target.value,
                          },
                        })
                      }
                    ></input>
                  </div>
                  <div>
                    <h2 className="invdue2">Post Code</h2>
                    <input
                      className="w-full from05to04 invoice mt-2 pt-4 pb-3 px-5 rounded-[4px] text-[15px] font-bold"
                      required
                      value={editInfo.clientAddress.postCode}
                      onChange={(e) =>
                        setEditInfo({
                          ...editInfo,
                          clientAddress: {
                            ...editInfo.clientAddress,
                            postCode: e.target.value,
                          },
                        })
                      }
                    ></input>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <h2 className="invdue2">Country</h2>
                    <input
                      className="w-full from05to04 invoice mt-2 pt-4 pb-3 px-5 rounded-[4px] text-[15px] font-bold"
                      required
                      value={editInfo.clientAddress.country}
                      onChange={(e) =>
                        setEditInfo({
                          ...editInfo,
                          clientAddress: {
                            ...editInfo.clientAddress,
                            country: e.target.value,
                          },
                        })
                      }
                    ></input>
                  </div>
                </div>
                <div className="sm:grid sm:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h2 className="from07to05">Invoice Date</h2>
                    <div className="w-full h-[54px] from05to04 invoice mt-2 pt-4 pb-3 px-5 rounded-[4px] text-[15px] font-bold cursor-not-allowed notavailable">
                      {formattedDate}
                    </div>
                  </div>
                  <div>
                    <h2 className="invdue2 mt-6 sm:mt-0">Payment Terms</h2>
                    <select
                      className="w-full from05to04 invoice mt-2 pt-4 pb-3 px-5 rounded-[4px] text-[15px] font-bold h-[54px]"
                      defaultValue={editInfo.paymentTerms}
                      onChange={(e) => {
                        let date = new Date(editInfo.createdAt);
                        date.setDate(
                          date.getDate() + parseInt(e.target.value, 10)
                        );
                        setEditInfo({
                          ...editInfo,
                          paymentDue: date.toISOString().slice(0, 10),
                          paymentTerms: parseInt(e.target.value),
                        });
                      }}
                    >
                      <option value={1}>Net 1 day</option>
                      <option value={7}>Net 7 day</option>
                      <option value={14}>Net 14 day</option>
                      <option value={30}>Net 30 day</option>
                    </select>
                  </div>
                </div>
                <div>
                  <h2 className="invdue2">Project Description</h2>
                  <input
                    className="w-full from05to04 invoice mt-2 pt-4 pb-3 px-5 rounded-[4px] text-[15px] font-bold"
                    required
                    value={editInfo.description}
                    onChange={(e) =>
                      setEditInfo({ ...editInfo, description: e.target.value })
                    }
                  ></input>
                </div>
              </div>
            </div>
            <div className="mt-9">
              <h1 className="text-lg font-bold text-[#777F98]">Item List</h1>
              <ItemsListLg
                items={items}
                setItems={setItems}
                setEditInfo={setEditInfo}
                editInfo={editInfo}
              />
              <ItemsListPhone
                items={items}
                setItems={setItems}
                editInfo={editInfo}
                setEditInfo={setEditInfo}
              />
              <button
                type="button"
                className="h-12 w-full fromF9to04 rounded-full flex justify-center items-center mt-6 hover:bg-[#DFE3FA] duration-200"
                onClick={() => {
                  const newItem = {
                    name: "",
                    quantity: 0,
                    price: 0,
                    total: 0,
                  };
                  setItems([...items, newItem]);
                }}
              >
                <h1 className="text-[15px] font-bold invdue2">
                  + Add New Item
                </h1>
              </button>
            </div>
            <ActionButtonsEdit
              setEditInfo={setEditInfo}
              setItems={setItems}
              invData={invData}
              click={click}
            />
          </motion.div>
          {isVisible && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.3, type: "tween" }}
              exit={{ x: "-100%" }}
              className="sm:hidden h-[90px] fromFto03 flex justify-end px-6 w-full fixed bottom-0 shadoww"
            >
              <ActionButtonsEditPhone
                handleInnerClick={handleInnerClick}
                setEditInfo={setEditInfo}
                setItems={setItems}
                invData={invData}
                click={click}
              />
            </motion.div>
          )}
        </form>
      )}
    </AnimatePresence>
  );
};
