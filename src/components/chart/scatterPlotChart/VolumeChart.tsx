import { useDispatch, useSelector } from 'react-redux'
import { XScaleBand, YScale } from '..'
import { GetTokenVolumeRankDto } from '../../../redux/api/token/chart/dtos'
import { currentlyHoverOn, setHoverOn } from '../../../redux/chart/chartSlice'
import ToolTip from '../tolltip/ToolTip'

interface VolumeChartProps {
  subType: string
  data: GetTokenVolumeRankDto[]
  xScale: XScaleBand
  yScale1?: YScale
  yScale2?: YScale
  yScale3?: YScale
  radius: number
  radiusHidden: number
}

export default function VolumeChart({
  subType,
  data,
  xScale,
  yScale1,
  yScale2,
  yScale3,
  radius,
  radiusHidden,
}: VolumeChartProps) {
  const dispatch = useDispatch()
  const hoveredValue = useSelector(currentlyHoverOn)
  const moveRight = xScale.bandwidth() / 2

  if (subType === 'RANK') {
    return (
      <>
        <g
          opacity={
            hoveredValue === null || hoveredValue === 'volumeSum' ? 1 : 0.1
          }
          className="scatter-plot-chart volume-chart sum-rank"
          onMouseOver={() => dispatch(setHoverOn('volumeSum'))}
          onMouseLeave={() => dispatch(setHoverOn(null))}
          transform={`translate(${moveRight}, 0)`}
        >
          {data?.map((d, index, array) => {
            const xPosition = xScale(d.datetime)
            const yPosition = yScale1!(d.volumeSumRank)
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
                  key={d.datetime}
                  cx={xPosition}
                  cy={yPosition}
                  r={radiusHidden}
                />
                <ToolTip
                  type="순위"
                  hoverOn="volumeSum"
                  index={index}
                  length={array.length}
                  value={d.volumeSumRank}
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
            hoveredValue === null || hoveredValue === 'volumeDiffRate' ? 1 : 0.1
          }
          className="scatter-plot-chart volume-chart diff-rate-rank"
          onMouseOver={() => dispatch(setHoverOn('volumeDiffRate'))}
          onMouseLeave={() => dispatch(setHoverOn(null))}
          transform={`translate(${moveRight}, 0)`}
        >
          {data?.map((d, index, array) => {
            const xPosition = xScale(d.datetime)
            const yPosition = yScale2!(d.volumeDiffRateRank)
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
                  hoverOn="volumeDiffRate"
                  index={index}
                  length={array.length}
                  value={d.volumeDiffRateRank}
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
      <g
        opacity={
          hoveredValue === null || hoveredValue === 'volumeDiffRate' ? 1 : 0.1
        }
        className="scatter-plot-chart volume-chart diff-rate"
        onMouseOver={() => dispatch(setHoverOn('volumeDiffRate'))}
        onMouseLeave={() => dispatch(setHoverOn(null))}
        transform={`translate(${moveRight}, 0)`}
      >
        {data?.map((d, index, array) => {
          const xPosition = xScale(d.datetime)
          const yPosition = yScale3!(d.volumeDiffRate * 100)
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
                hoverOn="volumeDiffRate"
                index={index}
                length={array.length}
                value={d.volumeDiffRate * 100}
                xPosition={xPosition}
                yPosition={yPosition}
                datetime={d.datetime}
              />
            </g>
          )
        })}
      </g>
    )
}
