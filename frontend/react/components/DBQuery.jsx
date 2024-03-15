import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import copyIcon from '../../assets/copy_icon.png';

const DBQuery = () => {
  const query = useSelector((state) => state.queryReducer.query);

  // const calcInputWidth = (string) => {
  //   return string.length * 9 + 'px';
  // }

  const queryInputs = query.map((string) => {
        <button>{string}</button>;
      })

  return (
    <div className="db-query-container">
      <p>YOUR QUERY:</p>
      <section>
        <img src={copyIcon} alt="" />
          {queryInputs}
      </section>
    </div>
  );
}

export default DBQuery;