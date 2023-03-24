import { XScaleTime, YScale } from '..'
import {
  GetTokenPriceRankDto,
  GetTokenVolumeRankDto,
} from '../../../redux/api/token/chart/dtos'
import AxisBottom from '../axis/AxisBottom'
import AxisLeft from '../axis/AxisLeft'
import PriceChart from './PriceChart'

import VolumeChart from './VolumeChart'

export interface RankChartProps {
  type: RadioOptionType
  hoveredValue: string | null
  innerWidth: number
  innerHeight: number
  volumeData: GetTokenVolumeRankDto[]
  priceData: GetTokenPriceRankDto[]
  xScaleVolumeRank: XScaleTime
  xScalePriceRank: XScaleTime
  yScaleVolumeSumRank: YScale
  yScaleVolumeDiffRateRank: YScale
  yScalePriceSumRank: YScale
  yScalePriceDiffRank: YScale
  yScalePriceDiffRateRank: YScale
}

export default function ScatterPlotChart({
  type,
  hoveredValue,
  innerWidth,
  innerHeight,
  volumeData,
  priceData,
  xScaleVolumeRank,
  xScalePriceRank,
  yScaleVolumeSumRank,
  yScaleVolumeDiffRateRank,
  yScalePriceSumRank,
  yScalePriceDiffRank,
  yScalePriceDiffRateRank,
}: RankChartProps) {
  if (type === 'VOLUME') {
    return (
      <>
        <AxisBottom innerHeight={innerHeight} xScale={xScaleVolumeRank} />
        <AxisLeft innerWidth={innerWidth} yScale={yScaleVolumeSumRank} />
        <VolumeChart
          data={volumeData}
          hoveredValue={hoveredValue}
          xScale={xScaleVolumeRank}
          yScale1={yScaleVolumeSumRank}
          yScale2={yScaleVolumeDiffRateRank}
        />
      </>
    )
  } else if (type === 'PRICE') {
    return (
      <>
        <AxisBottom innerHeight={innerHeight} xScale={xScalePriceRank} />
        <AxisLeft innerWidth={innerWidth} yScale={yScalePriceSumRank} />
        <PriceChart
          data={priceData}
          hoveredValue={hoveredValue}
          xScale={xScalePriceRank}
          yScale1={yScalePriceSumRank}
          yScale2={yScalePriceDiffRank}
          yScale3={yScalePriceDiffRateRank}
        />
      </>
    )
  } else return <>알 수 없는 오류가 발생했습니다</>
}
