import React from "react";
import DBFlow from "../components/DBFlow.jsx";
import DBQuery from "../components/DBQuery.jsx";
import { useSelector, useDispatch } from 'react-redux';
import { useConnectMutation } from '../../apiSlice.js';

const DBFlowContainer = () => {
    // const count = useSelector((state) => state.database.value);
    // const dispatch = useDispatch();
    
    // Using a query hook automatically fetches data and returns query values
  const [postConnect, { data, error, isLoading, isSuccess }] = useConnectMutation({
    fixedCacheKey: 'databaseSchema',
  });

  console.log('data', data);
  //conditional rendering below:
    return (     
        <div>
        {isLoading ? (
          <>Loading...</>
          // ({*/ if query is status: success, render components, pass data on props down to DBFlow /*} /
          ): isSuccess ? (
          <div className="chart-page-container">
            <DBQuery/>
            {/* //pass down data (from post) on props:*/}
            <DBFlow data={data} />
          </div>
        ) : null };
      </div>
    )
  }
export default DBFlowContainer;