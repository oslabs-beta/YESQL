import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import copyIcon from '../../assets/copy_icon.png';
import { 
  removeColumn, 
  addColumnOrCondition, 
  removeClauseOrCondition, 
  addInput, 
  removeInputWindow, 
  removeValue, 
  addTestResults } from '../../querySlice';
import ClauseDropdown from './ClauseDropdown';

const DBQuery = () => {
  // accessing the Redux store in querySlice so that we can iterate
  // and display it in the queryField
  const store = useSelector((state) => state.queryReducer);

  const dispatch = useDispatch();

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
        dispatch(removeValue({string: element.string, parent: element.parent, index: element.index}))
      } else {
        dispatch(removeColumn({string: element.string, parent: element.parent}));
      }
    }
  }

  // On line 5, we are importing the ClauseDropdown so that we can display the 
  // dropdown inside of the queryField. Once the clause has been selected, 
  // we're dispatching the add action to the add reducer function in querySlice, 
  // passing in the clause as the string, and the parent being an empty string, 
  // I (Nina) think that we should potentially change the name of for all pieces
  // of the query to 'type' and name each clause as having the type 'clause'
  const handleInput = (event) => {
    dispatch(addInput({ string: event, parent: 'value'}));
    // removeInputWindow is another function inside of querySlice that will remove the input 
    // field if the clause that was added is an '=' sign. 
    dispatch(removeInputWindow());
  }

  
  const sendQuery = async () => {
    // const response = await fetch('/testQuery', {
      //   method: "POST",
      //   mode: 'cors',
      //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(query)
        // })
        // const testQuery = response.json();
        
      }
      
      // this function handles the copy of the query when you click on the copy button 
      // to the right of the query field. First, we map over each string (which is what is 
      // being displayed in the queryfield), then we join them all together as a string and 
      // save that into the query variable. 
    const handleCopyToClipboard = () => {
      const query = store.query.map(node => node.string).join(' ');
      dispatch(addTestResults(query));
      navigator.clipboard.writeText(query)
      .then(() => alert('Query copied to clipboard'))
      .catch(error => console.error('Unable to copy query to clipboard: ', error));
  }

  // indexNum is added for best practice with React, that recommends that every element
  // of an iteration should have a unique key. 
  let indexNum = 0;

  // React.Fragment is the same thing as using <></>, but if we're using <> we can't add keys. 
  // We're using a ternary operator to check if the node.string is an '=' and if the key inputVisible exist and is truthy, 
  // which it only is when we initially add that clause to the query. If it is, we're rendering 
  // both the button with the string value and an input field. 
  // The next condition we are checking is if the node.parent is a 'clause', and if node.string is not select. 
  // If this returns truthy, we're displaying both a <br/> tag and the button. The <br> tag 
  // will add the clause on the next row, which makes the query easier to read. 
  // If none of these conditions are truthy, we're adding just the button. 
  
  const queryInputs = store.query.map((node, index) => {
    return (
      <React.Fragment key={indexNum++}>
        { node.string === '=' && node.inputVisible ? (
          <>
            <button onClick={() => handleClick({string: node.string, parent: node.parent, index: index})} id={node.parent} value={node.string} key={indexNum++}>{node.string}</button>
            <input type='text' onKeyDown={(e) => {if (e.key === 'Enter') handleInput(e.target.value)}}/>
          </>
          ) : node.parent === 'clause' && node.string !== 'SELECT' ? (
          <>
            <br/>
            <button onClick={() => handleClick({string: node.string, parent: node.parent, index: index})} id={node.parent} value={node.string} key={indexNum++}>{node.string}</button>     
          </>
          ) : node.hasComma ? (
            <button onClick={() => handleClick({ string: node.string, parent: node.parent, index: index})} id={node.parent} value={node.string} key={indexNum++}>{node.string},</button> 
          ) : (
            <button onClick={() => handleClick({string: node.string, parent: node.parent, index: index})} id={node.parent} value={node.string} key={indexNum++}>{node.string}</button>     
      )}
      </React.Fragment>
    )
  });

  return (
    <div className="db-query-container">
      <p>YOUR QUERY:</p>
      <section>
        <img src={copyIcon} alt="copy query icon" onClick={handleCopyToClipboard} />
        <div className="queryAndButton">
          {queryInputs}
          <ClauseDropdown className="clause-dropdown"/>
        </div>
      </section>
    </div>
  );
}

export default DBQuery;