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
    const [selectedColumns, setSelectedColumns] = useState([]);
    const handleClick = (column) => {
        const index = selectedColumns.indexOf(column);
        if (index === -1) {
            setSelectedColumns([...selectedColumns, column])
        } else {
            const updatedColumns = [...selectedColumns];
            updatedColumns.splice(index, 1);
            setSelectedColumns(updatedColumns);
        }
    }
    
    return (
        <div className="on-columns-modal">
            <h3>{`Select which columns you'd like to connect ${currentParent} and ${addedParent}`}</h3>
            <div className="tableOne">
            <h3>{currentParent}</h3>
            { tableOne.columns.map((column, index) => (
                <button
                    className={`${selectedColumns.includes(column) ? 'flowButton clicked' : 'flowButton'}`}
                 key={index}
                 onClick={() => handleClick(column, currentParent)}
                >
                {column}
                </button>
            ))}
            </div>
            <h1>ON</h1>
            <div className="tableTwo">
                <h3>{addedParent}</h3>
                {tableTwo.columns.map((column, index) => (
                    <button
                        className={`${selectedColumns.includes(column) ? 'flowButton clicked' : 'flowButton'}`}
                        key={index}
                        onClick={() => handleClick(column, addedParent)}
                    >
                        {column}
                    </button>
                ))}
            </div>


        </div>
    );
};

export default OnColumnsModal;