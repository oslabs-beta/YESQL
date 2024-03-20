import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
  query: [{
    string: "SELECT",
    parent: ""
  }],
  removedNode: [],
}

const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    add(state, action) {
      console.log(action.payload, 'action.payload in querySlice')
      state.query.push({
        string: action.payload.string,
        parent: action.payload.parent
      })
      },
    remove(state, action) {
      state.removedNode = action.payload;
      state.query.filter((node) => node.string !== action.payload.string && node.parent !== action.payload.parent)
    },
    addClause(state, action) {
      state.query.push(action.payload);
    },
    removeClause(state, action) {
    }
  },
})

export const { add, remove, addClause } = querySlice.actions
export default querySlice.reducer;