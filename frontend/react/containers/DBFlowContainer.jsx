import React from "react";
import DBFlow from "../components/DBFlow.jsx";
import DBQuery from "../components/DBQuery.jsx";
import { useSelector, useDispatch } from 'react-redux';
import { useGetDBSchemaQuery } from '../../dbSlice.js';
const DBFlowContainer = () => {
    // const count = useSelector((state) => state.database.value);
    // const dispatch = useDispatch();
    
    // Using a query hook automatically fetches data and returns query values
  //const { data, error, isLoading, isSuccess } = useGetDBSchemaQuery();
  
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

export default DBFlowContainer;