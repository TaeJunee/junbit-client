import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetTradeVolumeRankQuery } from '../../redux/api/token/tradeVolume/tradeVolumeSlice'
import {
  currentDate,
  currentDatetime,
  currentTime,
  setDatetime,
} from '../../redux/controlPanel/datetime/datetimeSlice'
import {
  currentUnit,
  setUnitData,
} from '../../redux/controlPanel/unit/unitSlice'

export default function useControlPanel() {
  const dispatch = useDispatch()
  const [openPanel, setOpenPanel] = useState(true)

  const date = new Date(useSelector(currentDate))
  const time = useSelector(currentTime)
  const unit = useSelector(currentUnit)
  const { refetch } = useGetTradeVolumeRankQuery({
    unit: unit.value,
    datetime: useSelector(currentDatetime),
  })

  const handleTogglePanel = () => {
    setOpenPanel(!openPanel)
  }

  const handleClickApplyOption = () => {
    const ISODatetime = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      time.value
    ).toISOString()
    dispatch(setDatetime(ISODatetime))
    dispatch(setUnitData(unit.value))
    refetch()
  }

  return {
    openPanel,
    handleTogglePanel,
    handleClickApplyOption,
  }
}
