import { GetTokenPriceRankDto } from '../../../redux/api/token/chart/dtos'
import { XScale, YScale } from '..'

interface PriceChartProps {
  data: GetTokenPriceRankDto[]
  xScale: XScale
  yScale1: YScale
  yScale2: YScale
  yScale3: YScale
}

export default function PriceChart({ data, xScale, yScale1, yScale2, yScale3 }: PriceChartProps) {
  return (
    <>
    <g>
    {data?.map((d) => (
      <circle
        className='svg-circle sum-rank'
        key={d.datetime}
        cx={xScale(d.datetime)}
        cy={yScale1(d.priceSumRank)}
      />
    ))}
    </g>
    <g>
    {data?.map((d) => (
      <circle
        className='svg-circle diff-rank'
        key={d.datetime}
        cx={xScale(d.datetime)}
        cy={yScale2(d.priceDiffRank)}
      />
    ))}
    </g>
    <g>
    {data?.map((d) => (
      <circle
        className='svg-circle diff-rate-rank'
        key={d.datetime}
        cx={xScale(d.datetime)}
        cy={yScale3(d.priceDiffRateRank)}
      />
    ))}
    </g>
    </>
  )
}
