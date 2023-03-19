import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
  useGetTokenVolumeRankQuery,
  useGetTokenPriceRankQuery,
} from '../../../redux/api/token/chart/chartSlice'
import { currentRadioOption } from '../../../redux/radioOption/radioOptionSlice'
import { currentUnit } from '../../../redux/unit/unitSlice'
import { currentDatetime } from '../../../redux/datetime/datetimeSlice'
import { tokenData } from '../../../infra/token'
import { getKeyByValue } from '../../../utils/getKey'

export default function useFetchData() {
  const { token_name: tokenEnName } = useParams()
  const location = useLocation()
  const tokenKRName = location.state?.tokenName
  const market = getKeyByValue(tokenData, tokenEnName as string)
  const radioOption = useSelector(currentRadioOption)
  const unit = useSelector(currentUnit)
  const datetime = useSelector(currentDatetime)

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

  const { data: tokenVolumeRankData, isLoading } = useGetTokenVolumeRankQuery(
    { market: market as string, unit: unit.value, datetime },
    { skip: volumeSkip },
  )
  const { data: tokenPriceRankData } = useGetTokenPriceRankQuery(
    { market: market as string, unit: unit.value, datetime },
    { skip: priceSkip },
  )

  return {
    tokenVolumeRankData: tokenVolumeRankData?.payload,
    tokenPriceRankData: tokenPriceRankData?.payload,
  }
}
