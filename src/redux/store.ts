import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice'
import datetimeReducer from './table/datetime/datetimeSlice'
import unitReducer from './table/unit/unitSlice'
import radioOptionReducer from './table/radioOption/radioOptionSlice'
import hoverReducer from './chart/hoverSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    datetime: datetimeReducer,
    unit: unitReducer,
    radioOption: radioOptionReducer,
    hover: hoverReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
