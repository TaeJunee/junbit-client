import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'
import 'moment/locale/ko'

const date = new Date()
interface InitialState {
  dateValue: string
  time: {
    value: number
    displayText: string
  }
  value: string
}

export const datetimeSlice = createSlice({
  name: 'datetime',
  initialState: {
    dateValue: new Date().toISOString(),
    time: {
      value: date.getHours() - 1,
      displayText: `${moment(date.getHours() - 1, 'H').format('a hh')}시`,
    },
    value: new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours() - 1
    ).toISOString(),
  } as InitialState,
  reducers: {
    setDatetime: (state, action) => {
      state.value = action.payload
    },
    setDateValue: (state, action) => {
      state.dateValue = action.payload
    },
    setTime: (state, action) => {
      state.time = { ...state.time, ...action.payload }
    },
  },
})

export const { setDatetime, setDateValue, setTime } = datetimeSlice.actions
export const currentDatetime = (state: any) => state.datetime.value
export const currentDate = (state: any) => state.datetime.dateValue
export const currentTime = (state: any) => state.datetime.time
export default datetimeSlice.reducer
