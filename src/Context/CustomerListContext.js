import React, { useState, useEffect } from "react";
import { CustomersList } from "../Utils/CustomersLIst";

export const CustomerDataProviderContext = React.createContext();
const CustomerDataProvider = ({ children }) => {
  const [customerData, setCustomerData] = useState(null);

  useEffect(() => {
    CustomersList().then((data) => {
      setCustomerData(data);
    });
  }, []);

  const filterCustomersByMaxBid = () => {
    setCustomerData((prevCustomers) => {
      prevCustomers.sort();
    });
  };
  const filterCustomersByMinBid = () => {
    setCustomerData((prevCustomers) => {
      prevCustomers.sort((prv, next) => prv.id - next.id);
    });
  };
  return (
    <CustomerDataProviderContext.Provider
      value={{
        value: customerData,
        filterCustomersByMaxBid: filterCustomersByMaxBid,
        filterCustomersByMinBid: filterCustomersByMinBid,
      }}>
      {children}
    </CustomerDataProviderContext.Provider>
  );
};

export default CustomerDataProvider;
