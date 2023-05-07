import { ActionButtons } from "./mini-components/ActionButtons"


export const InvoiceStatus = ({invData, click, remove, removeClick,setInvData, setCompleted, completed}) => {
  return(
    <div className="invoice sm:flex p-6 sm:px-8 rounded-[8px] mt-[31px] justify-between">
          <div className="flex justify-between text-[15px] items-center">
            <span className="text-[13px] text-[#858BB2] sm:mr-5">Status</span>
            <div
              className={`h-10 w-[104px] font-bold flex gap-2 justify-center rounded-[6px] items-center ${
                invData.status === "paid"
                  ? "bg-[#33d6a015] text-[#33D69F]"
                  : invData.status === "pending"
                  ? "bg-[#ff910013] text-[#FF8F00]"
                  : "draft"
              }`}
            >
              <div
                className={`w-2 h-2 mb-1 rounded-full ${
                  invData.status === "paid"
                    ? " bg-[#33D69F]"
                    : invData.status === "pending"
                    ? "bg-[#FF8F00]"
                    : "draftt"
                }`}
              ></div>
              <h1 className="capitalize">{invData.status}</h1>
            </div>
          </div>

          <ActionButtons invData={invData} click={click} removeClick={removeClick} remove={remove} setCompleted={setCompleted} setInvData={setInvData}
          completed={completed}/>
        </div>
  )
}