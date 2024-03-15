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
    delete(state) {
      state.query.pop();
    }
  },
})

export const { add } = querySlice.actions
export default querySlice.reducer;