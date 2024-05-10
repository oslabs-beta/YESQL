/* eslint-disable max-len */
import React, {useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import dropdownIconWhite from '../../assets/dropdown_icon_white.png';
import dropdownIcon from '../../assets/dropdown_icon.png';
// import copyIcon from '../../assets/copy_icon.png';

const TestResults = () => {
  const [toggled, setToggled] = useState(false);
  const testResults = useSelector((state) => state.queryReducer.testResults);
  const [notIcon, setNotIcon] = useState(false);

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
  return (
    <div onClick={toggleResults} className={toggled ? 'test-results-button-expanded' : 'test-results-button'}>
      <div className={notIcon ? 'notification notification-box' : ''}>
        Results
        <img src={toggled ? dropdownIcon : dropdownIconWhite} alt="" className={toggled ? 'test-results-icon-expanded' : 'test-results-icon'} />
      </div>
      <ol className="test-results" style={{display: 'none'}}>
        { testResults.map((result, index) => (
          <>
            <li>
              <span>{result.query}</span>
              <span>{`${result.data.time}s`}</span>
            </li>
          </>
        ))}
      </ol>
    </div>
  );
};


export default TestResults;
