import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import { add, remove } from '../querySlice';



const customNode = ({data, isConnectable}) => {
  const [selectedNode, setSelectedNode] = useState(null);
  const [removingNode, setRemovingNode] = useState(null);
  const dispatch = useDispatch();

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    console.log(data, 'data is hereeee')
    console.log(selectedNode, 'selectedNode!')
    if (selectedNode !== null) {
      dispatch(add(selectedNode));
    }
  }, [selectedNode, dispatch]);

  const handleClick = (data) => {
    if (!clicked) {
      setSelectedNode([data.label, data.parent]);
      setClicked(true);
    } else {
      setClicked(false);
      // setSelectedNode(label);
      dispatch(remove([data.label, data.parent]))
      // setRemovingNode(null);
    }
  }

  return (
    <div>
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
      <div>
        <button type="button" name="button" onClick={() => handleClick(data)} style={{width: '300px', height: '50px'}} className={`${clicked ? 'nodrag clicked' : 'nodrag'}`}>{data.label}</button>
      </div>
      <Handle type="source" position={Position.Bottom} isConnectable={isConnectable} />
    </div>
  );
};

export default customNode;