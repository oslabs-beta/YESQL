import React from 'react';
import { useSelector } from 'react-redux';
import copyIcon from '../../assets/copy_icon.png';

const DBQuery = () => {
  const query = useSelector((state) => state.queryReducer.query);

  return (
    <div className="db-query-container">
      <p>YOUR QUERY:</p>
      <section>
        <img src={copyIcon} alt="" />
        <p>{query}</p>
      </section>
    </div>
  );
}

export default DBQuery;