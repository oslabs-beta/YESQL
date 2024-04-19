import React, {useState, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Handle, Position} from 'reactflow';
import {addColumn, removeColumn, openModal} from '../querySlice';


const customNode = ({data, isConnectable}) => {
  const removedNode = useSelector((state) => state.queryReducer.removedNode);
  const query = useSelector((state) => state.queryReducer.query);
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
//logic for showing which nodes/columns are clicked:
  const handleClick = async (data) => {
    const connections = data.foreignKeyTables;
    const isConnection = query.some((el) => {
      return connections ? connections.includes(el.string) : false;
    });
    const isParentIncluded = query.some((node) => {
      //check to see if parent of clicked node matches any string in query
      return node.string === data.parent;
    });
    setClicked((prevClicked) => !prevClicked);
    //check if parent (table) of clicked node matches what's in the query thus far
    if (!isParentIncluded && query.length > 1) {
      console.log("are we in !isParentIncluded?");
      dispatch(openModal({
        parent: data.parent
      }));
    } else if (!clicked && (isParentIncluded || isConnection || query.length === 1)) {
       dispatch(addColumn({
        string: data.label,
        parent: data.parent,
        isColumn: true,
        hasComma: false,
        foreignConnections: data.foreignKeyTables,
      }));
    } else {
      dispatch(removeColumn({
        string: data.label,
        parent: data.parent,
      }));
    }; 

  };

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
