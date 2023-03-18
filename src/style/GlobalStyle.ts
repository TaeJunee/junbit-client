import { createGlobalStyle } from 'styled-components'
import NotoSansKRRegular from '../fonts/NotoSansKR-Regular.otf'
import NotoSansKRBold from '../fonts/NotoSansKR-Bold.otf'
import 'react-calendar/dist/Calendar.css'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Noto Sans KR', sans-serif;
    src: url(${NotoSansKRRegular});
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Noto Sans KR', sans-serif;
    src: url(${NotoSansKRBold});
    font-weigiht: 500;
    font-style: normal;
  }

  ${reset}

  * {
    box-sizing: border-box;
  }

  html {
    width: 100vw;
    height: calc(var(--vh, 1vh) * 100);
    font-family: 'Noto Sans KR', sans-serif;
    margin:0;
    padding:0;
  }

  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;

    #App {
      width: 100%;
      height: 100%;
    }
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
  }

  .react-calendar {
    width: 350px;
    border: none;
    cursor: default;
  }
  .react-calendar--doubleView {
    width: 768px;
  }
  .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    justify-content: space-between;
  }
  .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 45%;
  }
  .react-calendar__navigation {
    display: flex;
    height: 44px;
    margin-bottom: 1em;
  }
  .react-calendar__navigation__arrow {
    border-radius: 50%;
  }
  .react-calendar__navigation__arrow img {
    width: 16px;
    height: 16px;
  }
  .react-calendar__navigation__prev2-button,
  .react-calendar__navigation__next2-button {
    display: none;
  }
  .react-calendar__navigation__label {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 168px;
    font-weight: bold;
  }
  .react-calendar__navigation__label:hover {
    background: white;
  }
  .react-calendar__navigation__label__divider {
    display: none;
  }
  .react-calendar__navigation button:disabled {
    background-color: white;
    color: #323232;
    cursor: default;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #EEEEEE;
  }
  .react-calendar__month-view__weekdays {
    text-align: center;
    cursor: default;
    
    font-size: 12px;
    color: #909090;
  }
  .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
  }
  .react-calendar__month-view__weekdays__weekday abbr {
    text-decoration: none;
  }
  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    font-weight: bold;
  }
  .react-calendar__month-view__days__day--weekend {
    color: #323232;
  }
  .react-calendar__tile {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: none;
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: #EEEEEE;
  }
  .react-calendar__tile--now {
    background: #F22D50;
    color: white;
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #F22D50;
  }
  .react-calendar__tile--active {
    background: #323232;
    color: white;
  }
`

export default GlobalStyle
