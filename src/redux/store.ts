import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice'
import datetimeReducer from './datetime/datetimeSlice'
import unitReducer from './unit/unitSlice'
import radioOptionReducer from './radioOption/radioOptionSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    datetime: datetimeReducer,
    unit: unitReducer,
    radioOption: radioOptionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
