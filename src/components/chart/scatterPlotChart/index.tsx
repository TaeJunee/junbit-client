import { XScale, YScale } from '..'
import {
  GetTokenPriceRankDto,
  GetTokenVolumeRankDto,
} from '../../../redux/api/token/chart/dtos'
import AxisBottom from '../axisBottom/AxisBottom'
import AxisLeft from '../axisBottom/AxisLeft'
import PriceChart from './PriceChart'

import VolumeChart from './VolumeChart'

export interface RankChartProps {
  type: RadioOptionType
  innerHeight: number
  volumeData: GetTokenVolumeRankDto[]
  priceData: GetTokenPriceRankDto[]
  xScaleVolumeSum: XScale
  yScaleVolumeSumRank: YScale
  yScaleVolumeDiffRateRank: YScale
  xScalePriceSum: XScale
  yScalePriceSumRank: YScale
  yScalePriceDiffRank: YScale
  yScalePriceDiffRateRank: YScale
}

export default function ScatterPlotChart({
  type,
  innerHeight,
  volumeData,
  priceData,
  xScaleVolumeSum,
  yScaleVolumeSumRank,
  yScaleVolumeDiffRateRank,
  xScalePriceSum,
  yScalePriceSumRank,
  yScalePriceDiffRank,
  yScalePriceDiffRateRank }: RankChartProps) {

  if (type === 'VOLUME') {
    return (
      <>
        <AxisBottom
          innerHeight={innerHeight}
          xScale={xScaleVolumeSum}
        />
        <AxisLeft
          yScale={yScaleVolumeSumRank}
        />
        <VolumeChart
          data={volumeData}
          xScale={xScaleVolumeSum}
          yScale1={yScaleVolumeSumRank}
          yScale2={yScaleVolumeDiffRateRank}
        />
      </>
    )
  } else if (type === 'PRICE') {
    return (
      <>
        <AxisBottom
          innerHeight={innerHeight}
          xScale={xScalePriceSum}
        />
        <AxisLeft
          yScale={yScalePriceSumRank}
        />
        <PriceChart
          data={priceData}
          xScale={xScalePriceSum}
          yScale1={yScalePriceSumRank}
          yScale2={yScalePriceDiffRank}
          yScale3={yScalePriceDiffRateRank}
        />
      </>
    )
  } else return <>알 수 없는 오류가 발생했습니다</>
}
