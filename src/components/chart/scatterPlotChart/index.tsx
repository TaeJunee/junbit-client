import { XScaleBand, YScale } from '..'
import {
  GetTokenPriceRankDto,
  GetTokenVolumeRankDto,
} from '../../../redux/api/token/chart/dtos'
import PriceChart from './PriceChart'
import VolumeChart from './VolumeChart'

export interface RankChartProps {
  type: RadioOptionType
  subType: string
  innerWidth?: number
  innerHeight?: number
  volumeData: GetTokenVolumeRankDto[]
  priceData: GetTokenPriceRankDto[]
  xScaleVolumeRank: XScaleBand
  xScalePriceRank: XScaleBand
  yScaleVolumeDiffRate?: YScale
  yScalePriceDiff?: YScale
  yScalePriceDiffRate?: YScale
  yScaleVolumeSumRank?: YScale
  yScaleVolumeDiffRateRank?: YScale
  yScalePriceSumRank?: YScale
  yScalePriceDiffRank?: YScale
  yScalePriceDiffRateRank?: YScale
}

export default function ScatterPlotChart({
  type,
  subType,
  volumeData,
  priceData,
  yScaleVolumeDiffRate,
  yScalePriceDiff,
  yScalePriceDiffRate,
  xScaleVolumeRank,
  xScalePriceRank,
  yScaleVolumeSumRank,
  yScaleVolumeDiffRateRank,
  yScalePriceSumRank,
  yScalePriceDiffRank,
  yScalePriceDiffRateRank,
}: RankChartProps) {
  if (type === 'VOLUME') {
    if (subType === 'RANK') {
      return (
        <>
          <VolumeChart
            subType={subType}
            data={volumeData}
            xScale={xScaleVolumeRank}
            yScale1={yScaleVolumeSumRank!}
            yScale2={yScaleVolumeDiffRateRank!}
          />
        </>
      )
    } else
      return (
        <>
          <VolumeChart
            subType={subType}
            data={volumeData}
            xScale={xScaleVolumeRank}
            yScale3={yScaleVolumeDiffRate!}
          />
        </>
      )
  } else if (type === 'PRICE') {
    if (subType === 'RANK') {
      return (
        <>
          <PriceChart
            subType={subType}
            data={priceData}
            xScale={xScalePriceRank}
            yScale1={yScalePriceSumRank!}
            yScale2={yScalePriceDiffRank!}
            yScale3={yScalePriceDiffRateRank!}
          />
        </>
      )
    } else
      return (
        <>
          <PriceChart
            subType={subType}
            data={priceData}
            xScale={xScalePriceRank}
            yScale1={yScalePriceSumRank!}
            yScale2={yScalePriceDiffRank!}
            yScale3={yScalePriceDiffRateRank!}
            yScale4={yScalePriceDiff!}
            yScale5={yScalePriceDiffRate!}
          />
        </>
      )
  } else return <>알 수 없는 오류가 발생했습니다</>
}
