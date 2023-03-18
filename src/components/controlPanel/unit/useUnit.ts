import { useCallback, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  closeUnitOption,
  currentUnit,
  isOpenUnitOption,
  openUnitOption,
  setUnitData,
} from '../../../redux/unit/unitSlice'

export default function useUnit() {
  const dispatch = useDispatch()
  const unitOptionRef = useRef<HTMLDivElement>(null)
  const unit = useSelector(currentUnit)
  const isOpenUnit = useSelector(isOpenUnitOption)
  const handleToggleUnitOption = () => {
    if (!isOpenUnit) {
      dispatch(openUnitOption())
      return
    }

    dispatch(closeUnitOption())
  }

  const handleCloseUnitOption = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isOpenUnit && !unitOptionRef.current?.contains(target)) {
        dispatch(closeUnitOption())
      }
    },
    [isOpenUnit, dispatch],
  )

  const handleSetUnit = (value: UnitType | number, displayText: string) => {
    dispatch(setUnitData({ value, displayText }))
  }

  useEffect(() => {
    window.addEventListener('click', (e) => {
      handleCloseUnitOption(e)
    })
    return () => {
      window.removeEventListener('click', (e) => {
        handleCloseUnitOption(e)
      })
    }
  }, [handleCloseUnitOption])

  return {
    unit,
    isOpenUnit,
    unitOptionRef,
    handleSetUnit,
    handleToggleUnitOption,
  }
}
