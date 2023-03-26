import { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  currentDate,
  setDateValue,
  currentTime,
  setTime,
} from '../../../redux/controlPanel/datetime/datetimeSlice'
export default function useDatetime() {
  const dispatch = useDispatch()
  const [wide, setWide] = useState(false)
  const dateValue = useSelector(currentDate)
  const time = useSelector(currentTime)
  const [isOpenCalendar, openCalendar] = useState(false)
  const [isOpenTimeOption, openTimeOption] = useState(false)
  const calendarRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const timeOptionRef = useRef<HTMLDivElement>(null)

  const handleOpenCalendar = (e: React.MouseEvent) => {
    e.stopPropagation()
    openTimeOption(false)
    openCalendar(true)
  }

  const handleCloseCalendar = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isOpenCalendar && !calendarRef.current?.contains(target)) {
        openCalendar(false)
      }
    },
    [isOpenCalendar]
  )

  const handleSetDate = (e: Date) => {
    dispatch(setDateValue(e.toISOString()))
    openCalendar(false)
  }

  const handleClickCloseCalendar = (e: React.MouseEvent) => {
    e.stopPropagation()
    openCalendar(false)
  }

  const handleToggleTimeOption = () => {
    openTimeOption(!isOpenTimeOption)
  }

  const handleCloseTimeOption = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isOpenTimeOption && !timeOptionRef.current?.contains(target)) {
        openTimeOption(false)
      }
    },
    [isOpenTimeOption]
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
    isOpenCalendar,
    isOpenTimeOption,
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
