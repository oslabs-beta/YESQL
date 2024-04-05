import {createSlice} from '@reduxjs/toolkit';


// Inside our store we have:
// 1. query: This is where all pieces of the query field is being stored.
//    We use it to display buttons and we access the parent property
//    in order to see which table or what type this specific part is of the query.
//    It can be a clause, an empty string, a condition, or the table name of the column.
//    There is still more work to do on the type of parent each object should have.
// 2. removedNode: We use this state in order to store the node that we'd like to
//    remove from the query. Then we access removedNode in the customNode in order
//    to change the class of that specific button in the tables to remove the purple
//    background from the button/column.
// 3. numOfClauses: This is only used for the display of the query. We've updated it
//    so that each time we add a clause, we jump onto the next line in the query field.
//    This makes it much easier to read instead of having an enormous string in one line.
//    We DON'T want this to happen for our first clause, select, which is why we are tracking
//    the number of clauses so that we can add a <br/> tag when the clauses are more than 2.
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
    // 1. indexOfFrom: This variable is being used in order for us to find
    //    where the index of from is in our query array. This way we can select wether
    //    whatever we are adding should be pushed to the end of the array, or if
    //    we need to use the slice method in order to insert the new object before the FROM clause.
    // 2. We are using the fromIncluded in order to know whether we should be adding the FROM clause.
    //    If the FROM clause is already included in the query, we don't need to add it again.
    //
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
      // if numOfClauses > 2, push column to end of array.
      if (state.numOfClauses > 2) {
        array.push(column);
      }
      // if nothing has been pushed to the array yet (if length is one), and action.payload.isColumn is true,
      // push the node, with from, and the parent.
      if (array.length === 1 && isColumn) {
        state.numOfClauses += 1;
        array.push(
            column,
            {string: 'FROM', parent: 'clause'},
            {string: column.parent, parent: column.parent},
        );
      }
      // if pushing another node (with the same parent as (isParentIncluded),
      // use the array.splice method to insert
      if (isParentIncluded && isColumn && state.numOfClauses === 2) {
        array.splice(indexOfFrom, 0, column);
      }

      // if user is trying to select column from a table that is not already included
      // check if there is a connection, if not, return alert
      if (!isParentIncluded && queryLength > 1) {
        if (!isConnection) {
          alert('this table has no connections!');
        } else {
          state.query.push(action.payload);
        }
      }
    },
    // In the remove reducer, we are filtering out the object that we receive through the payload.
    removeColumn(state, action) {
      let hasComma;
      state.removedNode = action.payload;
      if (state.removedNode.parent === 'clause' || state.query.length > 1 && state.numOfClauses >= 2) state.numOfClauses--;
      state.query = state.query.filter((node) => {
        if (typeof node.string === 'string' && node.string.endsWith(',') && node.string === action.payload.string) {
          hasComma = node.string.slice(0, -1);
        }
        return !(node.string === action.payload.string || hasComma === action.payload.string && node.parent === action.payload.parent);
      });
      if (state.numOfColumns > 1) {
        state.numOfColumns--;
      }

      const includesFrom = state.query.some((item) => item.string === 'FROM');
      if (includesFrom && state.query.length < 4 && state.query.length > 2) {
        state.query = state.query.slice(0, -2);
        if (state.query.length > 1 && state.numOfClauses >= 2) state.numOfClauses--;
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
      const beforeFilter = state.query.length;
      state.query = state.query.filter((node, index) => {
        return !(
          node.string === action.payload.string &&
           index === action.payload.index
        );
      });
      if (state.query.length > 1) state.numOfClauses--;
    },
    addInput(state, action) {
      state.query.push(action.payload);
    },
    removeInput(state, action) {
      state.query[state.query.length - 2].inputVisible = false;
    },
  },
});

export const {
  addColumn,
  removeColumn,
  addClauseOrCondition,
  removeClauseOrCondition,
  addInput,
  removeInput,
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
