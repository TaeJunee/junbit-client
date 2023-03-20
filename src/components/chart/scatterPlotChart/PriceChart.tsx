import { GetTokenPriceRankDto } from '../../../redux/api/token/chart/dtos'
import { XScaleTime, YScale } from '..'

interface PriceChartProps {
  data: GetTokenPriceRankDto[]
  xScale: XScaleTime
  yScale1: YScale
  yScale2: YScale
  yScale3: YScale
}

export default function PriceChart({
  data,
  xScale,
  yScale1,
  yScale2,
  yScale3,
}: PriceChartProps) {
  return (
    <>
      <g className='scatter-plot-chart price-chart sum-rank'>
        {data?.map((d) => (
          <circle
            className="svg-circle sum-rank"
            key={d.datetime}
            cx={xScale(new Date(d.datetime))}
            cy={yScale1(d.priceSumRank)}
          />
        ))}
      </g>
      <g className='scatter-plot-chart price-chart diff-rank'>
        {data?.map((d) => (
          <circle
            className="svg-circle diff-rank"
            key={d.datetime}
            cx={xScale(new Date(d.datetime))}
            cy={yScale2(d.priceDiffRank)}
          />
        ))}
      </g>
      <g className='scatter-plot-chart price-chart diff-rate-rank'>
        {data?.map((d) => (
          <circle
            className="svg-circle diff-rate-rank"
            key={d.datetime}
            cx={xScale(new Date(d.datetime))}
            cy={yScale3(d.priceDiffRateRank)}
          />
        ))}
      </g>
    </>
  )
}
