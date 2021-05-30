import React, { useState, useContext, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet";

import { BiddersList } from "../Components/BiddersList/BiddersList";
import Pagination from "../Components/BiddersList/components/Pagination";
import { CustomerDataProviderContext } from "../Context/CustomerListContext";
import Container from "../Container/Container";
import { PageTitle } from "../Components/Typography/Titles";
import { Filter } from "react-feather";
import Filters from "../Components/Filters";

const Home = (props) => {
  const { value: customersList, setBiddingSortingOrder } = useContext(CustomerDataProviderContext);

  const [customers, setCustomers] = useState([]);
  const [selectedOption, setselectedOption] = useState("maxbid");
  const [currentPage, setCurrentPage] = useState(1);
  const [customersPerPage] = useState(7);

  useEffect(() => {
    // Its an ugly hack but It works.
    // On rerender of component It will update customers state again.
    // Assigning customersList only will not cause table to rerender.
    if (customersList) setCustomers([...customersList, { id: "render" }]);
  }, [customersList]);

  // slice customers data for paging
  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = customers?.slice(indexOfFirstCustomer, indexOfLastCustomer);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // sortData in asc and desc order.
  // revert the list on select.
  const customersInAscendingOrderByBidAmount = useCallback(
    (e) => {
      if (e === "minbid") {
        setCustomers(customers.reverse());
        setselectedOption("minbid");
      }
      if (e === "maxbid") {
        setCustomers(customers.reverse());
        setselectedOption("maxbid");
      }
    },
    [customers]
  );

  return (
    <Container>
      <Helmet>
        <title>CarBazaar - Dashboard</title>
      </Helmet>
      <div className="overflow-auto">
        <PageTitle className="text-center font-medium text-2xl">Bidders List</PageTitle>
        <Filters
          customersInAscendingOrderByBidAmount={customersInAscendingOrderByBidAmount}
          selectedOption={selectedOption}
        />
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

export default Home;
