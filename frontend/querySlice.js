import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
  query: [
    { 
      string: "SELECT",
      id: 0
    }
  ],
}

const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    add(state, action) {
        if (state.query.includes("FROM")) {
          state.query.splice(-2, 0, `${action.payload[0]}`);
          state.id.push(state.id.length);
        } else {
          state.query.push(`${action.payload[0]}`);
          state.id.push(state.id.length);

          state.query.push(`FROM`);
          state.id.push(state.id.length);

          state.query.push(`${action.payload[1]}`);
          state.id.push(state.id.length);
        };
      },
    remove(state, action) {
      console.log(state, '<- state')
      console.log(action.payload, 'action.payload')
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
      state.query.push({
        string: action.payload,
        id: state.id,
      });
      state.id++;
    },
    removeClause(state, action) {
    }
  },
})

export const { add, remove, addClause } = querySlice.actions
export default querySlice.reducer;