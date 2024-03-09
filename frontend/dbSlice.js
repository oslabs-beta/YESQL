import { createSlice } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';






// const initialState = {
//   database: {},
//   query: [],
// }

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api '}),
  endpoints: (builder) => ({
    getDBSchema: builder.query({
      query: () => '/db'
    }),
    connect: builder.mutation({
      query: credentials => ({
        url: '/connect',
        method: 'POST',
        // Include the user's credentials on body:
        body: credentials
      })
    })
  })
  // name: 'counter',
  // initialState,
  // reducers: {
  //   increment: (state) => {
  //     // Redux Toolkit allows us to write "mutating" logic in reducers. It
  //     // doesn't actually mutate the state because it uses the Immer library,
  //     // which detects changes to a "draft state" and produces a brand new
  //     // immutable state based off those changes
  //     state.value += 1
  //   },
  //   decrement: (state) => {
  //     state.value -= 1
  //   },
  //   incrementByAmount: (state, action) => {
  //     state.value += action.payload
  //   },
  // },
})
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetDBSchemaQuery, useConnectMutation } = apiSlice;
// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// export default counterSlice.reducer