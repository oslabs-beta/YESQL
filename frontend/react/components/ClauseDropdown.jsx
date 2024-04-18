import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addClauseOrCondition, removeInputWindow } from '../../querySlice'


// We're utilizing the ClauseDropdown for selecting the variation of clauses available to build our Query. 
// There are additional clauses we'd need to add.  
const ClauseDropdown = () => {
  const dispatch = useDispatch();
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowClauses(!showOptions);
  }
  // The handleChange function is being invoked once we select a clause in the dropdown
  const handleChange = (event) => {
    // dispatching our addClauseOrCondition action to the querySlice.js
    dispatch(addClauseOrCondition(event.target.value));
  }


  const toggleSubMenu = (e) => {
    e.stopPropagation();
    let submenu = e.target.querySelector('ul');
    if (!submenu) return;
    if (submenu.style.display === 'none' || !submenu.style.display){
      submenu.style.display = 'block';
    } else {
      submenu.style.display = 'none';
    }
  }

  const renderSubMenu = (subMenu) => {
    return (
      <ul className="submenu"> 
        {subMenu.map((subItem, index) => (
          <li key={index} onClick={toggleSubMenu}>
            {subItem.label}
            {subItem.submenu && renderSubMenu(subItem.submenu)}
          </li>
        ))}
      </ul>
    )
  }
  const menuData = [
    {
      label: 'Menu 1'
    },
    {
      label: 'Menu 2',
      submenu: [
        { label: 'subMenu 1',
          submenu: [{label: 'subMenu 4'}, {label: 'subMenu 5'}]
        },
        { label: 'subMenu 2' },
        { label: 'subMenu 3' },
      ]
    },
    {
      label: 'Menu 3'
    },
    {
      label: 'Menu 4'
    },
  ]

  return (
    // <>
    //   <div id="queryBuilder" onChange={handleChange}> +
    //     <ul>
    //       {menuData.map((item, index) => (
    //         <li key={index} onClick={toggleSubMenu}>
    //           {item.label}
    //           {item.submenu && renderSubMenu(item.submenu)}
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </>
  )
}

export default ClauseDropdown;