import { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  isOpenCalendar,
  toggleCalendar,
  currentDate,
  setDateValue,
  toggleTimeOption,
  isOpenTimeOption,
  currentTime,
  setTime,
} from '../../../redux/controlPanel/datetime/datetimeSlice'
export default function useDatetime() {
  const dispatch = useDispatch()
  // const [openTimeOption, setOpenTimeOption] = useState(false)
  const [wide, setWide] = useState(false)
  const dateValue = useSelector(currentDate)
  const time = useSelector(currentTime)
  const isOpenCal = useSelector(isOpenCalendar)
  const isOpenTimeOpt = useSelector(isOpenTimeOption)
  const calendarRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const timeOptionRef = useRef<HTMLDivElement>(null)

  const handleOpenCalendar = (e: React.MouseEvent) => {
    e.stopPropagation()
    dispatch(toggleTimeOption(false))
    dispatch(toggleCalendar(true))
  }

  const handleCloseCalendar = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isOpenCal && !calendarRef.current?.contains(target)) {
        dispatch(toggleCalendar(true))
      }
    },
    [isOpenCal, dispatch]
  )

  const handleSetDate = (e: Date) => {
    dispatch(setDateValue(e.toISOString()))
    dispatch(toggleCalendar(false))
  }

  const handleClickCloseCalendar = (e: React.MouseEvent) => {
    e.stopPropagation()
    dispatch(toggleCalendar(false))
  }

  const handleToggleTimeOption = () => {
    dispatch(toggleTimeOption(!isOpenTimeOpt))
  }

  const handleCloseTimeOption = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isOpenTimeOpt && !timeOptionRef.current?.contains(target)) {
        dispatch(toggleTimeOption(false))
      }
    },
    [isOpenTimeOpt, dispatch]
  )

  const handleSetTime = (value: number, displayText: string) => {
    dispatch(setTime({ value, displayText }))
  }
  useEffect(() => {
    window.addEventListener('click', e => {
      handleCloseCalendar(e)
      handleCloseTimeOption(e)
    })
    return () => {
      window.removeEventListener('click', e => {
        handleCloseCalendar(e)
        handleCloseTimeOption(e)
      })
    }
  }, [handleCloseCalendar, handleCloseTimeOption])

  return {
    isOpenCal,
    isOpenTimeOpt,
    dateValue,
    time,
    wide,
    setWide,
    calendarRef,
    closeButtonRef,
    timeOptionRef,
    handleOpenCalendar,
    handleClickCloseCalendar,
    handleSetDate,
    handleSetTime,
    handleToggleTimeOption,
  }
}
