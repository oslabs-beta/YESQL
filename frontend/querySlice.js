import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
  query: ['SELECT'],
}

const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    add(state, action) {
        if (state.query.includes("FROM")) {
          state.query.splice(-2, 0, `${action.payload[0]}`);
        } else {
          state.query.push(`${action.payload[0]}`)
          state.query.push('FROM')
          state.query.push(`${action.payload[1]}`);
        };
      
    },
    remove(state, action) {
      // console.log(action.payload, 'action.payload')
      if (state.query[2] === "FROM") state.query = state.query.slice(0, 1);
      else state.query = state.query.filter((clause) => clause !== `${action.payload[0]}`);
    }
  },
})

export const { add, remove } = querySlice.actions
export default querySlice.reducer;