import VolumeChart from './VolumeChart'
import PriceChart from './PriceChart'
import { ChartProps, XScaleBand, YScale } from '..'
import AxisBottom from '../axisBottom/AxisBottom'
import AxisLeft from '../axisBottom/AxisLeft'

interface BarChartProps extends ChartProps {
  type: RadioOptionType
  innerWidth: number
  innerHeight: number
  xScaleVolumeSum: XScaleBand
  xScalePriceSum: XScaleBand
  yScaleVolumeSum: YScale
  yScalePriceSum: YScale
}

export default function BarChart({
  type,
  innerWidth,
  innerHeight,
  volumeData,
  priceData,
  xScaleVolumeSum,
  xScalePriceSum,
  yScaleVolumeSum,
  yScalePriceSum,
}: BarChartProps) {
  if (type === 'VOLUME') {
    return (
      <>
        <AxisBottom innerHeight={innerHeight} xScale={xScaleVolumeSum} />
        <AxisLeft innerWidth={innerWidth} yScale={yScaleVolumeSum} />
        <VolumeChart
          data={volumeData}
          innerHeight={innerHeight}
          xScale={xScaleVolumeSum}
          yScale={yScaleVolumeSum}
        />
      </>
    )
  } else if (type === 'PRICE') {
    return (
      <>
        <AxisBottom innerHeight={innerHeight} xScale={xScalePriceSum} />
        <AxisLeft innerWidth={innerWidth} yScale={yScalePriceSum} />
        <PriceChart
          data={priceData}
          innerHeight={innerHeight}
          xScale={xScalePriceSum}
          yScale={yScalePriceSum}
        />
      </>
    )
  } else return <>알 수 없는 오류가 발생했습니다</>
}
