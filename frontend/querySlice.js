import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
  query: [{
    string: "SELECT",
    parent: "clause"
  }],
  removedNode: {},
  numOfClauses: 1,
}

const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    add(state, action) {
      let indexOfFrom;
      let fromIncluded = false;
      state.query.forEach((el, index) => {
        if (el.string === 'FROM') {
          fromIncluded = true;
          indexOfFrom = index;
        }
      });
      fromIncluded 
      && action.payload.parent !== 'clause' 
      && state.numOfClauses < 3 
      ? 
      state.query.splice(indexOfFrom, 0, action.payload) 
      : state.query.push(action.payload);
      if (!fromIncluded && state.query.length > 0) {
        state.query.push({ string: 'FROM', parent: 'clause' });
        state.numOfClauses++;
      }
      const isParentIncluded = state.query.some(el => el.string === action.payload.parent);
      if (action.payload.parent && !isParentIncluded) 
      state.query.push({string: action.payload.parent, parent: action.payload.parent})
    },
    remove(state, action) {
      state.removedNode = action.payload;
      state.query = state.query.filter((node) => !(node.string === action.payload.string && node.parent === action.payload.parent));
    },
    addClause(state, action) {
      if (action.payload !== '=' && action.payload !== '*') {
        state.query.push({
          string: action.payload,
          parent: 'clause'
        });
        state.numOfClauses++;
      } else {
        state.query.push({
          string: action.payload,
          parent: 'condition',
          inputVisible: true
        });
        state.numOfClauses++
      }
    },
    addInput(state, action) {
      state.query[state.query.length - 2].inputVisible = false;
    },
    removeClause(state, action) {
    }
  },
})

export const { add, remove, addClause, addInput } = querySlice.actions
export default querySlice.reducer;