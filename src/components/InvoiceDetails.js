export const InvoiceDetails = ({ invData }) => {
  return (
    <div className="flex flex-col invoice mt-4 sm:mt-6 rounded-[8px] p-6 sm:p-8 lg:p-12 text-[13px] mb-32 sm:mb-20">
      <div className="flex flex-col sm:flex-row sm:justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-[15px]">
            <span className="text-[#888EB0]">#</span>
            {invData.id}
          </h1>
          <h2 className="invdue2">{invData.description}</h2>
        </div>

        {invData.senderAddress && (
          <div className="invdue2 mt-[30px] sm:mt-0 flex flex-col sm:text-right">
            <h2>{invData.senderAddress.street}</h2>
            <h2>{invData.senderAddress.city}</h2>
            <h2>{invData.senderAddress.postCode}</h2>
            <h2>{invData.senderAddress.country}</h2>
          </div>
        )}
      </div>

      <div className="mt-[30px] grid gap-[60px] grid-cols-2 sm:grid-cols-3 max-w-[524px]">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            <h2 className="invdue2">Invoice Date</h2>
            <h1 className="text-[15px] font-bold">
              {new Date(invData.createdAt).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </h1>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="invdue2">Payment Due</h2>
            <h1 className="text-[15px] font-bold">
              {new Date(invData.paymentDue).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </h1>
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="invdue2 mb-3">Bill to</h2>
          <h1 className="text-[15px] font-bold mb-2">{invData.clientName}</h1>

          {invData.clientAddress && (
            <div>
              <h2 className="invdue2">{invData.clientAddress.street}</h2>
              <h2 className="invdue2">{invData.clientAddress.city}</h2>
              <h2 className="invdue2">{invData.clientAddress.postCode}</h2>
              <h2 className="invdue2">{invData.clientAddress.country}</h2>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="invdue2">Sent to</h2>
          <h1 className="font-bold text-[15px]">{invData.clientEmail}</h1>
        </div>
      </div>
      <div className="sm:hidden">
        <div className="p-6 sm:p-8 fromF9to04 mt-10 rounded-t-[8px]">
          <div className="flex flex-col gap-6">
            {invData.items &&
              invData.items.map((item, key) => {
                return (
                  <div key={key} className="flex justify-between items-center">
                    <div>
                      <h1 className="font-bold text-[15px]">{item.name}</h1>
                      <h1 className="font-bold invdue2 text-[15px]">
                        {item.quantity} x £ {item.price.toFixed(2)}
                      </h1>
                    </div>

                    <h1 className="font-bold text-[15px]">
                      £ {item.total.toFixed(2)}
                    </h1>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="h-20 p-6 sm:p-8 from373to08 flex items-center justify-between rounded-b-[8px] text-white">
          <span>Grand Total</span>
          <h1 className="text-2xl font-bold">£ {invData.total.toFixed(2)}</h1>
        </div>
      </div>

      <div className="hidden sm:flex flex-col">
        <div className="p-8 fromF9to04 mt-10 rounded-t-[8px]">
          <table className="w-full gap-3" >
            <thead className=" invdue2  mb-8">
              <tr className="h-[44px]">
                <th className="text-left font-medium">Item Name</th>
                <th className="font-medium">QTY.</th>
                <th className="font-medium">Price</th>
                <th className="font-medium text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {invData.items &&
                invData.items.map((item, key) => {
                  return (
                    <tr key={key} className="font-bold text-[15px] h-[44px]">
                      <td className="text-[15px]">{item.name}</td>
                      <td className="text-center invdue2">{item.quantity}</td>
                      <td className="text-center invdue2">£ {item.price.toFixed(2)}</td>
                      <td className="text-right">£ {item.total.toFixed(2)}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className="h-20 p-6 sm:p-8 from373to08 flex items-center justify-between rounded-b-[8px] text-white">
          <span>Amount Due</span>
          <h1 className="text-2xl font-bold">£ {invData.total.toFixed(2)}</h1>
        </div>
      </div>
    </div>
  );
};
