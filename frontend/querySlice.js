import { createSlice } from "@reduxjs/toolkit";

const initialState = { query: '' }

const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    add(state, action) {
      state.query += action.payload
    },
  },
})

export const { add } = querySlice.actions
export default querySlice.reducer;