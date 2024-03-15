import React from "react";
import { useCallback } from "react";
import { Handle, Position } from "reactflow";

const customNode = ({data, isConnectable}) => {

  const clickHandler= useCallback((data) => {
    console.log('Data => ', data);
  }, []);

  return (
    <div>
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
      <div>
        <button type="button" name="button" onClick={clickHandler(data)} style={{width: '300px', height: '50px'}} className="nodrag">{data.label}</button>
      </div>
      <Handle type="source" position={Position.Bottom} isConnectable={isConnectable} />
    </div>
  );
};
// const clickHandler = () => {
  //when field is clicked, we want the name of it to appear in the query 
//}
export default customNode;