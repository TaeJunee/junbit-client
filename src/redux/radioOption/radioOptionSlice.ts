import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
  value: RadioOptionType
  priceOption: PriceRankType
}

export const radioOptionSlice = createSlice({
  name: 'radioOption',
  initialState: {
    value: 'VOLUME',
    priceOption: 'DIFF'
  } as InitialState,
  reducers: {
    setRadioOption: (state, action) => {
      state.value = action.payload
    },
    setRadioPriceOption: (state, action) => {
      state.priceOption = action.payload
    },
  },
})

export const { setRadioOption, setRadioPriceOption } = radioOptionSlice.actions
export const currentRadioOption = (state: any) => state.radioOption.value
export const currentRadioPriceOption = (state: any) => state.radioOption.priceOption
export default radioOptionSlice.reducer
