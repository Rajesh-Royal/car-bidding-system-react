import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CustomerDataProviderContext } from "../../../Context/CustomerListContext";

const Bidder = ({ customer }) => {
  const [bid, setBid] = useState(null);
  const { sortByMin } = useContext(CustomerDataProviderContext);
  const BidsIncremental = customer.bids.sort((prevBid, nextBid) => nextBid.amount - prevBid.amount);
  useEffect(() => {
    setBid(BidsIncremental[0]?.amount);
  }, []);

  useEffect(() => {
    !sortByMin
      ? setBid(BidsIncremental[0]?.amount)
      : setBid(BidsIncremental[BidsIncremental?.length - 1]?.amount);
  }, [sortByMin]);

  return (
    <tr className="bg-gray-200 border border-blue-300">
      <td>
        <Link
          to={{
            pathname: `/${customer.firstname}-${customer.lastname}/${customer.id}`,
            userId: customer.id,
          }}
          className=" px-4 py-2 flex space-x-4 items-center">
          <img src={customer.avatarUrl} alt="customer" className="rounded-full max-w-avatar-size" />
          <p className="capitalize">
            {customer.firstname} {customer.lastname}
          </p>
        </Link>
      </td>
      <td className=" px-4 py-2">{customer.email}</td>
      <td className=" px-4 py-2">{customer.phone}</td>
      <td className=" px-4 py-2">{customer.hasPremium ? "Yes" : "No"}</td>
      <td className=" px-4 py-2">{bid || "No Bids"} </td>
    </tr>
  );
};

export default Bidder;
