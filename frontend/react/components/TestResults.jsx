import React, {useState} from 'react';
import dropdownIconWhite from '../../assets/dropdown_icon_white.png';
import dropdownIcon from '../../assets/dropdown_icon.png';
// import copyIcon from '../../assets/copy_icon.png';

const TestResults = () => {
  const [toggled, setToggled] = useState(false);

  const toggleResults = () => {
    const list = document.querySelector(".test-results")
    if (list.style.display === 'none') {
      list.style.display = 'block';
      setToggled(true)
    } else {
      list.style.display = 'none';
      setToggled(false)
    }
  }
return (
  <div onClick={toggleResults} className={toggled ? 'test-results-button-expanded' : 'test-results-button'}>
    <div>
      Results
      <img src={toggled ? dropdownIcon : dropdownIconWhite} alt="" className={toggled ? 'test-results-icon-expanded' : 'test-results-icon'} />
    </div>
    <ol className="test-results" style={{display: 'none'}}>
      <li>
        <span>SELECT _id, producer, episode_id FROM films WHERE release_date = october</span>
        <span>0.05s</span>
        </li>
      <li>
        <span>SELECT homeworld_id, eye_color, gender FROM people ORDER BY _id = 5</span>
        <span>0.043s</span>
      </li>
    </ol>
  </div>
)
};


export default TestResults;