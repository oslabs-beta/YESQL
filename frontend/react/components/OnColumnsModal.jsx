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
    const [clicked, setClicked] = useState([]);
    const handleClick = (data) => {
        if (clicked.length === 0) {
            setClicked.push(data);
        } else {
            setClicked(false);
        }
    }
    
    return (
        <div className="on-columns-modal">
            <h3>{`Select which columns you'd like to connect ${currentParent} and ${addedParent}`}</h3>
            <div className="tableOne">
            <h3>{currentParent}</h3>
            { tableOne.columns.map((column, index) => (
                <button
                className={`${clicked.includes(column) ? 'flowButton clicked' : 'flowButton'}`}
                 key={index}
                 onClick={() => handleClick(column)}
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
                        className={`${clicked.includes(column) ? 'flowButton clicked' : 'flowButton'}`}
                        key={index}
                        onClick={() => handleClick(column)}
                    >
                        {column}
                    </button>
                ))}
            </div>


        </div>
    );
};

export default OnColumnsModal;