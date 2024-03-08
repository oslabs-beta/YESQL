import React, { useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge } from 'reactflow';
 
import 'reactflow/dist/style.css';
 
const DBFlow = () => {
  const initialNodes = [
    { id: '1', position: { x: 50, y: 20 }, data: { label: '1' } },
    { id: '2', position: { x: 0, y: 90 }, data: { label: '2' } },
    { id: '3', position: { x: 100, y: 90 }, data: { label: '3' } },
  ];
  const initialEdges = [
    { id: 'e1-2', source: '1', target: '2' }, 
    { id: 'e1-3', source: '1', target: '3'}
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