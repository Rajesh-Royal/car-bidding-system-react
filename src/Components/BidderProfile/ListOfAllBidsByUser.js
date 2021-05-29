import React from "react";
import { UnixTimestampToLocalDate } from "../../Utils/UnixTimestampToLocalDate";

const ListOfAllBidsByUser = ({ bidsList }) => {
  if (!bidsList) return <p>Loading......</p>;
  return (
    <table className="max-w-4xl mx-auto my-14 table-fixed">
      <thead>
        <tr className="border border-blue-300 bg-blue-400 text-gray-50">
          <td className="w-1/4 px-4 py-2 border">Bid Id</td>
          <td className="w-1/4 px-4 py-2 border">Car Model</td>
          <td className="w-1/4 px-4 py-2 border">Bid Amount</td>
          <td className="w-1/4 px-4 py-2 border">Bid Date</td>
        </tr>
      </thead>
      <tbody>
        {bidsList?.map((bid) => {
          return (
            <tr className="bg-gray-200 hover:bg-gray-300" key={bid.id}>
              <td className=" px-4 py-2 border border-gray-300">{bid.id}</td>
              <td className=" px-4 py-2  border border-gray-300">{bid.carTitle}</td>
              <td className=" px-4 py-2 border border-gray-300">{bid.amount}</td>
              <td className=" px-4 py-2 border border-gray-300">
                {UnixTimestampToLocalDate(bid.created)}{" "}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ListOfAllBidsByUser;
