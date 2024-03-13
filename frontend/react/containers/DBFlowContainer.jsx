import React from "react";
import DBFlow from "../components/DBFlow.jsx";
import DBQuery from "../components/DBQuery.jsx";
import { useSelector, useDispatch } from 'react-redux';
import { useConnectMutation } from '../../apiSlice.js';

const DBFlowContainer = () => {
    // const count = useSelector((state) => state.database.value);
    // const dispatch = useDispatch();
    
    // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading, isSuccess } = useConnectMutation();

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error: {error}</div>
  }

  if (isSuccess && data) {
    return (     
       
        <div>
        {/* {data.isLoading ? (
          <>Loading...</> */}
        {/* ) : isSuccess ? ( // if query is status: success, render components, pass data on props down to DBFlow */}
        <div className="chart-page-container">
            <DBQuery/>
            <DBFlow/>
            {/* <DBFlow dbSchema={data}/> */}
        </div>
        {/* ) : null } */}
      </div>
    )
  }
}

export default DBFlowContainer;