import { ReactComponent as DeleteIcon } from "../../assets/icon-delete.svg";

export const ItemsListPhone = ({ items, setItems, editInfo, setEditInfo }) => {
  return (
    <div className="sm:hidden mt-[22px] flex flex-col gap-[49px]">
      {items?.map((item, index) => {
        return (
          <div key={index} className="flex flex-col gap-6">
            <div>
              <h2 className="text-[13px] invdue2">Item Name</h2>
              <input
                className="w-full from05to04 invoice mt-2 pt-4 pb-3 px-5 rounded-[4px] text-[15px] font-bold"
                value={item.name}
                onChange={(e) => {
                  const newItems = [...items];
                  newItems[index].name = e.target.value;
                  setItems(newItems);
                  setEditInfo({ ...editInfo, items: items });
                }}
              ></input>
            </div>
            <div className="flex gap-4">
              <div className="w-[22%]">
                <h2 className="text-[13px] invdue2">Qty.</h2>
                <input
                  className="w-full from05to04 invoice mt-2 pt-4 pb-3 px-5 rounded-[4px] text-[15px] font-bold"
                  min="0"
                  type="number"
                  value={parseInt(item.quantity)}
                  onChange={(e) => {
                    const newItems = [...items];
                    newItems[index].quantity = parseInt(e.target.value);
                    newItems[index].total =
                      parseInt(e.target.value) * item.price;
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
              </div>
              <div className="w-[35%]">
                <h2 className="text-[13px] invdue2">Price</h2>
                <input
                  className="w-full from05to04 invoice mt-2 pt-4 pb-3 px-5 rounded-[4px] text-[15px] font-bold"
                  min="0"
                  type="number"
                  step="0.01"
                  value={parseFloat(item.price)}
                  required
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
              </div>
              <div className="w-[30%]">
                <h2 className="text-[13px] invdue2">Total</h2>
                <h1 className="font-bold mt-6 invdue2">
                  {(item.quantity * item.price).toFixed(2)}
                </h1>
              </div>
              <div className="w-[10%]">
                <DeleteIcon
                  fill="#888EB0"
                  className="w-[12px] h-[14px] mt-12 cursor-pointer hover:fill-[#EC5757] duration-200"
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
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
