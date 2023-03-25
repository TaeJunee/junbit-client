import AxisBottom from '../axis/AxisBottom'
import AxisLeft from '../axis/AxisLeft'
import AxisRight from '../axis/AxisRight'
import { RankChartProps } from '../scatterPlotChart'
import PriceChart from './PriceChart'
import VolumeChart from './VolumeChart'

export default function LineChart({
  type,
  subType,
  volumeData,
  priceData,
  innerWidth,
  innerHeight,
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
          <AxisBottom innerHeight={innerHeight!} xScale={xScaleVolumeRank} />
          <AxisLeft innerWidth={innerWidth!} yScale={yScaleVolumeSumRank!} />
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
          <AxisRight innerWidth={innerWidth!} yScale={yScaleVolumeDiffRate!} />
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
          <AxisBottom innerHeight={innerHeight!} xScale={xScalePriceRank} />
          <AxisLeft innerWidth={innerWidth!} yScale={yScalePriceSumRank!} />
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
          <AxisRight innerWidth={innerWidth!} yScale={yScalePriceDiffRate!} />
          <PriceChart
            subType={subType}
            data={priceData}
            xScale={xScalePriceRank}
            yScale4={yScalePriceDiff!}
            yScale5={yScalePriceDiffRate!}
          />
        </>
      )
  } else return <>알 수 없는 오류가 발생했습니다</>
}
