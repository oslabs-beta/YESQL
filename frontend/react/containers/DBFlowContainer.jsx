import React from "react";
import DBFlow from "../components/DBFlow.jsx";
import { useSelector, useDispatch } from 'react-redux';

const DBFlowContainer = () => {
    // const count = useSelector((state) => state.database.value);
    // const dispatch = useDispatch();

    return (     
        <DBFlow/>
    )
}

export default DBFlowContainer;