import React from "react";
import ThemedSuspense from "../ThemedSuspense";
import Bidder from "./components/Bidder";

export const BiddersList = ({ customersList }) => {
  return (
    <React.Fragment>
      <div className="flex flex-col">
        <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 dark:border-gray-600 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-500 customer-table">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr className="text-left text-xs font-base text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    <th scope="col" className="px-12 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                      Premium
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                      Phone
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                      Max/Min Bid
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-600 dark:divide-gray-600">
                  {customersList?.length > 0 ? (
                    customersList?.map((customer, index) => {
                      if (!customer?.firstname) return;
                      return <Bidder customer={customer} key={customer.id} />;
                    })
                  ) : (
                    <React.Fragment>
                      <tr className="text-center animate-pulse">
                        <td colSpan="5" className="h-16"></td>
                      </tr>
                      <tr className="text-center animate-pulse">
                        <td colSpan="5" className="h-16 bg-gray-200"></td>
                      </tr>
                      <tr className="text-center animate-pulse">
                        <td colSpan="5" className="h-16"></td>
                      </tr>
                      <tr className="text-center animate-pulse">
                        <td colSpan="5" className="h-16 bg-gray-200"></td>
                      </tr>
                    </React.Fragment>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
