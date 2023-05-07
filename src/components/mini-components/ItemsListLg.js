import { ReactComponent as DeleteIcon } from "../../assets/icon-delete.svg";

export const ItemsListLg = ({ items, setItems, editInfo, setEditInfo }) => {
  return (
    <table
      className="hidden sm:block w-full border-separate"
      style={{ borderSpacing: "14px 10px" }}
    >
      <thead className=" invdue2  mb-8">
        <tr className="h-[44px] text-[13px]">
          <th className="text-left font-medium" style={{ width: "50%" }}>
            Item Name
          </th>
          <th className="font-medium" style={{ width: "12%" }}>
            Qty.
          </th>
          <th className="font-medium" style={{ width: "30%" }}>
            Price
          </th>
          <th className="font-medium" style={{ width: "20%" }}>
            Total
          </th>
          <th>
            <div className="w-[16px]"></div>
          </th>
        </tr>
      </thead>
      <tbody>
        {items?.map((item, index) => (
          <tr key={index}>
            <td>
              <input
                className="w-full from05to04 invoice mt-2 pt-4 pb-3 px-5 rounded-[4px] text-[15px] font-bold"
                required
                value={item.name}
                onChange={(e) => {
                  const newItems = [...items];
                  newItems[index].name = e.target.value;
                  setItems(newItems);
                  setEditInfo({ ...editInfo, items: items });
                }}
              ></input>
            </td>
            <td className="flex justify-center">
              <input
                min="0"
                type="number"
                className="w-full from05to04 invoice mt-2 pt-4 pb-3  px-2 rounded-[4px] text-[15px] font-bold"
                required
                value={parseInt(item.quantity)}
                onChange={(e) => {
                  const newItems = [...items];
                  newItems[index].quantity = parseInt(e.target.value);
                  newItems[index].total = parseInt(e.target.value) * item.price;
                  setItems(newItems);
                  setEditInfo({ ...editInfo, items: items });
                  setEditInfo({
                    ...editInfo,
                    total: editInfo.items.reduce(
                      (acc, item) => acc + item.total,
                      0
                    ),
                  });
                }}
              ></input>
            </td>
            <td>
              <input
                type="number"
                min="0"
                step="0.01"
                className="w-full from05to04 invoice mt-2 pt-4 pb-3 px-5 rounded-[4px] text-[15px] font-bold"
                required
                value={parseFloat(item.price)}
                onChange={(e) => {
                  const newItems = [...items];
                  newItems[index].price = parseFloat(e.target.value);
                  newItems[index].total =
                    parseFloat(e.target.value) * item.quantity;
                  setItems(newItems);
                  setEditInfo({ ...editInfo, items: items });
                  setEditInfo({
                    ...editInfo,
                    total: editInfo.items.reduce(
                      (acc, item) => acc + item.total,
                      0
                    ),
                  });
                }}
              ></input>
            </td>
            <td>
              <h1 className="font-bold mt-2 text-center invdue2">
                {(item.quantity * item.price).toFixed(2)}
              </h1>
            </td>
            <td>
              <DeleteIcon
                fill="#888EB0"
                className=" h-[20px] mt-2 cursor-pointer hover:fill-[#EC5757] duration-200"
                onClick={() => {
                  const newItems = [...items];
                  newItems.splice(index, 1);
                  setItems(newItems);
                  setEditInfo({
                    ...editInfo,
                    items: newItems,
                    total: editInfo.total - item.total,
                  });
                }}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
