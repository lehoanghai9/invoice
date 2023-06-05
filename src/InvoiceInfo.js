import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { DetailsMenu } from "./components/mini-components/DetailsMenu";
import { InvoiceStatus } from "./components/InvoiceStatus";
import { InvoiceGoBack } from "./components/InvoiceGoBack";
import { InvoiceDetails } from "./components/InvoiceDetails";
import { Edit } from "./components/Edit";
import { Deletion } from "./components/Deletion";
import { PopUp } from "./components/mini-components/PopUp";
import Ip from "./Ip"

export const InvoiceInfo = () => {
  const { id } = useParams();
  const [edit, setEdit] = useState(false);
  const [invData, setInvData] = useState(null);
  const [remove, setRemove] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_IP}/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setInvData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id, edit, completed]);

  const handleEdit = () => {
    var body = document.body;
    body.classList.toggle("disable-scroll");
    setEdit(!edit);
  };

  const handleRemoveClick = () => {
    setRemove(!remove);
  };

  useEffect(() => {
    let timeout;
    if (completed) {
      timeout = setTimeout(() => {
        setCompleted(false);
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [completed]);

  return (
    invData && (
      <div
        className={`w-full flex flex-col max-w-[720px] mt-[104px] transition-colors duration-300 sm:mt-36 lg:mt-20`}
      >
        <InvoiceGoBack />

        <InvoiceStatus
          invData={invData}
          click={handleEdit}
          removeClick={handleRemoveClick}
          remove={remove}
          setCompleted={setCompleted}
          setInvData={setInvData }
          completed={completed}
        />

        <Deletion remove={remove} removeClick={handleRemoveClick} id={id} />

        <PopUp text={"Changes Saved"} completed={completed} color={"#7C5DFA"} />
        <InvoiceDetails invData={invData} />
        <Edit
          click={handleEdit}
          isVisible={edit}
          invData={invData}
          invId={id}
          setCompleted={setCompleted}
          completed={completed}
        />
        {!edit && (
          <DetailsMenu
            invData={invData}
            click={handleEdit}
            removeClick={handleRemoveClick}
            remove={remove}
            setInvData={setInvData}
            setCompleted={setCompleted}
          />
        )}
      </div>
    )
  );
};
