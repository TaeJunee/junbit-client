import { GetTokenPriceRankDto } from '../../../redux/api/token/chart/dtos'
import { XScaleTime, YScale } from '..'
import { line } from 'd3'
import { useDispatch } from 'react-redux'
import { setHoverOn } from '../../../redux/chart/hoverSlice'

interface PriceChartProps {
  data: GetTokenPriceRankDto[]
  hoveredValue: string | null
  xScale: XScaleTime
  yScale1: YScale
  yScale2: YScale
  yScale3: YScale
}

export default function PriceChart({
  data,
  hoveredValue,
  xScale,
  yScale1,
  yScale2,
  yScale3,
}: PriceChartProps) {
  const dispatch = useDispatch()
  return (
    <>
      <g
        opacity={
          hoveredValue === null || hoveredValue === 'priceSumRank' ? 1 : 0.2
        }
        className="line-chart price-chart sum-rank"
        onMouseEnter={() => dispatch(setHoverOn('priceSumRank'))}
        onMouseOut={() => dispatch(setHoverOn(null))}
      >
        <path
          className="svg-path sum-rank"
          d={
            line<GetTokenPriceRankDto>()
              .x(d => xScale(new Date(d.datetime)))
              .y(d => yScale1(d.priceSumRank))(data)!
          }
        />
      </g>
      <g
        opacity={
          hoveredValue === null || hoveredValue === 'priceDiffRank' ? 1 : 0.2
        }
        className="line-chart price-chart diff-rank"
        onMouseEnter={() => dispatch(setHoverOn('priceDiffRank'))}
        onMouseOut={() => dispatch(setHoverOn(null))}
      >
        <path
          className="svg-path diff-rank"
          d={
            line<GetTokenPriceRankDto>()
              .x(d => xScale(new Date(d.datetime)))
              .y(d => yScale2(d.priceDiffRank))(data)!
          }
        />
      </g>
      <g
        opacity={
          hoveredValue === null || hoveredValue === 'priceDiffRateRank'
            ? 1
            : 0.2
        }
        className="line-chart price-chart diff-rate-rank"
        onMouseEnter={() => dispatch(setHoverOn('priceDiffRateRank'))}
        onMouseOut={() => dispatch(setHoverOn(null))}
      >
        <path
          className="svg-path diff-rate-rank"
          d={
            line<GetTokenPriceRankDto>()
              .x(d => xScale(new Date(d.datetime)))
              .y(d => yScale3(d.priceDiffRateRank))(data)!
          }
        />
      </g>
    </>
  )
}
