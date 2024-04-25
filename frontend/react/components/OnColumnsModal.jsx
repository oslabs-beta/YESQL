import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addJoin } from '../../querySlice';

const OnColumnsModal = () => {
    const dispatch = useDispatch();
    const { currentParent, addedParent, selectedJoin, isOpen } = useSelector((state) => state.queryReducer);
    const tableOne = useSelector((state) => state.api.mutations.databaseSchema.data[currentParent]);
    const tableTwo = useSelector((state) => state.api.mutations.databaseSchema.data[addedParent]);
    const [selectedColumnOne, setSelectedColumnOne] = useState();
    const [selectedColumnTwo, setSelectedColumnTwo] = useState();

    console.log(tableOne, 'tableOne!!!')
    console.log(tableTwo, 'tableTwo!!!')
    const tableOneMap = [];
    Object.keys(tableOne.columns).forEach((el) => {
        const obj = { column: el, type: tableOne.columns[el] === 'character varying' ? 'charvar' : tableOne.columns[el] }
        if (tableOne.foreignKey.includes(el)) {
            obj.key = 'FK'
        } else if (el === tableOne.primaryKey) {
            obj.key = 'PK';
        }
        tableOneMap.push(obj)
    });
    const tableTwoMap = [];
    Object.keys(tableTwo.columns).forEach((el) => {
        if (tableOne.columns[el] === 'character varying') {
            tableOne.columns[el] = 'charvar'
        }
        const obj = { column: el, type: tableTwo.columns[el] === 'character varying' ? 'charvar' : tableTwo.columns[el] }
        if (tableOne.foreignKey.includes(el)) {
            obj.key = 'FK'
        } else if (el === tableOne.primaryKey) {
            obj.key = 'PK';
        }
        tableTwoMap.push(obj)
    });

    console.log(tableTwoMap, tableOneMap, 'tableOne and tableTwo map')

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
        //console.log(selectedColumnOne, ' from ', currentParent, ' ON ', selectedColumnTwo, ' from ', addedParent, ' SELECTED JOIN --> ', selectedJoin );
        
    }
    
    return (
        <div className="on-columns-modal">
            <h3>Select which columns you'd like to connect?</h3>
            <div className="tableOne">
            <h3>{currentParent}</h3>
            { tableOneMap.map((column, index) => (
                <button
                 className={`${selectedColumnOne === column.column ? 'flowButton clicked' : 'flowButton'}`}
                 key={index}
                 onClick={() => handleClick(column.column, currentParent)}
                >
                    <span>
                        <span>{column.column}</span>
                        <span className="FKPK">{column.key ? `( ${column.key} )` : ''}</span>
                    </span>
                    <span className="dataType">
                        {column.type}
                    </span>
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
                        <span>
                            <span>{column.column}</span>
                            <span className="FKPK">{column.key ? `( ${column.key} )` : ''}</span>
                        </span>
                        <span className="dataType">
                          {column.type}
                        </span>
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