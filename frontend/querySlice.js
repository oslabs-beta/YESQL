import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
  query: [{
    string: "SELECT",
    parent: ""
  }],
  removedNode: {},
}

const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    add(state, action) {
      let lengthOfQuery = 0;
      for (let key in state.query) {
        lengthOfQuery++;
        if (lengthOfQuery > 1 && lengthOfQuery === Object.keys(state.query).length && state.query[key].parent !== action.payload.parent) {
          state.query.push({
            string: 'FROM',
            parent: ''
          })
          state.query.push({
            string: state.query[key].parent,
            parent: state.query[key].parent,
          })
          lengthOfQuery += 2;
        }
      }
      state.query.push({
        string: action.payload.string,
        parent: action.payload.parent
      })
      },
    remove(state, action) {
      state.removedNode = action.payload;
      state.query = state.query.filter((node) => !(node.string === action.payload.string && node.parent === action.payload.parent));
    },
    addClause(state, action) {
      state.query.push({
        string: action.payload,
        parent: ''
      });
    },
    removeClause(state, action) {
    }
  },
})

export const { add, remove, addClause } = querySlice.actions
export default querySlice.reducer;