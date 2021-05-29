import React, { useState, useContext, useEffect } from "react";
import { BiddersList } from "../Components/BiddersList/BiddersList";
import Pagination from "../Components/BiddersList/components/Pagination";
import { CustomerDataProviderContext } from "../Context/CustomerListContext";
import Container from "../Container/Container";

const Home = (props) => {
  const { value: customersList, setBiddingSortingOrder } = useContext(CustomerDataProviderContext);

  const [customers, setCustomers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [customersPerPage] = useState(7);

  useEffect(() => {
    if (customersList) setCustomers(customersList);
  }, [customersList]);

  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentPosts = customers.slice(indexOfFirstCustomer, indexOfLastCustomer);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // sortData in asc and desc order.

  console.log(currentPage);
  return (
    <Container>
      <div className="flex justify-between items-center">
        <h2 className="text-center font-medium text-2xl">Bidders List</h2>
        <div className="filters flex space-x-6 items-center">
          <p className="font-medium mr-4">Filters</p>
          <form>
            <select
              name="sort table"
              className="border p-1 focus:outline-none"
              onChange={() => null}>
              <option value="maxbid">Maximum Bid</option>
              <option value="minbid">Minimum Bid</option>
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
                <div className="block bg-gray-600 w-10 h-6 rounded-full"></div>
                <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="bidders-list">
        <div className="table-container min-h-min-table-height">
          <BiddersList customersList={currentPosts} />
        </div>
        <Pagination
          customersPerPage={customersPerPage}
          totalCustomers={customers.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </Container>
  );
};

export default Home;
