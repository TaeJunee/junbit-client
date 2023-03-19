import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useGetTradeVolumeRankQuery } from '../../redux/api/token/tradeVolume/tradeVolumeSlice'
import { currentDatetime } from '../../redux/datetime/datetimeSlice'
import { currentUnit } from '../../redux/unit/unitSlice'
import {
  currentRadioOption,
  currentRadioPriceOption,
} from '../../redux/radioOption/radioOptionSlice'
import { useGetTradePriceRankQuery } from '../../redux/api/token/tradePrice/tradePriceSlice'

export default function useFetchData() {
  const datetime = useSelector(currentDatetime)
  const unit = useSelector(currentUnit)
  const radioOption = useSelector(currentRadioOption)
  const radioPriceOption = useSelector(currentRadioPriceOption)
  const [volumeSkip, setVolumeSkip] = useState<boolean>(radioOption === 'PRICE')
  const [priceSkip, setPriceSkip] = useState<boolean>(radioOption === 'VOLUME')

  useEffect(() => {
    if (radioOption === 'PRICE') {
      setVolumeSkip(true)
      setPriceSkip(false)
    } else {
      setVolumeSkip(false)
      setPriceSkip(true)
    }
  }, [radioOption])

  const resetDatetime = (datetime: string, unit: UnitType) => {
    const date = new Date(datetime)
    return new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours() - unit,
    ).toISOString()
  }

  const { data: volumeData, isLoading: isVolumeDataLoading } =
    useGetTradeVolumeRankQuery(
      { unit: unit.value, datetime },
      { refetchOnMountOrArgChange: false, skip: volumeSkip },
    )
  const { data: prevVolumeData, isLoading: isPrevVolumeDataLoading } =
    useGetTradeVolumeRankQuery(
      { unit: unit.value, datetime: resetDatetime(datetime, unit.value) },
      { refetchOnMountOrArgChange: false, skip: volumeSkip },
    )
  const { data: priceData, isLoading: isPriceDataLoading } =
    useGetTradePriceRankQuery(
      { unit: unit.value, datetime },
      { refetchOnMountOrArgChange: false, skip: priceSkip },
    )
  const { data: prevPriceData, isLoading: isPrevPriceDataLoading } =
    useGetTradePriceRankQuery(
      { unit: unit.value, datetime: resetDatetime(datetime, unit.value) },
      { refetchOnMountOrArgChange: false, skip: priceSkip },
    )

  return {
    datetime,
    unit,
    radioOption,
    radioPriceOption,
    resetDatetime,
    volumeData: volumeData?.payload,
    isVolumeDataLoading,
    prevVolumeData: prevVolumeData?.payload,
    isPrevVolumeDataLoading,
    priceData: priceData?.payload,
    isPriceDataLoading,
    prevPriceData: prevPriceData?.payload,
    isPrevPriceDataLoading,
  }
}
