import React from "react";

const customNode = ({data, isConnectable}) => {
  console.log('Data => ', data)

  return (
    <div>
      <input type="button" value={data.value} />
    </div>
  )
};
// const clickHandler = () => {
  //when field is clicked, we want the name of it to appear in the query 
//}
export default customNode;