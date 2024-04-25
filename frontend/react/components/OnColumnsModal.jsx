import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addJoin } from '../../querySlice';

const OnColumnsModal = () => {
    const dispatch = useDispatch();
    const { currentParent, addedParent, selectedJoin, isOpen } = useSelector((state) => state.queryReducer);
    const tableOne = useSelector((state) => state.api.mutations.databaseSchema.data[addedParent]);
    const tableTwo = useSelector((state) => state.api.mutations.databaseSchema.data[currentParent]);
    const [selectedColumnOne, setSelectedColumnOne] = useState();
    const [selectedColumnTwo, setSelectedColumnTwo] = useState();

    const tableOneMap = [];
    Object.keys(tableOne.columns).forEach((el) => {
        tableOneMap.push({column: el, type: tableOne.columns[el]})
    });
    const tableTwoMap = [];
    Object.keys(tableTwo.columns).forEach((el) => {
        tableTwoMap.push({ column: el, type: tableTwo.columns[el] })
    });


    const handleClick = (column, table) => {
        if (table === currentParent) {
            selectedColumnOne ? setSelectedColumnOne(null) : setSelectedColumnOne(column);
        } else if (table === addedParent) {
            selectedColumnTwo ? setSelectedColumnTwo(null) : setSelectedColumnTwo(column);
        }
    }

    const submitToQuery = () => {
        const joinObj = {
            currentParent, 
            addedParent, 
            selectedColumnOne, 
            selectedColumnTwo, 
            selectedJoin
        }
        dispatch(addJoin(joinObj));
        console.log(selectedColumnOne, ' from ', currentParent, ' ON ', selectedColumnTwo, ' from ', addedParent, ' SELECTED JOIN --> ', selectedJoin );
        
    }
    
    return (
        <div className="on-columns-modal">
            <h3>{`Select which columns you'd like to connect ${currentParent} and ${addedParent}`}</h3>
            <div className="tableOne">
            <h3>{currentParent}</h3>
            { tableOneMap.map((column, index) => (
                <button
                 className={`${selectedColumnOne === column.column ? 'flowButton clicked' : 'flowButton'}`}
                 key={index}
                 onClick={() => handleClick(column.column, currentParent)}
                >
                {column.column}  {column.type}
                </button>
            ))}
            </div>
            <h1>ON</h1>
            <div className="tableTwo">
                <h3>{addedParent}</h3>
                {tableTwoMap.map((column, index) => (
                    <button
                        className={`${selectedColumnTwo === column.column ? 'flowButton clicked' : 'flowButton'}`}
                        key={index}
                        onClick={() => handleClick(column.column, addedParent)}
                    >
                        {column.column}  {column.type}
                    </button>
                ))}
            </div>
            <button
                onClick={submitToQuery}
                class="button"
            >
                Add to Query
            </button>
        </div>
    );
};

export default OnColumnsModal;