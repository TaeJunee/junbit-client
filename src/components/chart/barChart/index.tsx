import VolumeChart from './VolumeChart'
import PriceChart from './PriceChart'
import { ChartProps, XScale, YScale } from '..'
import AxisBottom from '../axisBottom/AxisBottom'
import AxisLeft from '../axisBottom/AxisLeft'

interface BarChartProps extends ChartProps{
  type: RadioOptionType
  innerHeight: number
  xScaleVolumeSum: XScale
  yScaleVolumeSum: YScale
  xScalePriceSum: XScale
  yScalePriceSum: YScale
}

export default function BarChart({ type, innerHeight, volumeData, priceData, xScaleVolumeSum, yScaleVolumeSum, xScalePriceSum, yScalePriceSum }: BarChartProps) {

  if (type === 'VOLUME') {
    return (
      <>
        <AxisBottom
          innerHeight={innerHeight}
          xScale={xScaleVolumeSum}
        />
        <AxisLeft
          yScale={yScaleVolumeSum}
        />
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
        <AxisBottom
          innerHeight={innerHeight}
          xScale={xScalePriceSum}
        />
        <AxisLeft
          yScale={yScalePriceSum}
        />
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
