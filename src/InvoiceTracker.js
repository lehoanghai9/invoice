import { Empty } from "./components/Empty";
import { Invoices } from "./components/Invoices";
import { Summary } from "./components/Summary";
import { useState, useEffect } from "react";
import { CreateNew } from "./components/CreateNew";
import { PopUp } from "./components/mini-components/PopUp";
import Ip from "./Ip";

export const InvoiceTracker = () => {
  const [data, setData] = useState(null);
  const [newInvoice, setNewInvoice] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [filters, setFilters] = useState({
    draft: true,
    pending: true,
    paid: true,
  });
  const filterKeys = ["draft", "pending", "paid"];
  const activeFilters = filterKeys.filter((key) => filters[key]);


  useEffect(() => {
    fetch(`${process.env.REACT_APP_IP}`)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setData(
          resp.invoice.filter((invoice) => {
            return activeFilters.includes(invoice.status);
          })
        );
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [filters, newInvoice]);

  useEffect(() => {
    let timeout;
    if (completed) {
      timeout = setTimeout(() => {
        setCompleted(false);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [completed]);

  const handleNewInvoice = () => {
    var body = document.body;
    body.classList.toggle("disable-scroll");
    setNewInvoice(!newInvoice);
  };

  return (
    <div
      className={`w-full flex flex-col max-w-[720px] mt-[104px] transition-colors duration-300 sm:mt-36 lg:mt-20`}
    >
      <Summary
        data={data}
        click={handleNewInvoice}
        filters={filters}
        setFilters={setFilters}
        activeFilters={activeFilters}
      />
      <Empty data={data} />
      <PopUp text={"Invoice Created"} completed={completed} color={"#7C5DFA"} />
      <Invoices data={data} />
      {data && (
        <CreateNew
          click={handleNewInvoice}
          isVisible={newInvoice}
          data={data}
          setCompleted={setCompleted}
          completed={completed}
        />
      )}
    </div>
  );
};
