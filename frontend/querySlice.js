import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  query: [{
    string: 'SELECT',
    parent: 'clause',
  }],
  removedNode: {},
  numOfClauses: 1,
};

const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    add(state, action) {
      let indexOfFrom;
      let fromIncluded = false;
      const connections = action.payload.foreignConnections;
      state.query.forEach((el, index) => {
        if (el.string === 'FROM') {
          fromIncluded = true;
          indexOfFrom = index;
        }
      });

      const isParentIncluded = state.query.some((el) => {
        return el.string === action.payload.parent;
      });

      const isConnection = state.query.some((el) => {
        return connections ? connections.includes(el.string) : false;
      });

      if (action.payload.parent && !isParentIncluded) {
        if (fromIncluded && !isConnection) {
          alert('Tables do not have a connection!');
        }
      };

      if (fromIncluded &&
        action.payload.parent !== 'clause' &&
        action.payload.parent) {
        if (isConnection || isParentIncluded) {
          state.query.splice(indexOfFrom, 0, action.payload);
        } else {
          console.log('Payload => ', action.payload);
          state.query.push(action.payload);
        }
      }
      if (!fromIncluded && state.query.length > 0) {
        state.query.push({string: 'FROM', parent: 'clause'});
        state.numOfClauses++;
        state.query.push(
            {string: action.payload.parent, parent: action.payload.parent},
        );
      };
      if (isConnection && !isParentIncluded) {
        state.query.splice(
            indexOfFrom + 3,
            0,
            {string: action.payload.parent, parent: action.payload.parent},
        );
      }
    },
    remove(state, action) {
      state.removedNode = action.payload;
      state.query = state.query.filter((node) => {
        !(node.string === action.payload.string &&
          node.parent === action.payload.parent);
      });
    },
    addClause(state, action) {
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
    removeInput(state) {
      state.query[state.query.length - 2].inputVisible = false;
    },
  },
});

export const {add, remove, addClause, removeInput} = querySlice.actions;
export default querySlice.reducer;
