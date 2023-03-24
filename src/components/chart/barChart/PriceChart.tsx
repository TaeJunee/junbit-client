import { GetTokenPriceRankDto } from '../../../redux/api/token/chart/dtos'
import { XScaleTime, YScale } from '..'

interface PriceChartProps {
  data: GetTokenPriceRankDto[]
  hoveredValue: string | null
  innerHeight: number
  xScale: XScaleTime
  yScale: YScale
}

export default function PriceChart({
  data,
  xScale,
  yScale,
  innerHeight,
}: PriceChartProps) {
  return (
    <>
      {data?.map(d => (
        <rect
          key={d.datetime}
          x={xScale(new Date(d.datetime))}
          y={yScale(d.priceSum)}
          width={20}
          height={innerHeight - yScale(d.priceSum)}
          fill="#ff6361"
        />
      ))}
    </>
  )
}
