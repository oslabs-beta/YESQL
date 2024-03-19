import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import copyIcon from '../../assets/copy_icon.png';
import { remove } from '../../querySlice';
import ClauseDropdown from './ClauseDropdown';

const DBQuery = () => {
  const store = useSelector((state) => state.queryReducer);
  // const [selectedNode, setSelectedNode] = useSelector((state) => state.queryReducer.query)
  const dispatch = useDispatch();

  const handleClick = (element) => {
    console.log('element -> ', element)
    // console.log('string -> ', string, ' index -> ', index)
    dispatch(remove(element));
  }

  const queryInputs = store.query.map((string, index) => (
    <button onClick={() => handleClick([string, store.id[index]])} id={store.id[index]} value={string} key={index}>{string}</button>
  ));

  return (
    <div className="db-query-container">
      <p>YOUR QUERY:</p>
      <section>
        <img src={copyIcon} alt="" />
        <div>
          {queryInputs}
          <ClauseDropdown className="clause-dropdown"/>
        </div>
      </section>
    </div>
  );
}

export default DBQuery;