import React from "react";
import DBFlow from "../components/DBFlow.jsx";
import DBQuery from "../components/DBQuery.jsx";
import { useSelector, useDispatch } from 'react-redux';

const DBFlowContainer = () => {
    // const count = useSelector((state) => state.database.value);
    // const dispatch = useDispatch();

    return (     
        <div className="chart-page-container">
            <DBQuery/>
            <DBFlow/>
        </div>
    )
}

export default DBFlowContainer;