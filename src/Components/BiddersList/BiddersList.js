import React, { useContext } from "react";
import { CustomerDataProviderContext } from "../../Context/CustomerListContext";
import Bidder from "./components/Bidder";

export const BiddersList = () => {
  const { value: customersList } = useContext(CustomerDataProviderContext);
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2 text-emerald-600">Name</th>
          <th className="px-4 py-2 text-emerald-600">Email</th>
          <th className="px-4 py-2 text-emerald-600">Phone</th>
          <th className="px-4 py-2 text-emerald-600">Premium</th>
          <th className="px-4 py-2 text-emerald-600">Max/Min bid</th>
        </tr>
      </thead>
      <tbody>
        {customersList
          ? customersList?.map((customer, index) => {
              if (!customer?.firstname) return;
              return <Bidder customer={customer} key={customer.id} />;
            })
          : "Loading..........."}
      </tbody>
    </table>
  );
};
