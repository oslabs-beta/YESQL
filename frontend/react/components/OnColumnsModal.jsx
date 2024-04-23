import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

// get the addparent and currentparent from state with useSelector
// iterate through these and display two tables with columns in modal
// add ON with some info below
// dispatch the selections with desired join to query

//render table 1 and Table 2 in ERD with "on" between
const OnColumnsModal = () => {

    const { currentParent, addedParent, selectedJoin } = useSelector((state) => state.queryReducer);
    const tableOne = useSelector((state) => state.api.mutations.databaseSchema.data[addedParent]);
    const tableTwo = useSelector((state) => state.api.mutations.databaseSchema.data[currentParent]);
    console.log(tableOne.columns, '<-- tableOne')
    console.log(tableTwo, '<-- tableTwo')
    console.log(currentParent, '<-- currentParent')
    console.log(addedParent, '<-- addParent')
    console.log(selectedJoin, '<-- selectedJoin')
    return (
        <div className="on-columns-modal">
            <div>
            <h3>{currentParent}</h3>
            { tableOne.columns.map((column, index) => (
                <button
                 className="flowButton"
                 key={index}
                >
                {column}
                </button>
            ))}
            </div>
            <h1>ON</h1>
            <div>
                <h3>{addedParent}</h3>
                {tableTwo.columns.map((column, index) => (
                    <button
                        className="flowButton"
                        key={index}
                    >
                        {column}
                    </button>
                ))}
            </div>


        </div>
    );
};

export default OnColumnsModal;