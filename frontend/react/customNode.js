import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Handle, Position } from "reactflow";
import { add, remove } from '../querySlice';



const customNode = ({data, isConnectable}) => {
  const removedNode = useSelector((state) => state.queryReducer.removedNode);
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const buttonRef = useRef(null);

  useEffect(() => {
    if (removedNode) {
      if (removedNode.string === data.label && removedNode.parent === data.parent) {
        setClicked(false);
        buttonRef.current.className = 'flowButton';
      }
    }
  }, [removedNode, data.label, data.parent]);

  const handleClick = (data) => {
    setClicked(prevClicked => !prevClicked);
    if (!clicked) {
      dispatch(add({
        string: data.label, 
        parent: data.parent,
        foreignConnections: data.foreignKeyTables
      }));
      setClicked(true);
    } else {
      dispatch(remove({
        string: data.label,
        parent: data.parent
      }))
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