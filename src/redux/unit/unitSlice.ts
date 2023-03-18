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
    openUnitOption: (state) => {
      state.isOpenUnitOption = true
    },
    closeUnitOption: (state) => {
      state.isOpenUnitOption = false
    },
  },
})

export const { setUnitData, openUnitOption, closeUnitOption } =
  unitSlice.actions
export const currentUnit = (state: any) => state.unit.unit
export const isOpenUnitOption = (state: any) => state.unit.isOpenUnitOption
export default unitSlice.reducer
