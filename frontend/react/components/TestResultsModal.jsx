/* eslint-disable guard-for-in */
/* eslint-disable max-len */
import React from 'react';
// import ReactFlow, {useNodesState, useEdgesState} from 'reactflow';
// import customNode from '../customNode.js';
// import 'reactflow/dist/style.css';
import {useSelector} from 'react-redux';

const TestResultsModal = () => {
  const {testResults, testResultsToDisplay} = useSelector((state) => state.queryReducer);
  console.log('testResults in testresultsmodal', testResults);
  const filteredResults = testResults.filter((el) => el.query === testResultsToDisplay);
  const filteredData = filteredResults[0].data.queryResult.rows;
  console.log('Filtered Results => ', filteredData);
  const tableHeaders = Object.keys(filteredData[0]).map((el) => {
    return (
      <th>{el}</th>
    );
  });
  const tableData = [];
  (function tableBodyData() {
    if (filteredData) {
      for (const row in filteredData) {
        tableData.push(Object.values(filteredData[row]).map((el) => {
          console.log('El => ', el);
          if (el == null) {
            return (
              <td>null</td>
            );
          } else {
            return (
              <td>{el}</td>
            );
          }
        }));
      }
    };
  })();
  const tabledataRows = filteredData.map((el, index) => {
    return (
      <tr>
        {tableData[index]}
      </tr>
    )
  });
  console.log('Data => ', tableData);
  console.log('Table Data => ', tabledataRows);
  return (
    <table>
      <thead>
        <tr>
          {tableHeaders}
        </tr>
      </thead>
      <tbody>
        {tabledataRows}
      </tbody>
    </table>
  );
};

export default TestResultsModal;
