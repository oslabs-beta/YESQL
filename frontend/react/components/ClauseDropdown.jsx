import React from 'react';
import { useDispatch } from 'react-redux';
import { addClause } from '../../querySlice'

const ClauseDropdown = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    console.log('im being invoked on line 8', event.target.value)
    dispatch(addClause(event.target.value));
  }

  return (
    <div>
      <select onChange={handleChange}>
        <option value="">+</option>
        <option value="ALL">ALL</option>
        <option value="AND">AND</option>
        <option value="ANY">ANY</option>
        <option value="GROUP BY">GROUP BY</option>
        <option value="IS NOT NULL">IS NOT NULL</option>
        <option value="IS NULL">IS NULL</option>
        <option value="LIKE">LIKE</option>
        <option value="LIMIT">LIMIT</option>
        <option value="NOT">NOT</option>
        <option value="OR">OR</option>
        <option value="ORDER BY">ORDER BY</option>
        <option value="WHERE">WHERE</option>
        <option value="<>">NOT EQUAL </option>
      </select>
    </div>
  )
}

export default ClauseDropdown;