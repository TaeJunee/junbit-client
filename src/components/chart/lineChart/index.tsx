import { RankChartProps } from '../scatterPlotChart'
import PriceChart from './PriceChart'
import VolumeChart from './VolumeChart'


export default function LineChart({
  type,
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
