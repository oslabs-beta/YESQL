/* eslint-disable max-len */
import React, {useEffect, useRef, useState} from 'react';
import ReactModal from 'react-modal';
import {useSelector, useDispatch} from 'react-redux';
import dropdownIconWhite from '../../assets/dropdown_icon_white.png';
import dropdownIcon from '../../assets/dropdown_icon.png';
import { testResultsToDisplay } from '../../querySlice';// import copyIcon from '../../assets/copy_icon.png';
import TestResultsModal from './TestResultsModal';

const TestResults = () => {
  const [toggled, setToggled] = useState(false);
  const testResults = useSelector((state) => state.queryReducer.testResults);
  const [notIcon, setNotIcon] = useState(false);
  const [seeData, setSeeData] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!toggled && testResults.length > 0) {
      setNotIcon(true);
    }
  }, [testResults]);

  const toggleResults = () => {
    const list = document.querySelector('.test-results');
    if (list.style.display === 'none') {
      list.style.display = 'block';
      setToggled(true);
    } else {
      list.style.display = 'none';
      setToggled(false);
      setNotIcon(false);
    }
  };

  const handleResultData = (result) => {
    if (result) {
      dispatch(testResultsToDisplay(result));
      setSeeData(true);
    }
  };

  const closeModal = () => {
    setSeeData(false);
  }

  return (
    <>
      <div onClick={toggleResults} className={toggled ? 'test-results-button-expanded' : 'test-results-button'}>
        <div className={notIcon ? 'notification notification-box' : ''}>
        Results
          <img src={toggled ? dropdownIcon : dropdownIconWhite} alt="" className={toggled ? 'test-results-icon-expanded' : 'test-results-icon'} />
        </div>
        <ol className="test-results" style={{display: 'none'}}>
          { testResults.map((result, index) => (
            <li key={index} onClick={() => handleResultData(result.query)}>
              <span>{result.query}</span>
              <span>{`${result.data.time}s`}</span>
            </li>
          ))}
        </ol>
      </div>
      <ReactModal
        isOpen={seeData}
        shouldCloseOnEsc={true}
        onRequestClose={closeModal}
      >
        <TestResultsModal/>
      </ReactModal>
    </>
  );
};


export default TestResults;
