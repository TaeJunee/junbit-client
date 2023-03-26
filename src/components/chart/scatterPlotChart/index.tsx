import PriceChart from './PriceChart'
import VolumeChart from './VolumeChart'
import { RankChartProps } from '../lineChart'

interface ExtendedRankChartProps extends RankChartProps {
  radius: number
  radiusHidden: number
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
  radius,
  radiusHidden,
}: ExtendedRankChartProps) {
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
            radius={radius}
            radiusHidden={radiusHidden}
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
            radius={radius}
            radiusHidden={radiusHidden}
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
            radius={radius}
            radiusHidden={radiusHidden}
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
            radius={radius}
            radiusHidden={radiusHidden}
          />
        </>
      )
  } else return <>알 수 없는 오류가 발생했습니다</>
}
