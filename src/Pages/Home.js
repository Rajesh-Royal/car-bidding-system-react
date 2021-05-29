import React from "react";
import { BiddersList } from "../Components/BiddersList/BiddersList";

const Home = () => {
  return (
    <React.Fragment>
      <div className="flex justify-between items-center">
        <h2 className="text-center font-medium text-2xl">Bidders List</h2>
        <div className="flex items-center">
          <p className="text-md">Sort by</p>
          <form>
            <select name="sort-customer">
              <option value="max">Max</option>
              <option value="min">Min</option>
            </select>
          </form>
        </div>
      </div>
      <div className="bidders-list">
        <BiddersList />
      </div>
    </React.Fragment>
  );
};

export default Home;
