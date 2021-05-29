import React, { useState, useContext, useEffect } from "react";
import { BiddersList } from "../Components/BiddersList/BiddersList";
import Pagination from "../Components/BiddersList/components/Pagination";
import { CustomerDataProviderContext } from "../Context/CustomerListContext";
import Container from "../Container/Container";

const Home = (props) => {
  const { value: customersList, setBiddingSortingOrder } = useContext(CustomerDataProviderContext);

  const [customers, setCustomers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [customersPerPage] = useState(10);

  useEffect(() => {
    if (customersList) setCustomers(customersList);
  }, [customersList]);

  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentPosts = customers.slice(indexOfFirstCustomer, indexOfLastCustomer);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <div className="flex justify-between items-center">
        <h2 className="text-center font-medium text-2xl">Bidders List</h2>
        <div className="flex items-center mb-2 mr-2">
          <label htmlFor="toggleB" className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                id="toggleB"
                className="sr-only"
                onChange={(e) => setBiddingSortingOrder()}
              />
              <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
              <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
            </div>
          </label>
        </div>
      </div>
      <div className="bidders-list">
        <BiddersList customersList={currentPosts} />
        <Pagination
          customersPerPage={customersPerPage}
          totalCustomers={customers.length}
          paginate={paginate}
        />
      </div>
    </Container>
  );
};

export default Home;
