import { useNavigate } from "react-router-dom";


export const InvoicesPhone = ({data}) => {

  const navigate = useNavigate()

  return(
    <div className="flex sm:hidden flex-col gap-4 my-8 ">
      {data &&
      data.map((invoice) => (
        <div key={invoice.id} className="flex cursor-pointer shadow invoice w-full rounded-[8px] justify-between h-[134px] text-[15px] p-6 font-medium hover:outline hover:outline-purple hover:outline-2"
        onClick={() => navigate(`/${invoice.id}`)}>

          <div className="flex flex-col justify-between ">
            <h1 className="font-bold">
              <span className="text-[#7E88C3]">#</span>{invoice.id}
            </h1>

            <div>
            <h2 className="text-[13px] invdue2 flex gap-[6px] mb-[9px]"> 
              <span className="text-[13px] invdue1">Due</span>
              {new Date(invoice.paymentDue).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
              </h2>

              <h1 className="font-bold" >
          £ {invoice.total.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </h1>
            </div>

          </div>

          <div className="flex flex-col justify-between">
          <h2 className="text-[13px] clientname text-right">{invoice.clientName}</h2>

          <div className="flex justify-center items-center gap-5" >
          <div className={`h-10 w-[104px] font-bold flex gap-2 justify-center rounded-[6px] items-center ${invoice.status === "paid" ? "bg-[#33d6a015] text-[#33D69F]" : invoice.status === "pending" ? "bg-[#ff910013] text-[#FF8F00]" : "draft" }`}>
            <div className={`w-2 h-2 mb-1 rounded-full ${invoice.status === "paid" ? " bg-[#33D69F]" : invoice.status === "pending" ? "bg-[#FF8F00]" : "draftt" }`}>
            </div>
            <h1 className="capitalize">{invoice.status}</h1>
          </div>
        </div>
          </div>    
      </div>
      ))}
    </div>
    )
}