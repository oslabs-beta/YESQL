import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  query: [{
    string: 'SELECT',
    parent: 'clause',
    hasComma: false,
  }],
  removedNode: {},
  numOfClauses: 1,
  numOfColumns: 0,
  tableConnected: false,
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

      if (state.numOfClauses > 1 && indexOfFrom !== -1) {
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
          alert('this table has no connections!');
        } else {
          state.query.splice(indexOfFrom, 0, action.payload);
          state.query.splice(indexOfFrom + 3, 0, {
            string: action.payload.parent,
            parent: action.payload.parent,
          });
        }
      }
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
        if (state.query.length > 1 && state.numOfClauses >= 2) state.numOfClauses--;
        state.query = state.query.slice(0, -2);
      }

      for (let i = 0; i < state.query.length; i++) {
        if (state.query[i].string === 'FROM' && i > 1 && state.query[i - 1].string.endsWith(',')) {
          state.query[i - 1].string = state.query[i - 1].string.slice(0, -1);
        }
      }
    },
    addClauseOrCondition(state, action) {
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
      if (state.numOfClauses > 1 && action.payload.parent !== 'value') state.numOfClauses--;
    },
    addInput(state, action) {
      state.query.push(action.payload);
    },
    removeInputWindow(state) {
      state.query[state.query.length - 2].inputVisible = false;
    },
    removeValue(state, action) {
      state.removedNode = action.payload;
      state.query = state.query.filter((node, index) => {
        return !(node.string === action.payload.string && node.parent === action.payload.parent);
      });
    },
  },
});

export const {
  addColumn,
  removeColumn,
  addClauseOrCondition,
  removeClauseOrCondition,
  addInput,
  removeInputWindow,
  removeValue,
} = querySlice.actions;
export default querySlice.reducer;


// last, push the node to the last element of the array

// const length = state.query.length;
// console.log(length, ' <--- length in add reducer')
// let indexOfFrom;
// let fromIncluded = false;
// let connections = action.payload.foreignConnections;
// state.query.forEach((el, index) => {
//   if (el.string === 'FROM') {
//     fromIncluded = true;
//     indexOfFrom = index;
//   }
// });
// const isParentIncluded = state.query.some(el => el.string === action.payload.parent);
// const isConnection = state.query.some(el => connections ? connections.includes(el.string) : false);
// if (action.payload.parent && !isParentIncluded) {
//   if (fromIncluded && !isConnection) alert('Tables do not have a connection!');
// };
// if (fromIncluded && action.payload.parent !== 'clause' && action.payload.parent) {
//   if (state.numOfClauses > 2) {
//     state.query.push(action.payload);
//   } else if (isConnection || isParentIncluded) {
//     state.query.splice(indexOfFrom, 0, action.payload)
//     state.numOfColumns++;
//     console.log(state.numOfColumns, '<--- numOfColumns met the condition')
//   }
// } else {
//   // console.log('Payload => ', action.payload);
//   state.query.push(action.payload);
//   state.numOfColumns++;
//   console.log(state.numOfColumns, '<--- numOfColumns')
// };
// if (!fromIncluded && state.query.length > 0) {
//   state.query.push({ string: 'FROM', parent: 'clause' });
//   state.numOfClauses++;
//   state.query.push({ string: action.payload.parent, parent: action.payload.parent });
// };
// if (length > 2 && indexOfFrom < length - 1 && state.numOfClauses === 2) {
//   for (let i = 1; i < indexOfFrom; i++) {
//       if (!state.query[i].string.includes(',')) state.query[i].string += ',';
//   }
// }
// if (isConnection && !isParentIncluded) state.query.splice(indexOfFrom + 3, 0, { string: action.payload.parent, parent: action.payload.parent });
