import arrow from "../../assets/icon-arrow-right.svg";
import { useNavigate } from "react-router-dom";

export const InvoicesLg = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="hidden sm:flex flex-col gap-4 sm:mt-[55px] lg:mt-16 mb-16">
      {data ?
        data.map((invoice) => (
          <div
            className="flex cursor-pointer shadow invoice sm:h-[72px] w-full rounded-[8px] items-center justify-between sm:pl-[24px] lg:pl-[32px] text-[15px] pr-6 font-medium hover:outline hover:outline-purple hover:outline-2"
            onClick={() => navigate(`/${invoice.id}`)}
            key={invoice.id}
          >
            <h1 className="font-bold" style={{ width: "12%" }}>
              <span className="text-[#7E88C3]">#</span>
              {invoice.id}
            </h1>

            <h2
              className="text-[13px] invdue2 flex gap-[6px]"
              style={{ width: "20%" }}
            >
              <span className="text-[13px] invdue1">Due</span>
              {new Date(invoice.paymentDue).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </h2>

            <h2 className="text-[13px] clientname" style={{ width: "18%" }}>
              {invoice.clientName}
            </h2>

            <h1 className="font-bold text-right" style={{ width: "15%" }}>
              £{" "}
              {invoice.total.toLocaleString("en-GB", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </h1>

            <div
              className="flex justify-center items-center gap-5"
              style={{ width: "auto" }}
            >
              <div
                className={`h-10 w-[104px] font-bold flex gap-2 justify-center rounded-[6px] items-center ${
                  invoice.status === "paid"
                    ? "bg-[#33d6a015] text-[#33D69F]"
                    : invoice.status === "pending"
                    ? "bg-[#ff910013] text-[#FF8F00]"
                    : "draft"
                }`}
              >
                <div
                  className={`w-2 h-2 mb-1 rounded-full ${
                    invoice.status === "paid"
                      ? " bg-[#33D69F]"
                      : invoice.status === "pending"
                      ? "bg-[#FF8F00]"
                      : "draftt"
                  }`}
                ></div>
                <h1 className="capitalize">{invoice.status}</h1>
              </div>
              <img src={arrow} className="w-[6px] h-[10px]" alt="" />
            </div>
          </div>
        )) : <div>Loading...</div>}

    </div>
  );
};
