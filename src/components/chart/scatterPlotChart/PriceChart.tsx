import { GetTokenPriceRankDto } from '../../../redux/api/token/chart/dtos'
import { XScaleTime, YScale } from '..'
import { useDispatch } from 'react-redux'
import {
  setCircleHoverOn,
  setHoverOn,
  setRankHoverOn,
} from '../../../redux/chart/hoverSlice'

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
          hoveredValue === null || hoveredValue === 'priceSumRank' ? 1 : 0.1
        }
        className="scatter-plot-chart price-chart sum-rank"
        onMouseOver={() => dispatch(setHoverOn('priceSumRank'))}
        onMouseOut={() => dispatch(setHoverOn(null))}
      >
        {data?.map(d => {
          const xPosition = xScale(new Date(d.datetime))
          const yPosition = yScale1(d.priceSumRank)
          return (
            <g
              key={d.datetime}
              onMouseOver={() => {
                dispatch(setCircleHoverOn(d.datetime))
                dispatch(setRankHoverOn(d.priceSumRank))
              }}
              onMouseOut={() => {
                dispatch(setCircleHoverOn(null))
                dispatch(setRankHoverOn(null))
              }}
            >
              <circle
                className="svg-circle sum-rank"
                cx={xPosition}
                cy={yPosition}
              />
              <circle
                className="svg-circle-hidden sum-rank"
                cx={xPosition}
                cy={yPosition}
              />
            </g>
          )
        })}
      </g>
      <g
        opacity={
          hoveredValue === null || hoveredValue === 'priceDiffRank' ? 1 : 0.1
        }
        className="scatter-plot-chart price-chart diff-rank"
        onMouseOver={() => dispatch(setHoverOn('priceDiffRank'))}
        onMouseOut={() => dispatch(setHoverOn(null))}
      >
        {data?.map(d => {
          const xPosition = xScale(new Date(d.datetime))
          const yPosition = yScale2(d.priceDiffRank)
          return (
            <g
              key={d.datetime}
              onMouseOver={() => {
                dispatch(setCircleHoverOn(d.datetime))
                dispatch(setRankHoverOn(d.priceDiffRank))
              }}
              onMouseOut={() => {
                dispatch(setCircleHoverOn(null))
                dispatch(setRankHoverOn(null))
              }}
            >
              <circle
                className="svg-circle diff-rank"
                cx={xPosition}
                cy={yPosition}
              />
              <circle
                className="svg-circle-hidden diff-rank"
                cx={xPosition}
                cy={yPosition}
              />
            </g>
          )
        })}
      </g>
      <g
        opacity={
          hoveredValue === null || hoveredValue === 'priceDiffRateRank'
            ? 1
            : 0.1
        }
        className="scatter-plot-chart price-chart diff-rate-rank"
        onMouseOver={() => dispatch(setHoverOn('priceDiffRateRank'))}
        onMouseOut={() => dispatch(setHoverOn(null))}
      >
        {data?.map(d => {
          const xPosition = xScale(new Date(d.datetime))
          const yPosition = yScale3(d.priceDiffRateRank)
          return (
            <g
              key={d.datetime}
              onMouseOver={() => {
                dispatch(setCircleHoverOn(d.datetime))
                dispatch(setRankHoverOn(d.priceDiffRateRank))
              }}
              onMouseOut={() => {
                dispatch(setCircleHoverOn(null))
                dispatch(setRankHoverOn(null))
              }}
            >
              <circle
                className="svg-circle diff-rate-rank"
                cx={xPosition}
                cy={yPosition}
              />
              <circle
                className="svg-circle-hidden diff-rate-rank"
                cx={xPosition}
                cy={yPosition}
              />
            </g>
          )
        })}
      </g>
    </>
  )
}
