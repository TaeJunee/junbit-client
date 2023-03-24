import { useDispatch } from 'react-redux'
import { XScaleTime, YScale } from '..'
import { GetTokenVolumeRankDto } from '../../../redux/api/token/chart/dtos'
import {
  setCircleHoverOn,
  setHoverOn,
  setRankHoverOn,
} from '../../../redux/chart/hoverSlice'

interface VolumeChartProps {
  data: GetTokenVolumeRankDto[]
  hoveredValue: string | null
  xScale: XScaleTime
  yScale1: YScale
  yScale2: YScale
}

export default function VolumeChart({
  data,
  hoveredValue,
  xScale,
  yScale1,
  yScale2,
}: VolumeChartProps) {
  const dispatch = useDispatch()
  return (
    <>
      <g
        opacity={
          hoveredValue === null || hoveredValue === 'volumeSumRank' ? 1 : 0.1
        }
        className="scatter-plot-chart volume-chart sum-rank"
        onMouseOver={() => dispatch(setHoverOn('volumeSumRank'))}
        onMouseLeave={() => dispatch(setHoverOn(null))}
      >
        {data?.map(d => {
          const xPosition = xScale(new Date(d.datetime))
          const yPosition = yScale1(d.volumeSumRank)
          return (
            <g
              key={d.datetime}
              onMouseOver={() => {
                dispatch(setCircleHoverOn(d.datetime))
                dispatch(setRankHoverOn(d.volumeSumRank))
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
                key={d.datetime}
                cx={xPosition}
                cy={yPosition}
              />
            </g>
          )
        })}
      </g>
      <g
        opacity={
          hoveredValue === null || hoveredValue === 'volumeDiffRateRank'
            ? 1
            : 0.1
        }
        className="scatter-plot-chart volume-chart diff-rate-rank"
        onMouseOver={() => dispatch(setHoverOn('volumeDiffRateRank'))}
        onMouseLeave={() => dispatch(setHoverOn(null))}
      >
        {data?.map(d => {
          const xPosition = xScale(new Date(d.datetime))
          const yPosition = yScale2(d.volumeDiffRateRank)
          return (
            <g
              key={d.datetime}
              onMouseOver={() => {
                dispatch(setCircleHoverOn(d.datetime))
                dispatch(setRankHoverOn(d.volumeDiffRateRank))
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
