import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import copyIcon from '../../assets/copy_icon.png';
import { remove, add, addInput } from '../../querySlice';
import ClauseDropdown from './ClauseDropdown';

const DBQuery = () => {
  const store = useSelector((state) => state.queryReducer);

  const dispatch = useDispatch();

  const handleClick = (element) => {
    dispatch(remove({string: element.string, parent: element.parent}));
  }

  const handleInput = (event) => {
    dispatch(add({ string: event, parent: '' }));
    dispatch(addInput());
  }

  const handleCopyToClipboard = () => {
    const query = store.query.map(node => node.string).join(' ');
    navigator.clipboard.writeText(query)
    .then(() => alert('Query copied to clipboard'))
    .catch(error => console.error('Unable to copy query to clipboard: ', error));
  }

  let indexNum = 0;

  const queryInputs = store.query.map((node) => {
    return (
      <React.Fragment key={indexNum++}>
        { node.string === '=' && node.inputVisible ? (
          <>
            <button onClick={() => handleClick({string: node.string, parent: node.parent})} id={node.parent} value={node.string} key={indexNum++}>{node.string}</button>
            {/* <input autoFocus type='text' onChange={(e) => setInputValue(e)} onBlur={handleInput(inputValue)}/> */}
              <input type='text' onKeyDown={(e) => {if (e.key === 'Enter') handleInput(e.target.value)}}/>
          </>
          ) : node.parent === 'clause' ? (
          <>
            <br/>
            <button onClick={() => handleClick({string: node.string, parent: node.parent})} id={node.parent} value={node.string} key={indexNum++}>{node.string}</button>     
          </>
          ) : (
          <button onClick={() => handleClick({string: node.string, parent: node.parent})} id={node.parent} value={node.string} key={indexNum++}>{node.string}</button>     
      )}
      </React.Fragment>
    )
  });

  return (
    <div className="db-query-container">
      <p>YOUR QUERY:</p>
      <section>
        <img src={copyIcon} alt="copy query icon" onClick={handleCopyToClipboard} />
        <div>
          {queryInputs}
          <ClauseDropdown className="clause-dropdown"/>
        </div>
      </section>
    </div>
  );
}

export default DBQuery;