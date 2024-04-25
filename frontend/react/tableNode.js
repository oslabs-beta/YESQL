import React from "react";
import {Handle, Position} from 'reactflow';

const tableNode = ({isConnectable}) => {
    return (
        <div className="border">
            <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
            <div>
                
            </div>
            <Handle type="source" position={Position.Bottom} isConnectable={isConnectable} />
        </div>
    )
}

export default tableNode;