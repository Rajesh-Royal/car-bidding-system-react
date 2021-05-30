import React, { useState, useContext, useEffect } from "react";
import { Helmet } from "react-helmet";

import { BiddersList } from "../Components/BiddersList/BiddersList";
import Pagination from "../Components/BiddersList/components/Pagination";
import { CustomerDataProviderContext } from "../Context/CustomerListContext";
import Container from "../Container/Container";
import { PageTitle } from "../Components/Typography/Titles";

const Home = (props) => {
  const { value: customersList, setBiddingSortingOrder } = useContext(CustomerDataProviderContext);
  const [customers, setCustomers] = useState([]);
  const [selectedOption, setselectedOption] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [customersPerPage] = useState(7);

  useEffect(() => {
    if (customersList) setCustomers(customersList);
    setselectedOption("maxbid");
  }, [customersList]);

  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = customers?.slice(indexOfFirstCustomer, indexOfLastCustomer);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // sortData in asc and desc order.
  // revert the list on select.
  // ToDo: It makes select input wrong when switch screen and came back
  // Add check and according to that update state.
  const customersInAscendingOrderByBidAmount = (e) => {
    console.log(e);
    if (e === "minbid") {
      setCustomers(customers.reverse());
      setselectedOption("minbid");
    } else {
      setCustomers(customers.reverse());
      setselectedOption("maxbid");
    }
  };

  return (
    <Container>
      <Helmet>
        <title>CarBazaar - Dashboard</title>
      </Helmet>
      <div className="overflow-auto">
        <PageTitle className="text-center font-medium text-2xl">Bidders List</PageTitle>
        <div className="flex flex-col sm:flex-row items-center justify-between mb-2 px-4 py-2 bg-green-500 rounded-lg shadow-md ">
          <p className="text-white font-semibold">Filters</p>
          <div className="filter-container flex items-center space-x-4">
            <form>
              <select
                name="sort table"
                className="p-1 focus:outline-none dark:text-gray-200 dark:bg-gray-500 bg-transparent text-white"
                onChange={(e) => customersInAscendingOrderByBidAmount(e.target.value)}>
                <option value="maxbid" className="text-gray-400 dark:text-gray-200">
                  Maximum Bids
                </option>
                <option value="minbid" className="text-gray-400 dark:text-gray-200">
                  Minimum Bids
                </option>
              </select>
            </form>
            <div className="flex items-center mr-2">
              <label htmlFor="toggleB" className="flex items-center cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    id="toggleB"
                    className="sr-only"
                    onChange={(e) => setBiddingSortingOrder()}
                  />
                  <div className="block bg-gray-600 dark:bg-gray-500 w-10 h-6 rounded-full"></div>
                  <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="bidders-list">
        <div className="table-container min-h-min-table-height">
          <BiddersList customersList={currentCustomers} />
        </div>
        <Pagination
          customersPerPage={customersPerPage}
          totalCustomers={customers?.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </Container>
  );
};

export default React.memo(Home);
