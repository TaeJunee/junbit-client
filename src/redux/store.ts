import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice'
import datetimeReducer from './controlPanel/datetime/datetimeSlice'
import unitReducer from './controlPanel/unit/unitSlice'
import radioOptionReducer from './controlPanel/radioOption/radioOptionSlice'
import chartReducer from './chart/chartSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    datetime: datetimeReducer,
    unit: unitReducer,
    radioOption: radioOptionReducer,
    chart: chartReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
