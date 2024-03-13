import React, { useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge } from 'reactflow';
 
import 'reactflow/dist/style.css';
 
const DBFlow = ({data}) => {

  console.log('Data', data)

  const initialNodes = [];

  const nodeHelper = () => {
    let tableNum = 0;
    for (const table in data) {
      initialNodes.push({ id: table, position: { x: (tableNum * 50), y: 0 }, data: { label: table }, style: {width: 300, height: (data[table].length * 50)} });
      for (let i = 0; i < data[table].length; i++) {
        const column = data[table][i];
        initialNodes.push({ id: column, position: { x: 0, y: (i * 50)}, data: {label: column}, style: {width: 300, height: 50}, parentNode: table, extent: [[0, (i * 50)], [0, (i * 50)]]});
      };
      tableNum + 1;
    };
  }
  
  nodeHelper();
  // const initialNodes = [
  //   { id: '1', position: { x: 50, y: 20 }, data: { label: '1' }, style: {width: 200, height: 200} },
  //   { id: '2', parentNode: '1', position: { x: 0, y: 0 }, extent:[[0, 0], [0, 0]] , data: { label: '2' } },
  //   { id: '3', parentNode: '1', position: { x: 0, y: 100 }, extent:[[0, 100], [0, 100]], data: { label: '3' } },
  // ];
  const initialEdges = [
    // { id: 'e1-2', source: '1', target: '2' }, 
    // { id: 'e1-3', source: '1', target: '3'}
];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
 
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
   
  return (
    <div className="db-flow-wrapper"style={{ width: '800px', height: '600px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      />
    </div>
  );
}
export default DBFlow;