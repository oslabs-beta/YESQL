/* eslint-disable max-len */
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import copyIcon from '../../assets/copy_icon.png';
import playIconWhite from '../../assets/play_icon_white.png';
import playIconBlack from '../../assets/play_icon_black.png';
import copyIconCopied from '../../assets/copy_icon_copied.png';

import {
  removeColumn,
  removeClauseOrCondition,
  addInput,
  removeInputWindow,
  removeValue,
  addTestResults,
} from '../../querySlice';
import ClauseDropdown from './ClauseDropdown';
import TestResults from './TestResults';

const DBQuery = () => {
  const store = useSelector((state) => state.queryReducer);
  const [copyClipboard, setCopyClipboard] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (copyClipboard) {
      setCopyClipboard(false);
    }
  }, [store.query]);
  // handleClick is the function we're using for dispatching the remove
  // action and accessing the reducer function inside of querySlice.
  const handleClick = (element) => {
    // Here we are making sure that the initial SELECT clause can't be
    // deleted from the query
    if (element.string !== 'SELECT') {
      if (element.parent === 'clause' ||
          element.parent === 'condition' ||
          element.parent === 'input') {
        dispatch(removeClauseOrCondition({string: element.string, parent: element.parent, index: element.index}));
      } else if (element.parent === 'value') {
        dispatch(removeValue({string: element.string, parent: element.parent, index: element.index}));
      } else {
        dispatch(removeColumn({string: element.string, parent: element.parent}));
      }
    }
  };

  // On line 5, we are importing the ClauseDropdown so that we can display the
  // dropdown inside of the queryField. Once the clause has been selected,
  // we're dispatching the add action to the add reducer function in querySlice,
  // passing in the clause as the string, and the parent being an empty string,
  // I (Nina) think that we should potentially change the name of for all pieces
  // of the query to 'type' and name each clause as having the type 'clause'
  const handleInput = (event) => {
    dispatch(addInput({string: event, parent: 'value'}));
    // removeInputWindow is another function inside of querySlice that will remove the input
    // field if the clause that was added is an '=' sign.
    dispatch(removeInputWindow());
  };


  const handleTestQuery = async () => {
    const query = store.query.map((node) => node.string).join(' ');
    console.log(query)
    const response = await fetch('/testQuery', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({query: query}),
    });
    const data = await response.json();
    console.log(data);
    dispatch(addTestResults({data, query}));
  };

  const handleCopyToClipboard = () => {
    const query = store.query.map((node) => node.string).join(' ');
    navigator.clipboard.writeText(query)
        .then(() => setCopyClipboard(true))
        .catch((error) => console.error('Unable to copy query to clipboard: ', error));
  };

  let indexNum = 0;

  const queryInputs = store.query.map((node, index) => {
    return (
      <React.Fragment key={indexNum++}>
        { node.string === '=' && node.inputVisible ? (
          <>
            <button onClick={() => handleClick({string: node.string, parent: node.parent, index: index})} id={node.parent} value={node.string} key={indexNum++}>{node.string}</button>
            <input type='text' onKeyDown={(e) => {
              if (e.key === 'Enter') handleInput(e.target.value);
            }}/>
          </>
          ) : node.parent === 'clause' && node.string !== 'SELECT' ? (
          <>
            <br/>
            <button onClick={() => handleClick({string: node.string, parent: node.parent, index: index})} id={node.parent} value={node.string} key={indexNum++}>{node.string}</button>
          </>
          ) : node.hasComma ? (
            <button onClick={() => handleClick({string: node.string, parent: node.parent, index: index})} id={node.parent} value={node.string} key={indexNum++}>{node.string},</button>
          ) : (
            <button onClick={() => handleClick({string: node.string, parent: node.parent, index: index})} id={node.parent} value={node.string} key={indexNum++}>{node.string}</button>
      )}
      </React.Fragment>
    );
  });

  return (
    <div className="db-query-container">
      <p>YOUR QUERY:</p>
      <section>
        <div className="queryAndButton">
          {queryInputs}
          <ClauseDropdown className="clause-dropdown"/>
        </div>
        <img
          src={copyClipboard ? copyIconCopied : copyIcon}
          className={copyClipboard ? 'copied' : ''}
          alt="copy query icon"
          onClick={handleCopyToClipboard}
        />
        <button
          className="test-button button"
          onClick={handleTestQuery}>
          Test
          <img src={playIconWhite} alt="" /> </button>
      </section>
      <TestResults />
    </div>
  );
};

export default DBQuery;
