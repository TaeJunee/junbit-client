import { GetTokenPriceRankDto } from '../../../redux/api/token/chart/dtos'
import { XScaleBand, YScale } from '..'
import { line } from 'd3'
import { useDispatch, useSelector } from 'react-redux'
import { currentlyHoverOn, setHoverOn } from '../../../redux/chart/chartSlice'

interface PriceChartProps {
  subType: string
  data: GetTokenPriceRankDto[]
  xScale: XScaleBand
  yScale1?: YScale
  yScale2?: YScale
  yScale3?: YScale
  yScale4?: YScale
  yScale5?: YScale
}

export default function PriceChart({
  subType,
  data,
  xScale,
  yScale1,
  yScale2,
  yScale3,
  yScale4,
  yScale5,
}: PriceChartProps) {
  const dispatch = useDispatch()
  const hoveredValue = useSelector(currentlyHoverOn)
  const moveRight = xScale.bandwidth() / 2
  if (subType === 'RANK') {
    return (
      <>
        <g
          opacity={
            hoveredValue === null || hoveredValue === 'priceSum' ? 1 : 0.2
          }
          className="line-chart price-chart sum-rank"
          onMouseEnter={() => dispatch(setHoverOn('priceSum'))}
          onMouseOut={() => dispatch(setHoverOn(null))}
          transform={`translate(${moveRight}, 0)`}
        >
          <path
            className="svg-path sum-rank"
            d={
              line<GetTokenPriceRankDto>()
                .x(d => xScale(d.datetime)!)
                .y(d => yScale1!(d.priceSumRank))(data)!
            }
          />
        </g>
        <g
          opacity={
            hoveredValue === null || hoveredValue === 'priceDiff' ? 1 : 0.2
          }
          className="line-chart price-chart diff-rank"
          onMouseEnter={() => dispatch(setHoverOn('priceDiff'))}
          onMouseOut={() => dispatch(setHoverOn(null))}
          transform={`translate(${moveRight}, 0)`}
        >
          <path
            className="svg-path diff-rank"
            d={
              line<GetTokenPriceRankDto>()
                .x(d => xScale(d.datetime)!)
                .y(d => yScale2!(d.priceDiffRank))(data)!
            }
          />
        </g>
        <g
          opacity={
            hoveredValue === null || hoveredValue === 'priceDiffRate' ? 1 : 0.2
          }
          className="line-chart price-chart diff-rate-rank"
          onMouseEnter={() => dispatch(setHoverOn('priceDiffRate'))}
          onMouseOut={() => dispatch(setHoverOn(null))}
          transform={`translate(${moveRight}, 0)`}
        >
          <path
            className="svg-path diff-rate-rank"
            d={
              line<GetTokenPriceRankDto>()
                .x(d => xScale(d.datetime)!)
                .y(d => yScale3!(d.priceDiffRateRank))(data)!
            }
          />
        </g>
      </>
    )
  } else
    return (
      <>
        <g
          opacity={
            hoveredValue === null || hoveredValue === 'priceDiff' ? 1 : 0.2
          }
          className="line-chart price-chart diff"
          onMouseEnter={() => dispatch(setHoverOn('priceDiff'))}
          onMouseOut={() => dispatch(setHoverOn(null))}
          transform={`translate(${moveRight}, 0)`}
        >
          <path
            className="svg-path diff"
            d={
              line<GetTokenPriceRankDto>()
                .x(d => xScale(d.datetime)!)
                .y(d => yScale4!(d.priceDiff))(data)!
            }
          />
        </g>
        <g
          opacity={
            hoveredValue === null || hoveredValue === 'priceDiffRate' ? 1 : 0.2
          }
          className="line-chart price-chart diff-rate"
          onMouseEnter={() => dispatch(setHoverOn('priceDiffRate'))}
          onMouseOut={() => dispatch(setHoverOn(null))}
          transform={`translate(${moveRight}, 0)`}
        >
          <path
            className="svg-path diff-rate"
            d={
              line<GetTokenPriceRankDto>()
                .x(d => xScale(d.datetime)!)
                .y(d => yScale5!(d.priceDiffRate * 100))(data)!
            }
          />
        </g>
      </>
    )
}
