import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

const JoinModal = () => {
    //give access to store 
    const currParent = useSelector((state) => state.queryReducer.currentParent);
    const addParent = useSelector((state) => state.queryReducer.addedParent);

    //text that defines our diff joins
    const innerJoinText = `Inner Join selects records that have a common matching value between ${currParent} and ${addParent}.`;
    const fullJoinText = `Full Join (Full Outer Join) returns all records if there is any match in ${currParent} and ${addParent}. 
    Non-matching rows will return null for those values.`;
    const leftJoinText = `Left Join returns all records from ${currParent} and matching records from ${addParent}. 
    If there are no matches in ${addParent} they will return null.`;
    const rightJoinText = `Right Join returns all records ${addParent} and matching records from ${currParent}. 
    If there are no matches in ${currParent} they will return null.`;
    const crossJoinText = `Cross Join combines each row from ${currParent} with each row from ${addParent} for all possible combinations. 
    WARNING: Can get very computationally expensive! Processing time can increase exponentially depending on size of tables!`;

    return (
        <div className='modal'>
            <input type="button" value="Inner Join"/>
            <input type="button" value="Full Join"/>
            <input type="button" value="Left Join"/>
            <input type="button" value="Right Join"/>
            <input type="button" value="Cross Join"/>
            <p>{innerJoinText}</p>
            <p>{fullJoinText}</p>
            <p>{leftJoinText}</p>
            <p>{rightJoinText}</p>
            <p>{crossJoinText}</p>
        </div>
    );
};

export default JoinModal;