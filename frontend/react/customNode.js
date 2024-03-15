import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import { add, remove } from '../querySlice';



const customNode = ({data, isConnectable}) => {
  const [selectedNode, setSelectedNode] = useState(null);
  const dispatch = useDispatch();

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    console.log(data, 'data is hereeee')
    console.log(selectedNode, 'selectedNode!')
    if (selectedNode !== null) {
      dispatch(add(selectedNode));
    }
  }, [selectedNode, dispatch]);

  const handleClick = (label) => {
    setSelectedNode(label);
    if (!clicked) {
      setClicked(true);
    } else {
      setClicked(false);
      // setSelectedNode(label);
      dispatch(remove(label))
    }
  }

  return (
    <div>
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
      <div>
        <button type="button" name="button" onClick={() => handleClick(data.label)} style={{width: '300px', height: '50px'}} className={`${clicked ? 'nodrag clicked' : 'nodrag'}`}>{data.label}</button>
      </div>
      <Handle type="source" position={Position.Bottom} isConnectable={isConnectable} />
    </div>
  );
};

export default customNode;