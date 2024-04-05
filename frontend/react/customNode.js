import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Handle, Position } from "reactflow";
import { addColumn, removeColumn } from '../querySlice';



const customNode = ({data, isConnectable}) => {
  const removedNode = useSelector((state) => state.queryReducer.removedNode);
  const tableConnected = useSelector((state) => state.queryReducer.tableConnected);
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const buttonRef = useRef(null);

  useEffect(() => {
    if (removedNode) {
      let nodeString = removedNode.string;
      if (typeof nodeString === 'string' && nodeString.endsWith(',')) {
        nodeString = nodeString.slice(0, -1);
      }
      if (nodeString === data.label && removedNode.parent === data.parent) {
        setClicked(false);
        buttonRef.current.className = 'flowButton';
      }
    }
  }, [removedNode, data.label, data.parent]);

  const handleClick = (data) => {
    setClicked((prevClicked) => !prevClicked);
    if (!clicked) {
      dispatch(addColumn({
        string: data.label,
        parent: data.parent,
        isColumn: true,
        hasComma: false,
        foreignConnections: data.foreignKeyTables,
      }));
      setClicked(true);
    } else {
      dispatch(removeColumn({
        string: data.label,
        parent: data.parent,
      }));
    }
  }

  return (
    <div>
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
      <div>
        <button 
        ref={buttonRef}
        type="button" 
        id={`${data.parent}.${data.label}`} 
        name="button" 
        onClick={() => handleClick(data)} 
        style={{width: '300px', height: '50px'}} 
        className={`${clicked ? 'flowButton clicked' : 'flowButton'}`}>
          {data.label}
        </button>
      </div>
      <Handle type="source" position={Position.Bottom} isConnectable={isConnectable} />
    </div>
  );
};

export default customNode;