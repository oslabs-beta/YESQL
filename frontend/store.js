import { configureStore } from '@reduxjs/toolkit'
import dbReducer from './dbSlice'
// import todosReducer from '../features/todos/todosSlice'
// import filtersReducer from '../features/filters/filtersSlice'

export const store = configureStore({
  reducer: {
    database: dbReducer,
  },
})