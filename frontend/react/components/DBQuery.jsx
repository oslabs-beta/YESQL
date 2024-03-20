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
    dispatch(remove({string: element.string, parent: node.parent}));
  }

  let indexNum = 0;

  const queryInputs = store.query.map((node) => {
    console.log(node, 'node inside of line 21')
    return (
    <button onClick={() => handleClick({string: node.string, parent: node.parent})} id={node.parent} value={node.string} key={indexNum++}>{node.string}</button>
  )});

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