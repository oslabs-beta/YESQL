import React, { useCallback, useMemo } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge } from 'reactflow';
 
import customNode from '../customNode.js';
import 'reactflow/dist/style.css';
 
// const nodeTypes = {custom: customNode};
const DBFlow = ({data}) => {

  const initialNodes = [];
  // map table and column nodes:
  const nodeHelper = () => {
    let tableNum = 0;
    //loop through data object, iterating on each key (table):
    for (const table in data) {
      //key name:
      const tableName = `${table}`;
      // console.log("table name => ", table)
      // console.log('Node => ', { id: `Table${tableNum}`, position: { x: (tableNum * 370), y: 0 }, data: { value: tableName }, style: {width: 320, height: (data[table].length * 50)} })
      //populate array of nodes:
      initialNodes.push({ id: tableName, type: 'custom', position: { x: (tableNum * 370), y: 0 }, data: { label: table }, style: {width: 320, height: (data[table].length * 70)}, selectable: true });
      //attach each child (column) node to the parent (table) node:
      for (let i = 0; i < data[table].length; i++) {
        const column = data[table][i];
        // console.log('Table, Column => ', table, column);
        initialNodes.push({ id: `${tableName} ${column}`, type: 'custom', position: { x: 10, y: ((i * 50) + 50)}, data: {label: column}, style: {width: 300, height: 50}, parentNode: tableName, draggable: false});
      };
      tableNum += 1;
    };
  }
  
  nodeHelper();
  //define the type we set in our initialNodes:
  const nodeTypes = useMemo(() => ({ customNode: customNode}), []);
  // const initialNodes = [
  //   { id: '1', position: { x: 50, y: 20 }, data: { label: '1' }, style: {width: 200, height: 200} },
  //   { id: '2', parentNode: '1', position: { x: 0, y: 0 }, extent:[[0, 0], [0, 0]] , data: { label: '2' } },
  //   { id: '3', parentNode: '1', position: { x: 0, y: 100 }, extent:[[0, 100], [0, 100]], data: { label: '3' } },
  // ];
  const initialEdges = [
    // { id: 'e1-2', source: '1', target: '2' }, 
    // { id: 'e1-3', source: '1', target: '3'}
];

  console.log(initialNodes)

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
 
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
   
  return (
    <div className="db-flow-wrapper"style={{ width: '1200px', height: '900px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      />
    </div>
  );
}
export default DBFlow;