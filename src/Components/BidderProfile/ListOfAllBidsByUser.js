import React from "react";
import { UnixTimestampToLocalDate } from "../../Utils/UnixTimestampToLocalDate";

const ListOfAllBidsByUser = ({ bidsList }) => {
  if (!bidsList) return <p>Loading......</p>;
  return (
    <div className="flex flex-col mt-5">
      <div className="shadow overflow-hidden border-b border-gray-200 dark:border-gray-500 sm:rounded-lg"></div>
      <table className="max-w-4xl mx-auto my-8 divide-gray-200 customer-table shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <thead className="bg-gray-50 dark:bg-gray-700">
          <tr className="text-left text-xs font-base text-gray-500 dark:text-gray-200 uppercase tracking-wider">
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Bid Id
            </th>
            <th scope="col" className="px-6 py-3 ">
              Car Model
            </th>
            <th scope="col" className="px-6 py-3 ">
              Bid Amount
            </th>
            <th scope="col" className="px-6 py-3 ">
              Bid Date
            </th>
          </tr>
        </thead>
        <tbody>
          {bidsList?.map((bid, index) => {
            return (
              <tr
                className="bg-gray-200 text-sm text-gray-500 dark:text-gray-400 dark:bg-gray-600"
                key={bid.id}>
                <td className=" px-8 py-4">{index + 1}</td>
                <td className=" px-8 py-4">{bid.id}</td>
                <td className=" px-8 py-4">{bid.carTitle}</td>
                <td className=" px-8 py-4">{bid.amount}</td>
                <td className=" px-8 py-4">{UnixTimestampToLocalDate(bid.created)} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListOfAllBidsByUser;
