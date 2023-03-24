import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'
import 'moment/locale/ko'

const date = new Date()
interface InitialState {
  isOpenCalendar: boolean
  isOpenTimeOption: boolean
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
    isOpenCalendar: false,
    isOpenTimeOption: false,
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
    openCalendar: state => {
      state.isOpenCalendar = true
    },
    closeCalendar: state => {
      state.isOpenCalendar = false
    },
    openTimeOption: state => {
      state.isOpenTimeOption = true
    },
    closeTimeOption: state => {
      state.isOpenTimeOption = false
    },
    reset: state => {
      state.value = ''
    },
  },
})

export const {
  setDatetime,
  setDateValue,
  setTime,
  openCalendar,
  closeCalendar,
  openTimeOption,
  closeTimeOption,
  reset,
} = datetimeSlice.actions
export const currentDatetime = (state: any) => state.datetime.value
export const currentDate = (state: any) => state.datetime.dateValue
export const currentTime = (state: any) => state.datetime.time
export const isOpenCalendar = (state: any) => state.datetime.isOpenCalendar
export const isOpenTimeOption = (state: any) => state.datetime.isOpenTimeOption
export default datetimeSlice.reducer
