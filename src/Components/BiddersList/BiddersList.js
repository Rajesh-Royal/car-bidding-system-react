import React from "react";
import Bidder from "./components/Bidder";

export const BiddersList = ({ customersList }) => {
  return (
    <table className="table-fixed">
      <thead>
        <tr className="text-left bg-blue-300 border">
          <th className="px-4 py-2 text-emerald-600 w-1/2">Name</th>
          <th className="px-4 py-2 text-emerald-600 w-1/5">Email</th>
          <th className="px-4 py-2 text-emerald-600 w-1/4">Phone</th>
          <th className="px-4 py-2 text-emerald-600 w-1/4">Premium</th>
          <th className="px-4 py-2 text-emerald-600 w-1/4">Max/Min bid</th>
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
