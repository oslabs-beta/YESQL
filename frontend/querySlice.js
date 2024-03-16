import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
  query: ['SELECT'],
}

const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    add(state, action) {
      state.query.push(action.payload)
    },
    remove(state, action) {
      console.log(action.payload, 'action.payload')
      state.query = state.query.filter((clause) => clause !== action.payload);
    }
  },
})

export const { add, remove } = querySlice.actions
export default querySlice.reducer;