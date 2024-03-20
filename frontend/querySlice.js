import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
  query: ["SELECT"],
  id: [0],
  removedNode: [],
}

const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    add(state, action) {
      console.log(action.payload, 'action.payload in querySlice')
        if (state.query.includes("FROM")) {
          state.query.splice(-2, 0, `${action.payload[0]}`);
          state.id.push(action.payload[1]);
        } else {
          state.query.push(`${action.payload[0]}`);
          state.id.push(action.payload[1]);

          state.query.push(`FROM`);
          state.id.push(action.payload[1]);

          state.query.push(`${action.payload[1]}`);
          state.id.push(action.payload[1]);
        };
      },
    remove(state, action) {
      console.log(action.payload, 'action.payload in line 29')
      state.removedNode = action.payload;
      if (state.query[2] === "FROM" && state.query.length === 4) {
        state.query = state.query.slice(0, 1);
      } else if (typeof action.payload[1] === "string") {
        state.query = state.query.filter((clause, index) => clause !== action.payload[0]);
        state.id = state.id.filter((el, index) => el !== action.payload[0])
      } else {
        state.query = state.query.filter((clause, index) => index !== action.payload[1]);
      } 
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