// import React, {useEffect, useState} from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import {openColumnModal} from '../../querySlice'

// const JoinModal = () => {
//     const dispatch = useDispatch();
//     //give access to store 
//     const currParent = useSelector((state) => state.queryReducer.currentParent);
//     const addParent = useSelector((state) => state.queryReducer.addedParent);

//     //text that defines our diff joins
//     const innerJoinText = `Inner Join selects records that have a common matching value between ${currParent} and ${addParent}.`;
//     const fullJoinText = `Full Join (Full Outer Join) returns all records if there is any match in ${currParent} and ${addParent}. 
//     Non-matching rows will return null for those values.`;
//     const leftJoinText = `Left Join returns all records from ${currParent} and matching records from ${addParent}. 
//     If there are no matches in ${addParent} they will return null.`;
//     const rightJoinText = `Right Join returns all records ${addParent} and matching records from ${currParent}. 
//     If there are no matches in ${currParent} they will return null.`;
//     const crossJoinText = `Cross Join combines each row from ${currParent} with each row from ${addParent} for all possible combinations. 
//     WARNING: Can get very computationally expensive! Processing time can increase exponentially depending on size of tables!`;

//     const handleClick = (data) => {
//         dispatch(openColumnModal(data));
//     };

//     return (
//         <div className='modal'>
//             <input type="button" value="Inner Join" onClick={() => handleClick("Inner Join")}/>
//             <input type="button" value="Full Join" onClick={() => handleClick("Full Join")}/>
//             <input type="button" value="Left Join" onClick={() => handleClick("Left Join")}/>
//             <input type="button" value="Right Join" onClick={() => handleClick("Right Join")}/>
//             <input type="button" value="Cross Join" onClick={() => handleClick("Cross Join")}/>
//             <p>{innerJoinText}</p>
//             <p>{fullJoinText}</p>
//             <p>{leftJoinText}</p>
//             <p>{rightJoinText}</p>
//             <p>{crossJoinText}</p>
//         </div>
//     );
// };

// export default JoinModal;


import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { addClauseOrCondition } from '../../querySlice';
import {openColumnModal} from '../../querySlice'
import infoIcon from '../../assets/info_icon.png';
// import { modalData } from '../modalData';
const JoinModal = () => {
    //give access to store 
    const currParent = useSelector((state) => state.queryReducer.currentParent);
    const addParent = useSelector((state) => state.queryReducer.addedParent);
    const [toggleInfo, setToggleInfo] = useState();
    const dispatch = useDispatch();

    const modalData = [
        {
            type: 'INNER JOIN',
            innerText: `Inner Join selects records that have a common matching value between ${currParent} and ${addParent}.`
        },
        {
            type: 'FULL JOIN',
            innerText: `Full Join (Full Outer Join) returns all records if there is any match in ${currParent} and ${addParent}. 
            Non-matching rows will return null for those values.`
        },
        {
            type: 'RIGHT JOIN',
            innerText: `Right Join returns all records ${addParent} and matching records from ${currParent}. 
            If there are no matches in ${currParent} they will return null.`
        },
        {
            type: 'LEFT JOIN',
            innerText: `Right Join returns all records ${currParent} and matching records from ${addParent}. 
            If there are no matches in ${addParent} they will return null.`
        },
        {
            type: 'CROSS JOIN',
            innerText: `Cross Join combines each row from ${currParent} with each row from ${addParent} for all possible combinations. 
            WARNING: Can get very computationally expensive! Processing time can increase exponentially depending on size of tables!`
        }
    ]


    const handleClick = (event) => {
        if (event.target.tagName === 'BUTTON') {
            // dispatch(addClauseOrCondition(event.target.value));
            dispatch(openColumnModal(event.target.value));
        }
    }

    const openInfo = (join) => {
        if (!toggleInfo) {
            setToggleInfo(join);
        } else {
            setToggleInfo(null);
        }
    }

    return (
        <div className='modal'>
            <h3>How would you like to join
                <br />
                these tables?</h3>
            {modalData.map((joinType, index) => (
                <>
                    <button
                        key={index + 'button'}
                        className="button modalButton"
                        onClick={handleClick}
                        value={joinType.type}
                    >
                        {joinType.type}
                        <img
                            key={index + 'img'}
                            onClick={() => openInfo(joinType.type)}
                            src={infoIcon}
                        />
                    </button>
                    <p
                        key={index + 'p'}
                        id="innerJoin"
                        style={{
                            display: toggleInfo === joinType.type ? 'block' : 'none'
                        }}>
                        {joinType.innerText}
                    </p>
                </>
            ))}

            {/* <button className="button modalButton" value="FULL JOIN">Full Join<img src={infoIcon}/></button>
            <p>{fullJoinText}</p>
            <button className="button modalButton" value="LEFT JOIN">Left Join<img src={infoIcon}/></button>
            <p>{leftJoinText}</p>
            <button className="button modalButton" value="RIGHT JOIN">Right Join<img src={infoIcon}/></button>
            <p>{rightJoinText}</p>
            <button className="button modalButton" value="CROSS JOIN">Cross Join<img src={infoIcon}/></button>
            <p>{crossJoinText}</p> */}
        </div>
    );
};

export default JoinModal;