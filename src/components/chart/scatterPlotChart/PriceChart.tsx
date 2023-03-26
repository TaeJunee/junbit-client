import { GetTokenPriceRankDto } from '../../../redux/api/token/chart/dtos'
import { XScaleBand, YScale } from '..'
import { useDispatch, useSelector } from 'react-redux'
import { currentlyHoverOn, setHoverOn } from '../../../redux/chart/chartSlice'
import ToolTip from '../tolltip/ToolTip'

interface PriceChartProps {
  data: GetTokenPriceRankDto[]
  subType: string
  xScale: XScaleBand
  yScale1?: YScale
  yScale2?: YScale
  yScale3?: YScale
  yScale4?: YScale
  yScale5?: YScale
  radius: number
  radiusHidden: number
}

export default function PriceChart({
  data,
  subType,
  xScale,
  yScale1,
  yScale2,
  yScale3,
  yScale4,
  yScale5,
  radius,
  radiusHidden,
}: PriceChartProps) {
  const dispatch = useDispatch()
  const hoveredValue = useSelector(currentlyHoverOn)
  const moveRight = xScale.bandwidth() / 2
  if (subType === 'RANK') {
    return (
      <>
        <g
          opacity={
            hoveredValue === null || hoveredValue === 'priceSum' ? 1 : 0.1
          }
          className="scatter-plot-chart price-chart sum-rank"
          onMouseOver={() => dispatch(setHoverOn('priceSum'))}
          onMouseOut={() => dispatch(setHoverOn(null))}
          transform={`translate(${moveRight}, 0)`}
        >
          {data?.map((d, index, array) => {
            const xPosition = xScale(d.datetime)
            const yPosition = yScale1!(d.priceSumRank)
            return (
              <g key={d.datetime}>
                <circle
                  className="svg-circle sum-rank"
                  cx={xPosition}
                  cy={yPosition}
                  r={radius}
                />
                <circle
                  className="svg-circle-hidden sum-rank"
                  cx={xPosition}
                  cy={yPosition}
                  r={radiusHidden}
                />
                <ToolTip
                  type="순위"
                  hoverOn="priceSum"
                  index={index}
                  length={array.length}
                  value={d.priceSumRank}
                  xPosition={xPosition}
                  yPosition={yPosition}
                  datetime={d.datetime}
                />
              </g>
            )
          })}
        </g>
        <g
          opacity={
            hoveredValue === null || hoveredValue === 'priceDiff' ? 1 : 0.1
          }
          className="scatter-plot-chart price-chart diff-rank"
          onMouseOver={() => dispatch(setHoverOn('priceDiff'))}
          onMouseOut={() => dispatch(setHoverOn(null))}
          transform={`translate(${moveRight}, 0)`}
        >
          {data?.map((d, index, array) => {
            const xPosition = xScale(d.datetime)
            const yPosition = yScale2!(d.priceDiffRank)
            return (
              <g key={d.datetime}>
                <circle
                  className="svg-circle diff-rank"
                  cx={xPosition}
                  cy={yPosition}
                  r={radius}
                />
                <circle
                  className="svg-circle-hidden diff-rank"
                  cx={xPosition}
                  cy={yPosition}
                  r={radiusHidden}
                />
                <ToolTip
                  type="순위"
                  hoverOn="priceDiff"
                  index={index}
                  length={array.length}
                  value={d.priceDiffRank}
                  xPosition={xPosition}
                  yPosition={yPosition}
                  datetime={d.datetime}
                />
              </g>
            )
          })}
        </g>
        <g
          opacity={
            hoveredValue === null || hoveredValue === 'priceDiffRate' ? 1 : 0.1
          }
          className="scatter-plot-chart price-chart diff-rate-rank"
          onMouseOver={() => dispatch(setHoverOn('priceDiffRate'))}
          onMouseOut={() => dispatch(setHoverOn(null))}
          transform={`translate(${moveRight}, 0)`}
        >
          {data?.map((d, index, array) => {
            const xPosition = xScale(d.datetime)
            const yPosition = yScale3!(d.priceDiffRateRank)
            return (
              <g key={d.datetime}>
                <circle
                  className="svg-circle diff-rate-rank"
                  cx={xPosition}
                  cy={yPosition}
                  r={radius}
                />
                <circle
                  className="svg-circle-hidden diff-rate-rank"
                  cx={xPosition}
                  cy={yPosition}
                  r={radiusHidden}
                />
                <ToolTip
                  type="순위"
                  hoverOn="priceDiffRate"
                  index={index}
                  length={array.length}
                  value={d.priceDiffRateRank}
                  xPosition={xPosition}
                  yPosition={yPosition}
                  datetime={d.datetime}
                />
              </g>
            )
          })}
        </g>
      </>
    )
  } else
    return (
      <>
        <g
          opacity={
            hoveredValue === null || hoveredValue === 'priceDiff' ? 1 : 0.1
          }
          className="scatter-plot-chart price-chart diff"
          onMouseOver={() => dispatch(setHoverOn('priceDiff'))}
          onMouseOut={() => dispatch(setHoverOn(null))}
          transform={`translate(${moveRight}, 0)`}
        >
          {data?.map((d, index, array) => {
            const xPosition = xScale(d.datetime)
            const yPosition = yScale4!(d.priceDiff)
            return (
              <g key={d.datetime}>
                <circle
                  className="svg-circle diff"
                  cx={xPosition}
                  cy={yPosition}
                  r={radius}
                />
                <circle
                  className="svg-circle-hidden diff"
                  cx={xPosition}
                  cy={yPosition}
                  r={radiusHidden}
                />
                <ToolTip
                  type="변화량(원)"
                  hoverOn="priceDiff"
                  index={index}
                  length={array.length}
                  value={d.priceDiff}
                  xPosition={xPosition}
                  yPosition={yPosition}
                  datetime={d.datetime}
                />
              </g>
            )
          })}
        </g>
        <g
          opacity={
            hoveredValue === null || hoveredValue === 'priceDiffRate' ? 1 : 0.1
          }
          className="scatter-plot-chart price-chart diff-rate"
          onMouseOver={() => dispatch(setHoverOn('priceDiffRate'))}
          onMouseOut={() => dispatch(setHoverOn(null))}
          transform={`translate(${moveRight}, 0)`}
        >
          {data?.map((d, index, array) => {
            const xPosition = xScale(d.datetime)
            const yPosition = yScale5!(d.priceDiffRate * 100)
            return (
              <g key={d.datetime}>
                <circle
                  className="svg-circle diff-rate"
                  cx={xPosition}
                  cy={yPosition}
                  r={radius}
                />
                <circle
                  className="svg-circle-hidden diff-rate"
                  cx={xPosition}
                  cy={yPosition}
                  r={radiusHidden}
                />
                <ToolTip
                  type="변화율(%)"
                  hoverOn="priceDiffRate"
                  index={index}
                  length={array.length}
                  value={d.priceDiffRate * 100}
                  xPosition={xPosition}
                  yPosition={yPosition}
                  datetime={d.datetime}
                />
              </g>
            )
          })}
        </g>
      </>
    )
}
