import { InvoicesLg } from "./mini-components/InvoicesLg";
import { InvoicesPhone } from "./mini-components/InvoicesPhone";

export const Invoices = ({data}) => {

  return (
    <div>
      <InvoicesLg data={data}/>
      <InvoicesPhone data={data}/>
    </div>
    
  );
}