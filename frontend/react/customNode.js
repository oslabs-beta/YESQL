import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import { add, remove } from '../querySlice';



const customNode = ({data, isConnectable}) => {
  const removedNode = useSelector((state) => state.queryReducer.removedNode);
  useEffect(() => {
    if (removedNode && removedNode.length > 0) {
      const [label, parent] = removedNode;
      if (label === data.label && parent === data.parent) {
        setClicked(false);
      }
    }
  }, [removedNode, data.label, data.parent]);

  const dispatch = useDispatch();

  const [clicked, setClicked] = useState(false);

  const handleClick = (data) => {
    setClicked(prevClicked => !prevClicked);
    if (!clicked) {
      dispatch(add([data.label, data.parent]));
      setClicked(true);
    } else {
      // setSelectedNode(label);
      dispatch(remove([data.label, data.parent]))
      // setRemovingNode(null);
      // setClicked(false);
    }
  }

  return (
    <div>
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
      <div>
        <button 
        type="button" 
        id={`${data.parent}.${data.label}`} 
        name="button" 
        onClick={() => handleClick(data)} 
        style={{width: '300px', height: '50px'}} 
        className={`${clicked ? 'nodrag clicked' : 'nodrag'}`}>
          {data.label}
        </button>
      </div>
      <Handle type="source" position={Position.Bottom} isConnectable={isConnectable} />
    </div>
  );
};

export default customNode;