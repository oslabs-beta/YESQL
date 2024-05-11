import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  query: [{
    string: 'SELECT',
    parent: 'clause',
    hasComma: false,
  }],
  testResults: [],
  testResultsToDisplay: '',
  removedNode: {},
  numOfClauses: 1,
  numOfColumns: 0,
  tableConnected: false,
  isModalOpen: false,
  isClause: false,
  currentParent: '',
  addedParent: '',
  isColumnModalOpen: false,
  selectedJoin: '',
};

const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    addColumn(state, action) {
      const array = state.query;
      const [isColumn] = state.query;
      const queryLength = state.query.length;
      const column = action.payload;
      const connections = action.payload.foreignConnections;
      const isConnection = state.query.some((el) => {
        return connections ? connections.includes(el.string) : false;
      });
      const isParentIncluded = state.query.some((node) => {
        return node.string === action.payload.parent;
      });
      const indexOfFrom = state.query.findIndex((node) => {
        return node.string === 'FROM';
      });

      if (state.numOfClauses > 1 && indexOfFrom !== -1 && !state.isClause) {
        for (let i = 1; i < indexOfFrom; i++) {
          if (!state.query[i].string.endsWith(',')) {
            state.query[i].string += ',';
          }
        }
      }

      if (state.numOfClauses > 2) {
        array.push(column);
      }

      if (array.length === 1 && isColumn) {
        state.numOfClauses++;
        array.push(
            column,
            {string: 'FROM', parent: 'clause'},
            {string: column.parent, parent: column.parent},
        );
      }

      if (isParentIncluded && isColumn && state.numOfClauses === 2) {
        array.splice(indexOfFrom, 0, column);
      }

      if (!isParentIncluded && queryLength > 1) {
        if (!isConnection) {
          // this is what we want to hijack for our modal
          alert('this table has no connections!');
        } else {
          state.query.splice(indexOfFrom, 0, action.payload);
          state.query.splice(indexOfFrom + 3, 0, {
            string: action.payload.parent,
            parent: action.payload.parent,
          });
        }
      }
      state.isClause = false;
    },
    removeColumn(state, action) {
      state.removedNode = action.payload;
      if (!action.payload.string.endsWith(',')) {
        state.query = state.query.filter((node) => {
          return (action.payload.string !== node.string.slice(0, -1));
        });
      }
      state.query = state.query.filter((node) => {
        return (action.payload.string !== node.string);
      });

      if (state.numOfColumns > 1) {
        state.numOfColumns--;
      }

      const includesFrom = state.query.some((item) => item.string === 'FROM');

      if (includesFrom && state.query.length < 4 && state.query.length > 2) {
        if (state.query.length > 1 && state.numOfClauses >= 2) {
          state.numOfClauses--;
        }
        state.query = state.query.slice(0, -2);
      }

      for (let i = 0; i < state.query.length; i++) {
        if (
          state.query[i].string === 'FROM' &&
            i > 1 &&
            state.query[i - 1].string.endsWith(',')
        ) {
          state.query[i - 1].string = state.query[i - 1].string.slice(0, -1);
        }
      }
    },
    addClauseOrCondition(state, action) {
      state.isClause = true;
      if (action.payload !== '=' && action.payload !== '*') {
        state.query.push({
          string: action.payload,
          parent: 'clause',
        });
        state.numOfClauses++;
      } else {
        state.query.push({
          string: action.payload,
          parent: 'condition',
          inputVisible: true,
        });
        state.numOfClauses++;
      }
    },
    removeClauseOrCondition(state, action) {
      state.removedNode = action.payload;
      state.query = state.query.filter((node, index) => {
        return !(
          node.string === action.payload.string &&
           index === action.payload.index
        );
      });
      if (state.numOfClauses > 1 && action.payload.parent !== 'value') {
        state.numOfClauses--;
      };
    },
    addInput(state, action) {
      state.query.push(action.payload);
    },
    addJoin(state, action) {
      const {
        currentParent,
        addedParent,
        selectedJoin,
        selectedColumnOne,
        selectedColumnTwo,
      } = action.payload;
      if (selectedJoin !== 'CROSS JOIN') {
        state.query.push({
          string: `${selectedJoin} ${addedParent} ON ${currentParent}.${selectedColumnOne} = ${addedParent}.${selectedColumnTwo}`,
          parent: 'JOIN',
        });
      } else if (selectedJoin === 'CROSS JOIN') {
        state.query.push({
          string: `${selectedJoin} ${addedParent} ON ${currentParent}.${selectedColumnOne} = ${addedParent}.${selectedColumnTwo}`,
          parent: 'JOIN',
        });
      }
      state.isModalOpen = false;
    },
    // add this to query from the join:
    // INNER JOIN table2 ON table1.column = table2.column;
    // FULL OUTER JOIN table2 ON table1.column_name = table2.column_name;
    // LEFT JOIN table2 ON table1.column_name = table2.column_name;
    // RIGHT JOIN table2 ON table1.column_name = table2.column_name;
    // Cross join is kinda funky** SELECT Table1.FirstName, Table1.LastName, Table2.Department FROM Employees Table1 CROSS JOIN Departments Table2;
    removeInputWindow(state) {
      state.query[state.query.length - 2].inputVisible = false;
    },
    removeValue(state, action) {
      state.removedNode = action.payload;
      state.query = state.query.filter((node, index) => {
        return !(node.string === action.payload.string && node.parent === action.payload.parent);
      });
    },
    openModal(state, action) {
      // redefining indexOfFrom
      const indexOfFrom = state.query.findIndex((node) => {
        return node.string === 'FROM';
      });
      // this is the table that is in the query already
      state.currentParent = state.query[indexOfFrom + 1].string;
      // updating value of addedParent to the parent value of the clicked node (aka the table of the clicked column)
      state.addedParent = action.payload.parent;
      // reassigning isModalOpen property to true so that the subscriber in DBFlowContainer can see that state has changed so it can open the modal
      state.isModalOpen = true;
    },
    openColumnModal(state, action) {
      state.isColumnModalOpen = true;
      state.selectedJoin = action.payload;
    },
    closeModal(state, action) {
      state.isModalOpen = false;
    },
    addTestResults(state, action) {
      console.log(action.payload, ' :action.payload');
      const {query, time, data} = action.payload;
      state.testResults.push({
        query,
        data,
        time,
      });
    },
    testResultsToDisplay(state, action) {
      console.log('this is what we want to display: ', action.payload)
      state.testResultsToDisplay = action.payload;
    },
  },
});

export const {
  addColumn,
  removeColumn,
  addClauseOrCondition,
  removeClauseOrCondition,
  addInput,
  addJoin,
  removeInputWindow,
  removeValue,
  openModal,
  closeModal,
  currentParent,
  addedParent,
  openColumnModal,
  addTestResults,
  testResultsToDisplay,
} = querySlice.actions;
export default querySlice.reducer;
