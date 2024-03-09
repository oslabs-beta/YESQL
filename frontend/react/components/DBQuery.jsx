import React from 'react';
import copyIcon from '../../assets/copy_icon.png';

const DBQuery = () => {

  return (
    <div className="db-query-container">
      <p>YOUR QUERY:</p>
      <section>
        <img src={copyIcon} alt="" />
        <p>SELECT * FROM PUBLIC</p>
      </section>
    </div>
  );
}

export default DBQuery;