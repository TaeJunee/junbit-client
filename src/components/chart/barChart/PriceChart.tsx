import { GetTokenPriceRankDto } from '../../../redux/api/token/chart/dtos'
import { XScale, YScale } from '..'

interface PriceChartProps {
  data: GetTokenPriceRankDto[]
  innerHeight: number
  xScale: XScale
  yScale: YScale
}

export default function PriceChart({ data, xScale, yScale, innerHeight }: PriceChartProps) {
  return (
    <>
      {data?.map((d) => (
        <rect
          key={d.datetime}
          x={xScale(d.datetime)}
          y={innerHeight - yScale(d.priceSum)}
          width={xScale.bandwidth()}
          height={yScale(d.priceSum)}
          fill='#ff6361'
        />
      ))}
    </>
  )
}