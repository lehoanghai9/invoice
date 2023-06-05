import { InvoiceGoBack2 } from "./InvoiceGoBack2";
import { useState, useEffect } from "react";
import { ActionButtons2 } from "./mini-components/ActionButtons2";
import { motion, AnimatePresence } from "framer-motion";
import { ActionButtons2Phone } from "./mini-components/ActionButtons2Phone";
import { ItemsListLg } from "./mini-components/ItemsListLg";
import { ItemsListPhone } from "./mini-components/ItemsListPhone";
import Ip from "../Ip";

export const CreateNew = ({
  click,
  isVisible,
  data,
  setCompleted,
  completed,
}) => {
  function generateUniqueId(invoices) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let newId;
    do {
      let result = "";
      for (let i = 0; i < 2; i++) {
        result += characters.charAt(Math.floor(Math.random() * 26));
      }
      const randomNums = Math.floor(Math.random() * 9000) + 1000;
      newId = result + randomNums;
    } while (invoices.some((invoice) => invoice.id === newId));
    return newId;
  }

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  const defaultInfo = {
    id: generateUniqueId(data),
    createdAt: formattedDate,
    paymentDue: "",
    description: "",
    paymentTerms: 30,
    clientName: "",
    clientEmail: "",
    status: "draft",
    senderAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    clientAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    items: [
      {
        name: "",
        quantity: 0,
        price: 0,
        total: 0,
      },
    ],
    total: 0,
  };
  const [items, setItems] = useState([
    {
      name: "",
      quantity: 0,
      price: 0,
      total: 0,
    },
  ]);
  const [createInfo, setCreateInfo] = useState(defaultInfo);

  const handleInnerClick = (event) => {
    event.stopPropagation();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setCompleted(true);
    setCreateInfo({ ...createInfo, status: "pending" });
  };

  useEffect(() => {
    if (completed) {
      fetch(`${process.env.REACT_APP_IP}`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(createInfo),
      })
        .then((res) => {
          setCreateInfo(defaultInfo);
          setItems([
            {
              name: "",
              quantity: 0,
              price: 0,
              total: 0,
            },
          ]);
          click();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [completed]);

  const handleDraft = () => {
    setItems([
      {
        name: "",
        quantity: 0,
        price: 0,
        total: 0,
      },
    ]);
    setCompleted(true);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <form
          className="fixed inset-0 bg-[#00000081] overflow-y-auto cursor-pointer"
          onClick={click}
          onSubmit={handleSubmit}
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
            <h1 className="font-bold text-2xl mt-6 sm:mt-0">New Invoice</h1>
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
                    value={createInfo.senderAddress.street}
                    onChange={(e) =>
                      setCreateInfo({
                        ...createInfo,
                        senderAddress: {
                          ...createInfo.senderAddress,
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
                      value={createInfo.senderAddress.city}
                      onChange={(e) =>
                        setCreateInfo({
                          ...createInfo,
                          senderAddress: {
                            ...createInfo.senderAddress,
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
                      value={createInfo.senderAddress.postCode}
                      onChange={(e) =>
                        setCreateInfo({
                          ...createInfo,
                          senderAddress: {
                            ...createInfo.senderAddress,
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
                      value={createInfo.senderAddress.country}
                      onChange={(e) =>
                        setCreateInfo({
                          ...createInfo,
                          senderAddress: {
                            ...createInfo.senderAddress,
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
                    value={createInfo.clientName}
                    onChange={(e) =>
                      setCreateInfo({
                        ...createInfo,
                        clientName: e.target.value,
                      })
                    }
                  ></input>
                </div>

                <div>
                  <h2 className="invdue2">Client's Email</h2>
                  <input
                    className="w-full from05to04 invoice mt-2 pt-4 pb-3 px-5 rounded-[4px] text-[15px] font-bold "
                    placeholder="e.g. email@example.com"
                    required
                    value={createInfo.clientEmail}
                    onChange={(e) =>
                      setCreateInfo({
                        ...createInfo,
                        clientEmail: e.target.value,
                      })
                    }
                  ></input>
                </div>
                <div>
                  <h2 className="invdue2">Street Address</h2>
                  <input
                    className="w-full from05to04 invoice mt-2 pt-4 pb-3 px-5 rounded-[4px] text-[15px] font-bold"
                    required
                    value={createInfo.clientAddress.street}
                    onChange={(e) =>
                      setCreateInfo({
                        ...createInfo,
                        clientAddress: {
                          ...createInfo.clientAddress,
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
                      value={createInfo.clientAddress.city}
                      onChange={(e) =>
                        setCreateInfo({
                          ...createInfo,
                          clientAddress: {
                            ...createInfo.clientAddress,
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
                      value={createInfo.clientAddress.postCode}
                      onChange={(e) =>
                        setCreateInfo({
                          ...createInfo,
                          clientAddress: {
                            ...createInfo.clientAddress,
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
                      value={createInfo.clientAddress.country}
                      onChange={(e) =>
                        setCreateInfo({
                          ...createInfo,
                          clientAddress: {
                            ...createInfo.clientAddress,
                            country: e.target.value,
                          },
                        })
                      }
                    ></input>
                  </div>
                </div>
                <div className="sm:grid sm:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h2 className="invdue2">Invoice Date</h2>
                    <input
                      type="date"
                      className="w-full h-[54px] from05to04 invoice mt-2 pt-4 pb-3 px-5 rounded-[4px] text-[15px] font-bold"
                      required
                      onChange={(e) => {
                        const result = new Date(e.target.value);
                        result.setTime(
                          result.getTime() +
                            createInfo.paymentTerms * 24 * 60 * 60 * 1000
                        );
                        const formattedDate = result
                          .toISOString()
                          .substring(0, 10);
                        setCreateInfo({
                          ...createInfo,
                          createdAt: e.target.value,
                          paymentDue: formattedDate,
                        });
                      }}
                    ></input>
                  </div>
                  <div>
                    <h2 className="invdue2 mt-6 sm:mt-0">Payment Terms</h2>
                    <select
                      className="w-full from05to04 invoice mt-2 pt-4 pb-3 px-5 rounded-[4px] text-[15px] font-bold h-[54px]"
                      defaultValue={30}
                      onChange={(e) => {
                        let date = new Date(createInfo.createdAt);
                        date.setDate(
                          date.getDate() + parseInt(e.target.value, 10)
                        );
                        setCreateInfo({
                          ...createInfo,
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
                    placeholder="e.g. Graphic Design Service"
                    required
                    value={createInfo.description}
                    onChange={(e) =>
                      setCreateInfo({
                        ...createInfo,
                        description: e.target.value,
                      })
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
                setEditInfo={setCreateInfo}
                editInfo={createInfo}
              />
              <ItemsListPhone
                items={items}
                setItems={setItems}
                setEditInfo={setCreateInfo}
                editInfo={createInfo}
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
                <h1 className="text-[15px] font-bold invdue2 ">
                  + Add New Item
                </h1>
              </button>
            </div>
            <ActionButtons2
              click={click}
              defaultInfo={defaultInfo}
              setCreateInfo={setCreateInfo}
              setItems={setItems}
              handleDraft={handleDraft}
            />
          </motion.div>
          {isVisible && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.3, type: "tween" }}
              exit={{ x: "-100%" }}
              className="sm:hidden h-[90px] fromFto03 flex justify-center w-full fixed bottom-0 shadoww"
            >
              <ActionButtons2Phone
                handleInnerClick={handleInnerClick}
                click={click}
                defaultInfo={defaultInfo}
                setCreateInfo={setCreateInfo}
                setItems={setItems}
                handleDraft={handleDraft}
              />
            </motion.div>
          )}
        </form>
      )}
    </AnimatePresence>
  );
};
