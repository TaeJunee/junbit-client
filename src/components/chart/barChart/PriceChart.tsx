import { GetTokenPriceRankDto } from '../../../redux/api/token/chart/dtos'
import { XScaleBand, YScale } from '..'

interface PriceChartProps {
  data: GetTokenPriceRankDto[]
  innerHeight: number
  xScale: XScaleBand
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
      {data?.map((d) => (
        <rect
          key={d.datetime}
          x={xScale(new Date(d.datetime))}
          y={innerHeight - yScale(d.priceSum)}
          width={20}
          height={yScale(d.priceSum)}
          fill="#ff6361"
        />
      ))}
    </>
  )
}
