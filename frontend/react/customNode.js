import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import { add, remove } from '../querySlice';



const customNode = ({data, isConnectable}) => {
  const removedNode = useSelector((state) => state.queryReducer.removedNode);
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const buttonRef = useRef(null);

  useEffect(() => {
    if (removedNode && removedNode.length > 0) {
      console.log(removedNode, "REMOVEDNODE");
      const [label, parent] = removedNode;
      console.log("label:", label);
      console.log("data.label:", data.label);
      console.log("parent:", parent);
      console.log("data.parent:", data.parent);
      if (label === data.label && parent === data.parent) {
        console.log('buttonRef HAHAHAHAHAHAHAHAHAHHAHAHAHAHAH-> ', buttonRef)
        setClicked(false);
        buttonRef.current.className = 'nodrag';
        console.log('hi');
        console.log(buttonRef.current.className, 'classList after reassign');
      }
    }
  }, [removedNode, data.label, data.parent]);

  const handleClick = (data) => {
    console.log(data, 'data is in handleClick right here')
    setClicked(prevClicked => !prevClicked);
    if (!clicked) {
      dispatch(add({
        string: data.label, 
        parent: data.parent
      }));
      setClicked(true);
    } else {
      // setSelectedNode(label);
      dispatch(remove({
        string: data.label,
        parent: data.parent
      }))
      // setRemovingNode(null);
      // setClicked(false);
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
        className={`${clicked ? 'nodrag clicked' : 'nodrag'}`}>
          {data.label}
        </button>
      </div>
      <Handle type="source" position={Position.Bottom} isConnectable={isConnectable} />
    </div>
  );
};

export default customNode;