import React from "react";

const Bidder = ({ customer }) => {
  return (
    <tr className="bg-gray-200 border border-red-200">
      <td className=" px-4 py-2 flex space-x-4 items-center">
        <img src={customer.avatarUrl} alt="customer" className="rounded-full max-w-avatar-size" />
        <p className="capitalize">
          {customer.firstname} {customer.lastname}
        </p>
      </td>
      <td className=" px-4 py-2">{customer.email}</td>
      <td className=" px-4 py-2">{customer.phone}</td>
      <td className=" px-4 py-2">{customer.hasPremium}</td>
      <td className=" px-4 py-2">{customer.email}</td>
    </tr>
  );
};

export default Bidder;
