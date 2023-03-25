import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
  isOpenUnitOption: boolean
  unit: {
    value: UnitType
    displayText: string
  }
}

export const unitSlice = createSlice({
  name: 'unit',
  initialState: {
    isOpenUnitOption: false,
    unit: {
      value: 1,
      displayText: '1시간',
    },
  } as InitialState,
  reducers: {
    setUnitData: (state, action) => {
      state.unit = { ...state.unit, ...action.payload }
    },
    toggleUnitOption: (state, action) => {
      state.isOpenUnitOption = action.payload
    },
  },
})

export const { setUnitData, toggleUnitOption } = unitSlice.actions
export const currentUnit = (state: any) => state.unit.unit
export const isOpenUnitOption = (state: any) => state.unit.isOpenUnitOption
export default unitSlice.reducer
