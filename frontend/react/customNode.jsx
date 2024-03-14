

const customNode = ({data}) => {
  console.log('Data => ', data)

  return (
    <div>
      <button>{data}</button>
    </div>
  )
};
// const clickHandler = () => {
  //when field is clicked, we want the name of it to appear in the query 
//}
export default customNode;