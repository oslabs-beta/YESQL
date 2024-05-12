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
  console.log('Filtered Results => ', filteredResults);
  return (
    <table>
      <thead>

      </thead>
      <tbody>

      </tbody>
    </table>
  );
};

export default TestResultsModal;
