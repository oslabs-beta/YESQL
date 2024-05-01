import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addClauseOrCondition } from '../../querySlice';
import menuData from '../dropdownData';
import dropdownIcon from '../../assets/dropdown_icon.png';

const ClauseDropdown = () => {
  const dispatch = useDispatch();
  const [toggledButtons, setToggledButtons] = useState({});

  const handleChange = (event) => {
    dispatch(addClauseOrCondition(event.target.value));
  };

  const toggleSubMenu = (e, value, parent) => {
    e.stopPropagation();
    let submenu = e.target.querySelector('ul');
    const buttonIndex = e.target.getAttribute('data-index');

    if (!submenu) {
      dispatch(addClauseOrCondition({value, parent}));
      document.querySelector('.nestedMenu').style.display = 'none';
      return;
    }

    const isToggled = toggledButtons[buttonIndex];
    setToggledButtons({ ...toggledButtons, [buttonIndex]: !isToggled });

    if (submenu.style.display === 'none' || !submenu.style.display) {
      submenu.style.display = 'inline-block';
    } else {
      submenu.style.display = 'none';
    }
  };

  const renderSubMenu = (subMenu, label) => {
    return (
      <ul className="submenu">
        {subMenu.map((subItem, index) => (
          <li key={index} onClick={(e) => toggleSubMenu(e, subItem.label, label)}>
            {subItem.label}
            {subItem.submenu && renderSubMenu(subItem.submenu)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <div className="queryBuilder" onClick={(e) => toggleSubMenu(e, '')} onChange={handleChange}>
        Add +
        <ul className="nestedMenu">
          {menuData.map((item, index) => (
            <li
              value={item.label}
              key={index}
              data-index={index} // Add data-index attribute to track button index
              className={item.top ? 'top10' : ''}
              onClick={(e) => toggleSubMenu(e, item.label)}
            >
              {item.label}
              {item.submenu && (
                <img
                  className={toggledButtons[index] ? 'dropdownIconExpanded' : 'dropdownIcon'}
                  src={dropdownIcon}
                />
              )}
              {item.submenu && renderSubMenu(item.submenu, item.label)}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ClauseDropdown;
