import { GetTokenPriceRankDto } from '../../../redux/api/token/chart/dtos'
import { XScaleTime, YScale } from '..'
import { line } from 'd3'

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
      <g className='line-chart price-chart sum-rank'>
        <path
          className="svg-path sum-rank"
          d={line<GetTokenPriceRankDto>()
            .x((d) => xScale(new Date(d.datetime)))
            .y((d) => yScale1(d.priceSumRank))(data)!}
        />
      </g>
      <g className='line-chart price-chart diff-rank'>
        <path
          className="svg-path diff-rank"
          d={line<GetTokenPriceRankDto>()
            .x((d) => xScale(new Date(d.datetime)))
            .y((d) => yScale2(d.priceDiffRank))(data)!}
        />
      </g>
      <g className='line-chart price-chart diff-rate-rank'>
        <path
          className="svg-path diff-rate-rank"
          d={line<GetTokenPriceRankDto>()
            .x((d) => xScale(new Date(d.datetime)))
            .y((d) => yScale3(d.priceDiffRateRank))(data)!}
        />
      </g>
    </>
  )
}
