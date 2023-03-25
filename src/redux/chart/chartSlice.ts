import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
  hoverOn: string | null
}

export const chartSlice = createSlice({
  name: 'chart',
  initialState: {
    hoverOn: null,
  } as InitialState,
  reducers: {
    setHoverOn: (state, action) => {
      state.hoverOn = action.payload
    },
  },
})

export const { setHoverOn } = chartSlice.actions
export const currentlyHoverOn = (state: any) => state.chart.hoverOn
export default chartSlice.reducer
