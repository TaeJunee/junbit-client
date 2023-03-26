import { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  currentUnit,
  setUnitData,
} from '../../../redux/controlPanel/unit/unitSlice'

export default function useUnit() {
  const dispatch = useDispatch()
  const unitOptionRef = useRef<HTMLDivElement>(null)
  const unit = useSelector(currentUnit)
  const [isOpenUnitOption, openUnitOption] = useState(false)

  const handleToggleUnitOption = () => {
    openUnitOption(!isOpenUnitOption)
  }

  const handleCloseUnitOption = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isOpenUnitOption && !unitOptionRef.current?.contains(target)) {
        openUnitOption(false)
      }
    },
    [isOpenUnitOption]
  )

  const handleSetUnit = (value: UnitType | number, displayText: string) => {
    dispatch(setUnitData({ value, displayText }))
  }

  useEffect(() => {
    window.addEventListener('click', e => {
      handleCloseUnitOption(e)
    })
    return () => {
      window.removeEventListener('click', e => {
        handleCloseUnitOption(e)
      })
    }
  }, [handleCloseUnitOption])

  return {
    unit,
    isOpenUnitOption,
    unitOptionRef,
    handleSetUnit,
    handleToggleUnitOption,
  }
}
