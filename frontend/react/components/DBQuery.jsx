import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import copyIcon from '../../assets/copy_icon.png';
import { remove } from '../../querySlice';

const DBQuery = () => {
  const query = useSelector((state) => state.queryReducer.query);
  const [selectedNode, setSelectedNode] = useSelector((state) => state.queryReducer.query)
  const dispatch = useDispatch();
  // const calcInputWidth = (string) => {
  //   return string.length * 9 + 'px';
  // }
  const handleClick = (string) => {
    dispatch(remove(string));
  }

  const queryInputs = query.map((string, index) => (
    <button onClick={() => handleClick(string)} value={string} key={index}>{string}</button>
  ));

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