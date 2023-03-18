import { css } from 'styled-components'

const colors = {
  yellow: '#F2FF59',
  tomato: '#FF6347',
  carrot: '#FF8B3A',
  red: '#F22D50',
  blue: '#03A9F4',
  grey90: '#323232',
  grey70: '#616161',
  grey50: '#9E9E9E',
  grey40: '#BDBDBD',
  grey30: '#E0E0E0',
  grey20: '#EEEEEE',
  grey10: '#F5F5F5',
} as const

const options = {
  scrollBar: css`
    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #e0e0e0;
      border-radius: 12px;
    }
    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
  `,
} as const

const theme = { colors, options }
export type ColorType = typeof colors
export type OptionType = typeof options
export default theme
