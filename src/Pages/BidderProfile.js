import React, { useContext, useEffect, useState } from "react";
import ListOfAllBidsByUser from "../Components/BidderProfile/ListOfAllBidsByUser";
import Container from "../Container/Container";
import { CustomerDataProviderContext } from "../Context/CustomerListContext";

const BidderProfile = (props) => {
  const { value: customers } = useContext(CustomerDataProviderContext);
  const [customerProfile, setCustomerProfile] = useState([]);
  useEffect(() => {
    if (customers)
      setCustomerProfile(
        customers?.filter((customer) => customer?.id === props.match.params.userId)[0]
      );
  }, [customers, props.match.params?.userId]);
  //   console.log(customerProfile);
  //   console.log(props.match.params.userId);
  //   console.log(props.location.userId);
  return (
    <Container>
      <div className="flex flex-col items-center justify-center space-y-4 mt-5">
        <img
          src={customerProfile?.avatarUrl}
          alt={customerProfile?.firstname}
          className="rounded-full shadow-md border p-3 dark:border-gray-700 dark:shadow-lg"
        />
        <h2 className="font-medium text-xl dark:text-gray-200">
          {customerProfile?.firstname} {customerProfile?.lastname}
        </h2>
      </div>
      <ListOfAllBidsByUser bidsList={customerProfile?.bids} />
    </Container>
  );
};

export default BidderProfile;
