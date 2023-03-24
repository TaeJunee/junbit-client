import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
  hoverOn: string | null
  circleHoverOn: string | null
  barHoverOn: string | null
  rankHoverOn: number | null
  tooltipHoverOn: string | null
}

export const hoverSlice = createSlice({
  name: 'hover',
  initialState: {
    hoverOn: null,
    circleHoverOn: null,
    barHoverOn: null,
    rankHoverOn: null,
    tooltipHoverOn: null,
  } as InitialState,
  reducers: {
    setHoverOn: (state, action) => {
      state.hoverOn = action.payload
    },
    setCircleHoverOn: (state, action) => {
      state.circleHoverOn = action.payload
    },
    setBarHoverOn: (state, action) => {
      state.barHoverOn = action.payload
    },
    setRankHoverOn: (state, action) => {
      state.rankHoverOn = action.payload
    },
    setToolTipHoverOn: (state, action) => {
      state.tooltipHoverOn = action.payload
    },
  },
})

export const {
  setHoverOn,
  setCircleHoverOn,
  setBarHoverOn,
  setRankHoverOn,
  setToolTipHoverOn,
} = hoverSlice.actions
export const currentlyHoverOn = (state: any) => state.hover.hoverOn
export const currentlyCirCleHoverOn = (state: any) => state.hover.circleHoverOn
export const currentlyBarHoverOn = (state: any) => state.hover.barHoverOn
export const currentlyRankHoverOn = (state: any) => state.hover.rankHoverOn
export const currentlyToolTipHoverOn = (state: any) =>
  state.hover.tooltipHoverOn
export default hoverSlice.reducer
