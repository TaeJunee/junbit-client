import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
  unit: {
    value: UnitType
    displayText: string
  }
}

export const unitSlice = createSlice({
  name: 'unit',
  initialState: {
    unit: {
      value: 1,
      displayText: '1시간',
    },
  } as InitialState,
  reducers: {
    setUnitData: (state, action) => {
      state.unit = { ...state.unit, ...action.payload }
    },
  },
})

export const { setUnitData } = unitSlice.actions
export const currentUnit = (state: any) => state.unit.unit
export default unitSlice.reducer
