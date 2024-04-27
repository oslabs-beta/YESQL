import React, { useMemo } from 'react';
import ReactFlow, { useNodesState, useEdgesState } from 'reactflow';
import customNode from '../customNode.js';
import 'reactflow/dist/style.css';
 
// const nodeTypes = {custom: customNode};
const DBFlow = ({data}) => {

  const initialNodes = [];
  const initialEdges = [];
  
  // map table and column nodes:
  const nodeHelper = () => {
    let tableNum = 0;
    const rowLength = Math.ceil(Math.sqrt(Object.keys(data).length))
    let columnNum = 0
    //loop through data object, iterating on each key (table):
    for (const table in data) {
      //key name:
      const tableName = `${table}`;
      //populate array of nodes:
      initialNodes.push({ 
        id: tableName, 
        type: 'custom', 
        position: { 
          x: (tableNum * 370), 
          y: (columnNum * 700) }, 
          data: { label: table, 
          foreignKeyTables: data[table].connections }, 
          style: {width: 200, height: (data[table].length * 70)} 
        });
      //attach each child (column) node to the parent (table) node:
      let i = 0;
      for (const column in data[table].columns) {
        console.log('Column => ', column)
        initialNodes.push({ 
          id: `${tableName} ${column}`, 
          type: 'custom', 
          position: { x: 0, y: (++i * 50)}, 
          data: { 
            label: column, 
            dataType: data[table].columns[column], 
            parent: tableName, 
            primaryKey: data[table].primaryKey, 
            foreignKey: data[table].foreignKey 
          }, 
            parentNode: tableName, 
            draggable: false
          });
      };
      if (data[table].connections) {
        for (let i = 0; i < data[table].connections.length; i++) {
          initialEdges.push({ source: table, target: data[table].connections[i]});
        };
      };
      console.log('Row Length, Column Num => ', rowLength, columnNum)
      if ((tableNum + 1) % rowLength === 0) {
        columnNum++;
        tableNum = 0;
      } else tableNum += 1;
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
   
  return (
    <div className="db-flow-wrapper"style={{ width: '100%', height: '1000px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        defaultEdgeOptions={{type: "smoothstep"}}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
      />
    </div>
  );
}
export default DBFlow;