import React, { useCallback, useMemo } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge } from 'reactflow';
 
import customNode from '../customNode.js';
import 'reactflow/dist/style.css';
 
// const nodeTypes = {custom: customNode};
const DBFlow = ({data}) => {

  const initialNodes = [];
  const initialEdges = [];
  
  // map table and column nodes:
  const nodeHelper = () => {
    let tableNum = 0;
    //loop through data object, iterating on each key (table):
    for (const table in data) {
      //key name:
      const tableName = `${table}`;
      //populate array of nodes:
      initialNodes.push({ id: tableName, type: 'custom', position: { x: (tableNum * 370), y: 0 }, data: { label: table }, style: {width: 320, height: (data[table].length * 70)} });
      //attach each child (column) node to the parent (table) node:
      for (let i = 0; i < data[table].columns.length; i++) {
        const column = data[table].columns[i];
        initialNodes.push({ id: `${tableName} ${column}`, type: 'custom', position: { x: 10, y: ((i * 50) + 50)}, data: { label: column, parent: tableName, foreignKeyTables: data[table].connections }, style: {width: 300, height: 50}, parentNode: tableName, draggable: false});
      };
      if (data[table].connections) {
        for (let i = 0; i < data[table].connections.length; i++) {
          initialEdges.push({ source: table, target: data[table].connections[i]});
        };
      };
      tableNum += 1;
    };
  }
  
  nodeHelper();
  //define the type we set in our initialNodes:
  const nodeTypes = useMemo(() => ({ 
    custom: customNode
    }), []
  );
  

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
 
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
   
  return (
    <div className="db-flow-wrapper"style={{ width: '100%', height: '900px' }}>
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