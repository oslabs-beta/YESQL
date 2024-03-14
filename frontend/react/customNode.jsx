import React, {useState, useEffect} from "react";
import { useDispatch } from 'react-redux';
import { add } from '../querySlice';

const customNode = (data) => {
  const [selectedNode, setSelectedNode] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(selectedNode, 'selectedNode!')
    if (selectedNode !== null) {
      dispatch(add(selectedNode));
    }
  }, [selectedNode, dispatch]);

  return (
    <div className="custom-node">
      <button onClick={() => setSelectedNode(data.id)}>{data.id}</button>
    </div>
  )
};
// const clickHandler = () => {
  //when field is clicked, we want the name of it to appear in the query 
//}
export default customNode;