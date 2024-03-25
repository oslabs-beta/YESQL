import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addClause, removeInput } from '../../querySlice'


// We're utilizing the ClauseDropdown for selecting the variation of clauses available to build our Query. 
// There are additional clauses we'd need to add.  
const ClauseDropdown = () => {
  const dispatch = useDispatch();

  // The handleChange function is being invoked once we select a clause in the dropdown
  const handleChange = (event) => {
    // dispatching our addClause action to the querySlice.js
    dispatch(addClause(event.target.value));
  }

  return (
    <>
      <select value='+' onChange={handleChange}>
        <option disabled hidden>
          +
        </option>  
        <option value="*">ALL</option>
        <option value="AND">AND</option>
        <option value="ANY">ANY</option>
        <option value="=">EQUAL</option>
        <option value="FROM">FROM</option>
        <option value="GROUP BY">GROUP BY</option>
        <option value="IS NOT NULL">IS NOT NULL</option>
        <option value="IS NULL">IS NULL</option>
        <option value="LIKE">LIKE</option>
        <option value="LIMIT">LIMIT</option>
        <option value="NOT">NOT</option>
        <option value="OR">OR</option>
        <option value="ORDER BY">ORDER BY</option>
        <option value="DISTINCT">DISTINCT</option>
        <option value="WHERE">WHERE</option>
        <option value="<>">NOT EQUAL </option>
      </select>
    </>
  )
}

export default ClauseDropdown;